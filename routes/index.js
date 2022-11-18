const { Router } = require("express");
const router = Router();
const web = require("./website");
const user = require("./user");
const searches = require('./data')


// router.use('/veminto', web);
router.use('/veminto', searches);
// router.use("/user",user)

module.exports = router;