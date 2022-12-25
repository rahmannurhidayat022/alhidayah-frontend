import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Form/Input";
import {
  getGalleryById,
  updateGalleryById,
} from "../../../store/actions/gallery-action";

const UpdateGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { item } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getGalleryById(id));
  }, [dispatch, id]);

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

  const addFormHanlder = (data) => {
    if (!isValid) return;
    const validFormat = {
      id,
      title: data?.title,
      image: data?.image && data?.image[0],
    };
    dispatch(updateGalleryById(validFormat));
    navigate("/gallery/table");
  };

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  let imageUrl = item?.image ? process.env.REACT_APP_STORAGE + item?.image : "";

  return (
    <section className="p-3 md:p-4 lg:p-6 rounded bg-white">
      <h2 className="mb-3 font-semibold text-xl underline underline-offset-8 text-indigo-900">
        Form Gallery
      </h2>
      <div className="mb-6 py-2 inline-flex flex-nowrap overflow-x-auto">
        <Link
          className="px-3 py-2 text-[16px] bg-slate-200 rounded text-stone-800"
          to="/gallery/table"
        >
          Kembali
        </Link>
      </div>
      <form onSubmit={handleSubmit(addFormHanlder)} className="block min-h-min">
        <Input
          options={{
            ...register("title", {
              required: "Harap isi judul artikel.",
            }),
            type: "text",
          }}
          id="title"
          label="Tentang Gambar ini Artikel"
          requireIcon="true"
          hasError={!!errors?.title}
          errorMessage={errors?.title?.message}
        />
        <div className="mt-4">
          <span className="font-semibold">Gambar saat ini</span>
          <img
            width={300}
            className="w-full md:w-[600px] object-cover rounded mt-2"
            src={imageUrl}
            alt={item?.title}
          />
        </div>
        <Input
          className="mt-4"
          options={{
            ...register("image"),
            type: "file",
            accept: ".jpg,.jpeg,.png",
          }}
          id="image"
          label="Ubah cover artikel"
          requireIcon="true"
          hasError={!!errors?.image}
          errorMessage={errors?.image?.message}
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

export default UpdateGallery;
