import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

// Import Components
import ScrollToTop from "./components/scrollToTop.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";

// Import Views
import { Home } from "./views/home.jsx";
import { Info } from "./views/info.jsx";

// create your first component
const Layout = () => {
	// the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
					<Navbar />
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
					<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
