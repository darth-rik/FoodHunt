import React from "react";

const MealTypeCheckBox = ({
	type = "checkbox",
	name,
	checked = false,
	onChange,
}) => {
	return (
		<input
			className='  w-6 h-6 mr-4'
			type={type}
			name={name}
			checked={checked}
			onChange={onChange}
		/>
	);
};

export default MealTypeCheckBox;
