import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteFromCart } from '../redux/actions/cartAction'
import CartInput from './CartInput'
import SubTotal from './SubTotal'


const useStyle = makeStyles(theme => ({
    "cart_area": {
        "& .cart_desc": {
            overflowX: 'scroll',
            "& table": {
                width: '100%',
                "& thead": {
                    background: 'var(--main-theme-color)',

                    "& th": {

                        color: '#fff',
                        borderBottom: '3px solid var(--main-theme-color)',
                        borderRight: '1px solid #ededed',
                        fontSize: '16px',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        padding: '10px',
                        textAlign: 'center',
                    }
                },
                "& tbody": {
                    "& tr": {
                        borderBottom: '1px solid #ededed',
                    },
                    "& td": {
                        borderRight: '1px solid #ededed',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        minWidth: '150px',
                        padding: '10px',
                    },
                    "& td:first-child": {
                        maxWidth: '180px',
                        overflow: 'hidden',
                        height: '125px',
                        "& img": {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }
                    },
                    "& td:last-child": {
                        "& span": {

                            border: '1px solid var(--main-theme-color)',
                            padding: "10px 15px",
                            transition: 'all 0.4s ease-in-out',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            color: 'var(--main-theme-color)',
                            "&:hover": {
                                color: 'white',
                                backgroundColor: 'var(--main-theme-color)',

                            }
                        }
                    }
                }
            }
        }
    }
}))
const CartArea = () => {
    const style = useStyle()
    const getCartItem = useSelector(state => state.getCartItem)
    const { cartItem } = getCartItem
    const dispatch = useDispatch()
    const delCartHandler = (productId) => {
        dispatch(deleteFromCart(productId))
    }
    return (
        <section className={style.cart_area}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="cart_desc">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Product
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Total
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map((v, k) => {
                                            return (
                                                <tr key={k}>
                                                    <td>
                                                        <img src="/images/product5.png" alt="" />
                                                    </td>
                                                    <td>
                                                        {v.name}
                                                    </td>
                                                    <td>
                                                        {(v.price).toLocaleString()}
                                                    </td>
                                                    <td>
                                                        <CartInput qty={v.quantity} productId={v.id} />
                                                    </td>
                                                    <td>
                                                        {(Number(v.price) * Number(v.quantity)).toLocaleString()}
                                                    </td>
                                                    <td>
                                                        <span onClick={() => delCartHandler(v.id)}>
                                                            <i className="fas fa-trash"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <SubTotal />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartArea
