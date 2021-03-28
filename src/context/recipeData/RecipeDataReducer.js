import {
	GET_RECIPE_INFO,
	REMOVE_RECIPE,
	SET_ERROR,
	REMOVE_ERROR,
	SET_FAV,
	CLEAR_RECIPE,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_RECIPE_INFO:
			return {
				...state,
				recipeData: action.payload,
				loading: false,
			};

		case CLEAR_RECIPE:
			return {
				...state,
				recipeData: null,

				loading: true,
			};

		case SET_FAV:
			return {
				...state,
				favourites: action.payload,
				loading: false,
				error: false,
				errmessage: "",
			};

		case REMOVE_RECIPE:
			return {
				...state,
				favourites: state.favourites.filter(
					(fav) => fav.id.toString() !== action.payload
				),
				loading: true,
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
				errmessage: "",
				loading: true,
			};

		default:
			return state;
	}
};
