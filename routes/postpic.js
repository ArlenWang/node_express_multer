var express = require('express'),
    router = express.Router(),
    path = require('path'),
    upload = require(path.join(__dirname, '../controls/upload/multerConfig'));

/* Upload a photo */
router.post('/', function(req, res, next) {
  //console.log(req.body);
  //console.log(req.files);
  upload(req, res, function(err){
      console.log(req.body);
       console.log(req.files);
       if (err) {
            console.log("An error occurred when uploading");
        }else{
            //res.redirect('/');
            res.send("Form data saved!");
        }
  });
});


module.exports = router;
