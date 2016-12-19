# aws-examples
Sample aws S3, lambda, API GW &amp; DynamoDB project

To ease the project's development, we used the following components:

- Node server: without a server, you will serve the static files as "file://" or "c://", so jquery includes and load wont work.
- Materializecss: my favourite css framework
- jQuery: as I couldn't use jade (pug) in Amazon S3 and needed jQuery for Materializecss, I used it to load html into another html (like footer and header)
- apex: from apex.run. This project makes lambda function deployment easier.
- pdfkit: for browser pdf creation. But it looks like cant create tables.
- pdfmake: for browser pdf creation. Looks like a fork of pdfkit, but this one can make tables, let's see with one should we pick.
- cognito: https://github.com/aws/amazon-cognito-identity-js.git
- webpack to bundle all my assets into a single file. 
