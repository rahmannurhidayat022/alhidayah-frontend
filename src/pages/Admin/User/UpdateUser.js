import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import { updateUser } from '../../../store/actions/user-action';

const UpdateUser = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const addFormHanlder = (data) => {
		if (!isValid) return;

		dispatch(updateUser({ ...data, id }));
		navigate('/user/table');
	};

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Form User
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/user/table"
				>
					Kembali
				</Link>
			</div>
			<form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
				<Input
					options={{
						...register('name', {
							required: 'Tidak boleh kosong',
						}),
						type: 'text',
					}}
					id="name"
					label="Nama Lengkap"
					requireIcon="true"
					hasError={!!errors?.name}
					errorMessage={errors?.name?.message}
				/>
				<Input
					options={{
						...register('email', {
							required: 'Harap isi E-Mail aktif anda',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
							},
						}),
						type: 'email',
					}}
					id="email"
					label="E-Mail"
					requireIcon="true"
					hasError={!!errors?.email}
					errorMessage={errors?.email?.message}
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

export default UpdateUser;
