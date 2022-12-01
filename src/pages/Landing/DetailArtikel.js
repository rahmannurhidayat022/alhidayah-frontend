import { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { useParams, Navigate } from 'react-router-dom';
import Breadcrumb from '../../components/UI/Breadcrumb';
import { artikel as data } from '../../temp/data';

const DetailArtikel = () => {
	const [artikel, setArtikel] = useState({});
	const { id } = useParams();

	const getArtikel = () => {
		let filtered = data?.filter((item) => item.id === id);
		filtered = filtered.length > 0 ? filtered[0] : null;
		setArtikel(filtered);
	};

	useEffect(() => {
		getArtikel();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (artikel === null) {
		return <Navigate to={'*'} replace />;
	}

	return (
		<>
			<Breadcrumb
				desc={{ link: '/artikel', title: 'Kembali' }}
				title="Detail Artikel"
			/>

			<section className="w-11/12 py-6 md:w-[500px] lg:w-[700px] mx-auto">
				<img
					src={artikel?.image}
					alt={`poto dari artikel ${artikel?.title}`}
					className="w-full bg-cover"
				/>
				<h2 className="font-semibold text-2xl md:text-3xl mb-1">
					{artikel?.title}
				</h2>
				<span className="flex items-center gap-1 text-16 text-gray-500">
					<BiTimeFive size={20} />
					{artikel?.createdAt}
				</span>
				<p className="mt-4 font-medium text-[16px] whitespace-pre-line break-words leading-relaxed">
					{artikel?.body}
				</p>
			</section>
		</>
	);
};

export default DetailArtikel;
