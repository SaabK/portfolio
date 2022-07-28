import React from 'react';
import FormField from '../components/FormField';
import PrimaryButton from '../components/PrimaryButton';

function Contact() {
	return (
		<section className='bg-lightBlue bg-opacity-[0.075] absolute -bottom-[160%] w-full -left-1/2 translate-x-1/2'>
			<div className='container mx-auto'>
				<div>
					<div className='flex flex-col py-6 h-[157px] justify-between'>
						<h1 className='font-ubuntubold text-heading text-darkBlue'>
							Let&apos;s connect
						</h1>
						<p className='font-ubunturegular text-body leading-[1.35rem] text-middleBlue opacity-[0.81] tracking-wider text-justify'>
							Let&apos;s have a chat. I am here to answer any questions you may
							have. Reach out to me and I&apos;ll respond as soon as I can.
						</p>
					</div>

					<form className='flex flex-col h-[21.875rem] justify-between'>
						<FormField name='name' />
						<FormField name='email' type='email' />
						<FormField name='message' fieldType='textarea' />
						<PrimaryButton rounded={true}>Send</PrimaryButton>
					</form>
				</div>
				<div>Information</div>
			</div>
		</section>
	);
}

export default Contact;
