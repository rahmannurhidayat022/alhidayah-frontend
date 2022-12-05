import { Link } from 'react-router-dom';

const ArtikelTable = () => {
	return (
		<section className="p-4 rounded bg-white">
			<h2 className="mb-3 font-semibold text-lg underline underline-offset-8 text-indigo-900">
				List Artikel
			</h2>
			<div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
				<Link
					className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
					to="/admin/artikel/form"
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
							<th className="border border-indigo-300 p-2">Categori Artikel</th>
							<th className="border border-indigo-300 p-2">Tanggal Dibuat</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-indigo-300 p-2">
								Rahman Nurhidayat
							</td>
							<td className="border border-indigo-300 p-2">
								Membantu korban bencana alam CIanjur
							</td>
							<td className="border border-indigo-300 p-2">amal, shodaqoh</td>
							<td className="border border-indigo-300 p-2">22 Oktober 2022</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ArtikelTable;
