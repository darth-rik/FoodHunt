import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";
import FilterSidePane from "../components/FilterSidePane";
import SortSidePane from "../components/SortSidePane";

const RecipeResults = () => {
	useEffect(() => {
		document.body.addEventListener("click", (e) => {
			if (
				isOpen &&
				!e.target.classList.contains("material-icons") &&
				!e.target.classList.contains("bg-gray-900") &&
				!e.target.classList.contains("mb-10")
			) {
				setIsOpen(false);
			}
		});
	});
	const [isOpen, setIsOpen] = useState(false);
	const [sortIsOpen, setSortIsOpen] = useState(false);
	const [filterIsOpen, setFilterIsOpen] = useState(false);
	const clicked = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
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
	return (
		<div className='overflow-hidden '>
			<Pane isOpen={isOpen} />
			<FilterSidePane filterIsOpen={filterIsOpen} closeAll={closeAll} />
			<SortSidePane sortIsOpen={sortIsOpen} closeAll={closeAll} />
			<div
				style={{
					marginLeft: `${isOpen ? "60%" : "0"}`,
					opacity: `${isOpen ? ".6 " : "1"}`,
				}}
				className=' container min-h-screen  transition-all min-w-full'
			>
				<div className=' bg-cover bg-no-repeat bg-mobile-header sm:bg-desktop-header max-w-full h-44 mb-8'>
					<Header clicked={clicked} />
				</div>

				<div className='flex justify-between text-black pt-6 mx-8 mb-8'>
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
				<div className='flex flex-col sm:flex-row  flex-wrap mx-8 text-black text-center sm:justify-evenly mb-32'>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden   mb-8 max-h-screen  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbsmin
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
					<div className='rounded-xl shadow-xl overflow-hidden mb-8  sm:max-w-xs lg:max-w-sm'>
						<img
							className='mb-4 min-w-full'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<h1 className='text-center text-2xl font-semibold mb-3'>
							Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
						</h1>
						<div className='flex justify-between  font-light mx-4 mb-4'>
							<p>
								Servings: <span className='font-bold text-red-600'>2</span>{" "}
							</p>
							<p>
								Health-Score:{" "}
								<span className='font-bold text-yellow-500'>19</span>
							</p>
							<p>
								Score: <span className='font-bold text-green-500'>83</span>
							</p>
						</div>
					</div>
				</div>
				<div className='bg-gray-800 text-center p-12 '>Made By Rik</div>
			</div>
		</div>
	);
};

export default RecipeResults;
