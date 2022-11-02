import LandingLayout from "../../components/Layout/LandingLayout";
// import Breadcrumb from "../../components/UI/Breadcrumb";

const Artikel = () => {
  return (
    <LandingLayout>
      {/* <Breadcrumb title="Artikel" /> */}
      <section className="container-custom my-6 grid gap-6 grid-cols-1 md:grid-cols-1 md:gap-1">
        <div className="">
          <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-wider my-3 ">Berbagi bersama masyarakat Antapani dalam rangka Bulan Ramadhan Bersama anak-anak yayasan Al-Hidayah Baitul Hatim</h2>
          <p className="mb-12 leading-6 text-gray-400">Di Posting pada 11 Juli 2022</p>

          {/* gambar */}

          <section className="w-full mb-5 md:mb-10 h-[550px] md:h-[650px] overflow-hidden object-cover object-center bg-cover" style={{ backgroundImage: "url('/images/berita-3.webp')" }}></section>

          {/* <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-semibold">Akte Notaris:</td>
                <td>Nomor 10, tanggal 14 Mei 2019 oleh IKA DYAH WARSITO, S.H., M.HUM., M.KN.</td>
              </tr>
              <tr>
                <td className="font-semibold">SK Menkumham RI:</td>
                <td>Nomor AHU-0009842.AH.01.12.TAHUN 2019,Tanggal 24 Mei 2019</td>
              </tr>
              <tr>
                <td className="font-semibold">NPWP:</td>
                <td>31.402.764.0-623.000</td>
              </tr>
              <tr>
                <td className="font-semibold">STP Yayasan Nomor:</td>
                <td>P2T/69/07.03/01/XI/2019</td>
              </tr>
            </tbody>
          </table> */}
        </div>
        <div className="">
          <h2 className="uppercase text-lg font-semibold mb-4">Berita Terkini</h2>
          <p className="mb-3 text-left">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro dignissimos quos distinctio ullam. Vero maiores nostrum eligendi. Mollitia pariatur nesciunt nam maiores! Expedita repudiandae
            sint illum, laborum totam saepe temporibus corporis ut, aliquid quos mollitia consequatur adipisci et repellat commodi pariatur laboriosam nobis culpa, eligendi maiores veniam. Sed reprehenderit commodi quae. Cum reprehenderit
            mollitia necessitatibus minima accusamus. Voluptatum impedit sapiente sit fugit, blanditiis assumenda voluptate. Soluta ratione ipsum atque, saepe necessitatibus excepturi consequatur laudantium voluptatem ipsa commodi, quos
            incidunt, molestias architecto eum eveniet. Culpa in recusandae adipisci aperiam, cumque cum minima repudiandae quo pariatur error vitae consequatur, delectus aspernatur.
          </p>
          <p className="mb-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad omnis aliquid odio, eius explicabo optio quis amet nemo quia, recusandae sunt impedit delectus architecto quidem quae? Aspernatur, quam
            maxime! Quos assumenda est explicabo non dolores nisi, eveniet eos alias molestiae. Molestias, labore nam. Dignissimos provident minima odio dolorum, eius nam vel? Quasi, adipisci neque repudiandae facilis harum odit voluptate
            eveniet cumque iure officiis sequi sint, aut ipsam qui nobis odio in quae incidunt esse, minima vel? Dicta fugiat repellendus doloremque illum ullam tempore laborum quaerat debitis natus animi iste, rerum quasi, voluptate
            recusandae. Maiores et dicta aperiam sint vel aliquid!
          </p>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Artikel;
