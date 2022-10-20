import ReactDOM from 'react-dom';
import Logo from './Logo';

const Backdrop = (props) => {
	return (
		<div
			onClick={props.onClose}
			className="fixed top-0 left-0 w-full h-screen z-20 bg-black/40"
		/>
	);
};

const OffcanvasOverlay = (props) => {
	return (
		<aside className="fixed top-0 left-0 w-4/5 md:w-80 h-screen z-30 pl-6 bg-white pt-8 pr-5">
			<div className="flex justify-between mb-8">
				<div className="w-28">
					<Logo />
				</div>
				<button className="navbar-close" onClick={props.onClose}>
					<svg
						className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
			</div>
			{props.children}
		</aside>
	);
};

const portalElement = document.getElementById('overlays');

const Offcanvas = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<OffcanvasOverlay onClose={props.onClose}>
					{props.children}
				</OffcanvasOverlay>,
				portalElement
			)}
		</>
	);
};

export default Offcanvas;
