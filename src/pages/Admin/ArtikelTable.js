import { useEffect } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmptyData from '../../components/Admin/EmptyData';
import { getArticles } from '../../store/article-action';
import { showAlert } from '../../store/ui-slice';

const ArtikelTable = () => {
	const dispatch = useDispatch();
	const { items, success, error, pages } = useSelector(
		(state) => state.article
	);

	useEffect(() => {
		dispatch(getArticles());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [success]);

	useEffect(() => {
		if (success) {
			dispatch(
				showAlert({
					variant: 'success',
					message: 'Berhasil menambahkan data artikel.',
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

	const renderPages = pages?.map(({ url, label, active }, index) => {
		return (
			<button
				disabled={active || url === null}
				onClick={() => dispatch(getArticles(url))}
				key={index}
				className={`py-1 px-4 border rounded disabled:bg-slate-200 ${
					active
						? 'border-indigo-500 font-semibold'
						: 'border-slate-300 text-slate-700'
				}`}
			>
				{label.split('.', 2).length > 1 ? label.split('.', 2)[1] : label}
			</button>
		);
	});

	const renderRow =
		items?.length === 0 ? (
			<EmptyData />
		) : (
			items?.map((item, index) => {
				return (
					<tr key={index}>
						<td className="border border-indigo-300 p-2">{item?.author_id}</td>
						<td className="border border-indigo-300 p-2">{item?.title}</td>
						<td className="border border-indigo-300 p-2">{item?.image}</td>
						<td className="border border-indigo-300 p-2">{item?.created_at}</td>
						<td className="border border-indigo-300 border-b-0 p-2 flex flex-row flex-nowrap space-x-1 justify-center items-stretch">
							<Link
								to={`/admin/artikel/form?action=view&id=${item.id}`}
								className="p-3 bg-gray-400 rounded"
							>
								<AiOutlineEye size={20} />
							</Link>
							<Link
								to={`/admin/artikel/form?action=put&id=${item.id}`}
								className="p-3 bg-orange-400 rounded"
							>
								<AiOutlineEdit size={20} />
							</Link>
							<button type="button" className="p-3 bg-red-400 rounded">
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
				List Artikel
			</h2>
			<div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
					to="/admin/artikel/form?action=add"
				>
					Tambah
				</Link>
			</div>
			<div className="w-full overflow-auto">
				<table className="w-full border-collapse border border-slate-400 table-auto">
					<thead className="bg-indigo-100">
						<tr>
							<th className="border border-indigo-300 p-2">Author</th>
							<th className="border border-indigo-300 p-2">Judul</th>
							<th className="border border-indigo-300 p-2">Cover</th>
							<th className="border border-indigo-300 p-2">Tanggal Dibuat</th>
							<th className="border border-indigo-300 p-2"></th>
						</tr>
					</thead>
					<tbody>{renderRow}</tbody>
				</table>
			</div>
			<div className="flex flex-row flex-wrap gap-1 justify-start items-center mt-4">
				{renderPages}
			</div>
		</section>
	);
};

export default ArtikelTable;
