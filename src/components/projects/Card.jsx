import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";

const cardWidth = 350;
const borderRadius = 8;
const transition = "all 0.45s ease";

const Screenshot = styled.figure`
	z-index: 200;
	position: relative;
	margin: 0;
	padding: 0;
	width: ${cardWidth}px;
	height: 200px;
	background: url(${(props) => props.image}) 0 0 no-repeat;
	background-size: cover;
	border-radius: ${borderRadius}px ${borderRadius}px 0 0;
	overflow: hidden;
	backface-visibility: hidden;
	transition: ${transition};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0);
		transition: ${transition};
	}
`;

const Content = styled.div`
	z-index: 200;
	position: relative;
	padding: 20px 20px 30px;
`;

const Title = styled.span`
	display: block;
	margin-bottom: 4px;
	font-size: 1.25em;
	font-weight: 500;
	transition: ${transition};
`;

const Description = styled.span`
	display: block;
	font-size: 0.875em;
	color: #999999;
	transition: ${transition};
	transition-delay: 0.04s;
	min-height: 4rem;
	height: 4rem;
	margin-top: 0.5rem;
`;

const TechStack = styled.span`
	display: block;
	font-size: 0.875em;
	color: rgb(87, 86, 86);
	transition: ${transition};
	transition-delay: 0.04s;
`;

const BottomBar = styled.span`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 10px;
	background: ${(props) => props.background && props.background};
	border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
	transition: ${transition};
`;

const Style = styled.button`
	position: relative;
	flex-shrink: 0;
	max-width: ${cardWidth}px;
	text-align: left;
	background: #ffffff;
	border-radius: ${borderRadius}px;
	cursor: pointer;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12),
		0 20px 20px -10px rgba(0, 0, 0, 0.125);
	transition: ${transition};
	padding: 0px;
	border: none;
	margin: 0.5rem auto;

	&:hover {
		transform: scale(1.04);

		${Title},
		${Description},
    ${BottomBar} {
			transform: scale(0.92);
		}

		${Title} {
			transform: translateY(-10px);
		}

		${Description} {
			transform: translateY(-12px);
		}

		${BottomBar} {
			border-radius: ${borderRadius - 2}px;
			transform: translateY(-14px) scale(0.9);
		}

		${Screenshot} {
			transform: translateY(4px) scale(0.92);
			border-radius: ${borderRadius - 2}px;

			&::before {
				background: rgba(0, 0, 0, 0.1);
			}
		}
	}
`;

const Card = ({ hexa, title, description, image, linkText, link, tech }) => {
	return (
		<Style>
			<Screenshot image={image} />
			<Content>
				<Title>{title}</Title>
				<Description>{description}</Description>
				{tech && (
					<TechStack>
						<span style={{ fontWeight: "bold" }}>TechStack: </span>
						{tech}
					</TechStack>
				)}
				<BottomBar background={hexa} />
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					style={{ textDecoration: "none" }}
				>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</a>
			</Content>
		</Style>
	);
};

export default Card;
