import React from "react";
import Spinner from "../images/loader.gif";

const Loader = () => {
	return (
		<div className='text-center p-16 m-auto '>
			<img className='inline-block' src={Spinner} alt='' />
		</div>
	);
};

export default Loader;
