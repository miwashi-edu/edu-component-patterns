import RecursiveStructure from "./RecursiveStructure.jsx";
import Node from "./Node";

export default {
    title: "Patterns/StructuralAdapter/RecursiveStructure",
    component: RecursiveStructure,
}

export const Default = {
    render: (args) => (<RecursiveStructure node={args.node}>
                <Node/>
            </RecursiveStructure>)
    ,
    args: {
        node: {
            nodes:[
                { id: 1, name: 'one'},
                {nodes:[{},{},{nodes:[{},{},{},{}]}]},
                {nodes:[{},{},{},{}]},
            ],
        }
    }
}