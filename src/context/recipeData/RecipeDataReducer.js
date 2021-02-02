import { GET_RECIPE_INFO, GET_INGREDIENTS, GET_EQUIPMENTS } from "../types";

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
		case GET_EQUIPMENTS:
			return {
				...state,
				recipeEquipments: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
