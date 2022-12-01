import { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/UI/Breadcrumb';
import { artikel as data } from '../../temp/data';

const Artikel = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setArticles(data);
	}, []);

	const articlesRendering = articles?.map(
		({ id, image, createdAt, title, body }, index) => {
			return (
				<Link key={index} to={`/artikel/${id}`} className="shadow-sm">
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
			<Breadcrumb title="Kegiatan & Artikel" />
			<section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{articlesRendering}
			</section>
		</>
	);
};

export default Artikel;
