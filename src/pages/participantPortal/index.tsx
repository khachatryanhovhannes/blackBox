import { Link } from "react-router-dom"
import classes from "./participantPortal.module.css"


const ParticipantPortal = () => {
    return (
        <div className={classes.details}>
            <h2>Participant Portal</h2>
            <div className={classes.links}>
                <div>

                    <Link className={classes.link} to=""><span>Become a member</span></Link>
                    <Link className={classes.link} to=""><span>Log in as a member</span></Link>

                </div>
                <div>
                    <Link className={classes.link} to=""><span>Apply with a project</span></Link>
                    <Link className={classes.link} to=""><span>Log in as a project owner</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ParticipantPortal