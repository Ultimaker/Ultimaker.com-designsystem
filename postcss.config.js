/** @format */

module.exports = ({ file, options, env }) => {
    const config = {
        plugins: {},
    };

    if (options && options.postcsswrap) {
        config.plugins['postcss-wrap'] = options.postcsswrap;
    }

    return config;
};
