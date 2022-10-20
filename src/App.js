import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Landing/Beranda';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Beranda />} />
			</Routes>
		</div>
	);
}

export default App;
