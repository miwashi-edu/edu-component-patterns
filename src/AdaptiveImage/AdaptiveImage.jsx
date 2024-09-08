import React from 'react';
import styles from './AdaptiveImage.module.css'; // Assuming the CSS is imported for styling

const AdaptiveImage = ({ url, name = 'image', extension = 'png', altText = 'Image description', ariaLabel, fallbackUrl }) => {
    const baseImageUrl = `${url}/${name}`;

    return (
        <img
            src={`${baseImageUrl}_xlarge.${extension}`}  // Default src for older browsers or as fallback
            srcSet={`
                ${baseImageUrl}_tiny.${extension} 480w,
                ${baseImageUrl}_small.${extension} 768w,
                ${baseImageUrl}_medium.${extension} 1024w,
                ${baseImageUrl}_large.${extension} 1440w
            `}
            sizes={`
                (max-width: 480px) 480px,
                (max-width: 768px) 768px,
                (max-width: 1024px) 1024px,
                1440px
            `}
            alt={altText}
            aria-label={ariaLabel}
            onError={(e) => { e.target.src = fallbackUrl || `${url}/image_xlarge.${extension}`; }}  // Fallback image logic
            className={styles.responsiveImage}  // Apply the class from your CSS module
        />
    );
};

export default AdaptiveImage;
