import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants/productConstant";

export const addToWishList = (productId) => async (dispatch, getState) => {
    const { data } = await axios.get('http://localhost/and_shop_ecommerce_app/api-fetch-all.php?id=' + productId)
    dispatch({
        type: ADD_TO_WISHLIST,
        payload: {
            id: productId,
            price: data[0].productPrice,
            name: data[0].productName,
            displayImage: data[0].productDisplayImage,
            hoverImage: data[0].productHoverImage,
        }
    })


    localStorage.setItem('wishList', JSON.stringify(getState().getWishList.wishList))
}
export const removeFromWishList = (productId) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: productId
    })


    localStorage.setItem('wishList', JSON.stringify(getState().getWishList.wishList))
}