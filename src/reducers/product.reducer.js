import { GET_PRODUCT_LIST, ADD_NEW_PRODUCT } from '../actions/products.action';
export const initState = {
  products: [],
  inCart: [],
}



export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...state, products: action.products };
    case ADD_NEW_PRODUCT:
      return { products: [...state.products, action.product] }
    default:
      return state;
  }
}