import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import MainTitle from './MainTitle'
import Product from './Product'

const useStyle = makeStyles(theme => ({
    "singlePorduct": {
        padding: "30px 0px",
        "& .view_product_detail": {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            "& .custom_select": {
                width: '200px',
            },
        },
        "& .product_qty_input": {

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
            },

        }
    }
}))
const SingleProduct = () => {
    const style = useStyle()
    return (
        <section className={style.singlePorduct}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-12">
                        <div className="view_product_img">
                            <img src="/images/product5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-8 col-12">
                        <div className="view_product_detail mt-lg-0 mt-4">
                            <h3>Black fashion handbag JI9023</h3>
                            <div className="product_review d-flex align-items-center mt-2">
                                <div className="reviews_stars">
                                    <i className="fas fa-star text_orange"></i>
                                    <i className="fas fa-star text_orange"></i>
                                    <i className="fas fa-star text_orange"></i>
                                    <i className="fas fa-star text_orange"></i>
                                    <i className="fas fa-star text_orange"></i>
                                </div>
                                <div className="review_text">
                                    <p>(2 Customer Review)</p>
                                </div>
                            </div>
                            <h4 className="mt-4">$317.76 <del className="text_orange">$456.43</del></h4>
                            <p className="my-4">Standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>

                            <FormControl variant="filled" className="custom_select" >
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=''
                                    label="Age"
                                // onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                            <div className="product_qty_input mt-3 d-flex align-items-center">
                                <button><i className="fas fa-plus"></i></button>
                                <input type="number" name="qty" value={0} className="form-control" />
                                <button><i className="fas fa-minus"></i></button>
                            </div>
                            <div className="products_link mt-4">
                                <div className="product_actions">
                                    <Link to="" className="hover_text me-3">
                                        <i className="far fa-heart"></i>
                                        Add to wich list
                                    </Link>
                                    <Link to="" className="hover_text">
                                        <i className="fas fa-exchange-alt"></i>
                                        Add To Compare
                                    </Link>
                                </div>
                                <Link to="/" className="primary_button bg_black btn_md mt-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="might_also_like py-5">
                    <MainTitle title="You Might Also Like" tagLine="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
                    <div className="similar_products">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <Product />
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <Product />
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <Product />
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default SingleProduct
