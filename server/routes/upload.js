const express = require('express');
const multer = require('multer');
const router = express.Router();
const { Upload } = require('../models/Upload');

//=================================
//            Upload
//=================================

const storage = multer.diskStorage({
    //어디에 파일이 저장이 되는지 - uploads 파일 안 이미지
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage }).single("file")

router.post('/image', (req, res) => {
    //가져온 이미지를 저장한다.
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

})

router.post('/', (req, res) => {
    const upload = new Upload(req.body);

    upload.save((err) => {
        console.log('err', err)
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true });
    })
})

module.exports = router;