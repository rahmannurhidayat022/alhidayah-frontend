import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import ReactQuill from 'react-quill';
import {
	getArticleById,
	updateArticleById,
} from '../../../store/actions/article-action';

const UpdateArticle = () => {
	const [desc, setDesc] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { item } = useSelector((state) => state.article);

	useEffect(() => {
		dispatch(getArticleById(id));
	}, [dispatch, id]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: 'all',
		defaultValues: useMemo(() => {
			return item;
		}, [item]),
	});

	const addFormHanlder = (data) => {
		if (!isValid) return;
		const validFormat = {
			id,
			desc,
			title: data?.title,
			image: data?.image && data?.image[0],
		};
		dispatch(updateArticleById(validFormat));
		navigate('/artikel/table');
	};

	useEffect(() => {
		reset(item);
	}, [item, reset]);

	useEffect(() => {
		if (!item) return;
		setDesc(item?.desc);
	}, [item]);

	let imageUrl = item?.image ? process.env.REACT_APP_STORAGE + item?.image : '';

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
			<form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
				<Input
					options={{
						...register('title', {
							required: 'Harap isi judul artikel.',
						}),
						type: 'text',
					}}
					id="title"
					label="Judul Artikel"
					requireIcon="true"
					hasError={!!errors?.title}
					errorMessage={errors?.title?.message}
				/>
				<div className="mt-4">
					<span className="font-semibold">Cover Saat ini</span>
					<img
						width={300}
						className="w-full md:w-[600px] object-cover rounded mt-2"
						src={imageUrl}
						alt={item?.title}
					/>
				</div>
				<Input
					className="mt-4"
					options={{
						...register('image'),
						type: 'file',
						accept: '.jpg,.jpeg,.png',
					}}
					id="image"
					label="Ubah cover artikel"
					requireIcon="true"
					hasError={!!errors?.image}
					errorMessage={errors?.image?.message}
				/>
				<div className="mt-4">
					<label htmlFor="desc" className="font-semibold">
						Deskripsi Artikel
					</label>
					<ReactQuill
						className="mt-2"
						id="desc"
						theme="snow"
						value={desc}
						onChange={setDesc}
					/>
				</div>
				<div className="mt-4 inline-flex space-x-2">
					<button
						type="submit"
						className="px-3 py-2 text-[16px] bg-indigo-800 rounded text-white"
					>
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default UpdateArticle;
