// import {GET_CART_ITEMS} from '../actions/cart.actions';
import { GET_PRODUCT_LIST, ADD_NEW_PRODUCT } from '../actions/products.action';
//TODO: fetch initState from public later
export const initState = {
  products: [],
  inCart: [],
}


export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
    return state.inCart;
    case GET_PRODUCT_LIST:
      return {...state, products: action.products};
    default:
      return state;
  }
}