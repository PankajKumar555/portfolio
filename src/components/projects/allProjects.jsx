import React from "react";
import INFO from "../../data/user";
import "./styles/allProjects.css";
import { Box, Grid, Typography } from "@mui/material";
import Card from "./Card";

const AllProjects = () => {
	const generateColor = (index) => {
		const hue = (index * 137) % 360; // Multiply index by a prime number to spread hues
		return `hsl(${hue}, 70%, 50%)`; // Use HSL for vibrant, unique colors
	};

	return (
		<Box
			sx={{
				textAlign: "center",
			}}
		>
			<Typography
				variant="h3"
				sx={{ fontWeight: "bold", marginBottom: "20px" }}
			>
				Projects
			</Typography>
			<br />
			<Grid
				item
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
							hexa={generateColor(index)}
							title={project.title}
							description={project.description}
							image={project.logo}
							linkText={project.linkText}
							link={project.link}
							tech={project.tech}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default AllProjects;
