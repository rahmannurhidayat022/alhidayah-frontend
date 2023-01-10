import { useState } from "react";
import { AiOutlineDashboard, AiOutlineDatabase } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { TfiWrite } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Item = ({ label, link = "not found" }) => {
	return (
		<li>
			<NavLink
				className={({ isActive }) =>
					"w-full flex flex-row gap-2 items-center text-lg lg:text-base py-2 px-3 text-gray-100 hover:bg-indigo-600 " +
					(isActive ? "bg-indigo-600" : undefined)
				}
				to={link}
			>
				<span>
					<FiActivity />
				</span>
				{label}
			</NavLink>
		</li>
	);
};

const SubMenu = ({ label, isActive = false, icon, children, toggle }) => {
	return (
		<>
			<nav
				className={`flex flex-col gap-2 justify-center text-lg lg:text-base py-1 px-3 rounded text-gray-100`}
			>
				<div onClick={toggle} className="flex flex-row gap-2 items-center">
					{icon}
					<button className="w-full flex flex-row justify-between items-center">
						{label}
						<span>{isActive ? <BsChevronUp /> : <BsChevronDown />}</span>
					</button>
				</div>
				<ul
					className={`bg-indigo-900 transition-all duration-300 ${isActive
							? "py-2 ml-4 rounded translate-y-0 opacity-100 visible max-h-screen"
							: "py-0 ml-4 rounded -translate-y-2 opacity-0 invisible max-h-0"
						}`}
				>
					{children}
				</ul>
			</nav>
		</>
	);
};

const Sidebar = ({ onClose, isOpen }) => {
	const [master, setMaster] = useState(false);
	const [landing, setLanding] = useState(false);
	const { userInfo } = useSelector((state) => state.user);

	const mastermenuToggleHandler = () => {
		setMaster((prev) => !prev);
	};

	const landingmenuToggleHandler = () => {
		setLanding((prev) => !prev);
	};

	return (
		<>
			<div
				onClick={onClose}
				className={`fixed inset-0 bg-black/70 z-10 transition-all lg:invisible ${isOpen ? "opacity-100 block" : "opacity-0 hidden"
					}`}
			></div>
			<aside
				className={`fixed lg:relative left-0 top-0 lg:translate-x-0 w-8/12 z-20 md:w-72 lg:w-72 lg:block lg:z-0 h-screen bg-gradient-to-t from-indigo-800 to-indigo-700 transition-all ${isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
			>
				<div className="px-2 pt-2">
					<div className="h-12"></div>
					<hr className="border-indigo-500" />
					<ul className="flex flex-col mt-6">
						<li className="mb-1">
							<NavLink
								className={({ isActive }) =>
									"flex flex-row gap-2 items-center text-lg lg:text-base py-2 px-3 rounded text-gray-100 hover:bg-indigo-900 " +
									(isActive ? "bg-indigo-900" : undefined)
								}
								to="/dashboard"
							>
								<span>
									<AiOutlineDashboard size={24} />
								</span>
								Dashboard
							</NavLink>
						</li>
						<li className="mb-1">
							<SubMenu
								isActive={landing}
								toggle={landingmenuToggleHandler}
								label="Halaman Landing"
								icon={<TfiWrite size={24} />}
							>
								<Item label="Artikel" link="/artikel/table" />
								{userInfo?.role === "admin" && (
									<Item label="Kontak" link="/contact/table" />
								)}
								<Item label="Galeri Poto" link="/gallery/table" />
							</SubMenu>
						</li>
						<li className="mb-1">
							<SubMenu
								isActive={master}
								toggle={mastermenuToggleHandler}
								label="Data Master"
								icon={<AiOutlineDatabase size={24} />}
							>
								{userInfo?.role === "admin" && (
									<Item label="Data User" link="/user/table" />
								)}
								{userInfo?.role === "admin" && (
									<Item label="Data Rekening" link="/debit/table" />
								)}
								{userInfo?.role === "admin" && (
									<Item label="Data Donasi" link="/donation/table" />
								)}
								<Item label="Data Yayasan" link="/institution" />
								<Item label="Data Anak" link="/children/table" />
							</SubMenu>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
