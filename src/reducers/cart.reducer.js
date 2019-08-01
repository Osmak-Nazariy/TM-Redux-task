import { GET_CART_ITEMS, REMOVE_FROM_CART, ON_ORDER_COUNT_CHANGE, ADD_TO_CART } from '../actions/cart.actions'

import { initState } from './product.reducer'

const addToCart = (state, product) => {
    product.orderCount = 1;
    const tempInCart = [...state.inCart, product]
    const filterInCart = tempInCart.filter((item, index)=> tempInCart.indexOf(item) === index)
    return {...state, inCart: filterInCart}
  }
  
  
const onOrderCountChange = (state, orderCount, item) => {
    item.orderCount= orderCount++;
    return { inCart: [...state.inCart] }
}

const removeFromCart = (state, id) => {    
    // const newInCart = state.inCart.map(item=> ((item)=> item !== id))
    const newInCart = state.inCart.filter((item)=> state.inCart.indexOf(item) !==id)
    console.log(state)
    return {...state, inCart: newInCart}
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return state.inCart;
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.productId)
            case ON_ORDER_COUNT_CHANGE:
            return onOrderCountChange(state, action.orderCount, action.item)
            case ADD_TO_CART:
            return  addToCart(state, action.product)
        default:
            return state;
        }
}