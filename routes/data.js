const { Router } = require("express");
const router = Router();

const data = require('../controllers/search.js');

router.get('/companydata', data.data);

module.exports = router;
