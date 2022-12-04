import { memo } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return (
		<div onClick={props.onClose} className="fixed inset-0 z-20 bg-black/40" />
	);
};

const ModalOverlay = (props) => {
	return (
		<div className="fixed z-30 w-full bottom-1 mx-auto md:bottom-[20rem] md:left-[calc(50%_-_50%)] overflow-y-auto">
			<div className="flex w-full min-h-full items-center justify-center text-center sm:items-center sm:p-0">
				<div className="relative w-full md:w-11/12 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
					<div className="w-full bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default memo(Modal);
