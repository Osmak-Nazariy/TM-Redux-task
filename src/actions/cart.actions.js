export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ON_ORDER_COUNT_CHANGE = 'ON_ORDER_COUNT_CHANGE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({ type: ADD_TO_CART, product: product });

export const onOrderCountChange = (orderCount, item)=> ({type: ON_ORDER_COUNT_CHANGE, orderCount, item });
export const getCartItems = () => ({ type: GET_CART_ITEMS });
export const removeFromCart = id => ({ type: REMOVE_FROM_CART, productId: id });
