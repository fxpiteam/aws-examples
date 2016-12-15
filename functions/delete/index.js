console.log('starting function');

const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handle = function (e, ctx, callback) {
    
    var params = {
        Key: {
            date: e.date
        },
        TableName: 'blackops'
    };

    docClient.delete(params, function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

}