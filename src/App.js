import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Container from "./components/Util/Container";
import initialUser from "./components/Util/initialUser";
import UserContext from "./components/Util/UserContext";

// Reducer functions
const initialState = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : initialUser;

function reducer(state, action) {
	switch (action.type) {
		default:
			throw new Error("Not an action");
	}
}

function App() {
	const [user, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("appState", JSON.stringify(user));
	}, [user]);

	return (
		<UserContext.Provider value={user}>
			<BrowserRouter>
				<Container ext='top-level'>
					<Header />
					<Switch>
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/login">
							<Login dispatch={dispatch} />
						</Route>
						<Route exact path="/create">
							<CreateAccount />
						</Route>
						<Route exact path="/">
							{user.username ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
						</Route>
					</Switch>
					<Footer user={user} dispatch={dispatch} />
				</Container>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
