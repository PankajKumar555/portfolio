import React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	IconButton,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const EducationCard = ({
	instituteName,
	degreeName,
	admissionYear,
	passingYear,
	percentage,
	institutePhoto,
	// degreeUrl,
}) => {
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				width: "100%",
				margin: "20px auto",
				boxShadow: 1,
				borderRadius: 2,
				overflow: "hidden",
				minHeight: { xs: "auto", sm: "250px" },
				maxHeight: { xs: "auto", sm: "250px" },
			}}
		>
			{/* Left Side: Image */}
			<CardMedia
				component="img"
				image={institutePhoto}
				alt={`${instituteName} photo`}
				sx={{
					width: { xs: "100%", sm: "40%" },
					objectFit: "cover",
					height: "auto",
					minHeight: "250px",
					maxHeight: "250px",
				}}
			/>

			{/* Right Side: Content */}
			<CardContent sx={{ flex: 1, padding: 2 }}>
				<Typography
					variant="body1"
					sx={{ fontWeight: "bold", marginBottom: 1 }}
				>
					{instituteName}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					<strong>Degree:</strong> {degreeName}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					<strong>Admission Year:</strong> {admissionYear}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					<strong>Passing Year:</strong> {passingYear}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					<strong>Percentage:</strong> {percentage}%
				</Typography>
				<Box
					sx={{
						marginTop: 1,
						textAlign: "left",
						display: "inline-flex",
						alignItems: "center",
						textDecoration: "none",
						color: "primary.main",
						transition: "color 0.2s",
						"&:hover": { color: "primary.dark" },
					}}
				>
					{/* <Link
						href={degreeUrl}
						target="_blank"
						sx={{
							display: "inline-flex",
							alignItems: "center",
							textDecoration: "none",
							color: "primary.main",
							transition: "color 0.2s",
							"&:hover": { color: "primary.dark" },
						}}
					> */}
					<IconButton>
						<FontAwesomeIcon icon={faLink} fontSize="medium" />
					</IconButton>
					<Typography variant="body2" sx={{ marginLeft: 0.5 }}>
						View Certificate
					</Typography>
					{/* </Link> */}
				</Box>
			</CardContent>
		</Card>
	);
};

export default EducationCard;
