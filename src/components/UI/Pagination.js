import { useDispatch } from "react-redux";

const Pagination = ({ data, handler }) => {
  const dispatch = useDispatch();

  const renderPages = data?.links?.map(({ url, label, active }, index) => {
    return (
      <button
        disabled={active || url === null}
        onClick={() => dispatch(handler({ url }))}
        key={index}
        className={`py-1 px-4 border rounded disabled:bg-slate-200 ${active
            ? "border-indigo-500 font-semibold"
            : "border-slate-300 text-slate-700"
          }`}
      >
        {label.split(".", 2).length > 1 ? label.split(".", 2)[1] : label}
      </button>
    );
  });

  return (
    <>
      <div className="flex flex-row flex-wrap gap-1 justify-start items-center mt-4">
        {renderPages}
      </div>
      <div className="flex flex-row flex-wrap gap-1 justify-start items-center mt-3 text-slate-700">
        <span>
          Total Item: <strong>{data?.totalItem || 0}</strong>,
        </span>
        <span>
          Halaman <strong>{data?.currentPage || 0}</strong> dari total{" "}
          <strong>{data?.totalPage || 0}</strong>
        </span>
      </div>
    </>
  );
};

export default Pagination;
