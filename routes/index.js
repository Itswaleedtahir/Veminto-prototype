const { Router } = require("express");
const router = Router();
const web = require("./website");
const user = require("./user");


router.use('/veminto', web);
router.use("/user",user)

module.exports = router;