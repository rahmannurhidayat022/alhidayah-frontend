import { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Form/Input';
import { normalImageValidate, sizeLimit } from '../../utils/formValidates';
import ReactQuill from 'react-quill';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { PUBLIC_STORAGE } from '../../temp/endpoint';
import { addArticle } from '../../store/article-action';

const ArtikelForm = () => {
	const [desc, setDesc] = useState('');
	const [article, setArticle] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const actionParams = searchParams.get('action');
	const idParams = searchParams.get('id');

	useEffect(() => {
		if (
			actionParams === null ||
			!['add', 'view', 'put'].includes(actionParams)
		) {
			return navigate('/admin/artikel');
		}

		if (['view', 'put'].includes(actionParams) && idParams === null) {
			return navigate('/admin/artikel');
		}

		if (['view', 'put'].includes(actionParams)) {
			// dispatch(
			// 	getArticleById({
			// 		id: idParams,
			// 		setState: setArticle,
			// 	})
			// );
			setDesc(article.desc);
		}
	}, [actionParams, article.desc, dispatch, idParams, navigate]);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const addFormHanlder = (data) => {
		if (!isValid) return;

		const { id } = JSON.parse(localStorage.getItem('userInfo'));
		dispatch(
			addArticle({
				title: data.title,
				image: data.image[0],
				desc: desc,
				author_id: id,
			})
		);
		navigate('/admin/artikel');
	};

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form Artikel
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/admin/artikel"
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
						defaultValue: ['view', 'put'].includes(actionParams)
							? article?.title
							: '',
						disabled: ['view'].includes(actionParams),
					}}
					id="title"
					label="Judul Artikel"
					requireIcon="true"
					hasError={!!errors?.title}
					errorMessage={errors?.title?.message}
				/>
				{['view', 'put'].includes(actionParams) && (
					<>
						<h3 className="font-semibold mb-2">Cover artikel yang sekarang</h3>
						<img
							className="w-full md:w-[500px] rounded"
							width={300}
							src={`${PUBLIC_STORAGE}${article?.image}`}
							alt={article?.title}
						/>
					</>
				)}
				{['add', 'put'].includes(actionParams) && (
					<Input
						className="mt-4"
						options={{
							...register('image', {
								required: 'Harap upload cover artikel',
								validate: {
									extentions: (values) => normalImageValidate(values),
									sizeLimit: (values) => sizeLimit(values),
								},
							}),
							type: 'file',
							accept: '.jpg,.jpeg,.png',
						}}
						id="image"
						label="Cover Artikel"
						requireIcon="true"
						hasError={!!errors?.image}
						errorMessage={errors?.image?.message}
					/>
				)}
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
						readOnly={actionParams === 'view' ? true : false}
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

export default memo(ArtikelForm);
