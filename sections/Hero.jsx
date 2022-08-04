import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

function Hero() {
	return (
		<div className='container mx-auto'>
			<section className='h-[425px] flex flex-col justify-center lg:h-[530px] lg:relative lg:bottom-7'>
				<div className='flex flex-col justify-items-center text-center'>
					<h1 className='text-darkBlue font-poppinssemibold tracking-wide text-heading lg:text-subheading-lg'>
						Full-Stack Developer
					</h1>
					<p className='text-darkBlue font-poppinsregular text-body tracking-wide lg:text-[26px]'>
						I like to Create & Design Beautiful Websites
					</p>
				</div>

				<div className='flex justify-between w-[13.25rem] mx-auto py-[14px] lg:w-[21.875rem]'>
					<Link href='/hire-me'>
						<a>
							<PrimaryButton>Hire Me</PrimaryButton>
						</a>
					</Link>

					<Link href='/my-work'>
						<a>
							<SecondaryButton>My Work</SecondaryButton>
						</a>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Hero;
