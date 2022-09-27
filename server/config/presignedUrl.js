const aws = require('aws-sdk')

aws.config.update({
    accessKeyId: 'AKIA6RSI3LTF2AEKD3Y4',
    secretAccessKey: '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',
    region: 'us-east-1'
});

exports.handler = (event, context, callback) => {
    const s3 = new aws.S3();
    const request = JSON.parse(event.body);
    const filename = request.filename;
    const params = {
        Bucket: 'artudent-nft',
        Key: `upload/${filename}`,
        Expires: 300,
        ContentType: 'image/*'
    };

    s3.getSignedUrl("putObject", params, function(err, url) {
        if (err) return callback(err);
        callback(null, {
            statusCode: 200,
            headers: {'Access-Control-Allow-Origin': '*'},
            body: url
        })
    })
}