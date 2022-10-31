import { memo, useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const SimpleImageViewer = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	const renderImage = images?.map((src, index) => {
		return (
			<div key={index} className="w-full overflow-hidden cursor-pointer">
				<img
					onClick={() => openImageViewer(index)}
					className="w-full object-cover bg-cover hover:scale-150"
					key={index}
					src={src}
					alt={index}
					loading="lazy"
				/>
			</div>
		);
	});

	return (
		<>
			{renderImage}
			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
		</>
	);
};

export default memo(SimpleImageViewer);
