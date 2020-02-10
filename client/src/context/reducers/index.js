import combineReducers from "react-combine-reducers";
import { productReducer, productState } from "./products";
import { userReducer, userState } from "./user";
import { cartReducer, cartState } from "./cart";
import { modalReducer, modalState } from "./modal";

export const [mainReducer, mainState] = combineReducers({
  products: [productReducer, productState],
  user: [userReducer, userState],
  cart: [cartReducer, cartState],
  modal: [modalReducer, modalState]
});
