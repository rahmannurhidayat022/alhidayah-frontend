import Breadcrumb from '../../components/UI/Breadcrumb';

const VisiMisi = () => {
	return (
		<>
			<Breadcrumb title="Visi & Misi" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
				<div>
					<h2 className="uppercase text-lg font-semibold mb-4">Moto</h2>
					<p className="text-lg font-semibold">
						Mewujudkan Kebersamaan, Membangun Kemandirian
					</p>
				</div>
				<div>
					<div className="mb-4">
						<h2 className="uppercase text-lg font-semibold mb-1">Visi</h2>
						<p>
							Menjadi Yayasan Nirlaba guna mewujudkan Insan Indonesia Bersatu
							dalam kemandirian
						</p>
					</div>
					<div className="mb-4">
						<h2 className="uppercase text-lg font-semibold mb-1">Misi</h2>
						<p>
							Mendidik anak yatim dan dhuafa dengan system pendidikan asrama
							yang berkualitas agar menjadi manusia yang berakhakul karimah,
							beraqidah kokoh kuat terhadap Allah SWT dan syariat-Nya.
							Memberikan bimbingan keterampilan kepada umat maupun anak asuh
							agar mampu menunjang pencapaian prestasi akademik & non akademik.
							Menyelenggarakan program-program untuk memberdayakan potensi umat
							maupun anak asuh agar memiliki keterampilan tinggi dan bermental
							entrepreneur.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default VisiMisi;
