import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { getInstitutionProfile } from "../../store/actions/landing-action";

const ProfilLembaga = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state) => state.landing);

	useEffect(() => {
		dispatch(getInstitutionProfile());
	}, [dispatch]);

	return (
		<>
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
								<td>{item?.akte_notaris}</td>
							</tr>
							<tr>
								<td className="font-semibold">NPWP:</td>
								<td>{item?.npwp}</td>
							</tr>
							<tr>
								<td className="font-semibold">SK Kota:</td>
								<td>{item?.sk_kota}</td>
							</tr>
							<tr>
								<td className="font-semibold">SK Provinsi:</td>
								<td>{item?.sk_provinsi}</td>
							</tr>
							<tr>
								<td className="font-semibold">SK Menkumham RI:</td>
								<td>{item?.kemenkumham}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="">
					<h2 className="uppercase text-lg font-semibold mb-4">
						Profil Lembaga
					</h2>
					<p className="mb-3">{item?.profil_yayasan}</p>
				</div>
			</section>
		</>
	);
};

export default ProfilLembaga;
