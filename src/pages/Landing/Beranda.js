import { Link } from 'react-router-dom';
import Hero from '../../components/Layout/Hero';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SimpleImageViewer from '../../components/Image/SimpleImageViewer';

const berita = [
	{
		id: 1,
		title:
			'Berbagi bersama masyarakat antapani dalam rangka hari puasa bersama Al-Hidayah Baitul Hatim',
		created_at: '16 Oktober 2022',
		image_url: '/images/berita-1.webp',
	},
	{
		id: 2,
		title:
			'Berbagi bersama masyarakat antapani dalam rangka hari puasa bersama Al-Hidayah Baitul Hatim',
		created_at: '17 Oktober 2022',
		image_url: '/images/berita-2.webp',
	},
	{
		id: 3,
		title:
			'Berbagi bersama masyarakat antapani dalam rangka hari puasa bersama Al-Hidayah Baitul Hatim',
		created_at: '18 Oktober 2022',
		image_url: '/images/berita-3.webp',
	},
	{
		id: 4,
		title:
			'Berbagi bersama masyarakat antapani dalam rangka hari puasa bersama Al-Hidayah Baitul Hatim',
		created_at: '19 Oktober 2022',
		image_url: '/images/berita-4.webp',
	},
];

const galeri = [
	'/images/galeri-1.webp',
	'/images/galeri-2.webp',
	'/images/galeri-3.webp',
	'/images/galeri-4.webp',
	'/images/galeri-5.webp',
	'/images/galeri-6.webp',
	'/images/galeri-7.webp',
	'/images/galeri-8.webp',
];

const beritaRender = berita?.map(
	({ id, title, created_at, image_url }, index) => {
		return (
			<Link
				key={index}
				className="group w-full bg-white rounded overflow-hidden"
				to={`kegiatan/${id}`}
			>
				<div className="w-full h-[175px] overflow-hidden">
					<img
						className="w-full h-full bg-cover object-cover group-hover:scale-150"
						src={image_url}
						alt={title}
						loading="lazy"
					/>
				</div>
				<div className="p-2">
					<h3 className="font-medium text-base md:text-sm lg:text-base mb-2 group-hover:text-palette-1">
						{title}
					</h3>
					<span className="font-light text-xs text-gray-500">{created_at}</span>
				</div>
			</Link>
		);
	}
);

