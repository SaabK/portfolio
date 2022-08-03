import React, { useRef } from 'react';
import FormField from '../components/FormField';
import Info from '../components/Info';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
	const form = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_dyyrsaa',
				'template_07pj3bg',
				form.current,
				'Wm3Ws8XBquAq_Np3c',
			)
			.then(
				result => {
					console.log('Email Sent!');
					toast.success('Email Sent!');
				},
				error => {
					console.log('An error occurred!');
					toast.error('An Error Occurred!');
				},
			);
	};

	return (
		<section className='bg-lightBlue bg-opacity-[0.07] w-full mt-[7.5rem]'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row lg:gap-x-6 xl:justify-between'>
					<div className=''>
						<div className='flex flex-col py-6 h-auto justify-between'>
							<h1 className='font-ubuntubold text-heading lg:text-subheading-lg text-darkBlue'>
								Let&apos;s connect
							</h1>
							<p className='font-ubunturegular text-body lg:text-[18px] leading-[1.35rem] text-middleBlue opacity-[0.81] tracking-wider text-justify'>
								Let&apos;s have a chat. I am here to answer any questions you
								may have. Reach out to me and I&apos;ll respond as soon as I
								can.
							</p>
						</div>

						<form
							className='flex flex-col h-auto gap-4 justify-between mb-6'
							onSubmit={handleSubmit}
							ref={form}>
							<div className='flex flex-col justify-between gap-4 md:flex-row'>
								<FormField name='name' id='name' required={true} />
								<FormField
									name='email'
									id='email'
									type='email'
									required={true}
								/>
							</div>

							<FormField
								name='message'
								id='message'
								fieldType='textarea'
								required={true}
							/>

							<button
								type='submit'
								className={`transition ease-in-out text-body font-poppinssemibold bg-darkBlue hover:bg-opacity-[0.93] px-[.9375em] py-[.3125em] text-offWhite pt-[7px]
								rounded-[3px] lg:text-[20px]`}>
								Send
							</button>
						</form>
					</div>

					<div className='flex flex-col h-[18rem] justify-between bg-lighterBlue bg-opacity-[0.195] py-7 px-7 my-4 lg:h-auto lg:my-6'>
						<Info
							icon='/Email.svg'
							platform='Email'
							contact='ContactIbnNaseer@gmail.com'
						/>
						<Info
							icon='/Instagram.svg'
							platform='Instagram'
							contact='@BakwasBoye'
						/>
						<Info
							icon='/Discord.svg'
							platform='Discord'
							contact='BakwasBoy#8336'
						/>
						<Info
							icon='/Address.svg'
							platform='Address'
							contact='Shami Road, Jinnah Town, Mian Channu'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
