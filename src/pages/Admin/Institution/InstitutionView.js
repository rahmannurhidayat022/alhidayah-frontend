import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/Form/Input";
import {
  addInstitutionData,
  deleteInstitutionDataById,
  getInstitutionData,
  updateInstitutionData,
} from "../../../store/actions/institution-action";
import { showAlert } from "../../../store/slices/ui-slice";

const InstitutionView = () => {
  const [disableForm, setDisableForm] = useState(true);
  const { item, success, error, loading } = useSelector(
    (state) => state.institution
  );
  const dispatch = useDispatch();
  let id = item?.id;

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    dispatch(getInstitutionData());
    setDisableForm(true);

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

  const addFormHanlder = (data) => {
    if (id !== null && id !== undefined) {
      dispatch(updateInstitutionData({ id, ...data }));
    } else {
      dispatch(addInstitutionData(data));
    }
  };

  const deleteHandler = (idItem) => {
    dispatch(deleteInstitutionDataById(idItem));
  };

  if (item) {
    setValue("nama_yayasan", item?.nama_yayasan);
    setValue("akte_notaris", item?.akte_notaris);
    setValue("kemenkumham", item?.kemenkumham);
    setValue("npwp", item?.npwp);
    setValue("sk_kota", item?.sk_kota);
    setValue("sk_provinsi", item?.sk_provinsi);
    setValue("profil_yayasan", item?.profil_yayasan);
  } else {
    setValue("nama_yayasan", "");
    setValue("akte_notaris", "");
    setValue("kemenkumham", "");
    setValue("npwp", "");
    setValue("sk_kota", "");
    setValue("sk_provinsi", "");
    setValue("profil_yayasan", "");
  }

  return (
    <section className="p-4 rounded bg-white">
      <h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
        Tabel Data Yayasan
      </h2>
      <div className="mb-3 py-2 inline-flex flex-nowrap gap-2 overflow-x-auto">
        <button
          className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white"
          onClick={() => setDisableForm((prev) => !prev)}
        >
          {disableForm ? "Isi Data" : "Cancel"}
        </button>
        {id !== undefined && (
          <button
            className="px-3 py-2 inline-flex flex-nowrap bg-red-400 rounded text-white"
            onClick={() => deleteHandler(id)}
          >
            Hapus Data
          </button>
        )}
      </div>
      <form className="block min-h-min" onSubmit={handleSubmit(addFormHanlder)}>
        <Input
          options={{
            ...register("nama_yayasan", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="nama_yayasan"
          label="Nama Yayasan"
          requireIcon="true"
          hasError={!!errors?.nama_yayasan}
          errorMessage={errors?.nama_yayasan?.message}
        />
        <Input
          options={{
            ...register("akte_notaris", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="akte_notaris"
          label="Akte Notaris"
          requireIcon="true"
          hasError={!!errors?.akte_notaris}
          errorMessage={errors?.akte_notaris?.message}
        />
        <Input
          options={{
            ...register("kemenkumham", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="kemenkumham"
          label="Kemenkumham"
          requireIcon="true"
          hasError={!!errors?.kemenkumham}
          errorMessage={errors?.kemenkumham?.message}
        />
        <Input
          options={{
            ...register("npwp", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="npwp"
          label="NPWP"
          requireIcon="true"
          hasError={!!errors?.npwp}
          errorMessage={errors?.npwp?.message}
        />
        <Input
          options={{
            ...register("sk_kota", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="sk_kota"
          label="SK Kota"
          requireIcon="true"
          hasError={!!errors?.sk_kota}
          errorMessage={errors?.sk_kota?.message}
        />
        <Input
          options={{
            ...register("sk_provinsi", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="sk_provinsi"
          label="SK Provinsi"
          requireIcon="true"
          hasError={!!errors?.sk_provinsi}
          errorMessage={errors?.sk_provinsi?.message}
        />
        <Input
          options={{
            ...register("profil_yayasan", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
            disabled: disableForm,
          }}
          id="profil_yayasan"
          label="Profil Yayasan"
          requireIcon="true"
          hasError={!!errors?.profil_yayasan}
          errorMessage={errors?.profil_yayasan?.message}
        />
        {!disableForm && (
          <button
            type="submit"
            disabled={loading}
            className="px-3 py-2 text-[16px] bg-indigo-900 rounded text-white disabled:bg-slate-300"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        )}
      </form>
    </section>
  );
};

export default InstitutionView;
