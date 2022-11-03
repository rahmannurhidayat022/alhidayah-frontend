import { memo } from 'react';

const Button = (props) => {
	const classesArray = [
		'bg-palette-1 text-white font-medium py-3 px-5 rounded-lg hover:bg-focus-1 text-center disabled:bg-gray-400',
	];
	if (props.className !== undefined) {
		props.className && classesArray.push(props.className);
	}

	if (props.options?.type === 'link') {
		return (
			<a className={classesArray.join(' ')} {...props.options}>
				{props.children}
			</a>
		);
	}

	return (
		<button className={classesArray.join(' ')} {...props.options}>
			{props.children}
		</button>
	);
};

export default memo(Button);
