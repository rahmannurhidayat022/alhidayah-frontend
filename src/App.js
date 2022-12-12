import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Layout/DashboardLayout';
import LandingLayout from './components/Layout/LandingLayout';
import Loading from './components/UI/Loading';
import Alert from './components/UI/Alert';
import { useSelector } from 'react-redux';

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
const ArtikelTable = lazy(() => import('./pages/Admin/Article/ArticleTable'));
const AddArticle = lazy(() => import('./pages/Admin/Article/AddArticle'));
const ViewArticle = lazy(() => import('./pages/Admin/Article/ViewArticle'));
const ContactTable = lazy(() => import('./pages/Admin/Contact/ContactTable'));
const UserTable = lazy(() => import('./pages/Admin/User/UserTable'));
const AddUser = lazy(() => import('./pages/Admin/User/AddUser'));
const ForgotPassword = lazy(() => import('./pages/Admin/User/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/Admin/User/ResetPassword'));

function App() {
	const { userInfo } = useSelector((state) => state.user);

	return (
		<Suspense fallback={<Loading />}>
			<div className="App">
				<Alert />
				<Routes>
					<Route
						path="/"
						element={
							<LandingLayout>
								<Beranda />
							</LandingLayout>
						}
					/>
					<Route
						path="profil-lembaga"
						element={
							<LandingLayout>
								<ProfilLembaga />
							</LandingLayout>
						}
					/>
					<Route
						path="visi-misi"
						element={
							<LandingLayout>
								<VisiMisi />
							</LandingLayout>
						}
					/>
					<Route
						path="kontak"
						element={
							<LandingLayout>
								<Kontak />
							</LandingLayout>
						}
					/>
					<Route
						path="donasi"
						element={
							<LandingLayout>
								<Donasi />
							</LandingLayout>
						}
					/>
					<Route
						path="rekening"
						element={
							<LandingLayout>
								<Rekening />
							</LandingLayout>
						}
					/>
					<Route
						path="galeri"
						element={
							<LandingLayout>
								<Galeri />
							</LandingLayout>
						}
					/>
					<Route
						path="artikel"
						element={
							<LandingLayout>
								<Artikel />
							</LandingLayout>
						}
					/>
					<Route
						path="artikel/:id"
						element={
							<LandingLayout>
								<DetailArtikel />
							</LandingLayout>
						}
					/>
					<Route path="auth-admin" element={<Login />} />
					<Route
						path="dashboard"
						element={
							userInfo ? (
								<DashboardLayout>
									<Dashboard />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="artikel/table"
						element={
							userInfo ? (
								<DashboardLayout>
									<ArtikelTable />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="artikel/add"
						element={
							userInfo ? (
								<DashboardLayout>
									<AddArticle />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="artikel/view/:id"
						element={
							userInfo ? (
								<DashboardLayout>
									<ViewArticle />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="contact/table"
						element={
							userInfo ? (
								<DashboardLayout>
									<ContactTable />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="user/table"
						element={
							userInfo ? (
								<DashboardLayout>
									<UserTable />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route
						path="user/add"
						element={
							userInfo ? (
								<DashboardLayout>
									<AddUser />
								</DashboardLayout>
							) : (
								<Navigate to="/auth-admin" replace />
							)
						}
					/>
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="reset-password/:token" element={<ResetPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
