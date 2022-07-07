import React from 'react';

function Hero() {
	return (
		<section className='h-[450px] flex flex-col justify-center'>
			<div className='flex flex-col justify-items-center text-center'>
				<h1 className='text-darkBlue font-poppinssemibold tracking-wide text-heading'>
					Full-Stack Developer
				</h1>
				<p className='text-darkBlue font-poppinsregular text-body tracking-wide'>
					I like to Create & Design Beautiful Websites
				</p>
			</div>
			<div className='flex justify-between w-[212px] mx-auto py-[10px]'>
				<button className='text-body font-poppinssemibold bg-darkBlue px-[15px] py-[5px] text-offWhite pt-[7px]'>
					Hire Me
				</button>
				<button className='text-body text-darkBlue opacity-[85] font-poppinsregular bg-offWhite px-[15px] py-[5px] pt-[7px]'>
					My Work
				</button>
			</div>
		</section>
	);
}

export default Hero;
