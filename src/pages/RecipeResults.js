import React from "react";
import Header from "../components/Header";
import FilterSidePane from "../components/FilterSidePane";
import SortSidePane from "../components/SortSidePane";

const RecipeResults = () => {
	return (
		<div>
			<FilterSidePane />
			<SortSidePane />

			<div className='  bg-mobile-header h-screen bg-no-repeat'>
				<Header />

				<div className='flex justify-between text-black pt-6 mx-8 mb-8'>
					<p className='flex items-center text-2xl '>
						Sort{" "}
						<span className='material-icons text-red-700 ml-4'>
							{" "}
							keyboard_arrow_down
						</span>
					</p>
					<p className='flex items-center text-2xl '>
						Filter{" "}
						<span className='material-icons text-red-700 ml-4'>
							{" "}
							keyboard_arrow_down
						</span>
					</p>
				</div>
				<div className='mx-8 text-black text-center'>
					<div className='rounded-xl shadow-xl overflow-hidden mb-5'>
						<img
							className='mb-4'
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
					<div className='rounded-xl shadow-xl overflow-hidden'>
						<img
							className='mb-4'
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
				<footer className='bg-gray-800 text-center p-10'>Made By Rik</footer>
			</div>
		</div>
	);
};

export default RecipeResults;
