// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();
const router = express.Router();

const port = 3000;

app.use('/', router);
router.use('/generator', require('./server/generator'));

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server started at localhost:${port}`);
});
