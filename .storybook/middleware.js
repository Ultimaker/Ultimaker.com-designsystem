const express = require('express');

const expressMiddleware = (router) => {
    router.use('/generator', require('../server/generator'));
};

module.exports = expressMiddleware;