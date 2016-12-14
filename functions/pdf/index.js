'use strict';

console.log('starting function');

const AWS = require('aws-sdk'),
	docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-central-1' }),
	PDFDocument = require('pdfkit');


exports.handle = function (event, context, callback) {
	let
		doc = new PDFDocument(),
		code = req.body.code;

	//doc.pipe(fs.createWriteStream('public/pdf/code.pdf'));
	doc.text(code);
	doc.pipe(res);
	doc.end();	
	callback(null, doc);
};
