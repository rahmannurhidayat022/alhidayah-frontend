import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Landing/Beranda';
import Kontak from './pages/Landing/Kontak';
import ProfilLembaga from './pages/Landing/ProfilLembaga';
import VisiMisi from './pages/Landing/VisiMisi';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/profil-lembaga" element={<ProfilLembaga />} />
				<Route path="/visi-misi" element={<VisiMisi />} />
				<Route path="/kontak" element={<Kontak />} />
			</Routes>
		</div>
	);
}

export default App;
