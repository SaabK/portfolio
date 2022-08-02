import React from 'react';
import PropTypes from 'prop-types';

function FormField({ name, type, id, fieldType }) {
	const bgColor = '#fff';
	const txtColor = '#565b72';

	return (
		<div
			className={`flex flex-col justify-between ${
				fieldType === 'input' ? 'md:w-[47%]' : ''
			}`}>
			<label
				htmlFor={name}
				className='font-ubuntubold text-[0.8125rem] lg:text-body tracking-wider uppercase text-[#000] opacity-[0.65] inline'>
				{name}
			</label>
			{fieldType === 'input' ? (
				<input
					type={type}
					name={name}
					id={id}
					className={`bg-[${bgColor}] rounded-[3px] px-[.875rem] py-[.375rem] h-[40px] font-ubunturegular text-[${txtColor}] text-[13px] focus:outline-none`}
				/>
			) : (
				<textarea
					name={name}
					id={id}
					cols='30'
					rows='5'
					className={`bg-[${bgColor}] rounded-[3px] px-[.875rem] py-[.375rem] font-ubunturegular text-[${txtColor}] resize-none text-[13px] focus:outline-none`}></textarea>
			)}
		</div>
	);
}

FormField.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	id: PropTypes.string,
	fieldType: PropTypes.string,
};

FormField.defaultProps = {
	type: 'text',
	id: '',
	fieldType: 'input',
};

export default FormField;
