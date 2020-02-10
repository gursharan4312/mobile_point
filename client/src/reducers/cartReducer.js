const cartReducer = (cart, action) => {
  const checkInCart = product => cart.find(item => item.id === product.id);
  const cartWithoutItem = product =>
    cart.filter(item => item.id !== product.id);
  const itemInCart = product => cart.filter(item => item.id === product.id)[0];

  switch (action.type) {
    case "ADD_ITEM": {
      return checkInCart(action.payload)
        ? cart.map(item => {
            return item.id === action.payload.id
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
            ...cart,
            { ...action.payload, count: 1, total: action.payload.price }
          ];
    }
    case "REMOVE_ITEM": {
      console.log(action.payload.count);
      return action.payload.count === 1
        ? [...cartWithoutItem(action.payload)]
        : cart.map(item => {
            return item.id === action.payload.id
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
      return cart;
  }
};

export default cartReducer;
