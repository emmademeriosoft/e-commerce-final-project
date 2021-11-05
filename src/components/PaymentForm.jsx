import React //, {useState }
    from 'react';
import {
    TextField,
    Grid,
    Typography,
    Box
} from "@material-ui/core";
import {
    useStripe,
    useElements,
    CardElement,
    Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"


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
                    amount: 1000,
                    id
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

    return <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box>
                            <CardElement options={CARD_OPTIONS} />
                        </Box>
                    </Grid>
                </Grid>
            </form>

    </>
}

export default PaymentForm;


