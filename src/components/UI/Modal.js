import { memo } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return (
		<div onClick={props.onClose} className="fixed inset-0 z-20 bg-black/40" />
	);
};

const ModalOverlay = (props) => {
	return (
		<div className="fixed z-30 bottom-1 mx-auto md:bottom-[20rem] md:left-[calc(50%_-_17rem)] overflow-y-auto">
			<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
				<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
