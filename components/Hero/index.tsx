import React from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { buttonVariants } from "../ui/button"; // Ensure this is updated to reflect new styles
import { Card } from "../ui/card";
import Image from "next/image";
import {
	LoginLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Hero = () => {
	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
			<MaxWidthWrapper>
				<div className="flex flex-col lg:flex-row items-center">
					<div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
						<h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
							Transform YouTube Videos into Engaging Presentations
						</h1>
						<p className="mb-9 text-lg text-gray-600">
							Effortlessly convert educational YouTube videos into
							professional PowerPoint presentations.
						</p>
						<div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
							<RegisterLink
								href="/"
								className={buttonVariants({
									className:
										"w-full sm:w-auto bg-blue-900 text-white rounded-lg py-2 px-4 transition duration-300 hover:bg-blue-700",
								})}
							>
								Get Started
							</RegisterLink>
							<LoginLink
								href="/"
								className={buttonVariants({
									variant: "secondary",
									className:
										"w-full sm:w-auto bg-gray-300 text-gray-800 rounded-lg py-2 px-4 transition duration-300 hover:bg-gray-400",
								})}
							>
								Generate PowerPoint
							</LoginLink>
						</div>
					</div>
					<div className="lg:w-1/2">
						<Card className="overflow-hidden shadow-2xl">
							<Image
								src="/lecture-1.jpg"
								className="w-full h-auto object-cover"
								alt="hero image"
								width={600}
								height={600}
							/>
						</Card>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Hero;
