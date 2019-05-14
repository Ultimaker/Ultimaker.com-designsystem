/* eslint-disable new-cap */
const router = require('express').Router();

function greatestCommonDivisor(a, b) {
    return b === 0 ? a : greatestCommonDivisor(b, a%b);
}

router.get('/svg/:width/:height/:background?/:foreground?', (req, res) => {
    const width = parseInt(req.query.w || req.params.width, 10);
    let height = parseInt(req.query.h || req.params.height, 10);
    const background = req.params.background;
    const foreground = req.params.foreground;

    if (req.query.w && !req.query.h) {
        const cropRatio = req.params.width / req.query.w;

        height = parseInt(height / cropRatio, 10);
    }

    const divisor = greatestCommonDivisor(width, height);
    const ratioWidth = width / divisor;
    const ratioHeight = height / divisor;
    const ratio = `${ ratioWidth }:${ ratioHeight }`;

    res.set('Content-Type', 'image/svg+xml');
    res.send(`<svg xmlns="http://www.w3.org/2000/svg"  width="${ width }" height="${ height }" viewBox="0 0 ${ width } ${ height }" style="fill: #${ background || 'c6c6c6' };">
        <rect x="0" y="0" width="${ width }" height="${ height }" ></rect>
        <text x="50%" y="50%" style="fill: #${ foreground || '666' }" font-family="sans-serif" font-size="30" text-anchor="middle">
            <tspan x="50%" dy="-0.5em">${ width } x ${ height }</tspan>
            <tspan x="50%" dy="1.5em">${ ratio }</tspan>
        </text>
    </svg>`);
});

module.exports = router;
