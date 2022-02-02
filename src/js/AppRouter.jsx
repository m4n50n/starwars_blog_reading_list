import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

// Views
import Home from "./views/Home/home.jsx";
import Info from "./views/Info/info.jsx";

// Layout
import Layout from "./layout/layout.jsx";

const AppRouter = () => {
	// The basename is used when the project is published in a subdirectory and not in the root of the domain
	// It can be set on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
					<Layout>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/info/:id">
								<Info />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Layout>
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	)
}

export default injectContext(AppRouter);
