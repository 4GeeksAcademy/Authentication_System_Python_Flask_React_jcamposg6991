import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/protected_route.css";

export const Protected_route = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("accessToken")) {
			navigate("/login");
		} else {
			actions.protectedRoute();
		}
	}, []);

	return (
		<div className="containerStyle">
			<h3 className="headingStyle">Usuario autenticado:</h3>
			<p  className="emailStyle">{store.user?.logged_in_as || "Cargando información del usuario..."}</p>
		</div>
	);
};
