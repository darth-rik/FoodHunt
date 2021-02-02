import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeDataState from "./context/recipeData/RecipeDataState";

import Home from "./pages/Home";
import RecipeResults from "./pages/RecipeResults";
import Recipe from "./pages/Recipe";

const App = () => {
	return (
		<RecipeDataState>
			<Router>
				<div className='text-white'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/recipes' component={RecipeResults} />
						<Route exact path='/recipe/:id' component={Recipe} />
					</Switch>
				</div>
			</Router>
		</RecipeDataState>
	);
};

export default App;
