import { useEffect } from 'react';
import { BiMailSend, BiTrashAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import EmptyData from '../../../components/Admin/EmptyData';
import Pagination from '../../../components/UI/Pagination';
import {
	deleteContactById,
	getAllContact,
} from '../../../store/actions/contact-action';
import { showAlert } from '../../../store/slices/ui-slice';

const ContactTable = () => {
	const dispatch = useDispatch();
	const { items, success, error, pagination } = useSelector(
		(state) => state.contact
	);

	useEffect(() => {
		dispatch(getAllContact());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [success]);

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

	const renderRow =
		items?.length === 0 ? (
			<EmptyData />
		) : (
			items?.map((item, index) => {
				return (
					<tr key={index}>
						<td className="border border-indigo-300 p-2">{item?.name}</td>
						<td className="border border-indigo-300 p-2">{item?.email}</td>
						<td className="border border-indigo-300 p-2">{item?.subject}</td>
						<td className="border border-indigo-300 p-2">{item?.keterangan}</td>
						<td className="border border-indigo-300 p-2 text-center">
							{item?.created_at}
						</td>
						<td className="border border-indigo-300 border-b-0 p-2 flex flex-row flex-nowrap space-x-1 justify-center items-stretch">
							<a
								rel="noreferrer"
								target={'_blank'}
								className="p-3 bg-indigo-300 rounded"
								href={`mailto:${item?.email}`}
							>
								<BiMailSend size={20} />
							</a>
							<button
								onClick={() => dispatch(deleteContactById(item.id))}
								type="button"
								className="p-3 bg-red-300 rounded"
							>
								<BiTrashAlt size={20} />
							</button>
						</td>
					</tr>
				);
			})
		);

	return (
		<section className="p-4 rounded bg-white">
			<h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
				Tabel Kontak
			</h2>
			<div className="w-full overflow-auto">
				<table className="w-full border-collapse border border-slate-400 table-auto">
					<thead className="bg-indigo-100">
						<tr>
							<th className="border border-indigo-300 p-2">Nama</th>
							<th className="border border-indigo-300 p-2">E-Mail</th>
							<th className="border border-indigo-300 p-2">Subject</th>
							<th className="border border-indigo-300 p-2">Keterangan</th>
							<th className="border border-indigo-300 p-2">Created At</th>
							<th className="border border-indigo-300 p-2"></th>
						</tr>
					</thead>
					<tbody>{renderRow}</tbody>
				</table>
			</div>
			<Pagination data={pagination} />
		</section>
	);
};

export default ContactTable;
