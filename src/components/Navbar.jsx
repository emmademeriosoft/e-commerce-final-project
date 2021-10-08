
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyle = makeStyles(theme => ({
    "mobile_menu": {
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        overflow: 'auto',
        height: '100vh',
        padding: '20px',
        right: 0,
        transition: 'all 0.5s ease',
        transform: 'translateX(100%)',
        boxShadow: 'none',
        background: 'var(--main-menu-text)',
        width: '300px',
        overflowX: 'hidden',

        '@media (min-width: 576px)': {
            width: '400px',
        },

        "& .menu_close_button": {
            width: '40px',
            height: '40px',
            lineHeight: '25px',
            textAlign: 'center',
            borderRadius: '50%',
            transition: 'all 0.5s ease',
        },
        "& .mob_main_menu li": {

            position: 'relative',
            padding: '7px 5px',

            "& a:hover": {

                color: 'var(--main-theme-color) !important',
            },
            "& a": {
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '16px',
            }


        },

        "& .mob_sub_menu": {
            display: 'none',
            opacity: 0,
            transform: 'translateY(-100px)',
            transition: 'all 0.4s ease-in-out',
            "& li a": {
                fontSize: '14px !important',

            }

        },

        "& .active_mob_sub_menu": {
            "&:hover .mob_sub_menu": {
                display: 'block !important',
                opacity: '1 !important',
                transform: 'translateY(0px)',

            },
        },
        "&.mobile_menu_open": {
            transform: 'translateX(0)'
        },

        "& .contact_info": {
            textAlign: 'center',
            margin: '0 auto',
            paddingTop: '65px',
            "& address": {
                marginTop: '30px',
                color: '#FFF',
                "& span": {
                    display: 'block',
                }
            },

            "& .round_social_link": {
                "& li": {
                    marginRight: "20px",
                    "& a": {

                        display: 'block',
                        textAlign: 'center',
                        width: '40px',
                        height: '40px',
                        lineHeight: '40px',
                        borderRadius: '50%',
                        background: '#2f3239',
                        color: '#FFF',
                        transition: 'all 0.5s ease',
                        fontSize: '16px',

                        "&:hover": {
                            background: '#FFF',
                            color: '#2f3239',
                        }
                    }
                }
            }
        },

    },

}))

const Navbar = () => {
    const style = useStyle()
    const [sideMEnu, setSideMEnu] = useState(false)
    const getCart = useSelector(state => state.getCartItem)
    const { cartItem } = getCart
    const getWishList = useSelector(state => state.getWishList)
    const { wishList } = getWishList

    const navMenu = [
        {
            title: "Home",
            url: '/',

            subMenu: [
                {
                    subMenuTitle: "FASHION",
                    ubMenuUrl: '/',

                },
                {
                    subMenuTitle: "FASHION",
                    ubMenuUrl: '/',

                },
            ]
        },
        {
            title: "Home2",
            url: '/',
            subMenu: [
                {
                    subMenuTitle: "FASHION1",
                    ubMenuUrl: '/',

                },
                {
                    subMenuTitle: "FASHION1",
                    ubMenuUrl: '/',

                },
            ]
        },
        {
            title: "Home",
            url: '/',

        },
        {
            title: "Home",
            url: '/',

        },
        {
            title: "Home",
            url: '/',

        },
        {
            title: "Home",
            url: '/',

        },
    ]
    return (
        <>
            <header className="fixed-top">
                <div className="header-wrapper">
                    <div className="nav-logo">
                        <div className="logo-wrapper">
                            <Link to="/">
                                <img src="/images/logo.png" alt="*" />
                            </Link>
                        </div>
                    </div>
                    <div className="main-menu d-none d-xl-block">
                        <nav>
                            <ul className="main_menu">
                                <li>
                                    <Link to="/" className="transition">
                                        Home
                                        <i className="fas fa-sort-down"></i>
                                    </Link>
                                    <div className="sub_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/shop" className="transition">
                                        Shop
                                        <i className="fas fa-sort-down"></i>

                                    </Link>
                                </li>
                                <li>
                                    <Link to="/feature" className="transition">
                                        Feature
                                        <i className="fas fa-sort-down"></i>

                                    </Link>
                                    <div className="sub_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/blog" className="transition">
                                        Blog
                                        <i className="fas fa-sort-down"></i>

                                    </Link>
                                    <div className="sub_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/pages" className="transition">
                                        Pages
                                        <i className="fas fa-sort-down"></i>
                                    </Link>
                                    <div className="sub_menu">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    Fashion
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-action">
                        <ul>
                            <li>
                                <i className="far fa-heart"></i>
                                <span>{wishList.length !== 0 && wishList.length}</span>
                            </li>
                            <li>
                                <i className="fas fa-shopping-cart"></i>
                                <span>{cartItem.length !== 0 && cartItem.reduce((a, c) => a + Number(c.quantity), 0)}</span>
                            </li>
                            <li>
                                <i className="fas fa-search"></i>
                            </li>
                            <li>
                                <Link to="/" className="offside-about hover_text" onClick={() => setSideMEnu(true)}>

                                    <i className="fas fa-bars"></i>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </header>


            <div className={sideMEnu ? "mobile_menu_open " + style.mobile_menu : style.mobile_menu}>
                <div className="menu_slide_off text-end mb-5">
                    <button className="menu_close_button" onClick={() => setSideMEnu(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="mob_main_menu_wrapper d-xl-none d-block">
                    <div className="mob_main_menu">
                        <ul>
                            {navMenu.map((v, k) => {
                                return (
                                    <li key={k} className="active_mob_sub_menu">
                                        <Link className="d-flex align-items-center justify-content-between text-white" to={v.url}>
                                            {v.title}
                                            {("subMenu" in v) && <i className="fas fa-sort-down"></i>}
                                        </Link>
                                        {("subMenu" in v) &&
                                            (
                                                <div className="mob_sub_menu">
                                                    <ul>
                                                        {v.subMenu.map((v1, k1) => {
                                                            return (
                                                                <li key={k1}>
                                                                    <Link className="text-white d-block" to={v1.ubMenuUrl}>{v1.subMenuTitle}</Link>
                                                                </li>

                                                            )
                                                        })
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </li>
                                )
                            })}


                        </ul>
                    </div>
                </div>

                <div className="contact_info">
                    <address className="address">
                        <img src="/images/logo-white.png" className="mb-4" alt="" />
                        <span>Address: Your address goes here.</span>
                        <span>Call Us: 0341 2725048</span>
                        <span>Email: demo@example.com</span>
                    </address>
                    <ul className="round_social_link d-flex align-items-center justify-content-center">
                        <li> <Link to="/"><i className="fab fa-facebook-f"></i></Link> </li>
                        <li> <Link to="/"><i className="fab fa-twitter"></i></Link> </li>
                        <li> <Link to="/"><i className="fab fa-instagram"></i></Link> </li>
                        <li> <Link to="/"><i className="fab fa-linkedin-in"></i></Link> </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
