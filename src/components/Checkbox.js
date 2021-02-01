import React from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
	<input
		className='border-green-300  w-6 h-6 mr-4'
		type={type}
		name={name}
		checked={checked}
		onChange={onChange}
	/>
);

export default Checkbox;
