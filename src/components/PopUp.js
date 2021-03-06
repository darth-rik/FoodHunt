import React, { useEffect } from "react";

const PopUp = (props) => {
	useEffect(() => {
		setTimeout(() => {
			props.closePopup();
		}, 3000);
	}, []);
	return (
		<div className='fixed top:0 left-0 bg-black text-center w-full p-12 z-50'>
			<p className='inline-block w-5/ md:text-2xl'>{props.errmessage}</p>
		</div>
	);
};

export default PopUp;
