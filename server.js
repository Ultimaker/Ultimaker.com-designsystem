const express = require('express');

const app = express();
const router = express.Router();

const port = 3000;

app.use('/', router);
router.use('/generator', require('./server/generator'));

app.listen(port, () => {
    console.log(`server started at localhost:${ port }`);
});
