import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
	faFreeCodeCamp,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a
					href={INFO.socials.faFreeCodeCamp}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faFreeCodeCamp}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on FreeCodeCamp</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>

			<div className="phone">
				<div className="phone-wrapper">
					<div className="social-icon">
						<FontAwesomeIcon icon={faMobile} />
					</div>

					<div className="social-text">{INFO.main.phone}</div>
				</div>
			</div>
		</div>
	);
};

export default Socials;
