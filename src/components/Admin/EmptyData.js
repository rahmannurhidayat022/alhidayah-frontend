import { AiOutlineInbox } from "react-icons/ai";

const EmptyData = ({ span = 6 }) => {
	return (
		<tr>
			<td colSpan={span} className="p-6 text-center bg-slate-100">
				<AiOutlineInbox size={44} className="mx-auto" />
				Belum ada data
			</td>
		</tr>
	);
};

export default EmptyData;
