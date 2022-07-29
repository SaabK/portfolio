import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

function Hero() {
	return (
		<div className='container mx-auto'>
			<section className='h-[425px] flex flex-col justify-center'>
				<div className='flex flex-col justify-items-center text-center'>
					<h1 className='text-darkBlue font-poppinssemibold tracking-wide text-heading'>
						Full-Stack Developer
					</h1>
					<p className='text-darkBlue font-poppinsregular text-body tracking-wide'>
						I like to Create & Design Beautiful Websites
					</p>
				</div>

				<div className='flex justify-between w-[13.25em] mx-auto py-[14px]'>
					<PrimaryButton>Hire Me</PrimaryButton>
					<SecondaryButton>My Work</SecondaryButton>
				</div>
			</section>
		</div>
	);
}

export default Hero;
