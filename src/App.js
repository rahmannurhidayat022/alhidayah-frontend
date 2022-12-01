import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Layout/DashboardLayout';
import LandingLayout from './components/Layout/LandingLayout';
import Loading from './components/UI/Loading';

const Beranda = lazy(() => import('./pages/Landing/Beranda'));
const ProfilLembaga = lazy(() => import('./pages/Landing/ProfilLembaga'));
const VisiMisi = lazy(() => import('./pages/Landing/VisiMisi'));
const Kontak = lazy(() => import('./pages/Landing/Kontak'));
const Donasi = lazy(() => import('./pages/Landing/Donasi'));
const Rekening = lazy(() => import('./pages/Landing/Rekening'));
const Galeri = lazy(() => import('./pages/Landing/Galeri'));
const Artikel = lazy(() => import('./pages/Landing/Artikel'));
const DetailArtikel = lazy(() => import('./pages/Landing/DetailArtikel'));
const Login = lazy(() => import('./pages/Admin/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingLayout />}>
						<Route index element={<Beranda />} />
						<Route path="profil-lembaga" element={<ProfilLembaga />} />
						<Route path="visi-misi" element={<VisiMisi />} />
						<Route path="kontak" element={<Kontak />} />
						<Route path="donasi" element={<Donasi />} />
						<Route path="rekening" element={<Rekening />} />
						<Route path="galeri" element={<Galeri />} />
						<Route path="artikel" element={<Artikel />} />
						<Route path="artikel/:id" element={<DetailArtikel />} />
					</Route>
					<Route path="/auth-admin" element={<Login />} />
					<Route path="/admin" element={<DashboardLayout />}>
						<Route index element={<Navigate to="dashboard" replace />} />
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
