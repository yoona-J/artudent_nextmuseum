const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const dotenv = require('dotenv')
const { Upload } = require('../models/Upload');


//=================================
//             Product
//=================================

dotenv.config();
console.log('REACT_APP_S3_ACCESS_KEY_ID', process.env.REACT_APP_S3_ACCESS_KEY_ID)
console.log('REACT_APP_S3_SECRET_ACCESS_KEY', process.env.REACT_APP_S3_SECRET_ACCESS_KEY)

AWS.config.update({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
})

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "artudent",
    key(req, file, cb) {
      const fileName = file.originalname;
      cb(null, `${fileName}`);
    },
  }),
}).single("file")

router.post('/image', (req, res) => {
    //가져온 이미지를 저장한다.
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.key})
    })

})

//uploadProductPage.js의 api가 index.js의 api와 같기 때문에 '/'
router.post('/', (req, res) => {

  //받아온 정보들을 DB에 넣어준다
  // console.log(req.body)
  const upload = new Upload(req.body)
  upload.save((err) => {
    // console.log('err', err)
    if(err) return res.status(400).json({ success: false, err })
    return res.status(200).json({ success: true })
  })

})

router.post('/uploads', (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";

    //product collection에 들어있는 모든 정보 가져오기
    Upload.find()
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ 
          success: true, productInfo, 
          postSize: productInfo.length })
      }) 

})

router.get('/uploads_by_id', (req, res) => {

  let type = req.query.type
  let uploadIds = req.query.id

  if(type === "array") {
    //[] 배열 형식으로 바꾼다
    let ids = req.query.id.split(',')
    uploadIds = ids.map(item => {
      return item
    })
  }

  Upload.find({ _id: { $in: uploadIds } })
    .exec((err, upload) => {
      if(err) return res.status(400).send(err)
      return res.status(200).send(upload)
    })

})

module.exports = router;