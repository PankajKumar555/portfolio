import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { UpIcon } from "../components/common/upIcon";
import Spiner from "./Spiner";
import "./styles/about.css";
import "./styles/login.css";

const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const adminEmail = "pankajsing555@gmail.com";
	const adminPassword = btoa("Pankaj@295073");

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isLoggedIn, setIsLoggedIn] = useState(
		sessionStorage.getItem("authenticated") === adminPassword
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			setIsLoggedIn(true); // Redirect if already logged in
		}
	}, [isLoggedIn, navigate]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		if (formData.email === adminEmail) {
			const encodedPassword = btoa(formData.password);
			if (encodedPassword === adminPassword) {
				sessionStorage.setItem("authenticated", encodedPassword);
				setIsLoggedIn(true);
				toast.success("Login successful!");
				navigate("/");
			} else {
				toast.error("Invalid credentials!");
			}
		} else {
			toast.error("Invalid credentials!");
		}

		setLoading(false);
	};

	const handleLogout = () => {
		sessionStorage.removeItem("authenticated");
		setIsLoggedIn(false);
		toast.info("Logged out!");
		navigate("/");
	};

	return (
		<React.Fragment>
			<ToastContainer />
			<div className="page-content">
				<NavBar active="login" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="container-full">
						{loading && <Spiner />}
						<div className="form-container">
							<h2 className="form-title">
								{isLoggedIn ? "Welcome!" : "Login"}
							</h2>

							{isLoggedIn ? (
								<button
									className="form-button"
									onClick={handleLogout}
								>
									Logout
								</button>
							) : (
								<form className="form" onSubmit={handleSubmit}>
									<div className="input-container">
										<label
											className="form-label"
											htmlFor="email"
										>
											Email
										</label>
										<input
											className="form-input"
											type="email"
											id="email"
											name="email"
											placeholder="Enter your email"
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="input-container">
										<label
											className="form-label"
											htmlFor="password"
										>
											Password
										</label>
										<input
											className="form-input"
											type="password"
											id="password"
											name="password"
											placeholder="Enter your password"
											value={formData.password}
											onChange={handleInputChange}
											required
										/>
									</div>
									<button
										className="form-button"
										type="submit"
									>
										Login
									</button>
								</form>
							)}
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
			<UpIcon />
		</React.Fragment>
	);
};

export default Login;
