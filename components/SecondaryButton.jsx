import React from 'react';

function SecondaryButton({ children }) {
	return (
		<button className='text-body text-darkBlue opacity-[85] font-poppinsregular bg-offWhite px-[15px] py-[5px] pt-[7px]'>
			{children}
		</button>
	);
}

export default SecondaryButton;
