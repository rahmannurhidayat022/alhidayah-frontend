import { useRef } from "react";
import { useDispatch } from "react-redux";

const SearchForm = (props) => {
  const searchRef = useRef();
  const dispatch = useDispatch();

  const onSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(props.action({ query: searchRef.current.value }));
  };

  return (
    <form onSubmit={onSubmitSearch}>
      <label className="font-semibold">Cari data:</label>
      <div className="flex flex-row items-end gap-1">
        <input
          className="w-10/12 md:w-[300px] mt-3 border py-2 px-1 rounded focus:outline-none focus:border-palette-1"
          type="text"
          name="search"
          ref={searchRef}
        />
        <button
          type="submit"
          className="w-min h-min px-3 py-2 bg-indigo-900 rounded text-white"
        >
          Cari
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
