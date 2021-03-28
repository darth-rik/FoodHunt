import { React, useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";

import Card from "../components/Card";
import Loader from "../components/Loader";

import RecipeDataContext from "../context/recipeData/recipeDataContext";
import Footer from "../components/Footer";

const Favourites = () => {
	const recipeDataContext = useContext(RecipeDataContext);
	const {
		loading,
		error,
		errmessage,
		favourites,
		setFavourites,
		removeError,
	} = recipeDataContext;

	useEffect(() => {
		setFavourites();

		return () => {
			removeError();
		};
	}, []);

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
					{loading ? (
						<Loader />
					) : error || !favourites ? (
						<div className='text-black text-center p-8 md:text-3xl  '>
							{errmessage}
						</div>
					) : (
						<div className='py-12'>
							<Card results={favourites} favs={true} />
						</div>
					)}
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Favourites;
