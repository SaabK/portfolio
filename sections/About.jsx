import Image from 'next/image';
import React from 'react';
import project from '../public/URLProject.gif';

function About() {
	return (
		<div className=' h-[615px] bg-offWhite w-full md:h-[500px] lg:h-[540px]'>
			<div className='container mx-auto'>
				<section className='h-[615px] md:h-[500px] lg:h-[540px] flex flex-col container mx-auto items-center justify-center relative'>
					<div className='lg:flex lg:justify-between relative bottom-11'>
						<div className='flex flex-col items-center my-6 w-[294px] h-[225px] relative lg:w-[414px] lg:h-[318px] md:mx-auto'>
							<Image
								src='/Hi.png'
								alt='Hi, I am Ali. Nice to meet you!'
								layout='fill'
								objectFit='cover'
							/>
						</div>

						<div className='flex flex-col h-52 justify-between lg:w-1/2 lg:my-6 md:h-auto lg:justify-around md:gap-3'>
							<h1 className='text-heading font-ubuntubold text-darkBlue leading-8 tracking-wide lg:text-heading-lg lg:leading-[3.5rem]'>
								Hi, I’m <span className='text-lightBlue'>Ali</span>. Nice to
								Meet You.
							</h1>
							<p className='text-body leading-5 tracking-wide text-justify lg:text-[20px] lg:leading-7'>
								I started as a{' '}
								<strong className='font-ubuntubold'>developer</strong> in Nov,
								2021. I am now a Complete{' '}
								<strong className='font-ubuntubold'>
									Full-Stack Web Developer
								</strong>{' '}
								who makes beautiful websites with functional backend. I also{' '}
								<strong className='font-ubuntubold'>Teach Programming</strong>{' '}
								on my YouTube channel. Since November 2021, I’ve made tons of
								Projects, including:
							</p>
						</div>
					</div>

					<div className='flex flex-col items-center justify-between w-fit my-6 absolute -bottom-[7rem]'>
						<div className='w-[240px] h-[150px] shadow-lg'>
							<Image
								src={project}
								layout='fill'
								alt='A Url Shortener Project'
							/>
						</div>
						<h3 className='text-subheading font-ubuntubold leading-3 tracking-wide text-lightBlue self-start relative top-3'>
							URL Shortener
						</h3>
					</div>
				</section>
			</div>
		</div>
	);
}

export default About;
