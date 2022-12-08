import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import { getArticleById } from '../../../store/article-action';
import { PUBLIC_STORAGE } from '../../../temp/endpoint';
import ReactQuill from 'react-quill';

const ViewArticle = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state) => state.article);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getArticleById(id));
	}, [dispatch, id]);

	let imageUrl = item?.image ? PUBLIC_STORAGE + item?.image : '';

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form Artikel
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/artikel/table"
				>
					Kembali
				</Link>
			</div>
			<form className="block min-h-min">
				<Input
					options={{
						disabled: true,
						defaultValue: item?.title,
						type: 'text',
					}}
					id="title"
					label="Judul Artikel"
					requireIcon="true"
				/>
				<div className="mt-4">
					<span className="font-semibold">Cover Image</span>
					<img
						width={300}
						className="w-full md:w-[600px] object-cover rounded mt-2"
						src={imageUrl}
						alt={item?.title}
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="desc" className="font-semibold">
						Deskripsi Artikel
					</label>
					<ReactQuill
						className="mt-2"
						id="desc"
						theme="snow"
						value={item?.desc}
						readOnly
					/>
				</div>
			</form>
		</section>
	);
};

export default ViewArticle;
