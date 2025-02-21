import React from "react";
import {
	Box,
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
} from "@mui/material";
import { skills } from "../../data/skill";

const SkillsSection = () => {
	return (
		<Box
			sx={{
				// backgroundColor: "#000", // Dark background
				// color: "#fff",
				// minHeight: "100vh",
				// padding: "40px",
				textAlign: "center",
			}}
		>
			<Typography
				variant="h3"
				sx={{ fontWeight: "bold", marginBottom: "20px" }}
			>
				What I do
			</Typography>
			<br />
			<Grid container spacing={3} justifyContent="center">
				{skills?.map((skill, index) => (
					<Grid item xs={6} sm={4} md={3} lg={2} key={index}>
						<Card
							sx={{
								// backgroundColor: "#111", // Card background
								boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
								textAlign: "center",
								padding: "10px",
							}}
						>
							<CardMedia
								component="img"
								image={skill.image}
								alt={skill.name}
								sx={{
									overflow: "hidden",
									height: "60px",
									objectFit: "contain",
									marginBottom: "10px",
									width: "100%",
								}}
							/>
							<CardContent
								sx={{
									padding: "16px 0px !important",
								}}
							>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{ fontWeight: "500" }}
								>
									{skill.name}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default SkillsSection;
