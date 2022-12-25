import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import { createDebit } from '../../../store/actions/debit-action';

const AddDebit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const addFormHanlder = (data) => {
		if (!isValid) return;

		dispatch(createDebit(data));
		navigate('/debit/table');
	};
	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form Artikel
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/debit/table"
				>
					Kembali
				</Link>
			</div>
			<form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
				<Input
					options={{
						...register('nomor_rekening', {
							required: 'Tidak boleh kosong.',
						}),
						type: 'number',
					}}
					id="nomor_rekening"
					label="Nomor Rekening"
					requireIcon="true"
					hasError={!!errors?.nomor_rekening}
					errorMessage={errors?.nomor_rekening?.message}
				/>
				<Input
					options={{
						...register('nama_bank', {
							required: 'Tidak boleh kosong.',
						}),
						type: 'text',
					}}
					id="nama_bank"
					label="Nama Bank"
					requireIcon="true"
					hasError={!!errors?.nama_bank}
					errorMessage={errors?.nama_bank?.message}
				/>
				<Input
					options={{
						...register('atas_nama', {
							required: 'Tidak boleh kosong.',
						}),
						type: 'text',
					}}
					id="atas_nama"
					label="Atas Nama"
					requireIcon="true"
					hasError={!!errors?.atas_nama}
					errorMessage={errors?.atas_nama?.message}
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

export default AddDebit;
