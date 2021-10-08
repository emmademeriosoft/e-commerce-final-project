import { ADD_TO_WISHLIST } from "../constants/productConstant";
export const getWishListReducer = (state = { wishList: [] }, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const item = action.payload
            const isExist = state.wishList.find(x => x.id === item.id)
            if (isExist) {
                return { ...state, wishList: state.wishList.map(x => x.id === isExist.id ? item : x) }
            } else {

                return { ...state, wishList: [...state.wishList, action.payload] }
            }


        default:
            return state;
    }
}