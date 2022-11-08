import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Admin/Navbar';
import Sidebar from '../Admin/Sidebar';

const DashboardLayout = () => {
	const [sidebar, setSidebar] = useState(false);

	const sidebarToggleHandler = () => {
		setSidebar((prev) => !prev);
	};

	return (
		<div className="flex h-screen bg-gray-200 font-roboto">
			<Sidebar onClose={sidebarToggleHandler} isOpen={sidebar} />
			<div className="flex-1 flex flex-col overflow-hidden">
				<Navbar sidebarToggle={sidebarToggleHandler} />
				<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
					<div className="container mx-auto px-6 py-8">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
