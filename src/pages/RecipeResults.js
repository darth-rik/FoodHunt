import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";
import FilterSidePane from "../components/FilterSidePane";
import SortSidePane from "../components/SortSidePane";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const RecipeResults = () => {
	const [recipeResults, setRecipeResults] = useState([]);

	useEffect(() => {
		const timer = () =>
			setTimeout(() => {
				const data = JSON.parse(localStorage.getItem("recipesResults"));
				if (!data || data.length === 0) {
					setIsLoading(false);
					setDataFound(true);
					setErrmessage("No recipes to show. Please try searching again.");
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
	const [errmessage, setErrmessage] = useState("");

	const [isOpen, setIsOpen] = useState(false);
	const togglePane = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};
	const openSort = () => {
		setSortIsOpen(true);
	};
	const openFilter = () => {
		setFilterIsOpen(true);
	};

	const closeAll = () => {
		setSortIsOpen(false);
		setFilterIsOpen(false);
	};

	// const closeSort = () => {
	// 	setSortIsOpen(false);
	// };
	// const setLoading = () => {
	// 	setIsLoading(true);
	// };

	const done = async () => {
		//Get the sort / filter checked options and the query string from local storage.

		const query = JSON.parse(localStorage.getItem("query"));
		const checkedOptionSort = JSON.parse(localStorage.getItem("checkedOption"));
		const checkedOptionCuisine = JSON.parse(
			localStorage.getItem("checkedOptionCuisines")
		);
		const checkedOptionMeal = JSON.parse(
			localStorage.getItem("checkedOptionMeals")
		);
		try {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
					process.env.REACT_APP_API_KEY
				}&query=${query}&addRecipeInformation=true&${
					checkedOptionSort ? `sort=${checkedOptionSort}&` : ""
				}${checkedOptionCuisine ? `cuisine=${checkedOptionCuisine}&` : ""}${
					checkedOptionMeal ? `type=${checkedOptionMeal}&` : ""
				}number=5`
			);

			const data = await res.json();
			if (res.status === 200) {
				if (data.totalResults === 0) {
					setDataFound(true);
					setErrmessage(
						"No Recipes Found. Please search with different sort/filter parameters."
					);
				} else {
					setDataFound(false);
					localStorage.setItem("recipesResults", JSON.stringify(data.results));
				}
			} else {
				throw new Error(data.message);
			}
		} catch (err) {
			setErrmessage(err.message);
			setDataFound(true);
		}

		setIsLoading(true);
		setRecipeResults([]);

		closeAll();
	};
	return (
		<div className='overflow-hidden relative '>
			<Pane isOpen={isOpen} />
			<FilterSidePane
				filterIsOpen={filterIsOpen}
				closeAll={closeAll}
				done={done}
			/>
			<SortSidePane sortIsOpen={sortIsOpen} closeAll={closeAll} done={done} />
			<div
				style={{
					marginLeft: isOpen ? "60%" : "0",
					opacity: isOpen ? ".6 " : "1",
				}}
				className=' container min-h-screen  transition-all min-w-full '
			>
				<div className=' bg-cover bg-no-repeat bg-mobile-header sm:bg-desktop-header max-w-full h-44 mb-8'>
					<Header clicked={togglePane} isOpen={isOpen} />
				</div>
				<div style={{ pointerEvents: isOpen && "none" }}>
					<div className='flex justify-between text-black pt-6 mx-8 mb-8 md:mb-16'>
						{/* Sort Panel */}

						<p className='flex items-center text-2xl '>
							Sort{" "}
							<span
								onClick={openSort}
								className='material-icons text-red-700 ml-4 cursor-pointer'
							>
								{" "}
								keyboard_arrow_down
							</span>
						</p>

						{/* Filter Panel */}

						<p className='flex items-center text-2xl '>
							Filter{" "}
							<span
								onClick={openFilter}
								className='material-icons text-red-700 ml-4 cursor-pointer'
							>
								{" "}
								keyboard_arrow_down
							</span>
						</p>
					</div>

					{dataFound ? (
						<h1 className='text-black text-center md:text-3xl'>{errmessage}</h1>
					) : (
						<Card results={recipeResults} />
					)}
					{isLoading && !dataFound ? <Loader /> : null}
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default RecipeResults;
