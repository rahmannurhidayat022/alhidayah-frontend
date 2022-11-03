import Breadcrumb from '../../components/UI/Breadcrumb';
import CopyToClipboard from '../../components/UI/CopyToClipboard';

const rekening = [
	{
		id: 1,
		bank: 'Mandiri',
		nomor: '1440012576986',
		pemilik: 'Yayasan Al-Hidayah Baitul Hatim',
	},
	{
		id: 2,
		bank: 'BRI',
		nomor: '0220012576986',
		pemilik: 'Solichin',
	},
];

const renderData = rekening?.map(({ bank, nomor, pemilik }, index) => {
	return (
		<li key={index} className="mb-2">
			<div className="flex flex-row gap-4">
				<span className="font-semibold">Bank {bank}:</span>
				<CopyToClipboard value={nomor} />
			</div>
			<span>a.n. {pemilik}</span>
		</li>
	);
});

const Rekening = () => {
	return (
		<>
			<Breadcrumb title="Rekening Donasi" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
				<div>
					<h2 className="uppercase text-lg font-semibold mb-4 text-center">
						SCAN QR
					</h2>
					<img
						src="/images/QR.jpg"
						alt="tentang yayasan alhidayah baitul hatim"
						className="md:w-200 lg:w-[300px] flex flex-col justify-center mx-auto "
					/>
				</div>
				<div>
					<div className="mb-4">
						<h2 className="text-lg font-semibold mb-8 mt-10">
							Rekening Donasi Yayasan Al-Hidayah Baitul Hatim:
						</h2>
						<ul className="">{renderData}</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Rekening;
