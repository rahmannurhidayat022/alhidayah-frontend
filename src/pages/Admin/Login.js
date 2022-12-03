import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Button from '../../components/UI/Button';
import Logo from '../../components/UI/Logo';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/auth-action';
import { useEffect } from 'react';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'all' });

	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const loginHandler = (data) => {
		dispatch(signInRequest(data));
	};

	useEffect(() => {
		if (!isAuth) return;
		navigate('/admin');
	}, [isAuth, navigate]);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
			<div className="bg-white md:bg-gray-200 flex flex-col justify-center">
				<form
					onSubmit={handleSubmit(loginHandler)}
					className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded"
				>
					<div className="w-full flex flex-col justify-start items-center gap-4">
						<div className="w-44">
							<Logo />
						</div>
						<h2 className="text-2xl text-gray-700 font-bold text-center mb-7">
							SISTEM INFORMASI YAYASAN
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
						label="Password"
						requireIcon="true"
						hasError={!!errors?.password}
						errorMessage={errors?.password?.message}
						options={{
							...register('password', {
								required: 'Password tidak boleh kosong',
							}),
							type: 'password',
						}}
					/>
					<Button
						options={{ type: 'submit', disabled: !isValid }}
						className="w-full mt-3"
					>
						Masuk Dashboard
					</Button>
					<div className="mt-5">
						<Link className="underline" to="reset-password">
							Lupa password?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
