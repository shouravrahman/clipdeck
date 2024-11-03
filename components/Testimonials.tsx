import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";

const testimonials = [
	{
		name: "Jane Doe",
		feedback:
			"This tool has saved me so much time! The presentations look great.",
	},
	{
		name: "John Smith",
		feedback: "A fantastic way to create engaging content for my classes.",
	},
];

const Testimonials = () => {
	return (
		<section className="py-20 bg-gray-50">
			<MaxWidthWrapper>
				<h2 className="text-3xl font-bold text-center mb-10">
					What Our Users Say
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="p-6 border rounded-lg shadow-md"
						>
							<p className="text-gray-600 italic">
								"{testimonial.feedback}"
							</p>
							<p className="mt-4 font-semibold">
								{testimonial.name}
							</p>
						</div>
					))}
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Testimonials;
