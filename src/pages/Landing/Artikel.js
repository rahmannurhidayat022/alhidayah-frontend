import { useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { getArticles } from "../../store/actions/article-action";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/UI/Pagination";
const URL_STORAGE = process.env.REACT_APP_STORAGE;

const Artikel = () => {
  const { items, pagination } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const articlesRendering = items?.map(({ id, title, desc, image, created_at }, index) => {
    return (
      <Link key={index} to={`/artikel/${id}`} className="shadow-sm">
        <article className="w-full overflow-x-hidden">
          <img className="w-full object-cover md:h-[250px]" src={`${URL_STORAGE}${image}`} alt={`poto artikel ${title}`} loading="lazy" />
          <div className="leading-relaxed break-words">
            <h2 className="font-semibold text-2xl hover:text-blue-900 my-2">{title}</h2>
            <span className="flex items-center gap-1 text-16 text-gray-500 mb-2">
              <BiTimeFive size={20} />
              {created_at}
            </span>
            <div className="inline group">
              <p className="h-20 overflow-y-hidden font-medium text-[16px] group-hover:text-blue-900" dangerouslySetInnerHTML={{ __html: desc }}></p>
            </div>
          </div>
        </article>
      </Link>
    );
  });

  return (
    <>
      <Breadcrumb title="Kegiatan & Artikel" />
      <section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{articlesRendering}</section>
      <section className="container-custom flex flex-col justify-center items-center">{pagination.totalPage > 1 && <Pagination data={pagination} hadler={getArticles} />}</section>
    </>
  );
};

export default Artikel;
