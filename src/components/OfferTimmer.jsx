import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyle = makeStyles(theme => ({
    "offerTimmer": {
        backgroundImage: 'url(/images/t-shirt.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '122px 0',
        "@media (max-width: 992px)":{
            padding: '80px 0',
    backgroundPosition: '95%',
        },
        "& .offer_banner": {
            display: 'flex',
            alignItems: 'center',
            '@media (max-width: 992px)':{
                display : 'inherit',
            },
            "& .count_down": {
                '@media (max-width: 992px)':{
                    display:'flex',
                },
                "& .time_box": {
                    border: '1px solid #c5c5c5',
                    padding: '10px 28px',
                    marginTop: '30px',
                    fontSize: '14px',
                    textAlign: 'center',
                    '@media (max-width: 992px)':{
                        width: '20rem',
                        padding: '5px',
                        marginLeft: '10px',
                    },
                },
            },
            "& .offer_text": {
                marginLeft: "60px",
                "@media (max-width: 992px)":{
                    marginLeft: '0px',
                    paddingTop: '30px',
                },
                "& h3": {

                    fontSize: '40px',
                    lineHeight: '55px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    "@media (max-width: 576px)":{
                        fontSize: '30px',
                        lineHeight: '40px',
                    },
                }

            }
        },
    }
}))
const OfferTimmer = () => {
    const style = useStyle()
    return (
        <section className={style.offerTimmer + " mt-5"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-4">
                        <div className="offer_banner">
                            <div className="count_down">
                                <div className="time_box">
                                    <p>-3</p>
                                    <span>Seconds</span>
                                </div>
                                <div className="time_box">
                                    <p>-3</p>
                                    <span>Minutes</span>
                                </div>
                                <div className="time_box">
                                    <p>-3</p>
                                    <span>Hours</span>
                                </div>
                                <div className="time_box">
                                    <p>-3</p>
                                    <span>Days</span>
                                </div>
                            </div>
                            <div className="offer_text">
                                <h3>20% OFF FOR ALL T-SHIRT COLLECTION</h3>
                                <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at magnam possimus sunt, labore, repellendus natus culpa corporis non ipsa autem molestiae quaerat? Iste, cum id sed blanditiis repellendus est!</p>
                                <Link to="/" className="primary_button bg_black btn_md">View More</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferTimmer
