const { Router } = require("express");
const router = Router();

const web = require('../controllers/index');
const auth = require('../middleware/isComp')

router.post('/website', web.data);
router.get('/company', web.getCompanies);
router.post('/company/service', web.getsingleService);
router.get('/service', web.getServices);
router.post('/company', web.getsingle);
router.post('/service/:id',auth , web.service );
router.post('/employee' , web.employe );

module.exports = router;