import { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/UI/Breadcrumb';
import { getArticleById } from '../../store/actions/article-action';
const URL_STORAGE = process.env.REACT_APP_STORAGE;

const DetailArtikel = () => {
	const { id } = useParams();
	const { item } = useSelector((state) => state.article);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getArticleById(id));
	}, [dispatch, id]);

	return (
		<>
			<Breadcrumb
				desc={{ link: '/artikel', title: 'Kembali' }}
				title="Detail Artikel"
			/>

			<section className="w-11/12 py-6 md:w-[500px] lg:w-[700px] mx-auto">
				<img
					src={`${URL_STORAGE}${item?.image}`}
					alt={`poto dari artikel ${item?.title}`}
					className="w-full bg-cover"
				/>
				<h2 className="font-semibold text-2xl md:text-3xl mb-1">
					{item?.title}
				</h2>
				<span className="flex items-center gap-1 text-16 text-gray-500">
					<BiTimeFive size={20} />
					{item?.created_at}
				</span>
				<p
					className="mt-4 font-medium text-[16px] whitespace-pre-line break-words leading-relaxed"
					dangerouslySetInnerHTML={{ __html: item?.desc }}
				></p>
			</section>
		</>
	);
};

export default DetailArtikel;
