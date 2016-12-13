console.log('starting function');

const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handle = function (e, ctx, callback) {

    var params = {
        Item: {
            date: Date.now(),
            message: "My first item"
        },

        TableName: 'guestbook'
    };

    docClient.put(params, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

}