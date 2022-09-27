const express = require('express');
const router = express.Router();
const { Upload } = require('../models/Upload');

//=================================
//            Upload
//=================================

router.post('/', (req, res) => {
    const upload = new Upload(req.body);

    upload.save((err) => {
        console.log('err', err)
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true });
    })
})

module.exports = router;