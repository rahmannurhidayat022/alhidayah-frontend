const Berita = () => {
  return (
    <>
      {/* HERO + BERITA */}
      <section className="container-custom grid gap-6 grid-cols-1 md:grid-cols-1 md:gap-1 mb-5 md:mb-8 py-8">
        <div className="bg-white rounded-xl shadow-lg xl:w-full overflow-hidden">
          <section className="w-full md:mb-2 h-[550px] md:h-[450px] overflow-hidden object-cover object-center bg-cover rounded-t" style={{ backgroundImage: "url('/images/hero.webp')" }}></section>
          <h2 className="text-palette-1 font-medium pl-2">
            SOCIAL <span className="text-gray-700 font-light">2 Jam Lalu</span>
          </h2>
          <h3 className="text-black font-medium pl-2 ">Social Berbagi Bersama Itu Indah, Melihat Senyuman dan Sukacita 8 Agutus 2022 Terimakasih Orang Baik</h3>
          <p className="text-gray-500 font-light pl-2 ">Terimakasih, untuk orang baik yang selalu ada dan peduli terhadap sosial,</p>
          <p className="text-gray-500 font-light pl-2 ">Sehat selalu untuk orang-orang baik semoga si berikan kesehatan selalu.</p>
        </div>
      </section>

      {/* Berita 1 */}
      <div class="container px-10  mx-auto ">
        <div class="border rounded-xl shadow-lg p-5 px-10 pb-12 ">
          <img src="/images/donor.jpg " alt="donor" class=" h-36 w-64 rounded-xl float-left mr-4" />

          <ul>
            <li class="text-palette-1">Donor 3 Jam Lalu</li>
            <li class="font-medium">Donor Darah Hari Ini 8 Agustus 2022 : Menolong Membantu Sesama Terimakasih Orang Baik</li>
            <li>Orang Baik selalu ada dan tak habis-habis</li>
            <p class="mt-2 text-gray-500">Orang Baik selalu ada, dan tak habis-habis , Terimakasih untuk kalian orang baik yang terlah peduli pada kami anak-anak panti Yayasan Al-Hidayah Baitul Hatim</p>
          </ul>
        </div>
      </div>

      {/* Berita 2 */}
      <div class="container px-10  mx-auto">
        <div class="border rounded-xl shadow-lg p-5 px-10 pb-12 mt-3 ">
          <img src="/images/berita-2.webp " alt="donor" class=" h-36 w-64 rounded-xl float-left mr-4" />

          <ul>
            <li class="text-palette-1">Berbagi 5 Jam Lalu</li>
            <li class="font-medium">Berbagi Sembako Hari Ini 7 November 2022 : Menolong Membantu Sesama Terimakasih Orang Baik</li>
            <li>Orang Baik selalu ada dan tak habis-habis</li>
            <p class="mt-2 text-gray-500">Orang Baik selalu ada, dan tak habis-habis , Terimakasih untuk kalian orang baik yang terlah peduli pada kami anak-anak panti Yayasan Al-Hidayah Baitul Hatim</p>
          </ul>
        </div>
      </div>

      {/* Berita 3 */}
      <div class="container px-10  mx-auto">
        <div class="border rounded-xl shadow-lg p-5 px-10 pb-12 mt-3">
          <img src="/images/galeri-5.webp " alt="donor" class=" h-36 w-64 rounded-xl float-left mr-4" />

          <ul>
            <li class="text-palette-1">Sosial 8 Jam Lalu</li>
            <li class="font-medium">Donor Darah Hari Ini 8 Agustus 2022:Menolong Membantu Sesama Terimakasih Orang Baik</li>
            <li>Orang Baik selalu ada dan tak habis-habis</li>
            <p class="mt-2 text-gray-500">Orang Baik selalu ada, dan tak habis-habis , Terimakasih untuk kalian orang baik yang terlah peduli pada kami anak-anak panti Yayasan Al-Hidayah Baitul Hatim</p>
          </ul>
        </div>
      </div>

      {/* Berita 4 */}
      <div class="container px-10  mx-auto">
        <div class="border rounded-xl shadow-lg p-5 px-10 pb-12 mt-3">
          <img src="/images/galeri-2.webp " alt="donor" class=" h-36 w-64 rounded-xl float-left mr-4" />

          <ul>
            <li class="text-palette-1">Kesehatan 10 Jam Lalu</li>
            <li class="font-medium">Donor Darah Hari Ini 8 Agustus 2022:Menolong Membantu Sesama Terimakasih Orang Baik</li>
            <li>Orang Baik selalu ada dan tak habis-habis</li>
            <p class="mt-2 text-gray-500">Orang Baik selalu ada, dan tak habis-habis , Terimakasih untuk kalian orang baik yang terlah peduli pada kami anak-anak panti Yayasan Al-Hidayah Baitul Hatim</p>
          </ul>
        </div>
      </div>

      {/* Berita 5 */}
      <div class="container px-10  mx-auto">
        <div class="border rounded-xl shadow-lg p-5 px-10 pb-12 mt-3">
          <img src="/images/galeri-7.webp " alt="donor" class=" h-36 w-64 rounded-xl float-left mr-4" />

          <ul>
            <li class="text-palette-1">Vaksin 1 Hari Lalu</li>
            <li class="font-medium">Donor Darah Hari Ini 8 Agustus 2022:Menolong Membantu Sesama Terimakasih Orang Baik</li>
            <li>Orang Baik selalu ada dan tak habis-habis</li>
            <p class="mt-2 text-gray-500">Orang Baik selalu ada, dan tak habis-habis , Terimakasih untuk kalian orang baik yang terlah peduli pada kami anak-anak panti Yayasan Al-Hidayah Baitul Hatim</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Berita;
