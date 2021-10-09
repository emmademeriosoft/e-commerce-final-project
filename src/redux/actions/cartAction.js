import axios from "axios";
import { ADD_TO_CART, DELETE_FROM_CART } from "../constants/productConstant";

export const addToCart = (product_id, quantity) => async (dispatch,getState) => {
   const {data } = await axios.get('http://localhost/and_shop_ecommerce_app/api-fetch-all.php?id='+product_id)
   dispatch({ 
      type: ADD_TO_CART, 
      payload: { 
         id: product_id, 
         quantity: quantity,
         price: data[0].productPrice,
         name: data[0].productName,
         displayImage: data[0].productDisplayImage,
         hoverImage: data[0].productHoverImage,
      } 
   })
   localStorage.setItem('cartItem', JSON.stringify(getState().getCartItem.cartItem))

}
export const deleteFromCart = (product_id) => async (dispatch) => {
  dispatch({ 
      type: DELETE_FROM_CART, 
      payload: product_id, 
   })

}