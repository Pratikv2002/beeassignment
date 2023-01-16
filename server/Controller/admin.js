const uploadStudyMaterialModel = require("../Model/StudyMaterial");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1000);
    var originalname =  file.originalname.split('.')

    cb(null, originalname[0] + "-" + uniqueSuffix+"."+originalname[originalname.length-1]);
  },
});

const upload = multer({ storage: storage }).array("studyMaterial");

const uploadStudyMaterial = async (req, res) => {
 
  await upload(req, res, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      try {
        var files = req.files;
        for (var a of files) {
          console.log(a);
        const newMaterial = new uploadStudyMaterialModel({
          Branch: req.body.Branch,
          Classes: req.body.Classes,
          Subject: req.body.Subject,
          FileName:a.filename,
          Size:a.size,
          AdminId:req.body.AdminId,
          AdminEmail:req.body.AdminEmail,
          AdminName:req.body.AdminName,
          Admin:req.body.Admin,
          Material: {
            data: a.filename,
            contentType: a.mimetype,
          },
        });
        newMaterial.save()
      }
      res.status(200).send("Upload Successfully")
      res.end()
      } catch (error) {
        res.status(500).send(error)
        res.end()
      }
      
    }
  });
};

module.exports = { uploadStudyMaterial };
