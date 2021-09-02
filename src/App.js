import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Container from "./components/Util/Container";
import { reducer } from "./components/Util/functions";
import initialState from "./components/Util/initialState";
import StateContext from "./components/Util/StateContext";
import DispatchContext from "./components/Util/DispatchContext";


const initialReducerState = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("userState")) : initialState;

function App() {
	const [state, dispatch] = useReducer(reducer, initialReducerState);

	useEffect(() => {
		localStorage.setItem("appState", JSON.stringify(state));
	}, [state]);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<BrowserRouter>
					<Container ext='top-level'>
						<Header />
						<Switch>
							<Route exact path="/dashboard">
								<Dashboard />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/create">
								<CreateAccount />
							</Route>
							<Route exact path="/">
								{state.hasAccount ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
							</Route>
						</Switch>
						<Footer />
					</Container>
				</BrowserRouter>
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
}

export default App;
