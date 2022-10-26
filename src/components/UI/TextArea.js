import { forwardRef } from 'react';

const TextArea = forwardRef(
	(
		{
			id,
			label,
			requireIcon = false,
			options,
			children,
			className,
			errorMessage,
			hasError,
		},
		ref
	) => {
		return (
			<div className={`flex flex-col gap-1 md:gap-2 mb-5 ${className}`}>
				<label className="font-semibold" htmlFor={id}>
					{label}
					{requireIcon && <span className="text-red-600 ml-0.5">*</span>}
				</label>
				<textarea
					className={`w-full border-2 rounded ${
						hasError ? 'border-gray-600' : 'border-gray-300'
					} py-2 px-1 focus:outline-none focus:border-palette-1`}
					ref={ref}
					{...options}
					name={id}
				>
					{children}
				</textarea>
				<p className="text-red-500">{errorMessage}</p>
			</div>
		);
	}
);

export default TextArea;
