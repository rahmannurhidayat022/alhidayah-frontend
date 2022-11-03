import { memo } from 'react';
import { CgSpinner } from 'react-icons/cg';

const Spin = ({ className, size = 24 }) => {
	return <CgSpinner className={`animate-spin ${className}`} size={size} />;
};

export default memo(Spin);
