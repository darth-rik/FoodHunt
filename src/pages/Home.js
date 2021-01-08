import React from "react";
import Header from "../components/Header";
import Pane from "../components/Pane";
const Home = () => {
	return (
		<div>
			<Pane />
			<div
				style={{
					marginLeft: "0%",
				}}
				className=' container bg-mobile-bg min-h-screen bg-cover font-sans  '
			>
				<Header />
				<div className='text-center mx-8 mb-28 mt-44 '>
					<h1 className='text-4xl leading-normal tracking-wide mb-12'>
						In the mood to cook great Food?
					</h1>

					<form className='  ' action=''>
						<input
							className='py-2 px-6 rounded-md text-black outline-none w-full mb-8'
							type='text'
							placeholder='Search Recipes...'
						/>
						<button className=' items-start  py-2 px-6 bg-red-600'>
							Search
						</button>
					</form>
				</div>

				<footer className=' mx-8 text-center font-thin text-3xl '>
					<h2>Search over 10,000 recipes now!</h2>
				</footer>
			</div>
		</div>
	);
};

export default Home;
