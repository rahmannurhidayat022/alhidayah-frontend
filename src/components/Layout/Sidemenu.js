import { memo } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Collapse from '../UI/Collapse';
import Offcanvas from '../UI/Offcanvas';

const Sidemenu = (props) => {
	return (
		<Offcanvas onClose={props.offcanvasToggle}>
			<div className="">
				<ul className="flex flex-col">
					<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-gray-100">
						<Link to="/">Beranda</Link>
					</li>
					<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-gray-100">
						<Link to="/kegiatan">Kegiatan</Link>
					</li>
					<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-gray-100">
						<Collapse label="Donasi">
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link className="flex items-center" to="/donasi">
									<span className="mr-3">
										<BiDonateHeart />
									</span>
									<p>Formulir Donasi</p>
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
						</Collapse>
					</li>
					<li className="mb-2 w-full rounded-lg py-4 pl-4 hover:bg-gray-100">
						<Collapse label="Tentang Kami">
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/profil-lembaga">
									<p>Profil Lembaga</p>
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/visi-misi">
									<p>Visi & Misi</p>
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/galeri">
									<p>Galeri</p>
								</Link>
							</li>
							<li className="block px-4 py-2 hover:bg-gray-100">
								<Link to="/kontak">
									<p>Hubungi Kami</p>
								</Link>
							</li>
						</Collapse>
					</li>
				</ul>
				<hr className="my-4" />
				<div className="flex flex-col">
					<a
						className="flex justify-center items-center rounded-lg mb-4 bg-gray-200 hover:bg-gray-300 py-3 text-slate-700"
						href="tel:+0222334645"
					>
						<FiPhone size={'24'} />
						<span className="ml-2">022 2334645</span>
					</a>
					<Button
						className="flex justify-center items-center"
						options={{
							type: 'link',
							href: '/donasi',
						}}
					>
						Donasi
						<span className="ml-1">
							<BiDonateHeart />
						</span>
					</Button>
				</div>
			</div>
		</Offcanvas>
	);
};

export default memo(Sidemenu);
