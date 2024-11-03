import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

const featuresList = [
	{
		title: "Easy to Use",
		description: "Simply paste the YouTube link and let us do the rest.",
	},
	{
		title: "Customizable Slides",
		description: "Edit and customize your slides to fit your needs.",
	},
	{
		title: "Fast Processing",
		description: "Get your presentations in minutes, not hours.",
	},
];

const Features = () => {
	return (
		<section className="py-20 bg-white">
			<MaxWidthWrapper>
				<h2 className="text-3xl font-bold text-center mb-10">
					Features
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{featuresList.map((feature, index) => (
						<div
							key={index}
							className="p-6 border rounded-lg shadow-md"
						>
							<h3 className="text-xl font-semibold mb-4">
								{feature.title}
							</h3>
							<p className="text-gray-600">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Features;
