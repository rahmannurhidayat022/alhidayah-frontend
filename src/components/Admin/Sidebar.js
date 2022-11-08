const Sidebar = ({ onClose, isOpen }) => {
	return (
		<>
			<div
				onClick={onClose}
				className={`fixed inset-0 bg-black/70 z-10 transition-all ${
					isOpen ? 'opacity-100 block' : 'opacity-0 hidden'
				}`}
			></div>
			<aside
				className={`fixed lg:relative left-0 top-0 lg:translate-x-0 w-8/12 z-20 md:w-72 lg:w-60 lg:block lg:z-0 h-screen bg-gradient-to-t from-indigo-800 to-indigo-700 transition-all ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="pl-2 pt-2">
					<div className="h-12"></div>
					<hr className="border-indigo-500" />
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
