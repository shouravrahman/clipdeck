import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

const Footer = () => {
	return (
		<footer className="py-10 bg-gray-800 text-white">
			<MaxWidthWrapper>
				<p className="text-center">
					© 2023 Your Company. All rights reserved.
				</p>
			</MaxWidthWrapper>
		</footer>
	);
};

export default Footer;
