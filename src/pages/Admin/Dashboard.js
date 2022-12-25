import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from '../../store/slices/ui-slice';

const Dashboard = () => {
	const dispatch = useDispatch();
	const { success } = useSelector((state) => state.user);

	useEffect(() => {
		if (success) {
			dispatch(
				showAlert({
					variant: 'success',
					message: success,
				})
			);
		}
	}, [dispatch, success]);

	return <p>Dashboard</p>;
};

export default Dashboard;
