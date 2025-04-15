import React from "react";
import Card from "../common/card";
import "./styles/works.css";
import { Box, Divider, Typography } from "@mui/material";

const Works = () => {
	return (
		<div className="works">
			<Typography
				variant="h3"
				sx={{
					fontWeight: "bold",
					marginBottom: "20px",
					textAlign: "center",
				}}
			>
				Work Experience
			</Typography>
			<Card
				body={
					<div className="works-body" style={{ paddingTop: "0px" }}>
						<div className="works-body-box">
							<div className="work">
								<img
									src="./st.png"
									alt="Salon Tym"
									className="work-image"
								/>
								<div className="work-title">Salon Tym</div>
								<div className="work-subtitle">
									FrontEnd Developer
								</div>
								<div className="work-duration">
									May 2024 - Present
								</div>
							</div>
							<div
								style={{
									color: "#67676a",
									marginTop: "1.5rem",
									fontSize: "14px",
								}}
							>
								SalonTym is a premier doorstep beauty service
								provider, offering a wide range of professional
								beauty and wellness treatments in the comfort of
								your home. Similar to UrbanClap, SalonTym
								ensures top-tier services delivered by
								experienced professionals, catering to your
								grooming and self-care needs with convenience
								and quality.
							</div>
							<Box
								sx={{
									margin: "1rem 0px 1rem",
									display: "flex",
									overflowX: "scroll",
									alignItems: "center",
									justifyContent: "left",
									"&::-webkit-scrollbar": {
										display: "none",
									},
									animation:
										"scroll-left 10s linear infinite" /* Continuous scroll */,
								}}
							>
								{[
									"Html",
									"Css",
									"JavaScript",
									"React Js",
									"Next Js",
									"Material UI",
									"React-Bootstrap",
									"Git",
									"Branch.Io",
									"Payment Gatway",
									"Responsive Design",
								].map((item, index) => (
									<Typography
										key={index}
										variant="body2"
										sx={{
											background: "#f2f2f2",
											width: "fit-content",
											padding: "2px 6px",
											borderRadius: "4px",
											color: "#65656d",
											margin: "0px 4px",
											textWrap: "nowrap",
										}}
									>
										{item}
									</Typography>
								))}
							</Box>
						</div>
						<Divider />
						<br />
						<div className="works-body-box">
							<div className="work">
								<img
									src="./pbn.jpg"
									alt="Practice By Number"
									className="work-image"
								/>
								<div className="work-title">
									Practice By Number
								</div>
								<div className="work-subtitle">
									Software Engineer
								</div>
								<div className="work-duration">
									Apr 2023 - Dec 2023
								</div>
							</div>
							<div
								style={{
									color: "#67676a",
									marginTop: "1.5rem",
									fontSize: "14px",
								}}
							>
								Practice by Numbers is a US-based company
								offering cutting-edge software-as-a-service
								(SaaS) solutions tailored for dental clinics
								across the United States. Their platform
								streamlines clinic operations by efficiently
								managing staff details, patient records,
								appointments, and more. With a global presence,
								Practice by Numbers operates offices in India,
								Bangladesh, the USA, and the Philippines,
								ensuring comprehensive support and innovation
								for dental practices worldwide.
							</div>
							<Box
								sx={{
									margin: "1rem 0px 1rem",
									display: "flex",
									overflowX: "scroll",
									alignItems: "center",
									justifyContent: "left",
									"&::-webkit-scrollbar": {
										display: "none",
									},
									animation:
										"scroll-left 10s linear infinite" /* Continuous scroll */,
								}}
							>
								{[
									"Html",
									"Css",
									"JavaScript",
									"React Js",
									"React-Bootstrap",
									"Redux",
									"Git",
									"Jira",
									"Slack",
									"Responsive Design",
								].map((item, index) => (
									<Typography
										key={index}
										variant="body2"
										sx={{
											background: "#f2f2f2",
											width: "fit-content",
											padding: "2px 6px",
											borderRadius: "4px",
											color: "#65656d",
											margin: "0px 4px",
											textWrap: "nowrap",
										}}
									>
										{item}
									</Typography>
								))}
							</Box>
						</div>
						<Divider />
						<br />
						<Typography variant="h6">
							Irrelevant Experience
						</Typography>
						<div className="works-body-box">
							<div className="work" style={{ marginTop: "1rem" }}>
								<img
									src="./bbn.jpg"
									alt="Big Bolt Nut"
									className="work-image"
								/>
								<div className="work-title">Big Bolt Nut</div>
								<div className="work-subtitle">
									CAD Engineer
								</div>
								<div className="work-duration">
									Dec 2017 - Jan 2023
								</div>
							</div>
							<div
								style={{
									color: "#67676a",
									marginTop: "1.5rem",
									fontSize: "14px",
								}}
							>
								Big Bolt Nut is a leading manufacturer of
								high-quality fasteners, specializing in
								providing solutions for wind turbines,
								aerospace, railways, and aviation industries.
								With a commitment to precision and durability,
								their fasteners meet the highest standards of
								quality and reliability. Trusted by global
								clients, Big Bolt Nut proudly exports its
								products worldwide, supporting critical
								industries with excellence.
							</div>
							<Box
								sx={{
									margin: "1rem 0px 1rem",
									display: "flex",
									overflowX: "scroll",
									alignItems: "center",
									justifyContent: "left",
									"&::-webkit-scrollbar": {
										display: "none",
									},
									animation:
										"scroll-left 10s linear infinite" /* Continuous scroll */,
								}}
							>
								{[
									"AutoCAD",
									"SolidWorks",
									"MS Office",
									"QA & QC",
									"SAP Basis",
								].map((item, index) => (
									<Typography
										key={index}
										variant="body2"
										sx={{
											background: "#f2f2f2",
											width: "fit-content",
											padding: "2px 6px",
											borderRadius: "4px",
											color: "#65656d",
											margin: "0px 4px",
											textWrap: "nowrap",
										}}
									>
										{item}
									</Typography>
								))}
							</Box>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
