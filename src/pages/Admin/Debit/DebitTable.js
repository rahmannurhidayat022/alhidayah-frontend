import { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyData from "../../../components/Admin/EmptyData";
import SearchForm from "../../../components/Form/SearchForm";
import Pagination from "../../../components/UI/Pagination";
import {
  deleteDebitById,
  getAllDebit,
} from "../../../store/actions/debit-action";
import { showAlert } from "../../../store/slices/ui-slice";

const DebitTable = () => {
  const dispatch = useDispatch();
  const { items, success, error, pagination } = useSelector(
    (state) => state.debit
  );

  useEffect(() => {
    dispatch(getAllDebit({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    if (success) {
      dispatch(
        showAlert({
          variant: "success",
          message: success,
        })
      );
    }

    if (error) {
      dispatch(
        showAlert({
          variant: "failed",
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
            <td className="border border-indigo-300 p-2">
              {item?.nomor_rekening}
            </td>
            <td className="border border-indigo-300 p-2">{item?.nama_bank}</td>
            <td className="border border-indigo-300 p-2">{item?.atas_nama}</td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.created_at}
            </td>
            <td className="border border-indigo-300 border-b-0 p-2 flex flex-row flex-nowrap space-x-1 justify-center items-stretch">
              <Link
                to={`/debit/update/${item.id}`}
                className="p-3 bg-orange-300 rounded"
              >
                <AiOutlineEdit size={20} />
              </Link>
              <button
                onClick={() => dispatch(deleteDebitById(item?.id))}
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
        Tabel Rekening
      </h2>
      <div className="mb-3 py-2 flex flex-col gap-3 flex-wrap overflow-x-auto">
        <Link
          className="w-min px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
          to="/debit/add"
        >
          Tambah
        </Link>
        <SearchForm action={getAllDebit} />
      </div>
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse border border-slate-400 table-auto">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-indigo-300 p-2">Nomor Rekening</th>
              <th className="border border-indigo-300 p-2">Bank</th>
              <th className="border border-indigo-300 p-2">Atas Nama</th>
              <th className="border border-indigo-300 p-2">Tanggal Dibuat</th>
              <th className="border border-indigo-300 p-2"></th>
            </tr>
          </thead>
          <tbody>{renderRow}</tbody>
        </table>
      </div>
      <Pagination data={pagination} handler={getAllDebit} />
    </section>
  );
};

export default DebitTable;
