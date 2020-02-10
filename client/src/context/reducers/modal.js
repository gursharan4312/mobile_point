export const modalState = {
  show: false,
  product: {
    id: -1,
    title: "",
    img: "",
    price: 0,
    company: "",
    info: "",
    inCart: false,
    count: 0,
    total: 0
  }
};

export const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      return {
        ...state,
        show: true
      };
    }
    case "HIDE_MODAL": {
      return {
        ...state,
        show: false
      };
    }
    case "CHANGE_MODAL_PRODUCT": {
      return {
        ...state,
        product: action.payload
      };
    }
    default:
      return state;
  }
};
