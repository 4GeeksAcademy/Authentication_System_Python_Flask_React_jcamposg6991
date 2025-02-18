import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const result = await actions.login(data.email, data.password);
		if (result) {
			navigate("/protected_route");
		} else {
			alert("Error logging in");
		}
	};

	return (
		<div className="containerStyle">
			<h2 className="headingStyle">Login</h2>
			<form onSubmit={handleLogin}>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label labelStyle">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="inputStyle"
							id="inputEmail3"
							name="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label labelStyle">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="inputStyle"
							id="inputPassword3"
							name="password"
							value={data.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				<button
					type="submit"
					className="buttonStyle"
				>
					Login
				</button>
			</form>
		</div>
	);
};
