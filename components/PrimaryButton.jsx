import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton({ children, rounded }) {
	return (
		<button
			className={`text-body font-poppinssemibold bg-darkBlue px-[15px] py-[5px] text-offWhite pt-[7px] ${
				rounded ? 'rounded-[3px]' : ''
			}`}>
			{children}
		</button>
	);
}

PrimaryButton.propTypes = {
	rounded: PropTypes.bool,
};

PrimaryButton.propTypes = {
	rounded: false,
};

export default PrimaryButton;
