import React from "react";

const Header = (props) => {
	const openPane = () => {
		props.clicked();
	};
	return (
		<div className='flex items-center mx-8 pt-16 mb-20 lg:mx-16 2xl:mx-32 sticky '>
			<span
				className='material-icons mr-auto text-5xl cursor-pointer'
				onClick={openPane}
			>
				{props.isOpen ? "close" : "menu"}
			</span>
			<h1 className=' text-4xl font-medium self-end  '>RecipeApp</h1>
		</div>
	);
};

export default Header;
