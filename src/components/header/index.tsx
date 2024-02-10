import { Link, Outlet } from "react-router-dom"
import logo from "../../../public/logo.png"
import arrow from "../../assets/login line.png"
import classes from "./header.module.css"
import { useState } from "react"
import {Navbar} from "../"


const Header = () => {
    const [isShowNavbar, setIsShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setIsShowNavbar(!isShowNavbar)
    }


    return (
        <>
            <div className={classes.header}>
                <div className={classes.logoAndLogin}>
                    <div className="logo">
                        <Link to="/"> <img src={logo} alt="BlackBox" /></Link>
                    </div>
                    <div className={classes.login}>
                        <a href="#" className={classes.loginLink}>
                            <span>Log in</span>
                            <img src={arrow} alt="arrow" className={classes.loginLinkImg} />
                        </a>

                        <button className={classes.navbarIcon}
                            onClick={handleShowNavbar}
                        >
                            &#9776;
                        </button>
                    </div>
                </div>
                {isShowNavbar && <Navbar handleShowNavbar={handleShowNavbar} />}
            </div>
            <Outlet />
        </>
    )
}

export default Header