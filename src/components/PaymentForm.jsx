import React from 'react';
import {
    TextField,
    Grid,
    Typography,
    Box,
    Button
} from "@material-ui/core";
import {
    useStripe,
    useElements,
    CardElement,
    Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { stepperDecrement } from '../redux/actions/stepperAction';


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "black"
            },
            "::placeholder": {
                color: "black"
            }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "black"
        }
    }
}
const PUBLIC_KEY = "pk_test_51Jld0kBeycssLrgPuf8QPUfrzSyA9mSX2GR2ICa6sKGPj3PC0UPiqltlbh5MzjXA35XWfQYJjDM6gx7nc9PhZuJN00LiC18Ply"

const stripePromise = loadStripe(PUBLIC_KEY);

const PaymentForm = () => {
    const fromCount = useSelector(state => state.fromCount)
    const dispatch = useDispatch()
    const { count } = fromCount;
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {

        event.preventDefault();
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,

        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: localStorage.getItem('totalCart'),
                    description: 'order id is 10001',
                    id,

                })

                if (response.data.success) {
                    console.log("Successful payment")
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    const handleBack = () => {
        dispatch(stepperDecrement())
    }

    return <>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box>
                        <CardElement options={CARD_OPTIONS} />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={count === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>

                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Next
                </Button>
            </Box>
        </form>

    </>
}

export default PaymentForm;


