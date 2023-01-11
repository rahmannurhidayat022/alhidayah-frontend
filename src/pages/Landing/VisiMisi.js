import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { getVisiMisiData } from "../../store/actions/landing-action";

const VisiMisi = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state) => state.landing);

	useEffect(() => {
		dispatch(getVisiMisiData());
	}, [dispatch]);

	return (
		<>
			<Breadcrumb title="Visi & Misi" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
				<div>
					<h2 className="uppercase text-lg font-semibold mb-4">Moto</h2>
					<p className="text-lg font-semibold">{item?.moto}</p>
				</div>
				<div>
					<div className="mb-4">
						<h2 className="uppercase text-lg font-semibold mb-1">Visi</h2>
						<p>{item?.visi}</p>
					</div>
					<div className="mb-4">
						<h2 className="uppercase text-lg font-semibold mb-1">Misi</h2>
						<p>{item?.misi} </p>
					</div>
				</div>
			</section>
		</>
	);
};

export default VisiMisi;