const Beranda = () => {
	return (
		<>
			<Hero />
			<section className="container-custom py-6 md:flex md:flex-row md:gap-8 md:flex-nowrap md:items-center md:justify-center">
				<img
					src="/images/about.webp"
					alt="tentang yayasan alhidayah baitul hatim"
					className="hidden md:block md:w-64 lg:w-[450px]"
				/>
				<div className="flex flex-col md:w-[460px]">
					<h2 className="text-xl mb-4">
						Yayasan Al-Hidayah Baitul Hatim{' '}
						<span className="font-semibold">
							Ada untuk membantu Masyarakat dan Anak-anak
						</span>
					</h2>
					<p className="text-[16px] mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut
						dolor ut aliquet turpis. At aenean commodo massa erat duis commodo,
						laoreet pellentesque dapibus. Enim aenean ultricies laoreet massa
						massa. Vulputate aliquet magna eget sit faucibus purus, velit.
					</p>
					<div className="flex flex-col gap-2">
						<p className="flex gap-4 items-center">
							<span>
								<svg
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.7241 31.0909C19.7513 31.0909 25.4481 25.4904 25.4481 18.5818C25.4481 11.6733 19.7513 6.07275 12.7241 6.07275C5.69675 6.07275 0 11.6733 0 18.5818C0 25.4904 5.69675 31.0909 12.7241 31.0909Z"
										fill="#E5EFEF"
									/>
									<path
										d="M26.0399 6.65472C26.3668 6.65472 26.6317 6.39424 26.6317 6.07291C26.6317 5.75158 26.3668 5.49109 26.0399 5.49109C25.7131 5.49109 25.4481 5.75158 25.4481 6.07291C25.4481 6.39424 25.7131 6.65472 26.0399 6.65472Z"
										fill="#4C241D"
									/>
									<path
										d="M18.9381 22.9455C19.265 22.9455 19.5299 22.685 19.5299 22.3637C19.5299 22.0423 19.265 21.7819 18.9381 21.7819C18.6113 21.7819 18.3463 22.0423 18.3463 22.3637C18.3463 22.685 18.6113 22.9455 18.9381 22.9455Z"
										fill="#4C241D"
									/>
									<path
										d="M31.6622 4.90909C32.4793 4.90909 33.1417 4.25787 33.1417 3.45455C33.1417 2.65122 32.4793 2 31.6622 2C30.845 2 30.1826 2.65122 30.1826 3.45455C30.1826 4.25787 30.845 4.90909 31.6622 4.90909Z"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.18896 4.71301L6.01463 6.85061"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M6.01463 4.71301L8.18896 6.85061"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M11.2445 24.1092L8.08953 21.0076C7.87938 20.801 7.75059 20.5278 7.7261 20.2366C7.70161 19.9454 7.783 19.6552 7.95578 19.4175C8.06181 19.2717 8.19884 19.1503 8.35737 19.0618C8.5159 18.9734 8.69212 18.9199 8.87379 18.9051C9.05546 18.8903 9.23823 18.9146 9.4094 18.9762C9.58056 19.0379 9.73603 19.1354 9.86498 19.2621L14.4912 23.8102C14.963 24.2739 15.3372 24.8245 15.5925 25.4305C15.8477 26.0365 15.9791 26.6859 15.979 27.3418V34.0001H10.6527V32.0324C10.6519 31.0445 10.319 30.0846 9.70578 29.302L6.23064 24.8609C5.25972 23.6185 4.73374 22.0955 4.73453 20.5287V12.182C4.73453 11.7962 4.89041 11.4262 5.16788 11.1534C5.44534 10.8807 5.82167 10.7274 6.21407 10.7274C6.60647 10.7274 6.98279 10.8807 7.26026 11.1534C7.53773 11.4262 7.69361 11.7962 7.69361 12.182V20.0365"
										fill="#FFE8DC"
									/>
									<path
										d="M11.2445 24.1092L8.08953 21.0076C7.87938 20.801 7.75059 20.5278 7.7261 20.2366C7.70161 19.9454 7.783 19.6552 7.95578 19.4175C8.06181 19.2717 8.19884 19.1503 8.35737 19.0618C8.5159 18.9734 8.69212 18.9199 8.87379 18.9051C9.05546 18.8903 9.23823 18.9146 9.4094 18.9762C9.58056 19.0379 9.73603 19.1354 9.86498 19.2621L14.4912 23.8102C14.963 24.2739 15.3372 24.8245 15.5925 25.4305C15.8477 26.0365 15.9791 26.6859 15.979 27.3418V34.0001H10.6527V32.0324C10.6519 31.0445 10.319 30.0846 9.70578 29.302L6.23064 24.8609C5.25972 23.6185 4.73374 22.0955 4.73453 20.5287V12.182C4.73453 11.7962 4.89041 11.4262 5.16788 11.1534C5.44534 10.8807 5.82167 10.7274 6.21407 10.7274C6.60647 10.7274 6.98279 10.8807 7.26026 11.1534C7.53773 11.4262 7.69361 11.7962 7.69361 12.182V20.0365"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M27.2236 24.1092L30.3785 21.0076C30.5887 20.801 30.7175 20.5278 30.742 20.2366C30.7664 19.9454 30.6851 19.6552 30.5123 19.4175C30.4063 19.2717 30.2692 19.1503 30.1107 19.0618C29.9522 18.9734 29.7759 18.9199 29.5943 18.9051C29.4126 18.8903 29.2298 18.9146 29.0587 18.9762C28.8875 19.0379 28.732 19.1354 28.6031 19.2621L23.9768 23.8102C23.5051 24.2739 23.1309 24.8245 22.8756 25.4305C22.6203 26.0365 22.489 26.6859 22.489 27.3418V34.0001H27.8154V32.0324C27.8161 31.0445 28.149 30.0846 28.7623 29.302L32.2374 24.8609C33.2083 23.6185 33.7343 22.0955 33.7335 20.5287V12.182C33.7335 11.7962 33.5777 11.4262 33.3002 11.1534C33.0227 10.8807 32.6464 10.7274 32.254 10.7274C31.8616 10.7274 31.4853 10.8807 31.2078 11.1534C30.9303 11.4262 30.7744 11.7962 30.7744 12.182V20.0365"
										fill="#FFE8DC"
									/>
									<path
										d="M27.2236 24.1092L30.3785 21.0076C30.5887 20.801 30.7175 20.5278 30.742 20.2366C30.7664 19.9454 30.6851 19.6552 30.5123 19.4175C30.4063 19.2717 30.2692 19.1503 30.1107 19.0618C29.9522 18.9734 29.7759 18.9199 29.5943 18.9051C29.4126 18.8903 29.2298 18.9146 29.0587 18.9762C28.8875 19.0379 28.732 19.1354 28.6031 19.2621L23.9768 23.8102C23.5051 24.2739 23.1309 24.8245 22.8756 25.4305C22.6203 26.0365 22.489 26.6859 22.489 27.3418V34.0001H27.8154V32.0324C27.8161 31.0445 28.149 30.0846 28.7623 29.302L32.2374 24.8609C33.2083 23.6185 33.7343 22.0955 33.7335 20.5287V12.182C33.7335 11.7962 33.5777 11.4262 33.3002 11.1534C33.0227 10.8807 32.6464 10.7274 32.254 10.7274C31.8616 10.7274 31.4853 10.8807 31.2078 11.1534C30.9303 11.4262 30.7744 11.7962 30.7744 12.182V20.0365"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M14.4936 7.53326L17.4012 7.84453L19.234 5.60278L21.0669 7.84453L23.9745 7.53326L23.6584 10.3923L25.9381 12.1942L23.6584 13.9955L23.9745 16.8546L21.0669 16.5439L19.234 18.785L17.4012 16.5439L14.4936 16.8546L14.8096 13.9955L12.5299 12.1942L14.8096 10.3923L14.4936 7.53326Z"
										fill="#0FAA00"
										stroke="#4C241D"
										strokeWidth="3.02737"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M16.8608 9.86044L18.3167 10.0164L19.234 8.89404L20.1513 10.0164L21.6072 9.86044L21.4492 11.2923L22.5908 12.1941L21.4492 13.0959L21.6072 14.5272L20.1513 14.3719L19.234 15.4936L18.3167 14.3719L16.8608 14.5272L17.0189 13.0959L15.8772 12.1941L17.0189 11.2923L16.8608 9.86044Z"
										fill="#FFCE56"
									/>
								</svg>
							</span>
							Memberikan santunan kepada masyarakat dan anak-anak yang
							membutuhkan
						</p>
						<div className="flex gap-4 items-center">
							<span>
								<svg
									width="39"
									height="36"
									viewBox="0 0 39 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.2414 31.1931C25.2497 31.1931 30.931 25.4121 30.931 18.2808C30.931 11.1496 25.2497 5.36853 18.2414 5.36853C11.2331 5.36853 5.55173 11.1496 5.55173 18.2808C5.55173 25.4121 11.2331 31.1931 18.2414 31.1931Z"
										fill="#E5EFEF"
									/>
									<path
										d="M4.2069 2V3.12281"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M4.2069 5.36853V6.49134"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M2 4.24561H3.10345"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M5.31034 4.24561H6.41379"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M4.80386 11.9184C4.80408 12.0371 4.76967 12.1532 4.705 12.2521C4.64032 12.3509 4.54829 12.428 4.44054 12.4736C4.33279 12.5192 4.21416 12.5313 4.09968 12.5082C3.9852 12.4852 3.88001 12.4281 3.79741 12.3442C3.71482 12.2603 3.65854 12.1534 3.63569 12.037C3.61284 11.9205 3.62446 11.7998 3.66906 11.6901C3.71367 11.5803 3.78927 11.4865 3.88628 11.4206C3.9833 11.3546 4.09737 11.3193 4.21407 11.3193C4.37025 11.3195 4.52002 11.3826 4.63056 11.4949C4.74111 11.6072 4.80342 11.7594 4.80386 11.9184Z"
										fill="#4C241D"
									/>
									<path
										d="M30.931 13.7895C33.064 13.7895 34.7931 12.03 34.7931 9.85963C34.7931 7.68925 33.064 5.92981 30.931 5.92981C28.7981 5.92981 27.069 7.68925 27.069 9.85963C27.069 12.03 28.7981 13.7895 30.931 13.7895Z"
										fill="white"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M16.0345 13.7895C18.1674 13.7895 19.8965 12.03 19.8965 9.85963C19.8965 7.68925 18.1674 5.92981 16.0345 5.92981C13.9015 5.92981 12.1724 7.68925 12.1724 9.85963C12.1724 12.03 13.9015 13.7895 16.0345 13.7895Z"
										fill="white"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M30.536 13.7895C28.8491 13.8576 27.2548 14.5926 26.0922 15.8382C24.9296 17.0838 24.2903 18.7418 24.3103 20.4595V22.7719C24.3103 23.0697 24.1941 23.3553 23.9872 23.5659C23.7802 23.7764 23.4996 23.8947 23.2069 23.8947C22.9142 23.8947 22.6336 23.7764 22.4266 23.5659C22.2197 23.3553 22.1035 23.0697 22.1035 22.7719V20.4595C22.1235 18.7417 21.4841 17.0837 20.3214 15.838C19.1586 14.5924 17.5643 13.8575 15.8772 13.7895C15.0341 13.7734 14.1963 13.9286 13.4127 14.2458C12.6292 14.5631 11.9157 15.0361 11.3139 15.6372C10.7121 16.2383 10.2341 16.9555 9.90786 17.7468C9.58161 18.538 9.41365 19.3875 9.4138 20.2456V23.8947C9.4138 26.5748 10.4601 29.1451 12.3225 31.0402C14.185 32.9353 16.711 34 19.3448 34H27.069C29.7028 34 32.2288 32.9353 34.0913 31.0402C35.9537 29.1451 37 26.5748 37 23.8947V20.2456C37.0002 19.3875 36.8322 18.5379 36.5059 17.7466C36.1796 16.9553 35.7016 16.2381 35.0997 15.637C34.4979 15.0359 33.7843 14.5629 33.0007 14.2457C32.2171 13.9284 31.3792 13.7734 30.536 13.7895Z"
										fill="white"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M26.0946 17.5234C25.1044 17.5308 24.1572 17.9362 23.4596 18.6513C22.7618 17.9361 21.8144 17.5307 20.824 17.5234C18.6414 17.5234 16.8714 19.4951 16.8714 21.9276C16.8714 24.3602 21.4833 28.5337 23.4596 30.0018C25.4359 28.5337 30.0483 24.3596 30.0483 21.9299C30.0483 19.5001 28.2778 17.5234 26.0946 17.5234Z"
										fill="#F53E28"
										stroke="#4C241D"
										strokeWidth="2.97517"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
							Melayani dengan kasih sayang dan penuh perhatian
						</div>
					</div>
				</div>
			</section>
			<section className="container-custom bg-gray-100 py-16">
				<div className="mb-4 md:flex md:flex-col md:justify-center md:items-center">
					<h2 className="text-xl mb-4">Berita & Kegiatan</h2>
					<div className="flex flex-col gap-2 md:flex-row">{beritaRender}</div>
				</div>
				<Link className="flex items-center gap-1 md:justify-end" to="/artikel">
					<div className="py-2 px-3 hover:bg-focus-1 hover:text-white hover:border-white text-gray-800 text-sm rounded border-palette-1 border-2 flex items-center gap-1">
						Berita & Kegiatan Lainnya
						<span>
							<AiOutlineArrowRight />
						</span>
					</div>
				</Link>
			</section>
			<section className="container-custom py-16">
				<div className="p-0 mb-4 md:flex md:flex-col md:justify-center md:items-center">
					<h2 className="text-xl mb-4">Galeri Yayasan</h2>
					<div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
						<SimpleImageViewer images={galeri} />
					</div>
				</div>
				<Link className="flex items-center gap-1 md:justify-end" to="/galeri">
					<div className="py-2 px-3 hover:bg-focus-1 hover:text-white hover:border-white text-gray-800 text-sm rounded border-palette-1 border-2 flex items-center gap-1">
						Galeri Lainnya
						<span>
							<AiOutlineArrowRight />
						</span>
					</div>
				</Link>
			</section>
		</>
	);
};

export default Beranda;
