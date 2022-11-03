import { memo } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';

const Footer = () => {
	return (
		<footer className="flex-col h-full mt-10 pt-10 bg-palette-4 text-white">
			<div className="container-custom">
				<div className="block md:flex justify-center">
					<div className="flex flex-col py-4 border-b-2 md:w-96 md:mr-10 border-gray-200/20 md:border-0">
						<div className="w-40 mb-4">
							<Logo />
						</div>
						<p className="pl-1">
							Jl. Trs. St. Kiaracondong, RT.02/RW.08, Kebun Jayanti, Kec.
							Kiaracondong, Kota Bandung, Jawa Barat 40281
						</p>
					</div>
					<div className="flex flex-col py-4 border-b-2 md:mr-10 border-gray-200/20 md:border-0">
						<h6 className="font-semibold text-[17px] mb-4">Pintasan Link</h6>
						<ul>
							<li className="mb-2">
								<Link className="flex items-center" to="/">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Beranda
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/kegiatan">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Kegiatan
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/donasi">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Formulir Donasi
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/cek-donasi">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Cek Donasi
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col py-4 md:mr-10">
						<h6 className="font-semibold text-[17px] mb-4">Tentang Kami</h6>
						<ul>
							<li className="mb-2">
								<Link className="flex items-center" to="/profil-lembaga">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Profil Lembaga
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/visi-misi">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Visi & Misi
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/galeri">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Galeri
								</Link>
							</li>
							<li className="mb-2">
								<Link className="flex items-center" to="/kontak">
									<span className="mr-2">
										<AiOutlineRight />
									</span>
									Hubungi Kami
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-[#454F5B]">
				<div className="container-custom text-center py-4">
					© 2022 Yayasan Al-Hidayah Baitul Hatim. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);
