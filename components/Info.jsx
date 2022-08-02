import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function Info({ icon, platform, contact, height, width }) {
	return (
		<div className='flex justify-start items-center'>
			<div>
				<Image
					src={icon}
					alt={`${platform} icon`}
					height={height}
					width={width}
				/>
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
	height: PropTypes.string,
	width: PropTypes.string,
};

Info.defaultProps = {
	height: '20px',
	width: '20px',
};

export default Info;
