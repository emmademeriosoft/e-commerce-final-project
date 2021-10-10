import { makeStyles } from '@material-ui/styles'
import React from 'react'
import CartInput from './CartInput'


const useStyle = makeStyles(theme => ({
    "cart_area": {
        "& .cart_desc": {
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

                                    <tr>
                                        <td>
                                            <img src="/images/product5.png" alt="" />
                                        </td>
                                        <td>
                                            name
                                        </td>
                                        <td>
                                            price
                                        </td>
                                        <td>
                                            <CartInput />
                                        </td>
                                        <td>
                                            Total
                                        </td>
                                        <td>
                                            <span>
                                                <i className="fas fa-trash"></i>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartArea
