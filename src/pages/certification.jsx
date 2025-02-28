import React, { useState } from "react";
import {
	Container,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Box,
} from "@mui/material";
import { Flipper, Flipped } from "react-flip-toolkit";
import { certificationDetails } from "../data/education";

const Certification = () => {
	const [flipped, setFlipped] = useState(false);
	const [certificate, setCertificate] = useState(certificationDetails[0]);

	return (
		<Container sx={{ marginTop: "5rem", padding: "0px !important" }}>
			<Grid container spacing={2}>
				{/* Left side - Flipping Certificate */}
				<Grid item xs={12} md={6}>
					<Flipper flipKey={flipped}>
						<Flipped flipId="certificate">
							<Box
								sx={{
									width: "100%",
									height: 500,
									perspective: 1000,
									position: "relative",
								}}
								onMouseEnter={() => setFlipped(true)}
								onMouseLeave={() => setFlipped(false)}
							>
								<Box
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										backgroundColor: flipped
											? "rgba(0, 0, 0, 0.9)"
											: "transparent",
										transition:
											"background-color 0.3s ease-in-out",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "white",
										textAlign: "center",
									}}
								>
									{flipped && (
										<CardContent>
											<Typography variant="h6">
												Institute Name:{" "}
												{certificate?.instituteName}
											</Typography>
											<Typography variant="body1">
												Course: {certificate?.course}
											</Typography>
											<Typography variant="body1">
												Duration:{" "}
												{certificate?.duration}
											</Typography>
											<Typography variant="body1">
												Certificate No.:{" "}
												{certificate?.Certificate_No}
											</Typography>
											<Typography variant="body1">
												Live Link:{" "}
												<a
													href={certificate?.LiveUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													View Certificate
												</a>
											</Typography>
										</CardContent>
									)}
								</Box>
								<Card>
									<CardMedia
										component="img"
										height="500px"
										image={certificate?.image}
										alt="Certificate"
										style={{ objectFit: "contain" }}
									/>
								</Card>
							</Box>
						</Flipped>
					</Flipper>
				</Grid>

				{/* Right side - Certificate Templates */}
				<Grid item xs={12} md={6}>
					<Grid container spacing={2}>
						{certificationDetails?.map((template, index) => (
							<Grid item xs={6} key={index}>
								<Card>
									<CardMedia
										component="img"
										height="190"
										image={template?.image}
										alt={`Template ${index + 1}`}
										style={{
											objectFit: "contain",
											cursor: "pointer",
										}}
										onClick={() => setCertificate(template)}
									/>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Certification;
