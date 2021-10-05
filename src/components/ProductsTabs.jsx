import React from 'react'
import { Link } from 'react-router-dom'


const ProductsTabs = () => {
    return (
        <div className="products_tabs d-flex justify-content-center" >
                    <ul className="flex-wrap justify-content-center">

                        <li className="nav_tabs">
                            <Link to="/" className="text-uppercase active" >new arrival</Link>
                        </li>
                        <li className="nav_tabs">
                            <Link to="/" className="text-uppercase" >new arrival</Link>
                        </li>
                        <li className="nav_tabs">
                            <Link to="/" className="text-uppercase" >new arrival</Link>
                        </li>
                        <li className="nav_tabs">
                            <Link to="/" className="text-uppercase" >new arrival</Link>
                        </li>
                        <li className="nav_tabs">
                            <Link to="/" className="text-uppercase" >new arrival</Link>
                        </li>
                    </ul>
                </div>
    )
}

export default ProductsTabs
