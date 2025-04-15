import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	const generateColor = (index) => {
		const hue = (index * 137) % 360;
		return `hsl(${hue}, 70%, 50%)`;
	};

	return (
		<React.Fragment>
			<Link to={link}>
				<Card
					hexa={generateColor(2)}
					title={title}
					description={description}
					image={logo}
					linkText={linkText}
				/>
			</Link>
		</React.Fragment>
	);
};

export default Project;
