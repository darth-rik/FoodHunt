import { React, useState, useEffect } from "react";
import Pane from "../components/Pane";

const Recipe = () => {
	const [isOpen, setIsOpen] = useState(false);
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
		// return () => {
		// 	document.body.removeEventListener("click", (e) => {
		// 		if (
		// 			isOpen &&
		// 			!e.target.classList.contains("material-icons") &&
		// 			!e.target.classList.contains("bg-gray-900") &&
		// 			!e.target.classList.contains("mb-10")
		// 		) {
		// 			setIsOpen(false);
		// 		}
		// 	});
		// };
	}, []);

	const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
	const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);
	const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
	const clicked = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};
	const toggleEquipments = () => {
		if (!isEquipmentsOpen) {
			setIsEquipmentsOpen(true);
		} else {
			setIsEquipmentsOpen(false);
		}
	};
	const toggleRequirements = () => {
		if (!isRequirementsOpen) {
			setIsRequirementsOpen(true);
		} else {
			setIsRequirementsOpen(false);
		}
	};

	return (
		<div className='overflow-x-hidden min-h-screen'>
			<Pane isOpen={isOpen} />
			<div
				style={{
					marginLeft: `${isOpen ? "60%" : "0"}`,
					opacity: `${isOpen ? ".7 " : "1"}`,
				}}
				className='bg-gray-800 h-80 min-w-full container transition-all md:bg-desktop-header md:bg-no-repeat md:bg-cover '
			>
				<span
					onClick={clicked}
					className='material-icons text-5xl ml-4 mt-4 mb-8 md:ml-16 cursor-pointer'
				>
					menu
				</span>
				<div className='m-4'>
					<div className=' relative   sm:max-w-lg m-auto mb-8 '>
						<img
							className='  min-w-full  shadow-lg border-gray-700 rounded-xl sm:opacity-100'
							src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
							alt=''
						/>
						<span
							style={{ color: "" }}
							className='material-icons absolute right-2 top-8 text-3xl text-white cursor-pointer'
						>
							favorite
						</span>
					</div>

					<div className='text-black text-center bg-white rounded-lg overflow-hidden shadow-lg mb-32 '>
						<div className='pt-4'>
							<h1 className='font-bold text-2xl mb-6 md:text-3xl md:mb-10'>
								Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
							</h1>
							<div className='flex justify-between  font-light mx-4 mb-10 md:mx-8'>
								<p className=' flex flex-col   md:text-2xl 2xl:flex-row '>
									Servings: <span className='pr-4'></span>{" "}
									<span className='font-bold text-red-600  '> 2</span>{" "}
								</p>
								<p className=' flex flex-col md:text-2xl 2xl:flex-row'>
									Ready In: <span className='pr-4'></span>
									<span className='font-bold text-yellow-500  '>
										{" "}
										20 mins
									</span>{" "}
								</p>
								{/* <p className='flex flex-col md:text-2xl 2xl:flex-row'>
									Health-Score: <span className='pr-4'></span>
									<span className='font-bold text-yellow-500'>19</span>
								</p> */}
								<p className='flex flex-col md:text-2xl 2xl:flex-row'>
									Score:<span className='pr-4'></span>{" "}
									<span className='font-bold text-green-500 '>83</span>
								</p>
							</div>

							<div className='flex justify-between py-4 px-6 shadow-md mx-4 mb-10 md:mx-16'>
								<p className='text-xl text-yellow-900 md:text-2xl '>
									<span className='font-bold '>E</span>quipments
								</p>
								<span
									onClick={toggleEquipments}
									className='material-icons text-2xl text-red-600 cursor-pointer '
								>
									{isEquipmentsOpen ? "remove" : "add"}
								</span>
							</div>
							<div
								style={{
									display: `${isEquipmentsOpen ? "flex" : "none"}`,
								}}
								className='flex mx-8 items-center justify-between mb-6 pb-2 border-b-2 md:mx-16'
							>
								<img
									className='h-12  '
									src='https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg'
									alt=''
								/>
								<p className='md:text-xl'>Pie-pan</p>
							</div>
							<div
								style={{ display: `${isEquipmentsOpen ? "flex" : "none"}` }}
								className='flex mx-8 items-center mb-6 pb-2 border-b-2 md:mx-16'
							>
								<img
									className='h-12 mr-auto '
									src='https://spoonacular.com/cdn/equipment_100x100/slow-cooker.jpg'
									alt=''
								/>
								<p className='md:text-xl'>Pie-pan</p>
							</div>
							<div className='flex justify-between py-4 px-6 shadow-md mx-4 mb-10 md:mx-16'>
								<p className='text-xl md:text-2xl text-green-900'>
									<span className='font-bold '>I</span>ngredients
								</p>
								<span
									onClick={toggleRequirements}
									className='material-icons text-2xl text-red-600 cursor-pointer'
								>
									{isRequirementsOpen ? "remove" : "add"}
								</span>
							</div>
							<div
								style={{ display: `${isRequirementsOpen ? "flex" : "none"}` }}
								className='flex mx-8 items-center mb-6 pb-2 border-b-2 md:mx-16'
							>
								<img
									className='h-12 mr-auto '
									src='https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'
									alt=''
								/>
								<p className='md:text-xl'>Apple</p>
							</div>
						</div>
						<div className=' py-4 p-4  shadow-md mx-4 mb-8 md:mx-16'>
							<p className='text-xl text-blue-900 mb-8 md:text-3xl'>
								<span className='font-bold '>I</span>nstructions
							</p>
							{/* <span
									onClick={toggleInstructions}
									className='material-icons text-2xl text-red-600 cursor-pointer'
								>
									{isInstructionsOpen ? "remove" : "add"}
								</span> */}
							<div
								// style={{ display: `${isInstructionsOpen ? "flex" : "none"}` }}
								className='flex flex-col items-center mb-6 pb-4 border-b-2  md:flex-row md:justify-between md:mb-12 '
							>
								<p className='mr-8 md:text-xl'>
									Step: <span className='font-bold text-xl md:text-2xl'>1</span>{" "}
								</p>
								<p className='text-center md:text-2xl'>
									Preheat the oven to 200 degrees
								</p>
							</div>
							<div
								// style={{ display: `${isInstructionsOpen ? "flex" : "none"}` }}
								className='flex flex-col items-center mb-6 pb-4 border-b-2  md:flex-row md:justify-between '
							>
								<p className='mr-8 md:text-xl'>
									Step: <span className='font-bold text-xl md:text-2xl'>2</span>{" "}
								</p>
								<p className='text-center md:text-2xl'>
									Preheat the oven to 200 degrees
								</p>
							</div>
						</div>
					</div>
				</div>
				<footer className='bg-gray-800 text-center p-12'>Made By Rik</footer>
			</div>
		</div>
	);
};

export default Recipe;
