import { SAVE_FORM_DATA } from '../constants/productConstant'
export const saveFormData = (data) =>{
    return {
        type: SAVE_FORM_DATA,
        payload: data
    }
}