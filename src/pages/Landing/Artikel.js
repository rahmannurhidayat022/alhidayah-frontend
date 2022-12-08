import { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/UI/Breadcrumb';
import { getArticles } from '../../store/article-action';
import { useDispatch, useSelector } from 'react-redux';
import { PUBLIC_STORAGE } from '../../temp/endpoint';
import Pagination from '../../components/UI/Pagination';

const Artikel = () => {
	// mengambil data state, untuk melihat struktur di article-slice
	const { items, pagination } = useSelector((state) => state.article);

	// action redux
	const dispatch = useDispatch();

	useEffect(() => {
		// mengambil data artikel
		dispatch(getArticles());
	}, [dispatch]);

	// menyesuaikan yang akan di panggil cek trello
	const articlesRendering = items?.map(
		({ id, title, desc, image, created_at }, index) => {
			return (
				<Link key={index} to={`/artikel/${id}`} className="shadow-sm">
					<article className="w-full overflow-x-hidden">
						<img
							className="w-full object-cover md:h-[250px]"
							src={`${PUBLIC_STORAGE}/${image}`}
							alt={`poto artikel ${title}`}
							loading="lazy"
						/>
						<div className="leading-relaxed break-words">
							<h2 className="font-semibold text-2xl hover:text-blue-900">
								{title}
							</h2>
							<span className="flex items-center gap-1 text-16 text-gray-500">
								<BiTimeFive size={20} />
								{created_at}
							</span>
							<div className="inline group">
								<p className="h-20 overflow-y-hidden font-medium text-[16px] group-hover:text-blue-900">
									{desc}
								</p>
							</div>
						</div>
					</article>
				</Link>
			);
		}
	);

	return (
		<>
			<Breadcrumb title="Kegiatan & Artikel" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{articlesRendering}
			</section>
			<section className="container-custom flex flex-col justify-center items-center">
				{pagination.totalPage > 1 && <Pagination data={pagination} />}
			</section>
		</>
	);
};

export default Artikel;
