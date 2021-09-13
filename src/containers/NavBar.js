import React, { useEffect, useState } from "react";

function NavBar() {
	const [navItems, setNavItems] = useState([]);

	useEffect(() => {
		setNavItems([
			{
				name: "About",
				link: "#aboutme",
			},
			{
				name: "Exoerience",
				link: "#experience",
			},
			{
				name: "Projects",
				link: "#projects",
			},
			{
				name: "Blogs",
				link: "#blogs",
			},
			{
				name: "Contact",
				link: "#contact",
			},
		]);
	}, []);
	return (
		<div className="py-6 px-10 font-fira text-white flex items-center justify-between text-sm fixed w-full">
			<div className="logo-container">
				<img className="w-14" alt="logo" src="/v6-logo.png" />
			</div>
			<ul className="flex items-center justify-between space-x-12">
				{navItems.map((item, index) => (
					<li key={index} className="hover:text-turquo cursor-pointer">
						<a href={item.link} className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 text-turquo"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
									clipRule="evenodd"
								/>
							</svg>
							<span>{item.name}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
export default NavBar;
