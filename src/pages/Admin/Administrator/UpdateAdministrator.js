import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import TextArea from "../../../components/Form/TextArea";
import {
  getAdministratorDataById,
  updateAdministratorData,
} from "../../../store/actions/administrator-action";

const UpdateAdministrator = () => {
  const { item } = useSelector((state) => state.administrator);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: useMemo(() => {
      return item;
    }, [item]),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const addFormHandlder = (data) => {
    if (!isValid) return;

    dispatch(updateAdministratorData({ id, ...data }));
    navigate("/administrator/table");
  };

  useEffect(() => {
    dispatch(getAdministratorDataById(id));
  }, [dispatch, id]);

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  return (
    <section className="p-3 md:p-4 lg:p-6 rounded bg-white">
      <h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
        Form Pengurus
      </h2>
      <div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
        <Link
          className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
          to="/administrator/table"
        >
          Kembali
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(addFormHandlder)}
        className="block min-h-min"
      >
        <Input
          options={{
            ...register("nik", {
              required: "Tidak boleh kosong",
            }),
            type: "number",
          }}
          id="nik"
          label="NIK"
          requireIcon="true"
          hasError={!!errors?.nik}
          errorMessage={errors?.nik?.message}
        />
        <Input
          options={{
            ...register("nama_pengurus", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
          }}
          id="nama_pengurus"
          label="Nama Lengkap"
          requireIcon="true"
          hasError={!!errors?.nama_pengurus}
          errorMessage={errors?.nama_pengurus?.message}
        />
        <Input
          options={{
            ...register("tempat_lahir", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
          }}
          id="tempat_lahir"
          label="Tempat Lahir"
          requireIcon="true"
          hasError={!!errors?.tempat_lahir}
          errorMessage={errors?.tempat_lahir?.message}
        />
        <Input
          options={{
            ...register("tanggal_lahir", {
              required: "Tidak boleh kosong",
            }),
            type: "date",
          }}
          id="tanggal_lahir"
          label="Tanggal Lahir"
          requireIcon="true"
          hasError={!!errors?.tanggal_lahir}
          errorMessage={errors?.tanggal_lahir?.message}
        />
        <Select
          options={{
            ...register("jk", {
              required: "Tidak boleh kosong.",
            }),
          }}
          id="jk"
          label="Jenis Kelamin"
          errorMessage={errors?.jk?.message}
          requireIcon="true"
          hasError={!!errors?.jk}
        >
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
        </Select>
        <Input
          options={{
            ...register("jabatan", {
              required: "Tidak boleh kosong",
            }),
            type: "text",
          }}
          id="jabatan"
          label="Jabatan"
          requireIcon="true"
          hasError={!!errors?.jabatan}
          errorMessage={errors?.jabatan?.message}
        />
        <Input
          options={{
            ...register("no_telp", {
              required: "Tidak boleh kosong",
            }),
            type: "number",
          }}
          id="no_telp"
          label="Nomor Telepon"
          requireIcon="true"
          hasError={!!errors?.no_telp}
          errorMessage={errors?.no_telp?.message}
        />
        <TextArea
          options={{
            ...register("alamat", {
              required: "Tidak boleh kosong",
            }),
            rows: 5,
          }}
          id="alamat"
          label="Alamat"
          requireIcon="true"
          hasError={!!errors?.alamat}
          errorMessage={errors?.alamat?.message}
        />
        <div className="mt-4 inline-flex space-x-2">
          <button
            type="submit"
            className="px-3 py-2 text-[16px] bg-indigo-800 rounded text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateAdministrator;
