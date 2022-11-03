import { forwardRef } from 'react';

const Select = forwardRef(
	(
		{
			id,
			label,
			requireIcon,
			options,
			hasError,
			errorMessage,
			className,
			children,
		},
		ref
	) => {
		return (
			<div className={`w-full flex flex-col gap-1 md:gap-2 mb-5 ${className}`}>
				<label className="font-semibold" htmlFor={id}>
					{label}
					{requireIcon && <span className="text-red-600 ml-0.5">*</span>}
				</label>
				<select
					itemRef={ref}
					className={`w-full border-2 rounded bg-transparent ${
						hasError ? 'border-red-600' : 'border-gray-300'
					} py-2 px-1 focus:outline-none focus:border-palette-1`}
					ref={ref}
					{...options}
					name={id}
				>
					{children}
				</select>
				<p className="text-red-500">{errorMessage}</p>
			</div>
		);
	}
);

export default Select;
