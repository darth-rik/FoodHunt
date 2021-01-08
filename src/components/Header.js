import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
	const openPane = () => {
		props.clicked();
	};
	return (
		<div className='flex items-center mx-8 pt-16 mb-20 lg:mx-16 2xl:mx-32'>
			<span
				className='material-icons mr-auto text-5xl cursor-pointer'
				onClick={openPane}
			>
				menu
			</span>
			<h1 className=' text-4xl font-medium self-end  '>RecipeApp</h1>
		</div>
	);
};

Header.propTypes = {
	clicked: PropTypes.func.isRequired,
};

export default Header;
