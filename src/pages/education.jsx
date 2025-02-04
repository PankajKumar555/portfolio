import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import { educationDetails } from "../data/education";
import EducationCard from "./educationCard";
import { Grid } from "@mui/material";
import "./styles/readArticle.css";

const Education = () => {
	// const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ArticleStyle = styled.div`
	// 	${article().style}
	// `;

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

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Education;
