const express = require('express');
const router = express.Router();
const todocontroller = require('../controller/todocontroller')



router.post('/add',todocontroller.addtodo )
router.get('/', todocontroller.getalltodo);
router.get('/:id', todocontroller.gettodoById);
router.put('/:id',todocontroller.updatetodo )
router.delete('/:id',todocontroller.deletetodo )

router.post('/cate',todocontroller.bycategory)
router.post('/title',todocontroller.bytitle)
router.put('/:id/complete',todocontroller.completetodo)




module.exports = router;