console.log('starting function');

const AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handle = function (e, ctx, callback) {

    var params = {
        Item: {
            map: e.map,
            weapon: e.weapon,
            points: e.points,
            mode: e.mode,
            ratio: e.ratio,
            date: e.date
        },

        TableName: 'blackops'
    };

    docClient.put(params, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

}