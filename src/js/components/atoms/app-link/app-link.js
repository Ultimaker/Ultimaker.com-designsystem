export default {
    name: 'app-link',
    template: require('./app-link.html'),
    props: {
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        linkProps(url) {
            if (url.match(/^(http(s)?):\/\//)) {
                return {
                    is: 'a',
                    href: url,
                    target: '_blank',
                    rel: 'noopener'
                };
            }

            return {
                is: 'router-link',
                to: url
            };
        }
    }
};
