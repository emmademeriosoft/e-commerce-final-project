import { STEPPER_INCREMENT, STEPPER_DECREMENT } from '../constants/productConstant'
export const stepperIncrement = () => {
    return {
        type: STEPPER_INCREMENT
    }
}
export const stepperDecrement = () => {
    return {
        type: STEPPER_DECREMENT
    }
}