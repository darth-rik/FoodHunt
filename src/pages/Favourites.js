import { React, useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";
import Popup from "../components/PopUp";

import Card from "../components/Card";
import Loader from "../components/Loader";

import RecipeDataContext from "../context/recipeData/recipeDataContext";

const Favourites = (props) => {
	const recipeDataContext = useContext(RecipeDataContext);
	const { removeItem } = recipeDataContext;

	useEffect(() => {
		const fetchData = async () => {
			// const favs = JSON.parse(localStorage.getItem("favsData"));
			// if (!favs) {
			// 	props.history.push("/");
			// } else {
			// 	let string = "";
			// 	favs.forEach((id) => {
			// 		string += id + ",";
			// 	});
			// 	let favId = string.slice(0, string.length - 1);

			// if (favs.length > 0) {
			// 	const res = await fetch(
			// 		`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${favId}`
			// 	);
			const data = 402;
			if (data !== 402) {
				setFavResults(data);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				setDataReceived("error");
				setErrmessage("Api call limit exceeded. Please try again later.");
			}
			// } else {
			// 	setDataFound(true);
			// 	setFavResults([]);
			// 	setIsLoading(false);
			// }
			// }
		};
		fetchData();
	}, [removeItem]);

	const [isLoading, setIsLoading] = useState(false);
	const [dataFound, setDataFound] = useState(false);
	const [favResults, setFavResults] = useState([]);
	const [errmessage, setErrmessage] = useState("");
	const [dataReceived, setDataReceived] = useState("");

	const [isOpen, setIsOpen] = useState(false);
	const clicked = () => {
		if (!isOpen) {
			setIsOpen(true);
		}
	};

	const closePane = () => {
		if (isOpen) setIsOpen(false);
	};
	const dataReceive = () => {
		setDataReceived("");
	};

	return (
		<div className='overflow-hidden relative '>
			<Pane isOpen={isOpen} closePane={closePane} />
			{dataReceived === "error" && (
				<Popup dataReceive={dataReceive} errmessage={errmessage} />
			)}

			<div
				onClick={closePane}
				style={{
					marginLeft: `${isOpen ? "60%" : "0"}`,
					opacity: `${isOpen ? ".6 " : "1"}`,
				}}
				className=' container min-h-screen  transition-all min-w-full '
			>
				<div className=' bg-cover bg-no-repeat bg-mobile-header sm:bg-desktop-header max-w-full h-44 mb-8'>
					<Header clicked={clicked} isOpen={isOpen} />
				</div>
				<div>
					<h1 className='text-black text-4xl text-center p-8'>Favourites</h1>
					<hr />
				</div>

				{isLoading ? (
					<Loader />
				) : (
					<div className='py-12'>
						<Card results={favResults} favs={true} />
					</div>
				)}

				{dataFound && (
					<div className='text-white text-center  absolute top-60 left-0 bg-black p-20 w-full'>
						No data found. Please add recipes to favourites.
					</div>
				)}

				<div className='bg-gray-800 text-center p-12 absolute left-0 bottom-0 w-full '>
					Made By Rik
				</div>
			</div>
		</div>
	);
};

export default Favourites;
