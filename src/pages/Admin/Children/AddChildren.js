import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import { addChildrenData } from "../../../store/actions/children-action";

const AddChildren = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const addFormHanlder = (data) => {
    if (!isValid) return;
    dispatch(addChildrenData({ ...data }));
    navigate("/children/table");
  };

  return (
    <section className="p-3 md:p-4 lg:p-6 rounded bg-white">
      <h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
        Form Data Anak
      </h2>
      <div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
        <Link
          className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
          to="/children/table"
        >
          Kembali
        </Link>
      </div>
      <form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
        <Input
          options={{
            ...register("nik", {
              required: "Tidak boleh kosong.",
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
            ...register("nama_anak", {
              required: "Tidak boleh kosong.",
            }),
            type: "text",
          }}
          id="nama_anak"
          label="Nama Anak"
          requireIcon="true"
          hasError={!!errors?.nama_anak}
          errorMessage={errors?.nama_anak?.message}
        />
        <Input
          options={{
            ...register("tempat_lahir", {
              required: "Tidak boleh kosong.",
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
              required: "Tidak boleh kosong.",
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
            ...register("jenis_kelamin", {
              required: "Tidak boleh kosong",
            }),
          }}
          id="jenis_kelamin"
          label="Jenis Kelamin"
          errorMessage={errors?.jenis_kelamin?.message}
          requireIcon="true"
          hasError={!!errors?.tanggal_lahir}
        >
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
        </Select>
        <Input
          options={{
            ...register("nama_ibu", {
              required: "Tidak boleh kosong.",
            }),
            type: "text",
          }}
          id="nama_ibu"
          label="Nama Ibu"
          requireIcon="true"
          hasError={!!errors?.nama_ibu}
          errorMessage={errors?.nama_ibu?.message}
        />
        <Input
          options={{
            ...register("nama_ayah", {
              required: "Tidak boleh kosong.",
            }),
            type: "text",
          }}
          id="nama_ayah"
          label="Nama Ayah"
          requireIcon="true"
          hasError={!!errors?.nama_ayah}
          errorMessage={errors?.nama_ayah?.message}
        />
        <Select
          options={{
            ...register("status", {
              required: "Tidak boleh kosong",
            }),
          }}
          id="status"
          label="Status"
          errorMessage={errors?.status?.message}
          requireIcon="true"
          hasError={!!errors?.status}
        >
          <option value="Yatim">Yatim</option>
          <option value="Piatu">Piatu</option>
          <option value="YP">Yatim Piatu</option>
          <option value="TM">Tidak Mampu</option>
        </Select>

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

export default AddChildren;
