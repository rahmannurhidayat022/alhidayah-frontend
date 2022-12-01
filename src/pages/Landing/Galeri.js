import { useEffect, useState } from 'react';
import SimpleImageViewer from '../../components/Image/SimpleImageViewer';
import Breadcrumb from '../../components/UI/Breadcrumb';

const IMAGES_URI = 'https://picsum.photos/v2/list?limit=9';

const Galeri = () => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		try {
			const response = await fetch(IMAGES_URI, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			const imagesOnly = data?.map((item) => item.download_url);
			setImages(imagesOnly);
			return data;
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getImages();
	}, []);

	return (
		<>
			<Breadcrumb title="Galeri" />
			<section className="container-custom py-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
				<SimpleImageViewer images={images} />
			</section>
		</>
	);
};

export default Galeri;
