import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { offcanvasToggle } from '../../store/ui-slice';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

const LandingLayout = ({ children }) => {
	const { offcanvasVisible } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const offcanvasHandler = () => {
		dispatch(offcanvasToggle());
	};

	return (
		<>
			<Navbar offcanvasToggle={offcanvasHandler} />
			{offcanvasVisible && <Sidemenu offcanvasToggle={offcanvasHandler} />}
			<main className="min-h-[600px]">{children}</main>
			<Footer />
		</>
	);
};

export default memo(LandingLayout);
