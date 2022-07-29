import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function Info({ icon, platform, contact }) {
	return (
		<div className='flex justify-start items-center'>
			<div>
				<Image src={icon} alt={`${platform} icon`} height='20px' width='20px' />
			</div>
			<div className='flex flex-col justify-between h-auto px-6'>
				<h3 className='font-ubuntubold text-body text-lightBlue uppercase'>
					{platform}
				</h3>
				<p className='font-ubunturegular text-[0.6875rem] text-[#041252] text-opacity-[0.76] relative bottom-[.125rem] tracking-wider'>
					{contact}
				</p>
			</div>
		</div>
	);
}

Info.propTypes = {
	platform: PropTypes.string.isRequired,
	contact: PropTypes.string.isRequired,
};

export default Info;
