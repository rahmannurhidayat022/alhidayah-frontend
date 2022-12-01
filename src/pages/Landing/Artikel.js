import { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const data = [
	{
		id: '1',
		createdAt: '01 Desember 2022',
		image:
			'https://pantiasuhanyasibu.org/assets2/img/blog/7cf0e9ba5c1fb20c1ade79ce20d306ab.jpg',
		title: 'RINGANKAN BEBAN KORBAN GEMPA CIANJUR',
		body: `Innalillahi wainnailaihi roji'un

		Bencana kembali menerjang negeri ini, fenomena yang terjadi belakangan ini membuat luka mendalam bagi yang terdampak bencana, segala doa dan upaya terus dilakukan untuk membuat keadaan berangsung membaik.
		
		Gempa dengan magnitudo 5,6 di rasakan warga Kab. Cianjur pada Senin siang hari (21/11) yang mengakibatkan getaran yang cukup kencang di wilayah kota Cimahi, Kabupaten Cianjur dan sekitarnya.
		
		Gempa yang berpusat di darat 10 KM Barat Daya Kab. Cianjur membuat para warga panik. Kepanikan membuat mereka keluar rumah. Laporan yang diterima Pusat Pengendali Operasi BNPB pada dini hari tadi menyebutkan masyarakat masih berada di luar rumah mengantisipasi gempa susulan.
		
		Terdampak:
		
		268 meninggal dunia
		
		151 orang masih dalam pencarian (hilang)
		
		1.083 orang luka-luka
		
		58.362 mengungsi
		
		Jumlah rumah/ bangunan rusak: 22.198 unit
		
		Rusak berat: 6.570 unit
		
		Rusak sedang: 2.071 unit
		
		Rusak ringan: 12.641 unit`,
	},
	{
		id: '2',
		createdAt: '02 Desember 2022',
		image:
			'https://pantiasuhanyasibu.org/assets2/img/blog/7cf0e9ba5c1fb20c1ade79ce20d306ab.jpg',
		title: 'RINGANKAN BEBAN KORBAN GEMPA CIANJUR',
		body: `Innalillahi wainnailaihi roji'un

		Bencana kembali menerjang negeri ini, fenomena yang terjadi belakangan ini membuat luka mendalam bagi yang terdampak bencana, segala doa dan upaya terus dilakukan untuk membuat keadaan berangsung membaik.
		
		Gempa dengan magnitudo 5,6 di rasakan warga Kab. Cianjur pada Senin siang hari (21/11) yang mengakibatkan getaran yang cukup kencang di wilayah kota Cimahi, Kabupaten Cianjur dan sekitarnya.
		
		Gempa yang berpusat di darat 10 KM Barat Daya Kab. Cianjur membuat para warga panik. Kepanikan membuat mereka keluar rumah. Laporan yang diterima Pusat Pengendali Operasi BNPB pada dini hari tadi menyebutkan masyarakat masih berada di luar rumah mengantisipasi gempa susulan.
		
		Terdampak:
		
		268 meninggal dunia
		
		151 orang masih dalam pencarian (hilang)
		
		1.083 orang luka-luka
		
		58.362 mengungsi
		
		Jumlah rumah/ bangunan rusak: 22.198 unit
		
		Rusak berat: 6.570 unit
		
		Rusak sedang: 2.071 unit
		
		Rusak ringan: 12.641 unit`,
	},
	{
		id: '3',
		createdAt: '03 Desember 2022',
		image:
			'https://pantiasuhanyasibu.org/assets2/img/blog/7cf0e9ba5c1fb20c1ade79ce20d306ab.jpg',
		title: 'RINGANKAN BEBAN KORBAN GEMPA CIANJUR',
		body: `Innalillahi wainnailaihi roji'un

		Bencana kembali menerjang negeri ini, fenomena yang terjadi belakangan ini membuat luka mendalam bagi yang terdampak bencana, segala doa dan upaya terus dilakukan untuk membuat keadaan berangsung membaik.
		
		Gempa dengan magnitudo 5,6 di rasakan warga Kab. Cianjur pada Senin siang hari (21/11) yang mengakibatkan getaran yang cukup kencang di wilayah kota Cimahi, Kabupaten Cianjur dan sekitarnya.
		
		Gempa yang berpusat di darat 10 KM Barat Daya Kab. Cianjur membuat para warga panik. Kepanikan membuat mereka keluar rumah. Laporan yang diterima Pusat Pengendali Operasi BNPB pada dini hari tadi menyebutkan masyarakat masih berada di luar rumah mengantisipasi gempa susulan.
		
		Terdampak:
		
		268 meninggal dunia
		
		151 orang masih dalam pencarian (hilang)
		
		1.083 orang luka-luka
		
		58.362 mengungsi
		
		Jumlah rumah/ bangunan rusak: 22.198 unit
		
		Rusak berat: 6.570 unit
		
		Rusak sedang: 2.071 unit
		
		Rusak ringan: 12.641 unit`,
	},
	{
		id: '4',
		createdAt: '04 Desember 2022',
		image:
			'https://pantiasuhanyasibu.org/assets2/img/blog/7cf0e9ba5c1fb20c1ade79ce20d306ab.jpg',
		title: 'RINGANKAN BEBAN KORBAN GEMPA CIANJUR',
		body: `Innalillahi wainnailaihi roji'un

		Bencana kembali menerjang negeri ini, fenomena yang terjadi belakangan ini membuat luka mendalam bagi yang terdampak bencana, segala doa dan upaya terus dilakukan untuk membuat keadaan berangsung membaik.
		
		Gempa dengan magnitudo 5,6 di rasakan warga Kab. Cianjur pada Senin siang hari (21/11) yang mengakibatkan getaran yang cukup kencang di wilayah kota Cimahi, Kabupaten Cianjur dan sekitarnya.
		
		Gempa yang berpusat di darat 10 KM Barat Daya Kab. Cianjur membuat para warga panik. Kepanikan membuat mereka keluar rumah. Laporan yang diterima Pusat Pengendali Operasi BNPB pada dini hari tadi menyebutkan masyarakat masih berada di luar rumah mengantisipasi gempa susulan.
		
		Terdampak:
		
		268 meninggal dunia
		
		151 orang masih dalam pencarian (hilang)
		
		1.083 orang luka-luka
		
		58.362 mengungsi
		
		Jumlah rumah/ bangunan rusak: 22.198 unit
		
		Rusak berat: 6.570 unit
		
		Rusak sedang: 2.071 unit
		
		Rusak ringan: 12.641 unit`,
	},
];

const Artikel = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setArticles(data);
	}, []);

	const articlesRendering = articles?.map(
		({ id, image, createdAt, title, body }, index) => {
			return (
				<Link key={index} to={`/artikel/${id}`} className="bg-gray-100">
					<article className="w-full overflow-x-hidden">
						<img
							className="w-full bg-cover"
							src={image}
							alt={`poto artikel ${title}`}
							loading="lazy"
						/>
						<div className="leading-relaxed break-words">
							<h2 className="font-semibold text-2xl hover:text-blue-900">
								{title}
							</h2>
							<span className="flex items-center gap-1 text-16 text-gray-500">
								<BiTimeFive size={20} />
								{createdAt}
							</span>
							<div className="inline group">
								<p className="h-20 overflow-y-hidden font-medium text-[16px] group-hover:text-blue-900">
									{body}
								</p>
								...
							</div>
						</div>
					</article>
				</Link>
			);
		}
	);

	return (
		<>
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{articlesRendering}
			</section>
		</>
	);
};

export default Artikel;
