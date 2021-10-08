import { ADD_TO_CART } from "../constants/productConstant";

export const addToCart = (product_id, quantity) => {
   return { type: ADD_TO_CART, payload: { id: product_id, quantity: quantity } }
}