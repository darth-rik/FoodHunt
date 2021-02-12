import { React, useEffect } from "react";

const AutoCompleteList = (props) => {
	useEffect(() => {
		document.body.addEventListener("click", () => {
			props.list();
		});
	});
	const clickedSuggested = () => {
		props.suggested(props.item.title);
	};

	return (
		<h4
			onClick={clickedSuggested}
			className='text-black text-2xl border-b-2 p-8 flex cursor-pointer hover:bg-gray-300'
		>
			{props.item.title}
		</h4>
	);
};

export default AutoCompleteList;
