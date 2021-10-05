import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    "home_banner": {
        backgroundImage: "url('/images/banner_3.jpg')",
        display: 'flex',
        padding: '190px 0px',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',

    },
    "banner_text": {
        '@media (max-width: 767px)': {
            position: 'relative',
            zIndex: 9,
        },
        "& h3": {
            textTransform: 'uppercase',
            fontWeight: '500',
            color: '#f3f3f3',
        }

    },
    "banner_heading_style": {

        fontSize: '150px',
        textTransform: 'uppercase',
        fontWeight: 100,
        lineHeight: '150px',
        '@media (max-width: 576px)': {
            fontSize: '68px',
            lineHeight: '76px',
        },

        '@media (max-width: 1199px)': {
            fontSize: '74px',
            lineHeight: '110px',
        },

        "& span": {
            display: 'block',
            color: '#fff',
            fontWeight: 700,
        }

    },
    "banner_side_img": {
        position: 'relative',
        "& img": {
            position: "absolute",
            top: '-110px',
            right: '0px',
            '@media (max-width: 576px)': {
                position: 'absolute',
                top: '-377px',
                right: 0,
            }

        }
    }

}))


const HomeBanner = () => {
    const styles = useStyle()
    return (
        <section className={styles.home_banner}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.banner_text}>
                            <h1 className={styles.banner_heading_style}>
                                LIVE FOR <span>FAShION</span>
                            </h1>
                            <h3>SAVE UP TO 50%</h3>
                            <Link to="/" className="primary_button bg_black btn_md mt-3">Shop Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.banner_side_img}>
                            <img src="/images/banner.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner
