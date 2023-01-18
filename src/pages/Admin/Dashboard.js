import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../store/slices/ui-slice";
import { MdCreditCard, MdOutlineArticle, MdPeopleAlt } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { getDashboardData } from "../../store/actions/dashboard-action";
import { AiOutlineDollar } from "react-icons/ai";

const CardDashboard = (props) => {
	return (
		<div
			style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
			className="bg-white bg-center bg-no-repeat bg-cover rounded-lg drop-shadow shadow-slate-900 p-5 mx-3 h-[150px] md:w-[200px] lg:w-[250px]"
		>
			<div className="grid grid-cols-3 grid-flow-row gap-2">
				{props.icon}
				<span className="row-span-3 self-center place-self-center text-[4rem]">
					{props.value}
				</span>
				<p className="col-span-2 font-semibold text-lg">{props.title}</p>
			</div>
		</div>
	);
};

const Dashboard = () => {
	const dispatch = useDispatch();
	const { success } = useSelector((state) => state.user);
	const { item } = useSelector((state) => state.dashboard);
	const { userInfo } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getDashboardData());
	}, [dispatch]);

	useEffect(() => {
		if (success) {
			dispatch(
				showAlert({
					variant: "success",
					message: success,
				})
			);
		}
	}, [dispatch, success]);

	return (
		<>
			<h2 className="ml-4 mb-6 text-2xl font-semibold">
				Hay {userInfo?.name} 👋
			</h2>
			<section className="w-full flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-x-1 mg:gap-y-6">
				<CardDashboard
					icon={<MdOutlineArticle className="col-span-2" size={65} />}
					title="Artikel"
					value={item?.article}
				/>
				<CardDashboard
					icon={<RiGalleryLine className="col-span-2" size={65} />}
					title="Galeri"
					value={item?.gallery}
				/>
				<CardDashboard
					icon={<MdPeopleAlt className="col-span-2" size={65} />}
					title="Pengurus"
					value={item?.pengurus}
				/>
				<CardDashboard
					icon={<MdPeopleAlt className="col-span-2" size={65} />}
					title="Anak"
					value={item?.anak.total_anak}
				/>
				<CardDashboard
					icon={<MdPeopleAlt className="col-span-2" size={65} />}
					title="User"
					value={item?.user.total_user}
				/>
				<CardDashboard
					icon={<MdCreditCard className="col-span-2" size={65} />}
					title="Rekening"
					value={item?.rekening}
				/>
				<CardDashboard
					icon={<AiOutlineDollar className="col-span-2" size={65} />}
					title="Donasi"
					value={item?.donasi.total}
				/>
			</section>
			<section className="w-full grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-4 mt-10">
				<div className="col-auto md:col-start-1 md:col-end-4 rounded-lg bg-white drop-shadow p-4 min-h-[300px]">
					<h6 className="text-lg font-semibold text-center">Kontak masuk</h6>
				</div>
				<div className="col-auto rounded-lg bg-white drop-shadow p-4">
					<div className="flex flex-col gap-2 min-h-[200px]">
						<span className="text-lg font-semibold text-center">
							Chart Anak
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
