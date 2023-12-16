const router = require('express').Router();
const mid=require('../midelware/middlware')
const instaController = require("../controllers/instaController");
router.post('/register',instaController.add)
router.get('/getAll',instaController.get)
router.get('/user',mid.verifytoken,instaController.getuser)
router.post('/login',instaController.login)
module.exports = router;