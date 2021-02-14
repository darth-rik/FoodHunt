import { React, useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";

import Card from "../components/Card";
import Loader from "../components/Loader";

import RecipeDataContext from "../context/recipeData/recipeDataContext";

const Favourites = () => {
	const recipeDataContext = useContext(RecipeDataContext);
	const { removeItem } = recipeDataContext;
	const favsData = JSON.parse(localStorage.getItem("favsData"));

	useEffect(() => {
		const fetchData = async () => {
			if (!favsData || favsData.length === 0) {
				setDataFound(true);
				setIsLoading(false);
				setErrmessage("No recipe has been added to favourites yet.");
			} else {
				// Put comma after ids except the last one
				let string = "";
				favsData.forEach((id) => {
					string += id + ",";
				});
				const favId = string.slice(0, string.length - 1);

				try {
					const res = await fetch(
						`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${favId}`
					);
					const data = await res.json();
					if (res.status === 200) {
						setFavResults(data);
						setIsLoading(false);
					} else {
						throw new Error(data.message);
					}
				} catch (err) {
					setIsLoading(false);
					setDataFound(true);
					setErrmessage(err.message);
				}
			}
		};
		fetchData();
	}, [removeItem]);

	const [isLoading, setIsLoading] = useState(true);
	const [dataFound, setDataFound] = useState(false);
	const [favResults, setFavResults] = useState([]);
	const [errmessage, setErrmessage] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const togglePane = () => {
		if (!isOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<div className='overflow-hidden relative '>
			<Pane isOpen={isOpen} />

			<div
				style={{
					marginLeft: isOpen ? "60%" : "0",
					opacity: isOpen ? ".6 " : "1",
				}}
				className=' container min-h-screen  transition-all min-w-full '
			>
				<div className=' bg-cover bg-no-repeat bg-mobile-header sm:bg-desktop-header max-w-full h-44 mb-8'>
					<Header clicked={togglePane} isOpen={isOpen} />
				</div>
				<div>
					<h1 className='text-black text-4xl text-center p-8'>Favourites</h1>
					<hr />
				</div>
				<div style={{ pointerEvents: isOpen && "none" }}>
					{isLoading && !dataFound ? <Loader /> : null}

					{dataFound ? (
						<div className='text-black text-center p-8 md:text-3xl  '>
							{errmessage}
						</div>
					) : (
						<div className='py-12'>
							<Card results={favResults} favs={true} />
						</div>
					)}
				</div>
				<div className='bg-gray-800 text-center p-12 absolute left-0 bottom-0 w-full '>
					Made By Rik
				</div>
			</div>
		</div>
	);
};

export default Favourites;
