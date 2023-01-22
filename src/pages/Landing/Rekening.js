import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllDebit } from "../../store/actions/debit-action";
import { useDispatch } from "react-redux";
import Breadcrumb from "../../components/UI/Breadcrumb";
import CopyToClipboard from "../../components/UI/CopyToClipboard";
import { BsCreditCard2Front } from "react-icons/bs";

const Rekening = () => {
  const { items } = useSelector((state) => state.debit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDebit({}));
  }, [dispatch]);

  const renderData = items?.map(
    ({ nomor_rekening, nama_bank, atas_nama }, index) => {
      return (
        <li key={index} className="mb-2 flex flex-row gap-2">
          <div className="">
            <BsCreditCard2Front size={60} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Bank {nama_bank}</span>
            <CopyToClipboard className="flex-shrink" value={nomor_rekening} />
            <span>a.n. {atas_nama}</span>
          </div>
        </li>
      );
    }
  );
  return (
    <>
      <Breadcrumb title="Rekening Donasi" />
      <section className="container-custom my-2 gap-1 grid-cols-1">
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-8 mt-10">
              Rekening Donasi Yayasan Al-Hidayah Baitul Hatim
            </h2>
            <ul className="">{renderData}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rekening;
