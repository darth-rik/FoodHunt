import React from "react";

const ClosePanes = (props) => {
	const close = () => {
		props.close();
	};
	return (
		<div>
			<span
				onClick={close}
				className='material-icons text-3xl absolute right-6 top-6 hover:text-red-600 cursor-pointer'
			>
				close
			</span>
		</div>
	);
};

export default ClosePanes;
