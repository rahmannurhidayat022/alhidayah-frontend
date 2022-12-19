import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageViewer from "../../components/Image/SimpleImageViewer";
import Breadcrumb from "../../components/UI/Breadcrumb";
import Pagination from "../../components/UI/Pagination";
import { getAllGallery } from "../../store/actions/gallery-action";

const Galeri = () => {
  const { items, pagination } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGallery());
  }, [dispatch]);

  const images = items?.map((item, index) => {
    return process.env.REACT_APP_STORAGE + item?.image;
  });

  return (
    <>
      <Breadcrumb title="Galeri" />
      <section className="container-custom py-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
        <SimpleImageViewer images={images} />
      </section>
      <div
        className="flex flex-col
			items-center justify-center"
      >
        <Pagination data={pagination} handler={getAllGallery} />
      </div>
    </>
  );
};

export default Galeri;
