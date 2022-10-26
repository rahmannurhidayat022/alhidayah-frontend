import LandingLayout from '../../components/Layout/LandingLayout';
import Breadcrumb from '../../components/UI/Breadcrumb';

const ProfilLembaga = () => {
	return (
		<LandingLayout>
			<Breadcrumb title="Profil Lembaga" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
				<div className="">
					<h2 className="uppercase text-lg font-semibold mb-4">
						Legalitas Yayasan Al-Hidayah Baitul Hatim
					</h2>
					<table className="table-auto">
						<tbody>
							<tr>
								<td className="font-semibold">Akte Notaris:</td>
								<td>
									Nomor 10, tanggal 14 Mei 2019 oleh IKA DYAH WARSITO, S.H.,
									M.HUM., M.KN.
								</td>
							</tr>
							<tr>
								<td className="font-semibold">SK Menkumham RI:</td>
								<td>
									Nomor AHU-0009842.AH.01.12.TAHUN 2019,Tanggal 24 Mei 2019
								</td>
							</tr>
							<tr>
								<td className="font-semibold">NPWP:</td>
								<td>31.402.764.0-623.000</td>
							</tr>
							<tr>
								<td className="font-semibold">STP Yayasan Nomor:</td>
								<td>P2T/69/07.03/01/XI/2019</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="">
					<h2 className="uppercase text-lg font-semibold mb-4">
						Profil Lembaga
					</h2>
					<p className="mb-3">
						Berawal dari niat suci dan cita-cita mulia berkumpul para Insan
						Indonesia bersatu untuk membentuk Organisasi Nirlaba pada tahun 2011
						yang diawali oleh rasa keprihatinan masih adanya anak-anak usia
						sekolah tetapi tidak bisa sekolah dikarenakan tidak ada biaya,
						keprihatinan dengan kondisi fakir-miskin yang membutuhkan bantuan
						dan membangun generasi ber-akhlaqkul karimah.
					</p>
					<p className="mb-3">
						Maka sudah seharusnya Ikut berpartisipasi aktif membantu pemerintah
						dalam menangani masalah sosial, kemanusiaan, keagamaan dengan
						memberikan bantuan biaya sekolah, santunan kepada kaum fakir-miskin
						dan membangun tempat mengaji serta wakaf al- Quran.
					</p>
					<p className="mb-3">
						Yang kemudian berkembang membangun Panti Asuhan/ Lembaga Sosial
						Kesejahteran Anak dalam rangka mengefektifkan dalam pemeberian
						bantuan dan pengasuhan. Membangun masjid untuk beribadah, mengaji &
						kegiatan keagamaan.
					</p>
					<p>
						Yayasan Insan Indonesia Bersatu Malang (YASIBU) dibangun untuk turut
						memajukan kesejahteraan masyarakat dan mencerdaskan kehidupan.
					</p>
				</div>
			</section>
		</LandingLayout>
	);
};

export default ProfilLembaga;
