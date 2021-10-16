import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/actions/cartAction'
import { productList } from '../../redux/actions/productActions'
import { addToWishList, removeFromWishList } from '../../redux/actions/wishListAction'
const useStyle = makeStyles(theme => ({
    "product_wrapper": {
        marginTop: "30px",
        boxShadow: '0px 3px 15px 0px #0000000f',

        "&:hover": {
            "& .thumbnail  img": {

                transform: 'scale(1.1) rotate(3deg)',
            },
            "& .thumbnail img:not(:last-child)": {
                opacity: 0,
            },
            "& .thumbnail  img.hover_image": {
                opacity: 1,
            },
            "& .add_to_cart_btn": {
                visibility: 'visible',
                transform: 'translateY(0)',
                opacity: 1,
            },
            "& .thumbnail .product_actions span:not(.wishList)": {
                visibility: 'visible',
                transform: ' translateY(0px)',
                opacity: 1,


            }
        },

        "& .thumbnail": {
            position: 'relative',
            overflow: 'hidden',
            "& a.images_box": {
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                "& img": {

                    transition: '.3s all ease-in-out',
                },
                "& .hover_image": {
                    position: 'absolute',
                    zIndex: 2,
                    top: 0,
                    left: 0,
                    opacity: 0,
                },
            },
            "& .product_actions": {
                position: 'absolute',
                zIndex: 9,
                top: '18px',
                right: '18px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease 0s',
                "& span": {



                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    transition: 'all 0.3s ease 0s',
                    textDecoration: 'none',
                    color: '#212121',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    margin: '5px 0px',
                    cursor: 'pointer',

                    "&.alreadyExist": {
                        color: '#fff',
                        backgroundColor: '#ff7004',
                    },
                    "&:hover": {
                        color: '#fff',
                        backgroundColor: '#ff7004',
                    },
                },
                "& span:not(.wishList)": {
                    visibility: 'hidden',
                    transform: ' translateY(-20px)',
                    opacity: 0,
                }
            },
            "& .badge": {
                position: 'absolute',
                zIndex: 8,
                top: '18px',
                left: '18px',
                fontSize: 14,
                fontWeight: 500,
                padding: '3px 7px',
                textAlign: 'center',
                textTransform: 'capitalize',
                borderRadius: '3px',
                color: '#fff',
                backgroundColor: '#007a58',
            },
            "& .add_to_cart_btn": {
                display: 'block',
                width: '80%',
                height: '45px',
                lineHeight: '45px',
                textAlign: 'center',
                border: 0,
                borderRadius: '3px',
                fontSize: '14px',
                position: 'absolute',
                bottom: '20px',
                left: 0,
                right: 0,
                zIndex: 11,
                margin: 'auto',
                fontWeight: 600,
                visibility: 'hidden',
                transition: 'all 0.3s ease 0s',
                transform: 'translateY(20px)',
                opacity: 0,
            },

        },

        "& .productDesc": {
            position: 'relative',
            zIndex: '10',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 15px 23px 15px',
            transition: 'all 0.3s ease 0s',
            textAlign: 'center',
            backgroundColor: '#fff',
        },


    },
}
))

const NewArrivalsTab = () => {
    const style = useStyle()
    const getWishList = useSelector(state => state.getWishList)
    const getProduct = useSelector(state => state.productlist)
    const { wishList } = getWishList
    const { loading, products, error } = getProduct
    const dispatch = useDispatch()
    const wishListHandler = (productId,existWishList) => {
        // if(existWishList){

        //     dispatch(removeFromWishList(productId))
        // }else{

        //     dispatch(addToWishList(productId))
        // }
        console.log(existWishList)
    }
    useEffect(() => {
        dispatch(productList())

    }, [])
    var productExistWishList = '';
    return (

        loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
                <div className="row">
                    {
                        products.map((product, key) => {

                            wishList.find(x => x.id == product.id) ? productExistWishList = true : productExistWishList = false
                            console.log(productExistWishList)
                            return (
                                <div className="col-lg-3 col-md-3 col-12" key={key}>
                                    <div className={style.product_wrapper}>
                                        <div className="thumbnail">
                                            <Link to={"/shop/" + product.id} className="images_box">
                                                <img src={product.productDisplayImage} alt="" />
                                                <img src={product.productHoverImage} className="hover_image" alt="" />
                                            </Link>
                                            <span className="badge">
                                                {product.badgeText}
                                            </span>
                                            <div className="product_actions">

                                                <span onClick={() => wishListHandler(product.id,productExistWishList) } className={productExistWishList ? "wishList alreadyExist": "wishList"}><i className="far fa-heart"></i></span>
                                                <span className="expand_product"><i className="fas fa-expand"></i></span>
                                                <span className="exchange_product"><i className="fas fa-exchange-alt"></i></span>
                                            </div>
                                            <Link className="add_to_cart_btn text-uppercase bg_black" to="/" >add to cart</Link>
                                        </div>
                                        <div className="productDesc">
                                            <h4 className="text-capitalize primary_hreading text_orange">
                                                <Link to={"/shop/" + product.id} className="hover_text">{product.productName}</Link>
                                            </h4>
                                            <span className="price">{product.productPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


    )
}

export default NewArrivalsTab
