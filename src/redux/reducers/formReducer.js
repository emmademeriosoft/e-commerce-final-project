import { SAVE_FORM_DATA } from '../constants/productConstant'

const initialState = {
    frm_fname: 'emmad',
    frm_mname: 'midle',
    frm_lname: 'last',
    frm_contact_no: '0922',
    frm_address: 'address',
    frm_famous_placed: 'place'
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FORM_DATA:
            return { state : action.payload }
            
    
        default:
            return state;
    }
}