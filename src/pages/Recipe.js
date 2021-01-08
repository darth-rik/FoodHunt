import React from "react";
import Pane from "../components/Pane";

const Recipe = () => {
	return (
		<div>
			<Pane />
			<div style={{ marginLeft: "0%" }} className='bg-gray-800 h-72 container'>
				<span className='material-icons text-5xl ml-4 mt-4'>menu</span>
				<div className='m-4'>
					<div className='flex relative'>
						<img
							className='opacity-70'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<span
							style={{ color: "" }}
							class='material-icons absolute right-2 top-8 text-3xl text-white'
						>
							favorite
						</span>
					</div>

					<div className='text-black text-center bg-white rounded-lg -mt-20 z-40 relative overflow-hidden shadow-lg mb-5'>
						<div className='pt-4'>
							<h1 className='font-bold text-2xl mb-6'>
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

							<div className='flex justify-between py-4 px-6 shadow-md mx-4 mb-8'>
								<p className='text-xl'>Equipments</p>
								<span className='material-icons text-2xl text-red-600'>
									add
								</span>
							</div>
							{/* <div className='flex mx-8 items-center mb-6 pb-2 border-b-2'>
							<img
								className='h-12 mr-auto '
								src='https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg'
								alt=''
							/>
							<p className='mr-8'>Pie-pan</p>
						</div>
						<div className='flex mx-8 items-center mb-6 pb-2 border-b-2'>
							<img
								className='h-12 mr-auto '
								src='https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg'
								alt=''
							/>
							<p className='mr-8'>Pie-pan</p>
						</div> */}
							<div className='flex justify-between py-4 px-6 shadow-md mx-4 mb-8'>
								<p className='text-xl'>Ingredients</p>
								<span className='material-icons text-2xl text-red-600'>
									add
								</span>
							</div>
							{/* <div className='flex mx-8 items-center mb-6 pb-2 border-b-2'>
							<img
								className='h-12 mr-auto '
								src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
								alt=''
							/>
							<p className='mr-8'>Apple</p>
						</div> */}
							<div className='flex justify-between py-4 px-6 shadow-md mx-4 mb-8'>
								<p className='text-xl'>Instructions</p>
								<span className='material-icons text-2xl text-red-600'>
									add
								</span>
							</div>
							{/* <div className='flex justify-between mx-4 items-center mb-6 pb-2 border-b-2'>
							<p>
								Step: <span className='font-bold text-xl'>1</span>{" "}
							</p>
							<p className=''>Preheat the oven to 200 degrees F.</p>
						</div> */}
						</div>
					</div>
				</div>
				<footer className='bg-gray-800 text-center p-10'>Made By Rik</footer>
			</div>
		</div>
	);
};

export default Recipe;
