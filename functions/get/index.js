'use strict';

console.log('starting function');

const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handle = function (e, ctx, callback) {

    
    var params = {
        TableName: 'blackops',
        Key: {
            date: e.date
        }
    }

    docClient.get(params, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
    
}