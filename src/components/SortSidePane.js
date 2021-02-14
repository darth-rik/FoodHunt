import React, { useEffect, useState } from "react";

import Close from "./ClosePanes";
import Checkbox from "./Checkbox";

const SortSidePane = (props) => {
	const close = () => {
		props.closeAll();
	};
	const [checkedItems, setCheckedItems] = useState(new Map());

	useEffect(() => {
		if (localStorage.checkedData)
			setCheckedItems(new Map(JSON.parse(localStorage.checkedData)));
	}, []);

	const checkboxes = [
		{
			name: "healthiness",
			key: 1,
			label: "Healthiness Score",
		},
		{
			name: "popularity",
			key: 2,
			label: "Popularity",
		},
	];

	const handleChange = (e) => {
		const item = e.target.name;
		const isChecked = e.target.checked;

		setCheckedItems(new Map().set(item, isChecked));
	};

	const done = () => {
		localStorage.checkedData = JSON.stringify(
			Array.from(checkedItems.entries())
		);
		checkedItems.forEach(async (value, item) => {
			if (value) {
				localStorage.setItem("checkedOption", JSON.stringify(item));
			} else {
				localStorage.removeItem("checkedOption");
			}

			props.done();
		});
	};

	return (
		<div
			style={{ width: props.sortIsOpen ? "100%" : "0" }}
			className=' text-black h-full overflow-x-hidden fixed z-30 bg-white transition-all  '
		>
			<Close close={close} />
			<div className='mx-8 mt-32 mb-16'>
				<h1 className='text-3xl mb-16'>Sort by</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					{checkboxes.map((item) => (
						<div className='mb-8 flex items-center mr-16 ' key={item.key}>
							<Checkbox
								name={item.name}
								checked={checkedItems.get(item.name)}
								onChange={handleChange}
							/>
							<p>{item.label}</p>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={done}
				className='px-4 py-2 absolute right-12 text-white outline-none focus:boder-none hover:bg-blue-800 bg-blue-600'
			>
				Done
			</button>
		</div>
	);
};

export default SortSidePane;
