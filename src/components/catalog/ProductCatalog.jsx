import React, { useContext, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Cartcontext } from "../../Cartcontext.jsx";
import { Productcontext } from "../../Productcontext.jsx";
import { uniqueOptions } from "../../utils/collection.js";
import "./ProductCatalog.css";

const ProductCatalog = ({ featured = false, heading, categoryFilter }) => {
  const { productsData } = useContext(Productcontext);
  const { addToCart } = useContext(Cartcontext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [brand, setBrand] = useState("All");
  const [color, setColor] = useState("All");
  const [sort, setSort] = useState("featured");
  const categories = useMemo(
    () => uniqueOptions(productsData, "category"),
    [productsData],
  );
  const brands = useMemo(
    () => uniqueOptions(productsData, "brand"),
    [productsData],
  );
  const colors = useMemo(
    () => uniqueOptions(productsData, "colorFamily"),
    [productsData],
  );
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = productsData.filter((product) => {
      const searchable =
        `${product.name} ${product.brand} ${product.type} ${product.color} ${product.category}`.toLowerCase();
      return (
        (!query || searchable.includes(query)) &&
        (category === "All" || product.category === category) &&
        (!categoryFilter || product.category === categoryFilter) &&
        (brand === "All" || product.brand === brand) &&
        (color === "All" || product.colorFamily === color)
      );
    });
    if (sort === "price-low")
      return [...result].sort((first, second) => first.price - second.price);
    if (sort === "price-high")
      return [...result].sort((first, second) => second.price - first.price);
    return result;
  }, [brand, category, categoryFilter, color, productsData, search, sort]);
  const visibleProducts = featured
    ? filteredProducts.slice(0, 4)
    : filteredProducts;

  return (
    <section
      className={
        featured
          ? "catalog-section featured-catalog"
          : "catalog-section shop-catalog"
      }
    >
      <div className="catalog-toolbar">
        <div>
          <p className="eyebrow">THE CURRENT EDIT</p>
          <h2>
            {heading || (featured ? "Time, well spent." : "Shop all pieces.")}
          </h2>
        </div>
        {!featured && (
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to high</option>
            <option value="price-high">Price: High to low</option>
          </select>
        )}
      </div>
      {!featured && (
        <div className="catalog-controls">
          <label className="search-box">
            <span>Search the collection</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search watches, straps, buds..."
            />
          </label>
          <label className="filter-select-label">
            Category
            <select
              aria-label="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All categories" : item}
                </option>
              ))}
            </select>
          </label>
          <div className="select-filters">
            <label>
              Brand
              <select
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              >
                <option value="All">All brands</option>
                {brands.slice(1).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Color
              <select
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <option value="All">All colors</option>
                {colors.slice(1).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}
      <div className="product-grid" aria-live="polite">
        {visibleProducts.map((product) => (
          <article
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                navigate(`/product/${product.id}`);
              }
            }}
          >
            <div className="product-image-wrap">
              <img src={`/${product.image}`} alt={product.name} />
              <span className="product-category">{product.category}</span>
            </div>
            <div className="product-details">
              <div>
                <p className="product-name">{product.name}</p>
                <p className="product-meta">
                  {product.brand} / {product.type}
                </p>
                <p className="product-color">
                  <span
                    className={`color-swatch swatch-${product.colorFamily.toLowerCase().replace(" ", "-")}`}
                  />
                  {product.color}
                </p>
              </div>
              <strong>${product.price}</strong>
            </div>
            <div className="product-actions">
              <button
                className="add-button"
                onClick={(event) => {
                  event.stopPropagation();
                  addToCart(product);
                }}
              >
                <span className="bag-icon" aria-hidden="true">
                  ↗
                </span>
                <span>Add to bag</span>
              </button>
            </div>
          </article>
        ))}
      </div>
      {visibleProducts.length === 0 && (
        <p className="empty-results">
          No pieces match your search. Try another category.
        </p>
      )}
    </section>
  );
};

export default ProductCatalog;
