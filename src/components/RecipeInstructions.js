import React from "react";

const RecipeInstructions = ({
	isInstructionsOpen,
	instructions: { number, step },
}) => {
	return (
		<div
			style={{ display: `${isInstructionsOpen ? "flex" : "none"}` }}
			className='flex flex-col items-center mb-6 p-4 border-b-2 md:mb-12 '
		>
			<p className='mr-8 md:text-xl mb-4'>
				Step: <span className='font-bold text-xl md:text-2xl'>{number}</span>{" "}
			</p>
			<p className='text-center md:text-2xl mb-4'>{step}</p>
		</div>
	);
};

export default RecipeInstructions;
