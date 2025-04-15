import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [drawerOpen, setDrawerOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width:600px)");

	const adminPassword = btoa("Pankaj@295073");
	const isLoggedIn =
		sessionStorage.getItem("authenticated") === adminPassword;

	const menuItems = [
		{ label: "Home", path: "/", key: "home" },
		{ label: "About", path: "/about", key: "about" },
		{ label: "Projects", path: "/projects", key: "projects" },
		{ label: "Education", path: "/education", key: "education" },
		{ label: "Contact", path: "/contact", key: "contact" },
		{ label: "Login", path: "/login", key: "login" },
	];

	if (isLoggedIn) {
		menuItems.push({ label: "Admin", path: "/admin", key: "admin" });
	}

	const toggleDrawer = (open) => () => {
		setDrawerOpen(open);
	};

	const renderNavLinks = () => (
		<ul className="nav-list">
			{menuItems.map((item) => (
				<li
					key={item.key}
					className={
						active === item.key ? "nav-item active" : "nav-item"
					}
				>
					<Link to={item.path}>{item.label}</Link>
				</li>
			))}
		</ul>
	);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						{isMobile ? (
							<>
								<IconButton
									color="inherit"
									edge="start"
									onClick={toggleDrawer(true)}
								>
									<MenuIcon />
								</IconButton>
								<Drawer
									anchor="left"
									open={drawerOpen}
									onClose={toggleDrawer(false)}
								>
									<List sx={{ width: 250 }}>
										{menuItems.map((item) => (
											<ListItem
												key={item.key}
												disablePadding
											>
												<ListItemButton
													component={Link}
													to={item.path}
													onClick={toggleDrawer(
														false
													)}
													selected={
														active === item.key
													}
													sx={{
														textDecoration: "none",
														color: "#000",
													}}
												>
													<ListItemText
														primary={item.label}
													/>
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</Drawer>
							</>
						) : (
							renderNavLinks()
						)}
					</div>

					<div className="download-cv">
						<a
							href="https://drive.google.com/file/d/1RXosEWuOlqAncHR3HRKB9jI0vvkReZeq/view?usp=drive_link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="outlined"
								color="success"
								sx={{
									textTransform: "capitalize",
									fontSize: { xs: "12px", sm: "14px" },
									borderRadius: "25px",
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
