import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton({ children, rounded, small }) {
	return (
		<button
			className={`transition ease-in-out text-body font-poppinssemibold bg-darkBlue hover:bg-opacity-[0.93] px-[.9375em] py-[.3125em] text-offWhite pt-[7px] ${
				rounded ? 'rounded-[3px]' : ''
			}  ${small ? 'lg:text-[20px]' : 'lg:text-body-lg'}`}>
			{children}
		</button>
	);
}

PrimaryButton.propTypes = {
	rounded: PropTypes.bool,
	small: PropTypes.bool,
};

PrimaryButton.defaultProps = {
	rounded: false,
	small: false,
};

export default PrimaryButton;
