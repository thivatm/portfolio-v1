import AboutMe from "containers/AboutMe";
import Experience from "containers/Experience";
import React from "react";
import Hero from "../containers/Hero";
import NavBar from "../containers/NavBar";
import Publications from "../containers/Publications";

function Home() {
	return (
		<div>
			<NavBar />
			<div className="max-w-7xl mx-auto">
				<div className="max-w-5xl mx-auto">
					<Hero />
					<AboutMe/>
					<Experience />
					<Publications />
				</div>
			</div>
		</div>
	);
}

export default Home;
