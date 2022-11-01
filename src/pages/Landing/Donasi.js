import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import TextArea from '../../components/Form/TextArea';
import LandingLayout from '../../components/Layout/LandingLayout';
import Breadcrumb from '../../components/UI/Breadcrumb';
import Button from '../../components/UI/Button';
import CopyToClipboard from '../../components/UI/CopyToClipboard';
// import Spin from '../../components/UI/Spin';
import { HiInformationCircle } from 'react-icons/hi';
import { ImWarning } from 'react-icons/im';
import {
	maxLengthPhoneNumber,
	minLengthPhoneNumber,
	normalImageValidate,
	sizeLimit,
} from '../../utils/formValidates';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { saveToDonasiStore } from '../../store/landing-slice';

const rekening = [
	{
		id: 1,
		bank: 'Mandiri',
		nomor: '1440012576986',
		pemilik: 'Yayasan Al-Hidayah Baitul Hatim',
	},
	{
		id: 2,
		bank: 'BRI',
		nomor: '0220012576986',
		pemilik: 'Solichin',
	},
];

const Donasi = () => {
	const [fieldNominalLainnya, setFieldNominalLainnya] = useState(false);
	const [confirmModal, setConfirmModal] = useState(false);
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.landing.donation);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		watch,
		unregister,
	} = useForm({
		mode: 'all',
	});

	let nominal = watch('nominal');
	// const loading = true;

	useEffect(() => {
		if (nominal === 'lainnya') {
			setFieldNominalLainnya(true);
		} else {
			setFieldNominalLainnya(false);
			unregister('nominal_lainnya');
		}
	}, [nominal, unregister]);

	const onSubmit = (data) => {
		if (!isValid) return;

		const newData = {
			nama_lengkap: data?.nama,
			nominal_donasi:
				data?.nominal !== 'lainnya' ? data?.nominal : data?.nominal_lainnya,
			bank_pengirim: data?.bank,
			jenis_donasi: data?.jenis_donasi,
			alamat: data?.alamat,
			email: data?.email,
			whatsapp: data?.whatsapp,
			keterangan: data?.keterangan,
		};

		dispatch(saveToDonasiStore(newData));
		setConfirmModal(true);
	};

	const confirmHandler = () => {
		//getValue dari bukti transfer

		//POST upload bukti transfer
		const resImageUploaded = '/image/example.png';

		const fullData = {
			...data,
			bukti_transfer: resImageUploaded,
		};

		console.log(fullData);
		setConfirmModal(false);
		reset();
	};

	const renderData = rekening?.map(({ bank, nomor, pemilik }, index) => {
		return (
			<li key={index} className="mb-2">
				<div className="flex flex-row gap-4">
					<span className="font-semibold">Bank {bank}:</span>
					<CopyToClipboard value={nomor} />
				</div>
				<span>a.n. {pemilik}</span>
			</li>
		);
	});

	return (
		<LandingLayout>
			<Breadcrumb title="Formulir Donasi" />
			<section className="container-custom py-6">
				<h2 className="text-lg font-semibold mb-5">Formulir Donasi</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Select
						options={{
							...register('jenis_donasi', {
								required: 'Pilih salah satu opsi jenis donasi',
							}),
						}}
						id="jenis_donasi"
						label="Jenis Donasi"
						errorMessage={errors?.jenis_donasi?.message}
						requireIcon="true"
						hasError={!!errors?.jenis_donasi}
					>
						<option value="shodaqoh">Shodaqoh</option>
						<option value="infaq">Infaq</option>
						<option value="qurban">Qurban</option>
						<option value="zakat">Zakat</option>
					</Select>
					<div className="block lg:flex lg:flex-row lg:gap-3">
						<Select
							options={{
								...register('nominal', {
									required: 'Pilih salah satu opsi jenis donasi',
								}),
							}}
							id="nominal"
							label="Nominal"
							errorMessage={errors?.nominal?.message}
							requireIcon="true"
							hasError={!!errors?.nominal}
						>
							<option value="10000">Rp 10.000</option>
							<option value="50000">Rp 50.000</option>
							<option value="100000">Rp 100.000</option>
							<option value="300000">Rp 300.000</option>
							<option value="500000">Rp 500.000</option>
							<option value="lainnya">Lainnya ...</option>
						</Select>
						<Select
							options={{
								...register('bank', {
									required:
										'Pilih salah satu opsi nomor rekening bank milik yayasan',
								}),
							}}
							id="bank"
							label="Pilih Bank"
							errorMessage={errors?.bank?.message}
							requireIcon="true"
							hasError={!!errors?.bank}
						>
							<option value="mandiri">Mandiri</option>
							<option value="btpn">Bank BTPN</option>
							<option value="bsi">BSI - Bank Syariah Indonesia</option>
							<option value="bni">BNI - Bank Negara Indonesia</option>
							<option value="bri">BRI - Bank Republik Indonesia</option>
							<option value="bca">BCA - Bank Central Asia</option>
						</Select>
					</div>
					{fieldNominalLainnya && (
						<Input
							prefix="Rp"
							options={{
								...register('nominal_lainnya', {
									required: 'Harap isi nominal donasi anda',
									valueAsNumber: true,
									min: {
										value: 10000,
										message: 'Min donasi Rp 10.000',
									},
								}),
								type: 'number',
							}}
							id="nominal_lainnya"
							label="Nominal Lainnya"
							requireIcon="true"
							hasError={!!errors?.nominal_lainnya}
							errorMessage={errors?.nominal_lainnya?.message}
						/>
					)}
					<Input
						options={{
							...register('nama', {
								required: 'Harap isi Nama Lengkap anda',
							}),
							type: 'text',
						}}
						id="nama"
						label="Nama Lengkap"
						requireIcon="true"
						hasError={!!errors?.nama}
						errorMessage={errors?.nama?.message}
					/>
					<TextArea
						id="alamat"
						label="Alamat"
						requireIcon="true"
						errorMessage={errors?.alamat?.message}
						hasError={!!errors?.alamat}
						options={{
							...register('alamat', {
								required: 'Harap isi alamat anda',
							}),
							rows: '4',
						}}
					></TextArea>
					<div className="block lg:flex lg:flex-row lg:gap-3">
						<Input
							prefix="+62"
							options={{
								...register('whatsapp', {
									required: 'Harap isi nomor whatsapp anda',
									valueAsNumber: true,
									validate: {
										minLength: (value) => minLengthPhoneNumber(value),
										maxLength: (value) => maxLengthPhoneNumber(value),
									},
								}),
								type: 'number',
							}}
							id="whatsapp"
							label="Nomor Whatsapp"
							requireIcon="true"
							hasError={!!errors?.whatsapp}
							errorMessage={errors?.whatsapp?.message}
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
					</div>
					<TextArea
						id="keterangan"
						label="Keterangan"
						errorMessage={errors?.keterangan?.message}
						hasError={!!errors?.keterangan}
						options={{
							...register('keterangan'),
							rows: '4',
						}}
					></TextArea>
					<div className="lg:max-w-3xl my-6 py-4 px-2 rounded-lg border-2 border-palette-1">
						<p className="flex gap-2 items-center text-lg mb-4 text-palette-1 font-semibold">
							<span>
								<HiInformationCircle size={30} />
							</span>
							Berikut informasi nomor rekening Yayasan Al-Hidayah Baitul Hatim
						</p>
						<ul className="">{renderData}</ul>
						<Input
							className="mt-10"
							options={{
								...register('bukti_transfer', {
									required: 'Harap upload bukti transfer anda',
									validate: {
										extentions: (values) => normalImageValidate(values),
										sizeLimit: (values) => sizeLimit(values),
									},
								}),
								type: 'file',
								accept: '.jpg,.jpeg,.png',
							}}
							id="bukti_transfer"
							label="Bukti Pembayaran"
							requireIcon="true"
							hasError={!!errors?.bukti_transfer}
							errorMessage={errors?.bukti_transfer?.message}
						/>
					</div>
					<Button
						className="flex gap-2"
						options={{
							type: 'submit',
							disabled: !isValid,
						}}
					>
						Kirim
					</Button>
				</form>
			</section>
			{confirmModal && (
				<Modal onClose={() => setConfirmModal(false)}>
					<div className="flex justify-center mb-4">
						<div className="bg-blue-200 rounded-full p-3">
							<span>
								<ImWarning className="text-blue-600" size={26} />
							</span>
						</div>
					</div>
					<h3 className="text-lg font-semibold text-center leading-6 text-gray-900">
						Konfirmasi data donasi
					</h3>
					<div className="mt-2">
						<p className="text-sm text-center text-gray-600">
							Pastikan data yang anda masukan sudah benar. Setelah terkirim data
							tidak dapat diubah.
						</p>
					</div>
					<div className="flex flex-col md:flex-row-reverse md:justify-center gap-2 mt-7">
						<button
							onClick={confirmHandler}
							className="py-3 px-3 md:px-10 md:py-2 bg-palette-1 text-white rounded font-bold"
						>
							Kirim
						</button>
						<button
							onClick={() => setConfirmModal(false)}
							className="py-2 px-3 border-2 border-gray-300 bg-slate-100 rounded text-gray-600 font-bold"
						>
							Cancel
						</button>
					</div>
				</Modal>
			)}
		</LandingLayout>
	);
};

export default Donasi;
