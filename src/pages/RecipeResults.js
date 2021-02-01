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

	return (
		<div className='overflow-hidden relative '>
			<Pane isOpen={isOpen} closePane={closePane} />
			<FilterSidePane filterIsOpen={filterIsOpen} closeAll={closeAll} />
			<SortSidePane
				sortIsOpen={sortIsOpen}
				closeAll={closeAll}
				closeSort={closeSort}
				setLoading={setLoading}
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

				<div className='bg-gray-800 text-center p-12 absolute left-0 bottom-0 w-full '>
					Made By Rik
				</div>
			</div>
		</div>
	);
};

export default RecipeResults;
