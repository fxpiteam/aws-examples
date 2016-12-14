# aws-examples
Sample aws S3, lambda, API GW &amp; DynamoDB project

To ease the project's development, we used the following components:

- Node server: without a server, you will serve the static files as "file://" or "c://", so jquery includes and load wont work.
- Materializecss: my favourite css framework
- jQuery: as I couldn't use jade (pug) in Amazon S3 and needed jQuery for Materializecss, I used it to load html into another html (like footer and header)
- apex: from apex.run. This project makes lambda function deployment easier.
