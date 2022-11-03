import { memo } from 'react';

const Logo = () => {
	return (
		<img
			src={'./images/logo-text.webp'}
			alt="Logo Yayasan Al-Hidayah Baitul Hatim"
			loading="lazy"
		/>
	);
};

export default memo(Logo);
