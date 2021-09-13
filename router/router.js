const express = require('express')
const router = express.Router();

const { getData, sendData, deleteData, updateData, respo } = require('../controllers/controller')


router.get('/getdata', getData, respo);
router.post('/senddata', sendData);
router.delete('/deletedata', deleteData);
router.patch('/updateData', updateData);


module.exports = router;