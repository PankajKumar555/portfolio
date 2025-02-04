import React from "react";
import { Link } from "react-router-dom";

// import "./styles/project.css";
import Card from "./Card";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	const generateColor = (index) => {
		const hue = (index * 137) % 360; // Multiply index by a prime number to spread hues
		return `hsl(${hue}, 70%, 50%)`; // Use HSL for vibrant, unique colors
	};

	return (
		<React.Fragment>
			{/* <div className=""> */}
			<Link to={link}>
				{/* <div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div> */}
				<Card
					hexa={generateColor(2)} // Dynamically generate a unique color
					title={title}
					description={description}
					image={logo}
					linkText={linkText}
				/>
			</Link>
			{/* </div> */}
		</React.Fragment>
	);
};

export default Project;
