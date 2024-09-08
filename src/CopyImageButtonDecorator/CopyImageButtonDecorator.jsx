import {useRef} from 'react';
import { toPng } from 'html-to-image';
import styles from './CopyImageButtonDecorator.module.css';

const CopyImageButtonDecorator = ({ children }) => {
    const elementRef = useRef();  // Reference to the HTML element (image or Mermaid chart)

    const handleCopyOrDownload = async () => {
        let dataUrl = null;  // Declare dataUrl outside the try block so it can be accessed in catch

        if (elementRef.current) {
            try {
                console.log('Element found, attempting to copy or download...');

                // Convert the HTML element (without the button) to a PNG image
                dataUrl = await toPng(elementRef.current, { cacheBust: true });

                // Attempt to copy the image to the clipboard
                if (navigator.clipboard && window.ClipboardItem) {
                    const response = await fetch(dataUrl);
                    const blob = await response.blob();
                    const clipboardItem = new ClipboardItem({ [blob.type]: blob });
                    await navigator.clipboard.write([clipboardItem]);
                    alert('Image copied to clipboard!');
                } else {
                    throw new Error('Clipboard not supported');
                }
            } catch (err) {
                console.error(`Error copying image: ${err.message}`);

                // Check if dataUrl exists and use it for downloading as a fallback
                if (dataUrl) {
                    console.log('Falling back to download');
                    const link = document.createElement('a');
                    link.href = dataUrl;  // Use the dataUrl for downloading
                    link.download = 'image.png';
                    link.click();
                    alert('Image downloaded instead of copied (Clipboard not supported).');
                } else {
                    alert('Error processing image. No valid image data available.');
                }
            }
        } else {
            alert('No element found to copy or download.');
        }
    };

    return (
        <div className={styles.content}>
            <div ref={elementRef} className={styles.imageContainer}>
                {children} {/* Render the child element (image or diagram) */}
            </div>
            <button className={styles.copyButton} onClick={handleCopyOrDownload}>
                Copy as PNG
            </button>
        </div>
    );
};

export default CopyImageButtonDecorator;
