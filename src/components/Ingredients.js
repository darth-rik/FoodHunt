import React from "react";

const Ingredients = ({
	isRequirementsOpen,
	ingredients: {
		name,
		measures: { metric },
	},
}) => {
	return (
		<div
			style={{
				display: `${isRequirementsOpen ? "flex" : "none"}`,
			}}
			className='grid  mx-8 grid-cols-2  mb-6 pb-2 border-b-2 md:mx-16'
		>
			<p className='h-12 mr-auto  md:text-xl ' alt=''>
				{name}
			</p>
			<p className='md:text-xl'>
				{metric.amount} {metric.unitShort}
			</p>
		</div>
	);
};

export default Ingredients;
