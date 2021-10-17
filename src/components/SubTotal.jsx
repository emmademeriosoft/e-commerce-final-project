import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const useStyle = makeStyles({
    "cart_details": {
        border: '1px solid #ededed',
        "& h3": {

            color: '#ffffff',
            lineHeight: '36px',
            padding: '5px 15px !important',
            background: 'var(--main-theme-color)',
            textTransform: 'uppercase',
            fontSize: '16px',
            fontWeight: '600',
        },
        "& .inner_detail": {
            padding: '10px 20px 25px',
            "& .cart_subtoal": {
                display: 'flex',
                justifyContent: 'space-between',

                "& p": {
                    fontWeight: '600',
                    fontSize: '14px',
                }
            }
        }
    }
})

const SubTotal = () => {
    const style = useStyle()
    const getCartItem = useSelector(state => state.getCartItem)
    const { cartItem } = getCartItem


    const total_amount = cartItem.reduce((a, c) => a + (Number(c.quantity) * Number(c.price)), 0)

    return (
        <div className={style.cart_details}>
            <h3>CART TOTAL</h3>
            <div className="inner_detail">
                <div className="cart_subtoal">
                    <p>Subtotal</p>
                    <p>Rs {total_amount.toLocaleString()}</p>
                </div>
                <div className="cart_subtoal">
                    <p>Shipping</p>
                    <p>Rs {(total_amount + 100).toLocaleString()}</p>
                </div>
                <div className="cart_subtoal">
                    <p>Tax</p>
                    <p>Rs {(total_amount + 40).toLocaleString()}</p>
                </div>
                <hr />
                <div className="cart_subtoal mb-4">
                    <p>Total</p>
                    <p>Rs {(total_amount + 40 + 100).toLocaleString()}</p>
                </div>
                <div className="checkoutButton">
                    <Link to="/cart" className="primary_button bg_black btn_md  w-100 text-center">
                        Check Out
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SubTotal
