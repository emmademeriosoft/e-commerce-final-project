import { ADD_TO_WISHLIST } from "../constants/productConstant";

export const addToWishList = (productId) =>{
    return { type: ADD_TO_WISHLIST, payload: { id: productId} }
}