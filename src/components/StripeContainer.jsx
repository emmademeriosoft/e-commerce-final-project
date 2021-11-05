import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51Jld0kBeycssLrgPuf8QPUfrzSyA9mSX2GR2ICa6sKGPj3PC0UPiqltlbh5MzjXA35XWfQYJjDM6gx7nc9PhZuJN00LiC18Ply"

const stripePromise = loadStripe(PUBLIC_KEY);



const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
