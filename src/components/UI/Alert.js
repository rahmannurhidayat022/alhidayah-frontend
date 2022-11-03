import { BiNoEntry } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { BsCheckCircleFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { memo } from 'react';

const Alert = ({ variant, onClose, children }) => {
	let classes;

	if (variant === 'info') {
		classes = 'bg-blue-400 border-blue-500';
	}

	if (variant === 'success') {
		classes = 'bg-green-400 border-green-500';
	}

	if (variant === 'failed') {
		classes = 'bg-red-400 border-red-500';
	}

	return (
		<div
			className={`container-custom w-full py-4 text-white flex flex-row gap-2 items-center justify-between ${classes}`}
		>
			<div className="flex flex-row gap-2 items-center">
				<span>
					{variant === 'info' ? (
						<BsFillInfoCircleFill size="24" />
					) : variant === 'success' ? (
						<BsCheckCircleFill size="24" />
					) : variant === 'failed' ? (
						<BiNoEntry size="24" />
					) : (
						''
					)}
				</span>
				{children}
			</div>
			<button
				onClick={() => {
					onClose();
				}}
				className="text-white"
			>
				<IoCloseSharp color="white" size="24" />
			</button>
		</div>
	);
};

export default memo(Alert);
