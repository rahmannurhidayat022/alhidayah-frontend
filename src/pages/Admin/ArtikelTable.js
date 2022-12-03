const ArtikelTable = () => {
	return (
		<section className="p-4 rounded bg-white">
			<h2 className="mb-3 font-semibold text-lg underline underline-offset-8">
				List Artikel
			</h2>
			<div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
				<button
					type="button"
					className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
				>
					Tambah
				</button>
			</div>
			<div className="w-full overflow-auto">
				<table className="border-collapse border border-slate-400 table-auto">
					<thead className="bg-slate-100">
						<tr>
							<th className="border border-slate-300 p-2">Author</th>
							<th className="border border-slate-300 p-2">Judul</th>
							<th className="border border-slate-300 p-2">Categori Artikel</th>
							<th className="border border-slate-300 p-2">Tanggal Dibuat</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-slate-300 p-2">Rahman Nurhidayat</td>
							<td className="border border-slate-300 p-2">
								Membantu korban bencana alam CIanjur
							</td>
							<td className="border border-slate-300 p-2">amal, shodaqoh</td>
							<td className="border border-slate-300 p-2">22 Oktober 2022</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ArtikelTable;
