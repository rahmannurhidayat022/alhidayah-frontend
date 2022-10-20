import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';

const LandingLayout = (props) => {
	const { offcanvasVisible } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const offcanvasToggle = () => {
		dispatch(uiActions.offcanvasToggle());
	};

	return (
		<>
			<Navbar offcanvasToggle={offcanvasToggle} />
			{offcanvasVisible && <Sidemenu offcanvasToggle={offcanvasToggle} />}
			<main className="min-h-[600px]">{props.children}</main>
			<Footer />
		</>
	);
};

export default LandingLayout;
