
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var config = require('./config');
//var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;


module.exports = {
    Hello: function () {
        alert('helloworld');
    },

    createUser: function () {
        event.preventDefault();
        var userData = {

        };
        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();

        var poolData = {
            UserPoolId: config.PoolId, // Your user pool id here
            ClientId: config.ClientPoolId // Your client id here
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: email
        };
        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);

        /*var dataPhoneNumber = {
            Name : 'phone_number',
            Value : '+15555555555'
        };
        var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
        attributeList.push(attributePhoneNumber);*/

        userPool.signUp(username, password, attributeList, null, function (err, result) {
            if (err) {
                console.log(err);
                alert('Username already exists in database');
                location.reload();
                return;
            }
            cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            window.location.replace("../index.html");
        });
        return false;
    }
}