export const productState = [
  {
    _id: -1,
    title: "",
    img: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0
  }
];

export const productReducer = (state, action) => {
  const checkProducts = product => state.find(item => item._id === product._id);
  switch (action.type) {
    case "ADD_PRODUCTS":
      return [...action.payload];
    case "ADD_PRODUCT":
      return checkProducts(action.payload) ? state : [...state, action.payload];
    case "REMOVE_PRODUCT":
      return checkProducts(action.payload)
        ? state.filter(product => product._id !== action.payload._id)
        : state;
    case "ADD_CART_PRODUCT":
      return state.map(product => {
        return product._id === action.payload._id
          ? { ...action.payload, inCart: true }
          : product;
      });
    case "REMOVE_CART_PRODUCT":
      return state.map(product => {
        return product._id === action.payload._id
          ? { ...action.payload, inCart: false }
          : product;
      });
    case "EMPTY_CART_PRODUCT":
      return state.map(product => {
        return { ...product, inCart: false };
      });
    default:
      return state;
  }
};
