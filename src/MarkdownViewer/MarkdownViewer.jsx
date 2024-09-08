import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import styles from './MarkdownViewer.module.css';

const MarkdownViewer = ({ markdownText, children }) => {
    // Determine the source of markdown based on props
    const contentToRender = markdownText || children;  // Choose markdownText if available, otherwise use children

    // Render and sanitize markdown from the chosen source
    const rawMarkup = marked(contentToRender);
    const safeMarkup = DOMPurify.sanitize(rawMarkup);

    return (
        <div
            className={styles.markdownOutput}  // Use module CSS for styling
            dangerouslySetInnerHTML={{ __html: safeMarkup }}
        />
    );
};

export default MarkdownViewer;
