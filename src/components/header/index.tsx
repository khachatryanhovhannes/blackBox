import logo from "../../../public/logo.png"
import login from "../../assets/login.png"
import classes from "./index.module.css"

const Header = () => {
    return (
        <>
            <div className={classes.header}>
                <div className={classes.logoAndLogin}>
                    <div className="logo">
                        <img src={logo} alt="BlackBox" />
                    </div>
                    <div className="login">
                        <img src={login} alt="Login" />
                    </div>
                </div>
                <div className={classes.companyName}>
                    Black Box
                </div>
                <div className={classes.headerDown}>
                    Multidisciplinary
                    <br />
                    Incubation Program
                </div>
            </div>
        </>
    )
}

export default Header