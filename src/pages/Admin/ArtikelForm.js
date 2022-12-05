import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Form/Input';
import { normalImageValidate, sizeLimit } from '../../utils/formValidates';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

const ArtikelForm = () => {
	const [desc, setDesc] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const addFormHanlder = (data) => {
		if (!isValid) return;
		console.log({ ...data, desc: desc });
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
					}}
					id="title"
					label="Judul Artikel"
					requireIcon="true"
					hasError={!!errors?.title}
					errorMessage={errors?.title?.message}
				/>
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
				<Input
					className="mt-4"
					options={{
						...register('slug', {
							required: 'Harap isi ketegori.',
						}),
						type: 'text',
						placeholder: 'kagiatan, agama, pendidikan',
					}}
					id="slug"
					label="Kategori Artikel"
					requireIcon="true"
					hasError={!!errors?.slug}
					errorMessage={errors?.slug?.message}
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

export default memo(ArtikelForm);
