import React from "react";
import { Link } from "react-router-dom";

const Pane = (props) => {
	const { isOpen } = props;

	return (
		<div
			style={{ width: isOpen ? "60%" : "0" }}
			className=' container bg-gray-900 z-30 fixed h-full flex justify-center items-center  overflow-x-hidden transition-all '
		>
			<ul className='text-3xl font-light text-center w-full  lg:text-5xl cursor-pointer md:mt-24 '>
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
				<Link to='/recipes'>
					<li className='mb-10 hover:bg-gray-700 p-4 lg:p-8 transition-all'>
						Recipes
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default Pane;
