import React from "react";
import INFO from "../../data/user";
import "./styles/allProjects.css";
import { Grid } from "@mui/material";
import Card from "./Card";

const AllProjects = () => {
	const generateColor = (index) => {
		const hue = (index * 137) % 360; // Multiply index by a prime number to spread hues
		return `hsl(${hue}, 70%, 50%)`; // Use HSL for vibrant, unique colors
	};

	return (
		<Grid
			container
			xs={12}
			sm={12}
			md={12}
			lg={12}
			margin="auto"
			sx={{
				justifyContent: "center",
			}}
		>
			{INFO.projects.map((project, index) => (
				<Grid
					item
					xs={12}
					sm={5}
					md={5}
					lg={3.8}
					margin="auto"
					key={index}
					sx={{ textAlign: "center" }}
				>
					<Card
						hexa={generateColor(index)} // Dynamically generate a unique color
						title={project.title}
						description={project.description}
						image={project.logo}
						linkText={project.linkText}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default AllProjects;
