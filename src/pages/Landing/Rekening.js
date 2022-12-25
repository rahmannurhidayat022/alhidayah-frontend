import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllDebit } from "../../store/actions/debit-action";
import { useDispatch } from "react-redux";
import Breadcrumb from "../../components/UI/Breadcrumb";
import CopyToClipboard from "../../components/UI/CopyToClipboard";

const Rekening = () => {
  const { items } = useSelector((state) => state.debit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDebit());
  }, [dispatch]);

  const renderData = items?.map(({ nomor_rekening, nama_bank, atas_nama }, index) => {
    return (
      <li key={index} className="mb-2">
        <div className="flex flex-row gap-4">
          <span className="font-semibold">Bank {nama_bank}:</span>
          <CopyToClipboard value={nomor_rekening} />
        </div>
        <span>a.n. {atas_nama}</span>
      </li>
    );
  });
  return (
    <>
      <Breadcrumb title="Rekening Donasi" />
      <section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
        <div>
          <h2 className="uppercase text-lg font-semibold mb-4 text-center">SCAN QR</h2>
          <img src="/images/QRNEW.png" alt="tentang yayasan alhidayah baitul hatim" className="md:w-200 lg:w-[300px] flex flex-col justify-center mx-auto " />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-8 mt-10">Rekening Donasi Yayasan Al-Hidayah Baitul Hatim:</h2>
            <ul className="">{renderData}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rekening;
