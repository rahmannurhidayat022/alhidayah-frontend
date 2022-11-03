import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { offcanvasToggle } from '../../store/ui-slice';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

const LandingLayout = () => {
	const { offcanvasVisible } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const offcanvasHandler = () => {
		dispatch(offcanvasToggle());
	};

	return (
		<>
			<Navbar offcanvasToggle={offcanvasHandler} />
			{offcanvasVisible && <Sidemenu offcanvasToggle={offcanvasHandler} />}
			<main className="min-h-[600px]">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default memo(LandingLayout);
