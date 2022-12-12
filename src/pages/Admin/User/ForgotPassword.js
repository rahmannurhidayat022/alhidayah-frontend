import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import Logo from '../../../components/UI/Logo';
import Spin from '../../../components/UI/Spin';
import { forgotPassword } from '../../../store/actions/user-action';
import { showAlert } from '../../../store/slices/ui-slice';

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });
	const dispatch = useDispatch();
	const { loading, success, error } = useSelector((state) => state.user);

	const forgotPasswordHandler = (data) => {
		if (!isValid) return;
		dispatch(forgotPassword(data));
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
						<div className="w-44">
							<Logo />
						</div>
						<h2 className="text-2xl text-gray-700 font-bold text-center mb-7">
							Lupa Password
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
					<Button
						options={{ type: 'submit', disabled: loading }}
						className="w-full mt-3 inline-flex items-center justify-center gap-2"
					>
						Verifikasi E-Mail
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

export default ForgotPassword;
