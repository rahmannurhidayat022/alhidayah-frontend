import { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyData from "../../../components/Admin/EmptyData";
import Pagination from "../../../components/UI/Pagination";
import {
  getAdministratorData,
  removeAdministratorData,
} from "../../../store/actions/administrator-action";
import { showAlert } from "../../../store/slices/ui-slice";

const Administrator = () => {
  const dispatch = useDispatch();
  const { items, success, error, pagination } = useSelector(
    (state) => state.administrator
  );

  useEffect(() => {
    dispatch(getAdministratorData());
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
            <td className="border border-indigo-300 p-2 text-center">
              {item?.nik}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.nama_pengurus}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.tempat_lahir}, {item?.tanggal_lahir}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.jk === "L" ? "Laki-Laki" : item?.jk === "P" && "Perempuan"}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.jabatan}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.no_telp}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.alamat}
            </td>
            <td className="border border-indigo-300 p-2 text-center">
              {item?.created_at}
            </td>
            <td className="border border-indigo-300 border-b-0 p-2 flex flex-row flex-nowrap space-x-1 justify-center items-stretch">
              <Link
                to={`/administrator/update/${item.id}`}
                className="p-3 bg-orange-300 rounded"
              >
                <AiOutlineEdit size={20} />
              </Link>
              <button
                onClick={() => dispatch(removeAdministratorData(item?.id))}
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
        Tabel Data Pengurus Yayasan
      </h2>
      <div className="mb-3 py-2 inline-flex flex-nowrap overflow-x-auto">
        <Link
          className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
          to="/administrator/add"
        >
          Tambah
        </Link>
      </div>
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse border border-slate-400 table-auto">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-indigo-300 p-2">NIK</th>
              <th className="border border-indigo-300 p-2">Nama</th>
              <th className="border border-indigo-300 p-2">
                Tempat Tanggal Lahir
              </th>
              <th className="border border-indigo-300 p-2">Jenis Kelamin</th>
              <th className="border border-indigo-300 p-2">Jabatan</th>
              <th className="border border-indigo-300 p-2">Nomor Telepon</th>
              <th className="border border-indigo-300 p-2">Alamat</th>
              <th className="border border-indigo-300 p-2">Created At</th>
              <th className="border border-indigo-300 p-2"></th>
            </tr>
          </thead>
          <tbody>{renderRow}</tbody>
        </table>
      </div>
      <Pagination data={pagination} handler={getAdministratorData} />
    </section>
  );
};

export default Administrator;
