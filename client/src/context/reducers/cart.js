export const cartState = [];

export const cartReducer = (state, action) => {
  const checkInCart = product => state.find(item => item._id === product._id);
  const cartWithoutItem = product =>
    state.filter(item => item._id !== product._id);
  const itemInCart = product =>
    state.filter(item => item._id === product._id)[0];

  switch (action.type) {
    case "ADD_ITEM_CART": {
      return checkInCart(action.payload)
        ? state.map(item => {
            return item._id === action.payload._id
              ? {
                  ...action.payload,
                  count: itemInCart(action.payload).count + 1,
                  total:
                    itemInCart(action.payload).price *
                    (itemInCart(action.payload).count + 1)
                }
              : item;
          })
        : [
            ...state,
            { ...action.payload, count: 1, total: action.payload.price }
          ];
    }
    case "REMOVE_ITEM_CART": {
      return itemInCart(action.payload).count === 1
        ? [...cartWithoutItem(action.payload)]
        : state.map(item => {
            return item._id === action.payload._id
              ? {
                  ...action.payload,
                  count: itemInCart(action.payload).count - 1,
                  total:
                    itemInCart(action.payload).price *
                    (itemInCart(action.payload).count + 1)
                }
              : item;
          });
    }
    case "CLEAR_ITEM":
      return [...cartWithoutItem(action.payload)];
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
