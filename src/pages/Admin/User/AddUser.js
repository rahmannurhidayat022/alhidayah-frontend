import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import { registerUser } from '../../../store/actions/user-action';

const AddUser = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addFormHanlder = (data) => {
		if (!isValid) return;

		dispatch(registerUser(data));
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
				<Select
					options={{
						...register('role', {
							required: 'Tidak boleh kosong.',
						}),
					}}
					id="role"
					label="Role User"
					errorMessage={errors?.role?.message}
					requireIcon="true"
					hasError={!!errors?.role}
				>
					<option value="admin">Admin</option>
					<option value="pengurus">Pengurus</option>
				</Select>
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
				<Input
					id="password"
					label="Password"
					requireIcon="true"
					hasError={!!errors?.password}
					errorMessage={errors?.password?.message}
					options={{
						...register('password', {
							required: 'Tidak boleh kosong',
							validate: (value) => {
								if (value.length < 8) return 'Min 8 Karakter';
							},
						}),
						type: 'password',
					}}
				/>
				<Input
					id="password_confirmation"
					label="Konfirmasi Password"
					requireIcon="true"
					hasError={!!errors?.password_confirmation}
					errorMessage={errors?.password_confirmation?.message}
					options={{
						...register('password_confirmation', {
							required: 'Tidak boleh kosong',
							validate: (value) => {
								if (watch('password') !== value) {
									return 'Password tidak sama.';
								}
							},
						}),
						type: 'password',
					}}
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

export default AddUser;
