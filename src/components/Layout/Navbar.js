import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import { FiMenu, FiPhone } from 'react-icons/fi';
import Button from '../UI/Button';
import Dropdown from '../UI/Dropdown';
import { BiDonateHeart } from 'react-icons/bi';
import { AiFillCreditCard, AiOutlineHistory } from 'react-icons/ai';
import Alert from '../UI/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../store/ui-slice';
import { memo } from 'react';

const Navbar = (props) => {
	const dispatch = useDispatch();
	const { isShow, variant, message } = useSelector((state) => state.ui.alert);

	const closeAlertHanlder = () => {
		dispatch(closeAlert());
	};

	return (
		<header className="sticky top-0 z-10 bg-white border-b-2 border-slate-200">
			{isShow && (
				<Alert variant={variant} onClose={closeAlertHanlder}>
					{message}
				</Alert>
			)}
			<div className="container-custom flex justify-between items-center">
				<div className="w-36 pl-2 md:pl-0">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<ul className="hidden lg:flex font-medium">
					<li className="mr-1 hover:bg-gray-100 py-2 px-4 rounded-md">
						<Link to={'/'}>Beranda</Link>
					</li>
					<li className="mr-1 hover:bg-gray-100 py-2 px-4 rounded-md">
						<Link to={'/artikel'}>Kegiatan & Artikel</Link>
					</li>
					<li className="mr-1 hover:bg-gray-100 py-2 px-4 rounded-md">
						<Dropdown label="Donasi">
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link className="flex items-center" to="/rekening">
									<span className="mr-3">
										<AiFillCreditCard />
									</span>
									<p>Rekening Donasi</p>
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link className="flex items-center" to="/donasi">
									<span className="mr-3">
										<BiDonateHeart />
									</span>
									Formulir Donasi
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link className="flex items-center" to="/cek-donasi">
									<span className="mr-3">
										<AiOutlineHistory />
									</span>
									<p>Cek Donasi</p>
								</Link>
							</li>
						</Dropdown>
					</li>
					<li className="mr-1 hover:bg-gray-100 py-2 px-4 rounded-md">
						<Dropdown label="Tentang Kami">
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/profil-lembaga">Profil Lembaga</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/visi-misi">Visi & Misi</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/galeri">
									<p>Galeri</p>
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/kontak">Hubungi Kami</Link>
							</li>
						</Dropdown>
					</li>
				</ul>
				<div className="hidden lg:grid grid-cols-2 gap-1">
					<a
						className="flex items-center mr-1 hover:bg-gray-100 py-2 px-4 rounded-md"
						href="tel:+0222334645"
					>
						<FiPhone size={'24'} />
						<span className="ml-2">022 2334645</span>
					</a>
					<Link to="/donasi">
						<Button className="flex justify-center items-center place-self-center">
							Donasi
							<span className="ml-1">
								<BiDonateHeart />
							</span>
						</Button>
					</Link>
				</div>
				<div className="lg:hidden" onClick={props.offcanvasToggle}>
					<FiMenu size={32} />
				</div>
			</div>
		</header>
	);
};

export default memo(Navbar);
