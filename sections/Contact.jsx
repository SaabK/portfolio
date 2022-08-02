import React from 'react';
import FormField from '../components/FormField';
import Info from '../components/Info';
import PrimaryButton from '../components/PrimaryButton';

function Contact() {
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

						<form className='flex flex-col h-auto gap-4 justify-between mb-6'>
							<div className='flex flex-col justify-between gap-4 md:flex-row'>
								<FormField name='name' />
								<FormField name='email' type='email' />
							</div>
							<FormField name='message' fieldType='textarea' />
							<PrimaryButton rounded={true} small={true}>
								Send
							</PrimaryButton>
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
