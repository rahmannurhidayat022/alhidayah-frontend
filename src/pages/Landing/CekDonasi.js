import Breadcrumb from "../../components/UI/Breadcrumb";
import Input from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchDonationHistory } from "../../store/actions/landing-action";
import Spin from "../../components/UI/Spin";
import { useEffect } from "react";
import { showAlert } from "../../store/slices/ui-slice";
import Button from "../../components/UI/Button";

const CekDonasi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.landing);

  useEffect(() => {
    if (error) {
      dispatch(
        showAlert({
          variant: "failed",
          message: error,
        })
      );
    }
  }, [dispatch, error]);

  const keywordHandler = (data) => {
    dispatch(searchDonationHistory(data?.keyword));
  };

  const renderRow = items?.map((item, index) => {
    let statusClass =
      item?.status === "check"
        ? "text-blue-700"
        : item?.status === "approve"
          ? "text-emerald-700"
          : item?.status === "reject"
            ? "text-red-700"
            : "";

    return (
      <tr key={index}>
        <td className="border border-indigo-300 p-2 text-center">
          {item?.nama}
        </td>
        <td className="border border-indigo-300 p-2 text-center">
          Rp. {item?.nominal}
        </td>
        <td className="border border-indigo-300 p-2 text-center">
          {item?.created_at}
        </td>
        <td
          className={`border border-indigo-300 p-2 text-center font-semibold ${statusClass}`}
        >
          {item?.status}
        </td>
      </tr>
    );
  });

  return (
    <>
      <Breadcrumb title="Cek Donasi" />
      <section className="container-custom my-6 grid gap-10 grid-cols-1 md:grid-cols-1 md:gap-2">
        <div>
          <h3 className="font-semibold">
            Cari riwayat donasi anda menggunakan{" "}
            <span className="text-blue-700">ID Donasi</span> atau{" "}
            <span className="text-blue-700">E-Mail</span>
          </h3>
        </div>
        <form onSubmit={handleSubmit(keywordHandler)}>
          <Input
            options={{
              ...register("keyword", { required: "Tidak boleh kosong" }),
              type: "text",
            }}
            id="keyword"
            hasError={!!errors?.keyword}
            errorMessage={errors?.keyword?.message}
          />
          <Button
            className="flex gap-2"
            options={{
              type: "submit",
              disabled: loading,
            }}
          >
            {loading && <Spin />}
            Search
          </Button>
        </form>
        {items !== null && (
          <div className="mt-10 w-full overflow-auto">
            <table className="w-full border-collapse border border-slate-400 table-auto">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="border border-indigo-300 p-2">Nama Donatur</th>
                  <th className="border border-indigo-300 p-2">Nominal</th>
                  <th className="border border-indigo-300 p-2">
                    Tanggal Donasi
                  </th>
                  <th className="border border-indigo-300 p-2">Status</th>
                </tr>
              </thead>
              <tbody>{renderRow}</tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};

export default CekDonasi;
