import { useState, ChangeEvent, FormEvent } from "react";
import classes from "./applyProject.module.css";
// import sendRow from "../../services/API"


interface ApplyProjectData {
    name: string;
    email: string;
    phone: string;
    projectTitle: string;
    description: string;
    outline: string;
    timeline: string;
    portfolio: File | null;
    information: string;
    businessPlan: File | null;
}

const ApplyProject: React.FC = () => {
    const [data, setData] = useState<ApplyProjectData>({
        name: "",
        email: "",
        phone: "",
        projectTitle: "",
        description: "",
        outline: "",
        timeline: "",
        portfolio: null,
        information: "",
        businessPlan: null,
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
        console.log("Form Data:", data);
        // sendRow([Object.values(data)])
    };

    return (
        <div className={classes.details}>
            <h2 id="animationContainer">
                <span>Apply with a project</span>
            </h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name/Company Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
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

                    <label htmlFor="projectTitle">Project Title</label>
                    <input
                        type="text"
                        id="projectTitle"
                        value={data.projectTitle}
                        onChange={handleChange}
                    />

                    <label htmlFor="description">Project Description (500 words)</label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="outline">Project Outline</label>
                    <textarea
                        id="outline"
                        value={data.outline}
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="timeline">Timeline</label>
                    <input
                        type="text"
                        id="timeline"
                        value={data.timeline}
                        onChange={handleChange}
                    />

                    <label htmlFor="portfolio">
                        Previous Work/Portfolio (text and attachment)
                    </label>
                    <input
                        type="file"
                        id="portfolio"
                        onChange={handleChange}
                        accept=".pdf, .doc, .docx"
                    />

                    <label htmlFor="information">
                        Additional Information (500 words)
                    </label>
                    <textarea
                        id="information"
                        value={data.information}
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="businessPlan">
                        Project Description/Plan/Business plan/pitch deck etc. (attachment)
                    </label>
                    <input
                        type="file"
                        id="businessPlan"
                        onChange={handleChange}
                        accept=".pdf, .ppt, .pptx"
                    />
                </div>
                <div className={classes.submitSect}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default ApplyProject;
