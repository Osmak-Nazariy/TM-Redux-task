export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

export const getProductsList = () => dispatch => {
    fetch('./productsList.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }).then(res => res.json()).then(products => 
         dispatch({ type: 'GET_PRODUCT_LIST', products: products })
    ).catch(err => console.log(err))
}

export const addNewProduct = payload => ({ type: ADD_NEW_PRODUCT, product: payload });