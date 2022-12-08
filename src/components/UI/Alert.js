import { BiNoEntry } from 'react-icons/bi';
import { BsCheckCircleFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../store/ui-slice';

const portalElement = document.getElementById('notification');

const Alert = () => {
	const alertState = useSelector((state) => state.ui.alert);
	const dispatch = useDispatch();
	let classes;

	if (alertState.variant === 'info') {
		classes = 'bg-blue-400 border-blue-300';
	}

	if (alertState.variant === 'success') {
		classes = 'bg-green-400 border-green-300';
	}

	if (alertState.variant === 'failed') {
		classes = 'bg-red-400 border-red-300';
	}

	useEffect(() => {
		return () => {
			setTimeout(() => {
				dispatch(closeAlert());
			}, 3000);
		};
	}, [alertState.isShow, dispatch]);

	return (
		<>
			{ReactDOM.createPortal(
				<div
					className={`${
						alertState.isShow ? 'opacity-100 visible' : 'opacity-0 invisible'
					} fixed top-0 left-0 w-full p-4 z-10 text-stone-800 flex flex-row gap-2 items-center justify-center ${classes} duration-1000`}
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
				</div>,
				portalElement
			)}
		</>
	);
};

export default memo(Alert);
