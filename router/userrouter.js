const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')

router.post('/add',usercontroller.adduser)
router.get('/:id', usercontroller.getalltodo);

module.exports = router;