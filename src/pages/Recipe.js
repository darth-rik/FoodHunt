import { React, useState, useEffect, useContext } from "react";
import Pane from "../components/Pane";
import RecipeDataContext from "../context/recipeData/recipeDataContext";
import Popup from "../components/PopUp";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Ingredients from "../components/Ingredients";
import RecipeInstructions from "../components/RecipeInstructions";
import { Link } from "react-router-dom";

const Recipe = ({ match }) => {
	const recipeDataContext = useContext(RecipeDataContext);
	const [isOpen, setIsOpen] = useState(false);
	const {
		getRecipeInfo,

		recipeData,
		error,
		errmessage,
		removeError,
		setError,
	} = recipeDataContext;

	const favsData = JSON.parse(localStorage.getItem("favsData"));

	useEffect(() => {
		getRecipeInfo(match.params.id);

		if (favsData) {
			favsData.forEach((id) => {
				if (id === match.params.id) {
					setFav(true);
				}
			});
		} else {
			localStorage.setItem("favsData", JSON.stringify([]));
		}
	}, []);

	const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);
	const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
	const [fav, setFav] = useState(false);

	const clicked = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};

	const toggleRequirements = () => {
		if (!isRequirementsOpen) {
			setIsRequirementsOpen(true);
		} else {
			setIsRequirementsOpen(false);
		}
	};
	const toggleInstructions = () => {
		if (!isInstructionsOpen) {
			setIsInstructionsOpen(true);
		} else {
			setIsInstructionsOpen(false);
		}
	};
	const toggleFav = () => {
		if (fav) {
			//Delete from favourites
			let index = favsData.indexOf(match.params.id);
			favsData.splice(index, 1);
			localStorage.setItem("favsData", JSON.stringify(favsData));
			setFav(false);

			setError("Removed Recipe from Favourites");
		} else {
			//Add to favourites
			favsData.push(match.params.id);
			localStorage.setItem("favsData", JSON.stringify(favsData));

			setError("Added Recipe to Favourites!");
			setFav(true);
		}
	};

	const closePopup = () => {
		removeError();
	};

	return (
		<div className=' min-h-screen overflow-x-hidden    '>
			<Pane isOpen={isOpen} />
			{/* Added to favourites Popup  */}

			{/* Error Popup  */}
			{error && <Popup errmessage={errmessage} closePopup={closePopup} />}
			<div
				style={{
					marginLeft: isOpen ? "60%" : "0",
					opacity: isOpen ? ".7 " : "1",
				}}
				className='bg-mobile-header  h-80 min-w-full container transition-all md:bg-desktop-header md:bg-no-repeat md:bg-cover   '
			>
				<div className='flex justify-between  '>
					<span
						onClick={clicked}
						className='material-icons text-5xl ml-4 pt-4 mb-8 md:ml-16 cursor-pointer'
					>
						{isOpen ? "close" : "menu"}
					</span>

					<Link
						to='/recipes'
						className='material-icons text-5xl mr-4 pt-4 mb-8 md:mlr-16 cursor-pointer'
					>
						keyboard_backspace
					</Link>
				</div>

				{!recipeData ? (
					<Loader />
				) : (
					<div className=' overflow-x-hidden relative '>
						<div className='p-4 '>
							{/* Image with favourites icon */}

							<div className=' relative   sm:max-w-lg m-auto mb-8  '>
								<img
									className='  min-w-full  shadow-lg border-gray-700 rounded-xl '
									src={recipeData.image}
									alt=''
								/>
								<span
									onClick={toggleFav}
									style={{ color: fav ? "red" : "white" }}
									className='material-icons absolute right-2 top-8 text-3xl cursor-pointer   '
								>
									favorite
								</span>
							</div>

							<div className='text-black text-center bg-white rounded-lg overflow-hidden shadow-lg mb-32 '>
								{/* Recipe details */}

								<div className='pt-4'>
									<h1 className='font-bold text-2xl mb-6 md:text-3xl md:mb-10'>
										{recipeData.title}
									</h1>
									<div className='flex justify-between  font-light mx-4 mb-10 md:mx-8'>
										<p className=' flex flex-col   md:text-2xl 2xl:flex-row '>
											Servings: <span className='pr-4'></span>{" "}
											<span className='font-bold text-red-600  '>
												{" "}
												{recipeData.servings}
											</span>{" "}
										</p>
										<p className=' flex flex-col md:text-2xl 2xl:flex-row'>
											Ready In: <span className='pr-4'></span>
											<span className='font-bold text-yellow-500  '>
												{" "}
												{recipeData.readyInMinutes} mins
											</span>{" "}
										</p>

										<p className='flex flex-col md:text-2xl 2xl:flex-row'>
											Health-Score:<span className='pr-4'></span>{" "}
											<span className='font-bold text-green-500 '>
												{recipeData.healthScore}
											</span>
										</p>
									</div>

									{/* Recipe Ingredients */}

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
									{recipeData.extendedIngredients &&
										recipeData.extendedIngredients.map((item, ind) => (
											<Ingredients
												ingredients={item}
												key={ind}
												isRequirementsOpen={isRequirementsOpen}
											/>
										))}
								</div>

								{/* Recipe Instruction */}

								<div className=' py-4 px-6 shadow-md mx-4 mb-8 md:mx-16 flex justify-between'>
									<p className='text-xl text-blue-900 mb-8 md:text-3xl'>
										<span className='font-bold '>I</span>nstructions
									</p>
									<span
										onClick={toggleInstructions}
										className='material-icons text-2xl text-red-600 cursor-pointer'
									>
										{isInstructionsOpen ? "remove" : "add"}
									</span>
								</div>

								{recipeData.analyzedInstructions &&
									recipeData.analyzedInstructions[0].steps.map(
										(instructions, ind) => (
											<RecipeInstructions
												key={ind}
												instructions={instructions}
												isInstructionsOpen={isInstructionsOpen}
											/>
										)
									)}
							</div>
						</div>
						<Footer />
					</div>
				)}
			</div>
		</div>
	);
};

export default Recipe;
