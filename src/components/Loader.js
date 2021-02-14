import React from "react";
import Spinner from "../images/loader.gif";

const Loader = () => {
	return (
		<div className=' flex justify-center items-center '>
			<img src={Spinner} alt='' />
		</div>
	);
};

export default Loader;
