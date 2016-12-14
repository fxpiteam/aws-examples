'use strict';

console.log('starting function');

const 
    AWS = require('aws-sdk'),
    docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'}),
    PDFDocument = require('pdfkit');

exports.handle = function (e, ctx, callback) {

    let 
        doc = new PDFDocument(),
        code = "hello world";
    
    doc.text(code);
    doc.pipe(res);
    doc.end();
}