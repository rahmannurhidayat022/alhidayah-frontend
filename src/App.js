import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/UI/Loading";

const Beranda = lazy(() => import("./pages/Landing/Beranda"));
const ProfilLembaga = lazy(() => import("./pages/Landing/ProfilLembaga"));
const VisiMisi = lazy(() => import("./pages/Landing/VisiMisi"));
const Kontak = lazy(() => import("./pages/Landing/Kontak"));
const Donasi = lazy(() => import("./pages/Landing/Donasi"));
const Login = lazy(() => import("./pages/Landing/Login"));
const Rekening = lazy(() => import("./pages/Landing/Rekening"));
const Artikel = lazy(() => import("./pages/Landing/Artikel"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil-lembaga" element={<ProfilLembaga />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rekening" element={<Rekening />} />
          <Route path="/artikel" element={<Artikel />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
