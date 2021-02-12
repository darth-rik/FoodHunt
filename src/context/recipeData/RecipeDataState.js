import React, { useReducer } from "react";

import RecipeDataContext from "./recipeDataContext";
import RecipeDataReducer from "./RecipeDataReducer";

import {
	GET_RECIPE_INFO,
	GET_EQUIPMENTS,
	GET_INGREDIENTS,
	REMOVE_RECIPE,
	SET_ERROR,
	REMOVE_ERROR,
} from "../types";

const RecipeDataState = (props) => {
	const initialState = {
		recipeData: {},
		recipeIngredients: [],
		recipeEquipments: [],
		removeRecipe: false,
		loading: true,
		error: false,
		errmessage: "",
	};
	const [state, dispatch] = useReducer(RecipeDataReducer, initialState);

	const getRecipeInfo = async (id) => {
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

	const getRecipeIngredients = async (id) => {
		const res = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}
        `);
		const data = await res.json();

		dispatch({ type: GET_INGREDIENTS, payload: data.ingredients });
	};

	const getRecipeEquipments = async (id) => {
		const res = await fetch(`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${process.env.REACT_APP_API_KEY}
        `);
		const data = await res.json();

		dispatch({ type: GET_EQUIPMENTS, payload: data.equipment[0] });
	};
	const removeItem = () => {
		dispatch({ type: REMOVE_RECIPE });
	};

	const removeError = () => {
		dispatch({ type: REMOVE_ERROR });
	};
	return (
		<RecipeDataContext.Provider
			value={{
				recipeData: state.recipeData,
				recipeEquipments: state.recipeEquipments,
				recipeIngredients: state.recipeIngredients,
				loading: state.loading,
				removeRecipe: state.removeRecipe,
				error: state.error,
				errmessage: state.errmessage,

				getRecipeInfo,
				getRecipeEquipments,
				getRecipeIngredients,
				removeItem,
				removeError,
			}}
		>
			{props.children}
		</RecipeDataContext.Provider>
	);
};

export default RecipeDataState;
