import React, { useEffect, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Pane = (props) => {
	const panel = useRef();
	const { isOpen } = props;

	return (
		<div
			ref={panel}
			style={{ width: `${isOpen ? "60%" : "0"}` }}
			className=' container bg-gray-900 z-30 fixed h-full  overflow-x-hidden transition-all '
		>
			<ul className='text-3xl font-light text-center mt-32 lg:text-5xl cursor-pointer md:mt-24 '>
				<Link to='/'>
					<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 lg:mb-14 transition-all '>
						Home / Search
					</li>
				</Link>
				<Link to='/favourites'>
					<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 transition-all'>
						Favourites
					</li>
				</Link>
				<a href='/recipes'>
					<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 transition-all'>
						Recipes
					</li>
				</a>
			</ul>
		</div>
	);
};

Pane.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

export default Pane;
