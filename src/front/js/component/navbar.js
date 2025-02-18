import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	const handleLogout = () => {
		actions.logout();
		navigate("/login");
	};

	return (
		<nav className="navbarStyle">
			<div>
				<Link to="/" className="brandStyle">
					Formulario de Registro
				</Link>
			</div>
			<div className="buttonContainerStyle">
				<Link to="/login">
					<button
						className="buttonStyle"
					>
						Login
					</button>
				</Link>
				<button
					className="buttonStyle"
					onClick={handleLogout}
				>
					Log out
				</button>
			</div>
		</nav>
	);
};
