export const SHIPPING_COST = 8;
export const TAX_RATE = 0.05;

export const getOrderTotals = (subtotal) => {
  const normalizedSubtotal = Number(subtotal) || 0;
  const shipping = normalizedSubtotal ? SHIPPING_COST : 0;
  const tax = Number((normalizedSubtotal * TAX_RATE).toFixed(2));

  return {
    subtotal: normalizedSubtotal,
    shipping,
    tax,
    total: Number((normalizedSubtotal + shipping + tax).toFixed(2)),
  };
};
