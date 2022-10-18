const { Router } = require("express");
const router = Router();
const web = require("./website");


router.use('/veminto', web);

module.exports = router;