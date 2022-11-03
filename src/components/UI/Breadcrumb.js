import { memo } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
	return (
		<section className="container-custom py-4 bg-gray-100 flex flex-col md:flex-row justify-between">
			<h2 className="text-xl">{title}</h2>
			<span className="flex flex-row gap-3 text-sm">
				<Link className="text-palette-1 font-medium hover:underline" to="/">
					Beranda
				</Link>
				<span>/</span>
				<span>{title}</span>
			</span>
		</section>
	);
};

export default memo(Breadcrumb);
