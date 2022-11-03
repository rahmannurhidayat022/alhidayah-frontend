import { forwardRef, memo } from 'react';

const Input = forwardRef(
	(
		{
			id,
			label,
			requireIcon = false,
			options,
			className,
			errorMessage,
			hasError,
			prefix,
			suffix,
		},
		ref
	) => {
		return (
			<div className={`w-full flex flex-col gap-1 md:gap-2 mb-5 ${className}`}>
				<label className="font-semibold" htmlFor={id}>
					{label}
					{requireIcon && <span className="text-red-600 ml-0.5">*</span>}
				</label>
				<div className="flex flex-row">
					{!!prefix && (
						<div className="flex shrink-0 items-center justify-center py-2 px-3 bg-gray-200 text-gray-600 border-l-2 border-t-2 border-b-2 border-gray-300 rounded-l">
							{prefix}
						</div>
					)}
					<input
						className={`w-full border-2 ${
							options?.type === 'file' ? 'rounded-none' : 'rounded'
						} ${
							hasError ? 'border-red-600 bg-red-100/50' : 'border-gray-300'
						} py-2 px-1 focus:outline-none focus:border-palette-1 file:mr-5 file:py-2 file:px-6
            file:rounded-r-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-palette-1
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700`}
						ref={ref}
						{...options}
						name={id}
						autoComplete="off"
					/>
					{!!suffix && (
						<div className="flex shrink-0 items-center justify-center py-2 px-3 bg-gray-200 text-gray-600 border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r">
							{suffix}
						</div>
					)}
				</div>
				<p className="text-red-500">{errorMessage}</p>
			</div>
		);
	}
);

export default memo(Input);
