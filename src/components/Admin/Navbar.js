import { BiLogOutCircle, BiMenuAltLeft } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/user-slice';
import Dropdown from '../UI/Dropdown';

const Navbar = ({ sidebarToggle }) => {
	const dispatch = useDispatch();
	const { name } = JSON.parse(localStorage.getItem('userInfo'));

	const logoutHandler = () => {
		dispatch(logout());
	};

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
					<Dropdown label={name}>
						<li className="block px-4 py-2 hover:bg-gray-100">
							<button onClick={logoutHandler} className="flex items-center">
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
