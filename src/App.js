import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Container from "./components/Util/Container";

// Reducer functions
const initialState = localStorage.getItem("appState")
	? JSON.parse(localStorage.getItem("appState"))
	: {
		username: "",
		items: []
	};

function reducer(state, action) {
	switch (action.type) {
		default:
			throw new Error("Not an action");
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("appState", JSON.stringify(state));
	}, [state]);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Container ext="center">
						{state.username ? <p>Logged In</p> : <p>Not Logged In</p>}
					</Container>
				</Route>
			</Switch>
			<Footer state={state} dispatch={dispatch} />
		</BrowserRouter>
	);
}

export default App;
