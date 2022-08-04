import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Link from 'next/link';

function ComingSoon() {
	return (
		<section className='h-[425px] flex flex-col justify-center lg:h-[595px] lg:relative lg:bottom-7'>
			<div className='flex flex-col justify-items-center text-center'>
				<h1 className='text-darkBlue font-poppinssemibold tracking-wide text-heading lg:text-subheading-lg'>
					Coming Soon!
				</h1>
				<p className='text-darkBlue font-poppinsregular text-body tracking-wide lg:text-[26px]'>
					Ibn Naseer is currently working on this page!
				</p>
			</div>

			<div className='flex justify-between w-[13.25rem] mx-auto py-[14px] lg:w-[21.875rem]'>
				<Link href='/'>
					<a>
						<PrimaryButton>Go Back</PrimaryButton>
					</a>
				</Link>

				<Link href='/'>
					<a>
						<SecondaryButton>Contact Me</SecondaryButton>
					</a>
				</Link>
			</div>
		</section>
	);
}

export default ComingSoon;
