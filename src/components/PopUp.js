import React, { useEffect, useState } from "react";

const PopUp = (props) => {
	useEffect(() => {
		setTimeout(() => {
			props.dataReceive();
		}, 5000);
	}, []);
	return (
		<div className='fixed top:0 left-0 bg-black text-center w-full p-12 z-50'>
			<p className='inline-block w-5/ md:text-2xl'>
				Oops! Seems like this recipe is not available. Please try searching for
				something else.
			</p>
		</div>
	);
};

export default PopUp;
