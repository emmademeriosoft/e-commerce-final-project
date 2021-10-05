import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyle = makeStyles(theme => ({
    "main_footer": {
        padding: "80px 0px 60px",
        "& .footer_content a": {
            fontSize: '18px',
        },
        "& h3": {
            fontSize: '18px',
        },
        "& .footer_menu": {
            '@media (max-width: 992px)': {
                paddingTop: '25px',
            }
        }
    }
}))

const Footer = () => {
    const style = useStyle();
    return (
        <footer className={style.main_footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-12">
                        <div className="footer_content">
                            <Link to="/">
                                <img src="/images/logo.png" alt="" />
                            </Link>
                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat.</p>
                            <ul className="d-flex  mt-4 ps-0">
                                <li>
                                    <Link to="/" className="hover_text">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="ps-3">
                                    <Link to="/" className="hover_text">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="ps-3">
                                    <Link to="/" className="hover_text">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="ps-3">
                                    <Link to="/" className="hover_text">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li className="ps-3">
                                    <Link to="/" className="hover_text">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 col-12">
                        <div className="footer_menu">
                            <h3 className="border-bottom-primary">INFORMATION</h3>
                            <ul className="pt-4 ps-0">
                                <li>
                                    <Link to="/" className="hover_text">
                                        Home
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        About Us
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Frequently Questions
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Order Tracking
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Compare
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-2 col-sm-12 col-12">
                        <div className="footer_menu">
                            <h3 className="border-bottom-primary">YOUR ACCOUNT</h3>
                            <ul className="pt-4 ps-0">
                                <li>
                                    <Link to="/" className="hover_text">
                                        Home
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        About Us
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Frequently Questions
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Order Tracking
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link to="/" className="hover_text">
                                        Compare
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 col-sm-12 col-12">
                        <div className="footer_menu">
                            <h3 className="mb-5 border-bottom-primary">NEWSLETTER</h3>
                            <TextField label="Outlined secondary" color="secondary" variant="outlined" className=" mb-1" />
                            <Link className="mt-lg-3 primary_button text-uppercase btn_md bg_black" to="/" >send mail</Link>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer
