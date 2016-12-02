var express = require('express'),
   
    router = express.Router(),
    path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '上传文件' });
});

router.get('/download', function(req, res, next) {
    res.render('getpic', { title: '上传文件' });
});
/* Download a photo */
router.get('/picture/download', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../uploads/', req.query.imageName), null, function(err){
        if(err) next(err);
    });
});

module.exports = router;
