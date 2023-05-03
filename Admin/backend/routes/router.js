const express = require('express')
const shirtCollection = require('../controller/control')
const router = express.Router();


router.get('/',shirtCollection.getData)
router.post('/',shirtCollection.addData)
router.get('/:id',shirtCollection.getDataById)
router.put('/:id',shirtCollection.updateShirt)
router.delete('/:id',shirtCollection.deleteShirt)



module.exports = router;