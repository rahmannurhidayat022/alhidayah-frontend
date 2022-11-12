import Breadcrumb from "../../components/UI/Breadcrumb";

const History = () => {
  return (
    <>
      <Breadcrumb title="History Donasi" />
      <section className="container-custom my-14 grid gap-10 grid-cols-1 md:grid-cols-1 md:gap-2">
        <div>
          <h2 className="text-lg font-light mb-4 after:content-['*'] after:text-pink-500 after:ml-0.5">Kunci History Donasi Yayasan Alhidayah-Baitul Hatim </h2>
        </div>
        <div class="max-w-full border border-slate-200 rounded-xl shadow-xs  p-6">
          <form action="">
            <label for="email" class="block">
              <span class="block font-poppins mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5">Email</span>

              <input
                type="email"
                placeholder="masukkan email..."
                class="px-3 py-2 border shadow rounded w-full block text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700"
              ></input>
            </label>
          </form>
        </div>
        <p class="text-red-500">Kunci History Donasi Wajib Di Isi!</p>
        <button class="my-10 bg-palette-1 px-9 py-2 mb-3 rounded-lg text-white font-medium font-poppins block mx-auto hover:bg-sky-900 active:bg-red-700 focus:ring focus:ring-black ">History</button>
      </section>
    </>
  );
};

export default History;
