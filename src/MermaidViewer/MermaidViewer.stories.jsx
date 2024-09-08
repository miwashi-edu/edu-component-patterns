import MermaidViewer from './MermaidViewer';
import classDiagram from './charts/class-diagram.js'

export default {
    title: 'Patterns/ContentViewer/MermaidViewer',
    component: MermaidViewer,
}

export const Default = {
    args :{
        chart: classDiagram,
    }
}

export const NoChart = {
    args :{}
}

export const NoArgs = {
    args :{}
}

/*
<MermaidViewer ref={graphRef} definition={definition}>
    <CopyButton graphElementRef={graphRef} />
</MermaidViewer>
*/