var multer = require('multer'),
    storage = multer.diskStorage(
    {
        filename: function(req, file, next){
            next(null, file.originalname);
            //next(null, 'avatar-' + Date.now() + ".jpg");
        },
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
    }),
  //  multerUpload = multer({storage: storage}).single('image');
 // multerUpload = multer({storage: storage}).array('photos', 1);
 //multerUpload = multer({storage: storage}).fields([{name: 'image',maxCount: 1}]);
 multerUpload = multer({storage: storage,fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },limits:{fileSize: 1024*1024*5} }).fields([{name: 'image',maxCount: 1}]);

module.exports = multerUpload;
