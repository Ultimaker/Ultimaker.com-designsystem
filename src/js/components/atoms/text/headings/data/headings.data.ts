export const data = {
    h1: {
        text: 'A Page Title',
        type: 'h1',
    },
    h2: {
        text: 'A Title for an Organism',
        type: 'h2',
    },
    h3: {
        text: 'A Title for a Molecule within an organism',
        type: 'h3',
    },
    h4: {
        text: 'A title within a paragraph of normal copy',
        type: 'h4',
    },
    h5: {
        text: 'A title within a paragraph of small copy (e.g. image captions)',
        type: 'h5',
    },
    h6: {
        text: 'A title with the smallest appearance on the deepest level (e.g. legal in footer)',
        type: 'h6',
    },
};

export default type => data[type];
