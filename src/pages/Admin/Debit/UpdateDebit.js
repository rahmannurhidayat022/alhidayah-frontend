import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import { getDebitById, updateDebit } from '../../../store/actions/debit-action';

const UpdateDebit = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { item } = useSelector((state) => state.debit);

	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'all',
	});

	const updateFormHanlder = (data) => {
		if (!isValid) return;

		dispatch(updateDebit({ id, ...data }));
		navigate('/debit/table');
	};

	useEffect(() => {
		dispatch(getDebitById(id));
	}, [dispatch, id]);

	if (item) {
		setValue('nomor_rekening', item?.nomor_rekening);
		setValue('nama_bank', item?.nama_bank);
		setValue('atas_nama', item?.atas_nama);
	}

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form Rekening
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/debit/table"
				>
					Kembali
				</Link>
			</div>
			<form
				onSubmit={handleSubmit(updateFormHanlder)}
				className="block min-h-min"
			>
				<Input
					options={{
						...register('nomor_rekening'),
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
						...register('nama_bank'),
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
						...register('atas_nama'),
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

export default UpdateDebit;
