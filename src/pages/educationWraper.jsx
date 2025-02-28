import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Education from "./education";
import Certification from "./certification";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import { UpIcon } from "../components/common/upIcon";
import "./styles/education.css";
import "./styles/readArticle.css";

const EducationWraper = () => {
	const [selectedItem, setSelectedItem] = useState(1);
	const containerRef = useRef(null);
	const [activeWidth, setActiveWidth] = React.useState({
		height: 0,
		width: 0,
	});

	const handleItemClick = (itemId) => {
		setSelectedItem(itemId);
	};

	const calcWidth = (column) => {
		const elWidth = containerRef.current
			? containerRef.current.clientWidth
			: 0;
		const elHeight = containerRef.current
			? containerRef.current.clientHeight
			: 0;
		return {
			width: elWidth / column,
			height: elHeight,
		};
	};

	useLayoutEffect(() => {
		const updateWidth = () => setActiveWidth(calcWidth(2));

		// Set a timeout to delay the initial update
		const timer = setTimeout(() => {
			updateWidth();
		}, 1000);

		// Update on resize
		const handleResize = () => {
			clearTimeout(timer);
			setTimeout(() => {
				updateWidth();
			}, 1000);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${INFO.main.title}`}</title>
				<meta name="keywords" content="Education Details" />
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<Grid
						container
						item
						xs={12}
						sm={12}
						md={12}
						lg={12}
						margin="auto"
						className="projects-container"
					>
						<Typography
							variant="h3"
							margin="auto"
							padding="0px 0px 2rem"
							sx={{ fontWeight: "bold" }}
						>
							Education & Certification
						</Typography>
						<Box
							sx={{
								position: "relative",
								padding: "4px",
								display: "inline-grid",
								width: "100%",
								borderRadius: "25px",
								boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.2)",
							}}
						>
							<Box
								sx={{
									display: "inline-grid",
									gridAutoFlow: "column",
									gridAutoColumns: "1fr",
									gridGap: "4px",
									textAlign: "center",
									position: "relative",
									zIndex: 2,
								}}
								ref={containerRef}
							>
								<Box
									role="button"
									className={`toggle-button-item ${
										selectedItem === 1 ? "active" : ""
									}`}
									onClick={() => handleItemClick(1)}
								>
									Academic qualifications{" "}
								</Box>
								<Box
									role="button"
									className={`toggle-button-item ${
										selectedItem === 2 ? "active" : ""
									}`}
									onClick={() => handleItemClick(2)}
								>
									Certifications
								</Box>
							</Box>
							<Box
								sx={{
									position: "absolute",
									top: "4px",
									left: "4px",
									zIndex: 1,
									height: "100%",
									backgroundColor: "#15741a",
									transition: "transform 0.3s ease",
									borderRadius: "25px",
								}}
								style={{
									transform: `translateX(calc(${
										selectedItem - 1
									} * ${activeWidth.width}px))`,
									width: `${activeWidth.width}px`,
									height: `${activeWidth.height}px`,
								}}
							/>
						</Box>
						{selectedItem === 1 ? <Education /> : ""}
						{selectedItem === 2 ? <Certification /> : ""}
					</Grid>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
			<UpIcon />
		</React.Fragment>
	);
};

export default EducationWraper;
