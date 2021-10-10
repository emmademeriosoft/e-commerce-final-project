import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
const useStyle = makeStyles(theme => ({
    "product_qty_input": {

        "& button": {
            background: '#000',
            color: '#fff',
            fontSize: '10px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            textAlign: 'center',
            lineHeight: '24px',
        },
        "& input": {
            background: '#fff',
            borderColor: '#ddd',
            border: '1px solid #ddd',
            width: '20%',
            minHeight: '40px',
            borderRadius: 0,
            margin: '0 8px',
            textAlign: 'center',
        }
    }
}))
const CartInput = () => {
    const style = useStyle()
    const [quantity, setQuantity] = useState(1)
    return (
        <div className={style.product_qty_input + " mt-3 d-flex align-items-center justify-content-center"} >
            <button onClick={() => setQuantity(quantity + 1)}><i className="fas fa-plus"></i></button>
            <input type="number" name="qty" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" />
            <button onClick={() => setQuantity(quantity > 1 ? (quantity - 1) : 1)} ><i className="fas fa-minus"></i></button>
        </div>
    )
}

export default CartInput
