import { BiNoEntry } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import { BsCheckCircleFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { memo } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../store/ui-slice';

const portalElement = document.getElementById('notification');

const Alert = () => {
	const dispatch = useDispatch();
	const alertState = useSelector((state) => state.ui.alert);

	let classes;

	if (alertState.variant === 'info') {
		classes = 'bg-blue-400 border-blue-500';
	}

	if (alertState.variant === 'success') {
		classes = 'bg-green-400 border-green-500';
	}

	if (alertState.variant === 'failed') {
		classes = 'bg-red-400 border-red-500';
	}

	return (
		<>
			{ReactDOM.createPortal(
				<div
					className={`${
						alertState.isShow ? 'flex' : 'hidden'
					} container-custom w-full py-4 text-white flex-row gap-2 items-center justify-between ${classes}`}
				>
					<div className="flex flex-row gap-2 items-center">
						<span>
							{alertState.variant === 'info' ? (
								<BsFillInfoCircleFill size="24" />
							) : alertState.variant === 'success' ? (
								<BsCheckCircleFill size="24" />
							) : alertState.variant === 'failed' ? (
								<BiNoEntry size="24" />
							) : (
								''
							)}
						</span>
						{alertState.message}
					</div>
					<button
						onClick={() => {
							dispatch(closeAlert());
						}}
						className="text-white"
					>
						<IoCloseSharp color="white" size="24" />
					</button>
				</div>,
				portalElement
			)}
		</>
	);
};

export default memo(Alert);
