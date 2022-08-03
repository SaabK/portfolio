import React from 'react';

function SecondaryButton({ children }) {
	return (
		<button className='text-body text-darkBlue opacity-[85] font-poppinsregular bg-offWhite px-[.9375em] py-[.3125em] pt-[7px] lg:text-body-lg'>
			{children}
		</button>
	);
}

export default SecondaryButton;
