import { memo, useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyToClipboard = ({ value }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowTooltip(false);
		}, 1500);
	}, [showTooltip]);

	const showTooltipHandler = () => {
		navigator.clipboard.writeText(value);
		setShowTooltip(true);
	};

	return (
		<div className="relative flex flex-row items-center gap-1 lg:gap-2">
			<span>{value}</span>
			<button onClick={showTooltipHandler}>
				<FaCopy />
			</button>
			{showTooltip && (
				<div className="absolute bg-black/70 py-1 px-2 rounded-lg text-white text-[12px] -right-[65px] -top-3">
					Copied!
				</div>
			)}
		</div>
	);
};

export default memo(CopyToClipboard);
