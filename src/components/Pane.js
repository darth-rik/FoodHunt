import React from "react";

const Pane = () => {
	return (
		<div
			style={{ width: "0%" }}
			className=' bg-gray-900 z-10 fixed h-full overflow-hidden '
		>
			{/* <span className='material-icons text-3xl absolute right-5 top-8 '>
				close
			</span> */}
			<ul className='text-3xl font-light text-center mt-80'>
				<li className='mb-10'>Home</li>
				<li>Favourites</li>
			</ul>
		</div>
	);
};

export default Pane;
