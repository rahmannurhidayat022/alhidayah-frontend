import { memo } from 'react';
import Spin from './Spin';

const Loading = () => {
	return (
		<div className="bg-palette-1 fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
			<Spin className="text-white" size="44" />
		</div>
	);
};

export default memo(Loading);
