import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";
import { Button } from "@mui/material";

const NavBar = (props) => {
	const { active } = props;
	const adminPassword = btoa("Pankaj@295073");

	const isLoggedIn =
		sessionStorage.getItem("authenticated") === adminPassword;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/education">Education</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li
								className={
									active === "login"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/login">Login</Link>
							</li>
							{isLoggedIn && (
								<li
									className={
										active === "admin"
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to="/admin">Admin</Link>
								</li>
							)}
						</ul>
					</div>
					<div
						style={{
							position: "fixed",
							top: "1rem",
							right: "1rem",
						}}
					>
						<a
							href="https://drive.google.com/file/d/1RXosEWuOlqAncHR3HRKB9jI0vvkReZeq/view?usp=drive_link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="contained"
								color="success"
								sx={{
									textTransform: "capitalize",
								}}
							>
								Download CV
							</Button>
						</a>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
