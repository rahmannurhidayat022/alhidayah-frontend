import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createGallery } from '../../../store/actions/gallery-action';
import Input from '../../../components/Form/Input';
import { normalImageValidate, sizeLimit } from '../../../utils/formValidates';

const AddPhoto = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addFormHanlder = (data) => {
		if (!isValid) return;

		const validFormat = {
			title: data?.title,
			image: data?.image[0],
		};

		dispatch(createGallery(validFormat));
		navigate('/gallery/table');
	};

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form Tambah Poto Galeri
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/gallery/table"
				>
					Kembali
				</Link>
			</div>
			<form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
				<Input
					options={{
						...register('title', {
							required: 'Tidak boleh kosong',
						}),
						type: 'text',
					}}
					id="title"
					label="Title"
					requireIcon="true"
					hasError={!!errors?.title}
					errorMessage={errors?.title?.message}
				/>
				<Input
					className="mt-4"
					options={{
						...register('image', {
							required: 'Tidak boleh kosong.',
							validate: {
								extentions: (values) => normalImageValidate(values),
								sizeLimit: (values) => sizeLimit(values),
							},
						}),
						type: 'file',
						accept: '.jpg,.jpeg,.png',
					}}
					id="image"
					label="Image"
					requireIcon="true"
					hasError={!!errors?.image}
					errorMessage={errors?.image?.message}
				/>
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

export default AddPhoto;
