import classes from "./applyProject.module.css"

const ApplyProject = () => {
    return (
        <div className={classes.details}>
            <h2 id="animationContainer">
                <span>Apply with a project</span>
            </h2>
            <form className={classes.form}>
                <div>
                    <label htmlFor="companyName">
                        Name/ Company Name
                    </label>
                    <input type="text" id="companyName" />

                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email" />

                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="text" id="phone" />

                    <label htmlFor="projectTitle">
                        Project Title
                    </label>
                    <input type="text" id="projectTitle" />

                    <label htmlFor="description">
                        Project Description (500 word)
                    </label>
                    <input type="text" id="description" />
                </div>

                <div>
                    <label htmlFor="outline">
                        Project Outline
                    </label>
                    <input type="text" id="outline" />

                    <label htmlFor="timeline">
                        Timeline
                    </label>
                    <input type="text" id="timeline" />

                    <label htmlFor="portfolio">
                        Previous Work/Portfolio (text and attachment)
                    </label>
                    <input type="file" id="portfolio" />

                    <label htmlFor="information">
                        Additional Information (500 word)
                    </label>
                    <input type="text" id="information" />

                    <label htmlFor="businessPlan">
                        Project Description/Plan/Business plan/pitch deck etc. (attachment)
                    </label>
                    <input type="file" id="businessPlan" />

                </div>
                <div className={classes.submitSect}>
                    <input type="submit" value="Submit" />

                </div>
            </form>

        </div>
    )
}

export default ApplyProject