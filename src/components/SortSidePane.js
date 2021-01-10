import React from "react";
import Close from "./ClosePanes";

const SortSidePane = (props) => {
	const close = () => {
		props.closeAll();
	};
	return (
		<div
			style={{ width: `${props.sortIsOpen ? "100%" : "0"}` }}
			className=' text-black h-full overflow-x-hidden fixed z-30 bg-white transition-all  '
		>
			<Close close={close} />
			<div className='mx-8 mt-32 mb-16'>
				<h1 className='text-3xl mb-16'>Sort by</h1>
				<div className='text-2xl flex-wrap overflow-y-scroll h-40'>
					<div className='mb-8 flex items-center mr-16 '>
						<input
							className='border-green-300 inline-block w-6 h-6 mr-4'
							type='checkbox'
							name=''
							id=''
						/>
						<p className=' '>Healthiness score</p>
					</div>
					<div className='mb-8 flex items-center mr-16 '>
						<input
							className='border-green-300 inline-block w-6 h-6 mr-4'
							type='checkbox'
							name=''
							id=''
						/>
						<p className=' '>Popularity</p>
					</div>
				</div>
			</div>
			<button className='px-4 py-2 absolute right-12 text-white outline-none focus:boder-none hover:bg-blue-800 bg-blue-600'>
				Done
			</button>
		</div>
	);
};

export default SortSidePane;
