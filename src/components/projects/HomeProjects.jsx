import React from "react";
import INFO from "../../data/user";
import { Box, Button, Grid, Typography } from "@mui/material";
import Card from "./Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import "./styles/allProjects.css";
import "./styles/homeProjects.css";

const HomeProjects = () => {
	const navigate = useNavigate();

	const generateColor = (index) => {
		const hue = (index * 137) % 360;
		return `hsl(${hue}, 70%, 50%)`;
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
				{INFO.homeProjects.map((project, index) => (
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
						/>
					</Grid>
				))}
			</Grid>
			<Button
				variant="contained"
				endIcon={<KeyboardArrowDownIcon className="animated-icon" />}
				color="success"
				sx={{ textTransform: "capitalize", marginTop: "2rem" }}
				onClick={() => navigate("/projects")}
			>
				All Projects
			</Button>
		</Box>
	);
};

export default HomeProjects;
