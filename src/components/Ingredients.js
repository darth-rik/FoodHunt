import React from "react";

const Ingredients = ({
	isRequirementsOpen,
	ingredients: {
		name,
		amount: { metric },
	},
}) => {
	return (
		<div
			style={{
				display: `${isRequirementsOpen ? "flex" : "none"}`,
			}}
			className='grid  mx-8 grid-cols-2  mb-6 pb-2 border-b-2 md:mx-16'
		>
			{/* <img
            className='h-12 mr-auto '
            src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
            alt=''
        /> */}
			<p className='h-12 mr-auto  md:text-xl ' alt=''>
				{name}
			</p>
			<p className='md:text-xl'>
				{metric.value} {metric.unit}
			</p>
		</div>
	);
};

export default Ingredients;
