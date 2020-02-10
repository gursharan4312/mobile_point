const productReducer = (products, action) => {
  const checkProducts = product =>
    products.find(item => item.id === product.id);
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.payload];
    case "ADD_PRODUCT":
      return checkProducts(action.payload)
        ? products
        : [...products, action.payload];
    case "REMOVE_PRODUCT":
      return checkProducts(action.payload)
        ? products.filter(product => product.id !== action.payload.id)
        : products;
    case "ADD_CART":
      return products.map(product => {
        return product.id === action.payload.id
          ? { ...action.payload, inCart: true }
          : product;
      });
    case "REMOVE_CART":
      return products.map(product => {
        return product.id === action.payload.id
          ? { ...action.payload, inCart: false }
          : product;
      });
    case "EMPTY_CART":
      return products.map(product => {
        return { ...product, inCart: false };
      });
    default:
      return products;
  }
};
export default productReducer;
