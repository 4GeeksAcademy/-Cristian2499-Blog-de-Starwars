import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterInformation } from "./views/CharacterInformation.jsx";
import { PlanetInformation } from "./views/PlanetInformation.jsx"
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (

		<BrowserRouter basename={basename}>
			<ScrollToTop>
				<div className="bg-custom min-vh-100">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<CharacterInformation />} />
						<Route path="/planet/:id" element={<PlanetInformation />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</div>
			</ScrollToTop>
		</BrowserRouter>

	);
};

export default injectContext(Layout);
