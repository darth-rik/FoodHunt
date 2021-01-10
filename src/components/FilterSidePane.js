import React from "react";
import Close from "./ClosePanes";

const FilterSidePane = (props) => {
	const close = () => {
		props.closeAll();
	};
	return (
		<div
			style={{ width: `${props.filterIsOpen ? "100%" : "0"}` }}
			className=' text-black h-full fixed top-0 left-0 overflow-x-hidden z-30 bg-white transition-all  mb-8 '
		>
			<Close close={close} />
			<div className='mx-8 mt-24 mb-8'>
				<h1 className='text-3xl mb-8'>Filter By Cuisines</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					<div className='mb-8 flex items-center mr-16 '>
						<input className=' w-6 h-6 mr-4 ' type='checkbox' name='' id='' />
						<p className=' '>Italian</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>Indian</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>American</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>American</p>
					</div>
				</div>
			</div>
			<div className='mx-8 mt-20 mb-8'>
				<h1 className='text-3xl mb-8'>Filter By Diet</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>Ketogenic</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>Gluten Free</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>Vegan</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input className='  w-6 h-6 mr-4' type='checkbox' name='' id='' />
						<p className=' '>Lacto-Vegan</p>
					</div>
				</div>
			</div>
			<button className='px-4 py-2 absolute right-12 text-white outline-none focus:boder-none hover:bg-blue-800 bg-blue-600 p-8 focus:outline-none'>
				Done
			</button>
		</div>
	);
};

export default FilterSidePane;
