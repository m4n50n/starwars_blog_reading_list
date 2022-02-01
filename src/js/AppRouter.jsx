import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from "./store/appContext";

// Views
import Home from "./views/home.jsx";
import Info from "./views/info.jsx";

// Layout
import Layout from "./layout/layout.jsx";

const AppRouter = () => {
	// The basename is used when the project is published in a subdirectory and not in the root of the domain
	// It can be set on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/info/:uid">
							<Info />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	)
}

export default injectContext(AppRouter);
