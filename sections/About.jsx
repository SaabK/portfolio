import Image from 'next/image';
import React from 'react';
import project from '../public/gif.gif';

function About() {
	return (
		<div className=' h-[615px] bg-offWhite absolute left-0 right-0 w-full'>
			<section className='h-[615px] flex flex-col container mx-auto items-center relative'>
				<div className='flex flex-col items-center py-8'>
					<Image
						src='/Hi.png'
						alt='Hi, I am Ali. Nice to meet you!'
						width='293.94px'
						height='225.78px'
					/>
				</div>

				<div className='flex flex-col h-52 justify-between'>
					<h1 className='text-heading font-ubuntubold text-darkBlue leading-8 tracking-wide'>
						Hi, I’m <span className='text-lightBlue'>Ali</span>. Nice to Meet
						You.
					</h1>
					<p className='text-body leading-5 tracking-wide text-justify'>
						I started as a{' '}
						<strong className='font-ubuntubold'>developer</strong> in Nov, 2021.
						I am now a Complete{' '}
						<strong className='font-ubuntubold'>
							Full-Stack Web Developer
						</strong>{' '}
						who makes beautiful websites with functional backend. I also{' '}
						<strong className='font-ubuntubold'>Teach Programming</strong> on my
						YouTube channel. Since November 2021, I’ve made tons of Projects,
						including:
					</p>
				</div>

				<div className='flex flex-col items-center w-fit my-6 absolute -bottom-[7rem]'>
					<div className='border-[5px] border-darkBlue rounded-sm opacity-90'>
						<Image
							src={project}
							width='220px'
							height='140px'
							alt='A Url Shortener Project'
						/>
					</div>
					<h3 className='text-subheading font-ubuntubold leading-3 tracking-wide text-lightBlue self-start relative mt-2'>
						Random Gif
					</h3>
				</div>
			</section>
		</div>
	);
}

export default About;
