import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RecipeDataContext from "../context/recipeData/recipeDataContext";

const CardItems = ({
	item: {
		id,
		title,
		servings,
		readyInMinutes,
		healthScore,
		spoonacularScore,
		image,
	},
	removeFav,
}) => {
	const recipeDataContext = useContext(RecipeDataContext);
	const { removeItem } = recipeDataContext;
	const [isFav, setIsFav] = useState(false);
	const FavID = JSON.parse(localStorage.getItem("favsData"));

	useEffect(() => {
		if (FavID) {
			FavID.forEach((currId) => {
				if (parseInt(currId) === id) {
					setIsFav(true);
				}
			});
		}
	}, []);
	const removeFavourite = () => {
		let getId = FavID.indexOf(id.toString());

		FavID.splice(getId, 1);

		localStorage.setItem("favsData", JSON.stringify(FavID));
		removeItem();
	};
	return (
		<div>
			<Link to={`recipe/${id}`}>
				<div className='rounded-xl shadow-xl overflow-hidden mb-8 max-h-screen '>
					<div className='relative'>
						<img className='mb-4 min-w-full ' src={image} alt='' />
						{isFav && (
							<span
								style={{ color: "red" }}
								className='material-icons absolute right-2 top-8 text-3xl cursor-pointer shadow-md  '
							>
								favorite
							</span>
						)}
					</div>

					<h1 className='text-center text-2xl font-semibold mx-4 mb-3'>
						{title}
					</h1>
					<div className=' flex justify-between   font-light  mb-4 border-b-2 border-gray-100 p-4'>
						<p>
							Servings:{" "}
							<span className='font-bold text-red-600'>{servings}</span>{" "}
						</p>

						<p>
							Health-Score:{" "}
							<span className='font-bold text-yellow-500'>{healthScore}</span>
						</p>
						<p>
							Time:{" "}
							<span className='font-bold text-blue-500'>
								{readyInMinutes} mins
							</span>
						</p>
					</div>
				</div>
			</Link>
			{removeFav && (
				<div>
					<button
						className='px-8 py-2 bg-red-500 text-white hover:bg-red-900 outline-none'
						onClick={removeFavourite}
					>
						Remove Recipe
					</button>
				</div>
			)}
		</div>
	);
};

export default CardItems;
