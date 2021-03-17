import React, { useReducer } from "react";

import RecipeDataContext from "./recipeDataContext";
import RecipeDataReducer from "./RecipeDataReducer";

import {
	GET_RECIPE_INFO,
	REMOVE_RECIPE,
	SET_ERROR,
	REMOVE_ERROR,
	SET_FAV,
	CLEAR_RECIPE,
} from "../types";

const RecipeDataState = (props) => {
	const initialState = {
		recipeData: null,

		favourites: null,
		removeRecipe: false,
		loading: true,
		error: false,
		errmessage: "",
	};
	const [state, dispatch] = useReducer(RecipeDataReducer, initialState);

	const getRecipeInfo = async (id) => {
		clearRecipe();
		try {
			const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false
        `);
			const data = await res.json();
			if (res.status === 200) {
				dispatch({ type: GET_RECIPE_INFO, payload: data });
			} else {
				throw new Error(data.message);
			}
		} catch (err) {
			dispatch({ type: SET_ERROR, payload: err.message });
		}
	};

	const clearRecipe = () => {
		dispatch({ type: CLEAR_RECIPE });
	};

	const setFavourites = async () => {
		const favsData = JSON.parse(localStorage.getItem("favsData"));
		if (!favsData || favsData.length === 0) {
			setError("No recipe has been added to favourites yet.");
		} else {
			const favIds = favsData.join(",");
			try {
				const res = await fetch(
					`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${favIds}`
				);
				const data = await res.json();
				if (res.status === 200) {
					dispatch({
						type: SET_FAV,
						payload: data,
					});

					removeError();
				} else {
					throw new Error(data.message);
				}
			} catch (err) {
				dispatch({ type: SET_ERROR, payload: err.message });
			}
		}
	};

	const sortRecipes = async (query, sort, cuisine, meal) => {
		try {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
					process.env.REACT_APP_API_KEY
				}&query=${query}&addRecipeInformation=true&${
					sort ? `sort=${sort}&` : ""
				}${cuisine ? `cuisine=${cuisine}&` : ""}${
					meal ? `type=${meal}&` : ""
				}number=5`
			);
			console.log(res);
			const data = await res.json();
			console.log(data);
			if (res.status === 200) {
				if (data.totalResults === 0) {
					dispatch({
						type: SET_ERROR,
						payload:
							"No Recipes Found. Please search with different sort/filter parameters.",
					});
				} else {
					localStorage.setItem("recipesResults", JSON.stringify(data.results));
					removeError();
				}
			} else {
				throw new Error(data.message);
			}
		} catch (err) {
			dispatch({ type: SET_ERROR, payload: err.message });
		}
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_RECIPE, payload: id });
		setFavourites();
	};

	const setError = (message) => {
		dispatch({ type: SET_ERROR, payload: message });
	};

	const removeError = () => {
		dispatch({ type: REMOVE_ERROR });
	};
	return (
		<RecipeDataContext.Provider
			value={{
				recipeData: state.recipeData,
				favourites: state.favourites,

				loading: state.loading,
				removeRecipe: state.removeRecipe,
				error: state.error,
				errmessage: state.errmessage,

				getRecipeInfo,
				setFavourites,

				removeItem,
				removeError,
				setError,
				sortRecipes,
			}}
		>
			{props.children}
		</RecipeDataContext.Provider>
	);
};

export default RecipeDataState;
