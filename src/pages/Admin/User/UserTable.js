import { useEffect } from 'react';
// import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyData from '../../../components/Admin/EmptyData';
import Pagination from '../../../components/UI/Pagination';
import { deleteUserById, getUsers } from '../../../store/actions/user-action';
import { showAlert } from '../../../store/slices/ui-slice';

const UserTable = () => {
	const dispatch = useDispatch();
	const { items, success, error, pagination } = useSelector(
		(state) => state.user
	);

	useEffect(() => {
		dispatch(getUsers());
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
						<td className="border border-indigo-300 p-2">{item?.role}</td>
						<td className="border border-indigo-300 p-2">{item?.created_at}</td>
						<td className="border border-indigo-300 border-b-0 p-2 flex flex-row flex-nowrap space-x-1 justify-center items-stretch">
							{/* <Link
								to={`/artikel/view/${item.id}`}
								className="p-3 bg-gray-300 rounded"
							>
								<AiOutlineEye size={20} />
							</Link>
							<Link
								to={`/artikel/update/${item.id}`}
								className="p-3 bg-orange-300 rounded"
							>
								<AiOutlineEdit size={20} />
							</Link> */}
							<button
								onClick={() => dispatch(deleteUserById(item.id))}
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
				Tabel User
			</h2>
			<div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
					to="/user/add"
				>
					Tambah
				</Link>
			</div>
			<div className="w-full overflow-auto">
				<table className="w-full border-collapse border border-slate-400 table-auto">
					<thead className="bg-indigo-100">
						<tr>
							<th className="border border-indigo-300 p-2">Nama</th>
							<th className="border border-indigo-300 p-2">Email</th>
							<th className="border border-indigo-300 p-2">Role</th>
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

export default UserTable;
