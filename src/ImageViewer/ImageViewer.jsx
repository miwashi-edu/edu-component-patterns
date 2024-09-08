import styles from './ImageViewer.module.css'; // Import CSS module

const ImageViewer = ({ url, altText = 'Image', ariaLabel = 'Image Viewer', fallbackUrl }) => {
    return (
        <img
            src={url}
            alt={altText}
            aria-label={ariaLabel}
            onError={(e) => { e.target.src = fallbackUrl || '/img/fallback_image.png'; }}  // Fallback image on error
            className={styles.image}
        />
    );
};

export default ImageViewer;
