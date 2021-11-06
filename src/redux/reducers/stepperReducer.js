import { STEPPER_INCREMENT, STEPPER_DECREMENT } from '../constants/productConstant'


export const stepperReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case STEPPER_INCREMENT:
            return { count: state.count + 1 }
        case STEPPER_DECREMENT:
            return { count: state.count - 1 }

        default:
            return state
    }

}