import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Form/Input';
import Modal from '../../components/UI/Modal';
import { normalImageValidate, sizeLimit } from '../../utils/formValidates';

const ArtikelTable = () => {
	const [showAddForm, setShowAddForm] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const toggleAddFormHandler = () => {
		setShowAddForm((state) => !state);
	};

	const addFormHanlder = (data) => {
		if (!isValid) return;
		console.log(data);
	};

	return (
		<section className="p-4 rounded bg-white">
			<h2 className="mb-3 font-semibold text-lg underline underline-offset-8">
				List Artikel
			</h2>
			<div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
				<button
					type="button"
					className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
					onClick={toggleAddFormHandler}
				>
					Tambah
				</button>
			</div>
			<div className="w-full overflow-auto">
				<table className="border-collapse border border-slate-400 table-auto">
					<thead className="bg-indigo-100">
						<tr>
							<th className="border border-indigo-300 p-2">Author</th>
							<th className="border border-indigo-300 p-2">Judul</th>
							<th className="border border-indigo-300 p-2">Categori Artikel</th>
							<th className="border border-indigo-300 p-2">Tanggal Dibuat</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-indigo-300 p-2">
								Rahman Nurhidayat
							</td>
							<td className="border border-indigo-300 p-2">
								Membantu korban bencana alam CIanjur
							</td>
							<td className="border border-indigo-300 p-2">amal, shodaqoh</td>
							<td className="border border-indigo-300 p-2">22 Oktober 2022</td>
						</tr>
					</tbody>
				</table>
			</div>
			{showAddForm && (
				<Modal onClose={toggleAddFormHandler}>
					<div className="w-full">
						<h3 className="text-lg font-semibold underline underline-offset-8 mb-6 text-indigo-800">
							Form Tambah Artikel
						</h3>
						<form onSubmit={handleSubmit(addFormHanlder)}>
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
						</form>
					</div>
				</Modal>
			)}
		</section>
	);
};

export default ArtikelTable;
