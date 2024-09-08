import MarkdownViewer from './MarkdownViewer';

export default {
    title: 'Patterns/ContentViewer/MarkdownViewer',
    component: MarkdownViewer,
};

const markdownText = `# Markdown Rendering Example

This is a basic example of how the MarkdownRenderer component works.

You can use various Markdown features:

- **Bold** text
- *Italic* text
- Lists:
    - Item 1
    - Item 2
- Links: [Visit Google](https://www.google.com)
- Code blocks:
    \`\`\`javascript
    const message = 'Hello, world!';
    console.log(message);
    \`\`\`
`

export const Default = {
    args: {
        markdownText: markdownText
    }
}

export const Wrapping = {
    render: (args) => <MarkdownViewer {...args}>Text __that__ **will** be rendered</MarkdownViewer>
}

export const ListExample = {
    args : {
        markdownText: `
        # Shopping List
        - Apples
        - Oranges
        - Bananas
        `
    },
};
