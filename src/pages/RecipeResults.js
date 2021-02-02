import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";
import FilterSidePane from "../components/FilterSidePane";
import SortSidePane from "../components/SortSidePane";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { Redirect } from "react-router-dom";

const RecipeResults = (props) => {
	const [recipeResults, setRecipeResults] = useState([]);

	useEffect(() => {
		const timer = () =>
			setTimeout(() => {
				const data = JSON.parse(localStorage.getItem("recipesResults"));
				if (!data) {
					props.history.push("/");
				} else {
					setRecipeResults(data);
					setIsLoading(false);
				}
			}, 2000);

		const timerId = timer();
		return () => {
			clearTimeout(timerId);
		};
	}, [recipeResults]);

	const [sortIsOpen, setSortIsOpen] = useState(false);
	const [filterIsOpen, setFilterIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [dataFound, setDataFound] = useState(false);

	const [isOpen, setIsOpen] = useState(false);
	const clicked = () => {
		if (!isOpen) {
			setIsOpen(true);
		}
	};
	const openSort = () => {
		setSortIsOpen(true);
	};
	const closeAll = () => {
		setSortIsOpen(false);
		setFilterIsOpen(false);
	};
	const openFilter = () => {
		setFilterIsOpen(true);
	};
	const closePane = () => {
		if (isOpen) setIsOpen(false);
	};

	const closeSort = () => {
		setSortIsOpen(false);
	};
	const setLoading = () => {
		setIsLoading(true);
	};

	const done = async () => {
		const query = JSON.parse(localStorage.getItem("query"));
		const checkedOptionSort = JSON.parse(localStorage.getItem("checkedOption"));
		const checkedOptionCuisine = JSON.parse(
			localStorage.getItem("checkedOptionCuisines")
		);
		const checkedOptionMeal = JSON.parse(
			localStorage.getItem("checkedOptionMeals")
		);

		const res = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
				process.env.REACT_APP_API_KEY
			}&query=${query}&addRecipeInformation=true&${
				checkedOptionSort ? `sort=${checkedOptionSort}&` : ""
			}${checkedOptionCuisine ? `cuisine=${checkedOptionCuisine}&` : ""}${
				checkedOptionMeal ? `type=${checkedOptionMeal}&` : ""
			}number=5`
		);

		console.log(res);

		const data = await res.json();
		console.log(data);
		if (data) {
			localStorage.setItem("recipesResults", JSON.stringify(data.results));
		}
		if (data.totalResults === 0) {
			setDataFound(true);
		} else {
			setDataFound(false);
		}
		setIsLoading(true);
		closeAll();
	};
	return (
		<div className='overflow-hidden relative '>
			<Pane isOpen={isOpen} closePane={closePane} />
			<FilterSidePane
				filterIsOpen={filterIsOpen}
				closeAll={closeAll}
				done={done}
			/>
			<SortSidePane
				sortIsOpen={sortIsOpen}
				closeAll={closeAll}
				closeSort={closeSort}
				setLoading={setLoading}
				done={done}
			/>
			<div
				onClick={closePane}
				style={{
					marginLeft: `${isOpen ? "60%" : "0"}`,
					opacity: `${isOpen ? ".6 " : "1"}`,
				}}
				className=' container min-h-screen  transition-all min-w-full '
			>
				<div className=' bg-cover bg-no-repeat bg-mobile-header sm:bg-desktop-header max-w-full h-44 mb-8'>
					<Header clicked={clicked} isOpen={isOpen} />
				</div>

				<div className='flex justify-between text-black pt-6 mx-8 mb-8 md:mb-16'>
					<p className='flex items-center text-2xl '>
						Sort{" "}
						<span
							onClick={openSort}
							className='material-icons text-red-700 ml-4'
						>
							{" "}
							keyboard_arrow_down
						</span>
					</p>
					<p className='flex items-center text-2xl '>
						Filter{" "}
						<span
							onClick={openFilter}
							className='material-icons text-red-700 ml-4'
						>
							{" "}
							keyboard_arrow_down
						</span>
					</p>
				</div>

				{isLoading ? <Loader /> : <Card results={recipeResults} />}
				{dataFound && <h1 className='text-black'>No data found</h1>}

				<div className='bg-gray-800 text-center p-12 absolute left-0 bottom-0 w-full '>
					Made By Rik
				</div>
			</div>
		</div>
	);
};

export default RecipeResults;
