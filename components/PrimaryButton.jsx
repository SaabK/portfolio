import React from 'react';

function PrimaryButton({ children }) {
	return (
		<button className='text-body font-poppinssemibold bg-darkBlue px-[15px] py-[5px] text-offWhite pt-[7px]'>
			{children}
		</button>
	);
}

export default PrimaryButton;
