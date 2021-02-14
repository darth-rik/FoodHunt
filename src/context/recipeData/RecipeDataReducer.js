import {
	GET_RECIPE_INFO,
	GET_INGREDIENTS,
	REMOVE_RECIPE,
	SET_ERROR,
	REMOVE_ERROR,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_RECIPE_INFO:
			return {
				...state,
				recipeData: action.payload,
				loading: false,
			};

		case GET_INGREDIENTS:
			return {
				...state,
				recipeIngredients: action.payload,
				loading: false,
			};

		case REMOVE_RECIPE:
			return {
				...state,
				removeRecipe: true,
			};
		case SET_ERROR:
			return {
				...state,
				error: true,
				loading: false,
				errmessage: action.payload,
			};
		case REMOVE_ERROR:
			return {
				...state,
				error: false,
			};

		default:
			return state;
	}
};
