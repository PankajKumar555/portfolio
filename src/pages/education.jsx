import React from "react";
import { educationDetails } from "../data/education";
import EducationCard from "./educationCard";
import { Grid } from "@mui/material";
import "./styles/readArticle.css";

const Education = () => {
	return (
		<React.Fragment>
			<Grid
				item
				xs={12}
				sm={10}
				md={10}
				lg={10}
				sx={{ margin: "120px auto 20px" }}
			>
				{educationDetails.map((education, index) => (
					<EducationCard key={index} {...education} />
				))}
			</Grid>
		</React.Fragment>
	);
};

export default Education;
