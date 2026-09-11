export const uniqueOptions = (items, key) => [
  "All",
  ...new Set(items.map((item) => item[key])),
];
