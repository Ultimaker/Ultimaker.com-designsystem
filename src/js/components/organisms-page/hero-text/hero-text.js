export default {
    name: 'hero-text',
    template: require('./hero-text.html'),
    props: {
        title: {
            type: String,
            required: false
        },
        contents: {
            type: String,
            required: true
        }
    }
};
