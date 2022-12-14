import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Input from '../../../components/Form/Input';
import TextArea from '../../../components/Form/TextArea';
import { getDonationDataById } from '../../../store/actions/donation-action';

const DonationView = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state) => state.donation);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getDonationDataById(id));
	}, [dispatch, id]);

	let imageUrl = item?.bukti_pembayaran
		? process.env.REACT_APP_STORAGE + item?.bukti_pembayaran
		: '';

	let tfTo = item?.nama_bank
		? [item?.nama_bank, item?.nomor_rekening, item?.atas_nama].join(' - ')
		: '';

	return (
		<section className="p-3 md:p-4 lg:p-6 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Cek Donasi
			</h2>
			<div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
					to="/donation/table"
				>
					Kembali
				</Link>
			</div>
			<form className="block min-h-min">
				<Input
					id="nama"
					label="Nama Donatur"
					options={{
						disabled: true,
						defaultValue: item?.nama,
						type: 'text',
					}}
				/>
				<Input
					id="email"
					label="E-Mail"
					options={{
						disabled: true,
						defaultValue: item?.email,
						type: 'text',
					}}
				/>
				<Input
					id="telepon"
					label="Nomor Telepon"
					options={{
						disabled: true,
						defaultValue: item?.telepon,
						type: 'text',
					}}
				/>
				<TextArea
					id="alamat"
					label="Alamat"
					options={{
						disabled: true,
						rows: '4',
						defaultValue: item?.alamat,
					}}
				/>
				<Input
					id="donasi_id"
					label="ID Donasi"
					options={{
						disabled: true,
						defaultValue: item?.donasi_id,
						type: 'text',
					}}
				/>
				<Input
					id="nominal"
					label="Nominal"
					options={{
						disabled: true,
						defaultValue: item?.nominal,
						type: 'text',
					}}
				/>
				<Input
					id="jenis_donasi"
					label="Jenis Donasi"
					options={{
						disabled: true,
						defaultValue: item?.jenis_donasi,
						type: 'text',
					}}
				/>
				<Input
					id="rekening_id"
					label="Transfer ke Bank"
					options={{
						disabled: true,
						defaultValue: tfTo,
						type: 'text',
					}}
				/>
				<TextArea
					id="keterangan"
					label="Keterangan"
					options={{
						disabled: true,
						rows: '4',
						defaultValue: item?.keterangan,
					}}
				/>
				<div className="mt-4 w-full md:w-96">
					<span className="font-semibold">Bukti Pembayaran</span>
					<img
						className="mt-2 rounded w-full bg-cover"
						src={imageUrl}
						alt="bukti pembayaran"
					/>
				</div>
			</form>
		</section>
	);
};

export default DonationView;
