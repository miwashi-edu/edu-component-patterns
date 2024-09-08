import React from 'react';
import { toPng } from 'html-to-image';
import styles from './DownloadImageButtonDecorator.module.css';

const DownloadImageButtonDecorator = ({ children }) => {
    const elementRef = React.useRef();  // Reference to the HTML element (image or Mermaid chart)

    const handleDownloadAsPng = async () => {
        if (elementRef.current) {
            try {
                // Convert the HTML element to a PNG image
                const dataUrl = await toPng(elementRef.current);

                // Create a download link and simulate a click to download the PNG
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'content-image.png';  // File name for the download
                link.click();
            } catch (err) {
                console.error(`Error downloading image: ${err.message}`);
            }
        } else {
            alert('No element found to download.');
        }
    };

    return (
        <div className={styles.content} ref={elementRef}>
            <button className={styles.downloadButton} onClick={handleDownloadAsPng}>
                Download as PNG
            </button>
            {children} {/* Render the child element (image or diagram) */}
        </div>
    );
};

export default DownloadImageButtonDecorator;
