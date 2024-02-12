import classes from "./becomeMember.module.css"


const BecomeMember = () => {
  return (<div className={classes.details}>
    <h2 id="animationContainer">
      <span>Become a member</span>
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

        <label htmlFor="profession">
          Profession/field
        </label>
        <input type="text" id="profession" />

        <label htmlFor="interest">
          Areas of Interest
        </label>
        <input type="text" id="interest" />
      </div>

      <div>
        <label htmlFor="skills">
          Skills and Expertise
        </label>
        <input type="text" id="skills" />

        <label htmlFor="motivation">
          Motivation
        </label>
        <input type="text" id="motivation" />

        <label htmlFor="portfolio">
          References/Portfolio
        </label>
        <input type="file" id="portfolio" title=""/>

        <label htmlFor="information">
          Additional Information (500 word)
        </label>
        <input type="text" id="information" />

        
        <input type="submit" value="Submit" />
      </div>

    </form>
  </div>
  )
}

export default BecomeMember