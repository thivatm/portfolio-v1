import PDFView from "components/PDFView";
import React, { useEffect, useState } from "react";

function AboutMe() {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		setSkills([
			"JavaScript",
			"Angular",
			"React",
			"Next",
			"Ionic",
			"Node JS",
			"MongoDB",
		]);
	}, []);

	return (
		<div
			id="aboutme"
			className="h-screen flex justify-center flex-col font-inter text-white"
		>
			<h3 className="font-fira text-2xl font-semibold text-white mb-8">
				<span className="text-turquo font-light">01.</span> About Me
			</h3>
			<div className="flex justify-between">
				<div className="md:w-1/2">
					<p className="text-gray-400 mb-4 text-justify">
						Hello! I am Thivagar and I enjoy building everything, from small
						business sites to rich interactive web and mobile apps. My passion
						for programming started back in 2016 when i first made my static
						HTML website along with CSS and JavaScript. Then it motivated me to
						pursure online courses after finishing my Advance Level Examination.
					</p>
					<p className="text-gray-400 mb-4 text-justify">
						In 2018 i started my Internship (Software Engineering) at{" "}
						<a
							className="text-turquo hover:underline"
							href="https://www.ifs.com/"
						>
							IFS
						</a>
						. After graduating my college i joined{" "}
						<a
							className="text-turquo hover:underline"
							href="https://tracified.com/"
						>
							Tracified
						</a>{" "}
						as a Software Engineer. My main role is to maintain write modern,
						performant, maintainable code for the Product Tracified which
						consists of Web applications and mobile applications
					</p>

					<div className="w-full">
						<p className="text-gray-400 mb-4 text-justify">
							Below are the few technologies I am most familiar with.
						</p>

						<ul className="font-fira grid grid-cols-2">
							{skills.map((skill, index) => (
								<li
									key={index}
									className="pb-2 flex items-center justify-start space-x-2 text-gray-400"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 text-turquo"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>{skill}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:w-1/2 px-8">
					<div className="md:w-2/3 m-auto">
						<PDFView />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
