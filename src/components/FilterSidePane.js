import React, { useState, useEffect } from "react";
import Close from "./ClosePanes";
import CuisineCheckBox from "./CuisineCheckBox";
import MealTypeCheckBox from "./MealTypeCheckBox";
import Checkbox from "../components/Checkbox";

const FilterSidePane = (props) => {
	useEffect(() => {
		if (localStorage.checkedDataCuisine)
			setCheckedItemsCuisine(
				new Map(JSON.parse(localStorage.checkedDataCuisine))
			);
		if (localStorage.checkedDataMeals)
			setCheckedItemsMeal(new Map(JSON.parse(localStorage.checkedDataMeals)));
	}, []);
	const close = () => {
		props.closeAll();
	};
	const [checkedItemsCuisine, setCheckedItemsCuisine] = useState(new Map());
	const [checkedItemsMeal, setCheckedItemsMeal] = useState(new Map());
	const cuisines = [
		{
			name: "italian",
			key: 1,
			label: "Italian",
		},
		{
			name: "american",
			key: 2,
			label: "American",
		},
		{
			name: "british",
			key: 3,
			label: "British",
		},
		{
			name: "chinese",
			key: 4,
			label: "Chinese",
		},
		{
			name: "european",
			key: 5,
			label: "European",
		},
		{
			name: "french",
			key: 6,
			label: "French",
		},
		{
			name: "german",
			key: 7,
			label: "German",
		},
		{
			name: "indian",
			key: 8,
			label: "Indian",
		},
		{
			name: "japanese",
			key: 9,
			label: "Japanese",
		},
		{
			name: "mexican",
			key: 10,
			label: "Mexican",
		},
		{
			name: "spanish",
			key: 11,
			label: "Spanish",
		},
		{
			name: "thai",
			key: 12,
			label: "Thai",
		},
		{
			name: "vietnamese",
			key: 13,
			label: "Vietnamese",
		},
	];

	const mealType = [
		{
			name: "main course",
			key: 1,
			label: "Main Course",
		},
		{
			name: "side dish",
			key: 2,
			label: "Side Dish",
		},
		{
			name: "dessert",
			key: 3,
			label: "Dessert",
		},
		{
			name: "breakfast",
			key: 4,
			label: "Breakfast",
		},

		// side dish
		//
		// appetizer
		// salad
		// bread
		//
		// soup
		// beverage
		// sauce
		// marinade
		// fingerfood
		// snack
		// drink
	];
	const handleCuisines = (e) => {
		const itemCuisine = e.target.name;
		const isCheckedCuisine = e.target.checked;
		setCheckedItemsCuisine((prevState) => {
			return new Map(prevState).set(itemCuisine, isCheckedCuisine);
		});
	};
	const handleMeals = (e) => {
		const itemMeals = e.target.name;
		const isCheckedMeals = e.target.checked;
		setCheckedItemsMeal(new Map().set(itemMeals, isCheckedMeals));
	};
	const done = () => {
		localStorage.checkedDataCuisine = JSON.stringify(
			Array.from(checkedItemsCuisine.entries())
		);
		localStorage.checkedDataMeals = JSON.stringify(
			Array.from(checkedItemsMeal.entries())
		);
		let string = "";
		checkedItemsCuisine.forEach((value, item) => {
			if (value) {
				string += item + ",";
			}

			localStorage.setItem(
				"checkedOptionCuisines",
				JSON.stringify(string.slice(0, string.length - 1))
			);
		});

		checkedItemsMeal.forEach((value, item) => {
			if (value)
				localStorage.setItem("checkedOptionMeals", JSON.stringify(item));
			else localStorage.removeItem("checkedOptionMeals");
		});

		props.done();
	};
	return (
		<div
			style={{ width: `${props.filterIsOpen ? "100%" : "0"}` }}
			className=' text-black h-full fixed top-0 left-0 overflow-x-hidden z-30 bg-white transition-all  mb-8 '
		>
			<Close close={close} />
			<div className='mx-8 mt-24 mb-8'>
				<h1 className='text-3xl mb-8'>Filter By Cuisines</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					{cuisines.map((item) => (
						<div className='mb-8 flex items-center mr-16 ' key={item.key}>
							<Checkbox
								name={item.name}
								checked={checkedItemsCuisine.get(item.name)}
								onChange={handleCuisines}
							/>
							<p className=' '>{item.label}</p>
						</div>
					))}
				</div>
			</div>
			<div className='mx-8 mt-20 mb-8'>
				<h1 className='text-3xl mb-8'>Filter By Diet</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					{mealType.map((item) => (
						<div className='mb-8 flex items-center mr-16 ' key={item.key}>
							<Checkbox
								name={item.name}
								checked={checkedItemsMeal.get(item.name)}
								onChange={handleMeals}
							/>
							<p className=' '>{item.label}</p>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={done}
				className='px-4 py-2 absolute right-12 text-white outline-none focus:boder-none hover:bg-blue-800 bg-blue-600 p-8 focus:outline-none'
			>
				Done
			</button>
		</div>
	);
};

export default FilterSidePane;
