'use strict';

console.log('starting function');

const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handle = function (e, ctx, callback) {

    // scanningParameters no es eficiente, se deberia usar query
    
    let scanningParameters = {
        TableName: 'blackops',
        Limit: 100
    };

    docClient.scan(scanningParameters, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
    /*
    var params = {
        TableName: 'blackops',
        Key: {
            "date": 1481557571126
        }
    }

    docClient.get(params, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
    */
}