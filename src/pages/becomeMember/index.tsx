import React, { useState, ChangeEvent, FormEvent } from "react";
import classes from "./becomeMember.module.css";

interface BecomeMemberData {
  companyName: string;
  email: string;
  phone: string;
  profession: string;
  interest: string;
  skills: string;
  motivation: string;
  portfolio: File | null;
  information: string;
}

const BecomeMember: React.FC = () => {
  const [data, setData] = useState<BecomeMemberData>({
    companyName: "",
    email: "",
    phone: "",
    profession: "",
    interest: "",
    skills: "",
    motivation: "",
    portfolio: null,
    information: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const files = (e.target as HTMLInputElement).files;
    setData((prevData) => ({
      ...prevData,
      [id]: files ? (files[0] as File) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", data);
  };

  return (
    <div className={classes.details}>
      <h2 id="animationContainer">
        <span>Become a member</span>
      </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="companyName">Name/ Company Name</label>
          <input
            type="text"
            id="companyName"
            value={data.companyName}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />

          <label htmlFor="profession">Profession/field</label>
          <input
            type="text"
            id="profession"
            value={data.profession}
            onChange={handleChange}
          />

          <label htmlFor="interest">Areas of Interest</label>
          <input
            type="text"
            id="interest"
            value={data.interest}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="skills">Skills and Expertise</label>
          <input
            type="text"
            id="skills"
            value={data.skills}
            onChange={handleChange}
          />

          <label htmlFor="motivation">Motivation</label>
          <input
            type="text"
            id="motivation"
            value={data.motivation}
            onChange={handleChange}
          />

          <label htmlFor="portfolio">References/Portfolio</label>
          <input
            type="file"
            id="portfolio"
            onChange={handleChange}
            accept=".pdf, .doc, .docx"
          />

          <label htmlFor="information">Additional Information (500 words)</label>
          <textarea
            id="information"
            value={data.information}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default BecomeMember;
