import React, { useContext, useEffect, useState } from "react";

import RecipeDataContext from "../context/recipeData/recipeDataContext";
import Header from "../components/Header";
import Pane from "../components/Pane";
import Popup from "../components/PopUp";
import _ from "lodash";
import AutoCompleteList from "../components/AutoCompleteList";

const Home = (props) => {
	const recipeDataContext = useContext(RecipeDataContext);

	const { error, errmessage, removeError, setError } = recipeDataContext;
	const [isAutoSuggest, setIsAutoSuggest] = useState([]);
	const [isValue, setIsValue] = useState("");
	const [isListOpen, setIsListOpen] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		removeError();
		// Cleanup to avoid memory leak error
		return () => {
			setIsAutoSuggest([]);
		};
	}, []);

	const togglePane = () => {
		if (!isOpen) setIsOpen(true);
		else setIsOpen(false);
	};
	const onKeyUp = _.debounce(async (e) => {
		try {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${e.target.value}`
			);
			const data = await res.json();
			if (res.status === 200) setIsAutoSuggest(data);
			else throw new Error(data.message);
		} catch (err) {
			setError(err.message);
		}
	}, 300);
	const suggested = (title) => {
		setIsValue(title);
		setIsAutoSuggest([]);
	};
	const onChange = (e) => {
		setIsValue(e.target.value);
		setIsListOpen(true);
	};
	const list = () => {
		setIsListOpen(false);
	};
	const search = async (e) => {
		e.preventDefault();
		if (isValue === "") {
			return;
		}
		try {
			const res = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${isValue}&addRecipeInformation=true&number=5`
			);
			const data = await res.json();

			if (res.status === 200) {
				if (data.totalResults > 0) {
					props.history.push("/recipes");
					localStorage.setItem("recipesResults", JSON.stringify(data.results));
					localStorage.setItem("query", JSON.stringify(isValue));
				} else {
					setError(
						"Oops! Seems like this recipe is not available. Please try searching for something else."
					);
				}
			} else {
				throw new Error(data.message);
			}
		} catch (err) {
			setError(err.message);
		}
	};

	const closePopup = () => {
		removeError();
	};

	return (
		<div className=' overflow-hidden'>
			<Pane isOpen={isOpen} />

			{/* Alert */}
			{error && <Popup closePopup={closePopup} errmessage={errmessage} />}

			<div
				style={{
					marginLeft: isOpen ? "60%" : "0",
					opacity: isOpen ? ".8 " : "1",
				}}
				className='container min-w-full bg-mobile-bg min-h-screen bg-cover font-sans  transition-all  lg:bg-desktop-bg'
			>
				<Header clicked={togglePane} isOpen={isOpen} />
				<div
					style={{ pointerEvents: isOpen ? "none" : null }}
					className='text-center mx-8 mb-28 mt-44 md:mb-32 '
				>
					{/* Header */}

					<h1 className='text-4xl leading-normal tracking-wide mb-12 md:mb-16 md:text-5xl md:leading-relaxed md:w-2/3 md:m-auto lg:text-5xl lg:leading-loose 2xl:tracking-wider 2xl:w-1/3'>
						In the mood to cook great Food?
					</h1>

					{/* Search Bar */}

					<form
						onSubmit={search}
						className=' md:flex md:flex-col text-center md:items-center  '
						action=''
					>
						<div className='mb-8 relative md:w-6/12'>
							<input
								className='py-2 px-6 md:text-xl rounded-md text-black outline-none w-full   md:py-3'
								type='text'
								placeholder='Search Recipes...'
								onKeyUp={onKeyUp}
								onChange={onChange}
								value={isValue}
							/>
							{isAutoSuggest.length > 0 ? (
								<div
									style={{ display: !isListOpen ? "none" : "block" }}
									className='absolute top-16 left-0 bg-white h-56 w-full overflow-y-scroll shadow-md rounded-md '
								>
									{isAutoSuggest.map((item) => (
										<AutoCompleteList
											key={item.id}
											item={item}
											suggested={suggested}
											list={list}
										/>
									))}
								</div>
							) : null}
						</div>

						<button className=' items-start shadow-md hover:bg-red-800 focus:outline-none    py-2 px-6 bg-red-600 md:py-2 md:px-12'>
							Search
						</button>
					</form>
				</div>

				<footer className=' mx-8 text-center font-thin text-3xl  '>
					<h2>Search over 10,000 recipes now!</h2>
				</footer>
			</div>
		</div>
	);
};

export default Home;
