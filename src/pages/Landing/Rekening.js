import LandingLayout from "../../components/Layout/LandingLayout";
import Breadcrumb from "../../components/UI/Breadcrumb";

const Rekening = () => {
  return (
    <LandingLayout>
      <Breadcrumb title="Rekening Donasi" />
      <section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-2">
        <div>
          <h2 className="uppercase text-lg font-semibold mb-4">SCAN QR</h2>

          <img src="/images/QR.jpg" alt="tentang yayasan alhidayah baitul hatim" className="md:w-200 lg:w-[300px] flex flex-col justify-center mx-auto " />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-8 mt-10">Rekening Donasi Yayasan Al-Hidayah Baitul Hatim:</h2>
            <p>Mandiri : 144.001.257.689.6</p>
            <p>BRI : 0344.011010.1747</p>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Rekening;
