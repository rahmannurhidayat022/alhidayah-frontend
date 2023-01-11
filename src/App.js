import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import LandingLayout from "./components/Layout/LandingLayout";
import Loading from "./components/UI/Loading";
import Alert from "./components/UI/Alert";
import { useSelector } from "react-redux";

const Beranda = lazy(() => import("./pages/Landing/Beranda"));
const ProfilLembaga = lazy(() => import("./pages/Landing/ProfilLembaga"));
const VisiMisi = lazy(() => import("./pages/Landing/VisiMisi"));
const Kontak = lazy(() => import("./pages/Landing/Kontak"));
const Donasi = lazy(() => import("./pages/Landing/Donasi"));
const Rekening = lazy(() => import("./pages/Landing/Rekening"));
const Galeri = lazy(() => import("./pages/Landing/Galeri"));
const Artikel = lazy(() => import("./pages/Landing/Artikel"));
const CekDonasi = lazy(() => import("./pages/Landing/CekDonasi"));
const DetailArtikel = lazy(() => import("./pages/Landing/DetailArtikel"));
const Login = lazy(() => import("./pages/Admin/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const ArtikelTable = lazy(() => import("./pages/Admin/Article/ArticleTable"));
const AddArticle = lazy(() => import("./pages/Admin/Article/AddArticle"));
const ViewArticle = lazy(() => import("./pages/Admin/Article/ViewArticle"));
const UpdateArticle = lazy(() => import("./pages/Admin/Article/UpdateArticle"));
const ContactTable = lazy(() => import("./pages/Admin/Contact/ContactTable"));
const UserTable = lazy(() => import("./pages/Admin/User/UserTable"));
const AddUser = lazy(() => import("./pages/Admin/User/AddUser"));
const ForgotPassword = lazy(() => import("./pages/Admin/User/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Admin/User/ResetPassword"));
const DebitTable = lazy(() => import("./pages/Admin/Debit/DebitTable"));
const AddDebit = lazy(() => import("./pages/Admin/Debit/AddDebit"));
const UpdateDebit = lazy(() => import("./pages/Admin/Debit/UpdateDebit"));
const DonationTable = lazy(() =>
  import("./pages/Admin/Donation/DonationTable")
);
const DonationView = lazy(() => import("./pages/Admin/Donation/DonationView"));
const GalleryTable = lazy(() => import("./pages/Admin/Gallery/GalleryTable"));
const AddPhoto = lazy(() => import("./pages/Admin/Gallery/AddPhoto"));
const UpdateGallery = lazy(() => import("./pages/Admin/Gallery/UpdateGallery"));
const InstitutionView = lazy(() =>
  import("./pages/Admin/Institution/InstitutionView")
);
const ChildrenTable = lazy(() =>
  import("./pages/Admin/Children/ChildrenTable")
);
const AddChildren = lazy(() => import("./pages/Admin/Children/AddChildren"));
const UpdateChildren = lazy(() =>
  import("./pages/Admin/Children/UpdateChildren")
);
const AdministratorTable = lazy(() =>
  import("./pages/Admin/Administrator/AdministratorTable")
);
const AddAdministrator = lazy(() =>
  import("./pages/Admin/Administrator/AddAdministrator")
);

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
            path="cek-donasi"
            element={
              <LandingLayout>
                <CekDonasi />
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
            path="artikel/update/:id"
            element={
              userInfo ? (
                <DashboardLayout>
                  <UpdateArticle />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="contact/table"
            element={
              userInfo && userInfo?.role === "admin" ? (
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
              userInfo && userInfo?.role === "admin" ? (
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
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <AddUser />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="debit/table"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <DebitTable />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="debit/add"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <AddDebit />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="debit/update/:id"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <UpdateDebit />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="donation/table"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <DonationTable />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="donation/view/:id"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <DonationView />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="gallery/table"
            element={
              userInfo ? (
                <DashboardLayout>
                  <GalleryTable />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="gallery/add"
            element={
              userInfo ? (
                <DashboardLayout>
                  <AddPhoto />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="gallery/update/:id"
            element={
              userInfo ? (
                <DashboardLayout>
                  <UpdateGallery />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="institution"
            element={
              userInfo ? (
                <DashboardLayout>
                  <InstitutionView />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="children/table"
            element={
              userInfo ? (
                <DashboardLayout>
                  <ChildrenTable />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="children/add"
            element={
              userInfo ? (
                <DashboardLayout>
                  <AddChildren />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="children/update/:id"
            element={
              userInfo ? (
                <DashboardLayout>
                  <UpdateChildren />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="administrator/table"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <AdministratorTable />
                </DashboardLayout>
              ) : (
                <Navigate to="/auth-admin" replace />
              )
            }
          />
          <Route
            path="administrator/add"
            element={
              userInfo && userInfo?.role === "admin" ? (
                <DashboardLayout>
                  <AddAdministrator />
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
