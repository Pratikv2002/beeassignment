const express = require('express');
const app = express();
const router = new express.Router();
const {signIn,signUp,requestForAdmin,acceptAdmin,rejectAdmin,findStudyMaterial,uploadQuestion,getQuestion} = require('../Controller/user');
const {uploadStudyMaterial} = require('../Controller/admin');
var cookieParser = require('cookie-parser')
app.use(cookieParser())

const auth = require("../Middleware/auth")

router.post("/admin/login",signIn)
router.post("/admin/register",signUp)
router.get("/requestForAdmin",requestForAdmin)
router.put("/acceptAdminRequest",acceptAdmin)
router.put("/rejectAdminRequest",rejectAdmin)
router.post("/uploadStudyMaterial",uploadStudyMaterial)
router.post("/findStudyMaterial",findStudyMaterial)
router.post("/uploadQuestion",uploadQuestion)
router.get("/getQuetion",getQuestion)

module.exports = router