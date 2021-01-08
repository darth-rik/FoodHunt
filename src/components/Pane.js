import React from "react";
import PropTypes from "prop-types";

const Pane = ({ isOpen }) => {
	return (
		<div
			style={{ width: `${isOpen ? "60%" : "0"}` }}
			className=' container bg-gray-900 z-10 fixed h-screen overflow-hidden transition-all '
		>
			<ul className='text-3xl font-light text-center mt-80 lg:text-5xl cursor-pointer '>
				<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 lg:mb-14 transition-all '>
					Home
				</li>
				<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 transition-all'>
					Favourites
				</li>
			</ul>
		</div>
	);
};

Pane.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

export default Pane;
