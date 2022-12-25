import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import Spin from '../../../components/UI/Spin';
import { resetPassword } from '../../../store/actions/user-action';
import { showAlert } from '../../../store/slices/ui-slice';

const ResetPassword = () => {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const dispatch = useDispatch();
	const { loading, success, error } = useSelector((state) => state.user);
	const { token } = useParams();

	const forgotPasswordHandler = (data) => {
		if (!isValid) return;
		dispatch(resetPassword({ ...data, token }));
		reset();
	};

	useEffect(() => {
		if (success) {
			dispatch(
				showAlert({
					variant: 'success',
					message: success,
				})
			);
		}

		if (error) {
			dispatch(
				showAlert({
					variant: 'failed',
					message: error,
				})
			);
		}
	}, [dispatch, success, error]);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
			<div className="bg-white md:bg-gray-200 flex flex-col justify-center">
				<form
					onSubmit={handleSubmit(forgotPasswordHandler)}
					className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded"
				>
					<div className="w-full flex flex-col justify-start items-center gap-4">
						<h2 className="text-2xl text-gray-700 font-bold text-center mb-7">
							Reset Password
						</h2>
					</div>
					<Input
						id="email"
						label="E-Mail"
						requireIcon="true"
						hasError={!!errors?.email}
						errorMessage={errors?.email?.message}
						options={{
							...register('email', {
								required: 'E-Mail tidak boleh kosong',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							}),
							type: 'email',
						}}
					/>
					<Input
						id="password"
						label="Password Baru"
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
					<Button
						options={{ type: 'submit', disabled: loading }}
						className="w-full mt-3 inline-flex items-center justify-center gap-2"
					>
						Submit
						{loading && <Spin />}
					</Button>
					<div className="mt-5">
						<Link className="underline" to="/auth-admin">
							Login ke Dashboard
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
