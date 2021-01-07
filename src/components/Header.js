import React from "react";

const Header = () => {
	const openPane = () => {};
	return (
		<div className='flex items-center mx-8 pt-16 mb-40'>
			<span className='material-icons mr-auto text-5xl' onClick={openPane}>
				menu
			</span>
			<h1 className=' text-4xl font-medium '>RecipeApp</h1>
		</div>
	);
};

export default Header;
