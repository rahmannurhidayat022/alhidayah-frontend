import { BiLogOutCircle, BiMenuAltLeft } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import Dropdown from '../UI/Dropdown';

const Navbar = ({ sidebarToggle }) => {
	return (
		<nav className="w-full bg-white py-2 px-1 lg:px-4 border-b-2 border-gray-300 shadow-sm">
			<ul className="flex justify-between lg:justify-end">
				<li onClick={sidebarToggle} className="flex items-center lg:hidden">
					<BiMenuAltLeft size={44} />
				</li>
				<li className="flex flex-row gap-2 items-center">
					<span className="rounded-full p-2 bg-gray-300">
						<RiAdminFill className="text-gray-600" size={24} />
					</span>
					<Dropdown label="Admin">
						<li className="block px-4 py-2 hover:bg-gray-100">
							<button className="flex items-center">
								<span className="mr-3">
									<BiLogOutCircle />
								</span>
								<p>Logout</p>
							</button>
						</li>
					</Dropdown>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
