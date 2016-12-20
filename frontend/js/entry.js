
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var config = require('./config');
var AWS = require('aws-sdk');
//var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;


module.exports = {
    Hello: function () {
        alert('helloworld');
    },

    createUser: function () {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();

        var poolData = {
            UserPoolId: config.PoolId,
            ClientId: config.ClientPoolId
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
            window.location.replace("confirm.html?user=" + username);
        });
        return false;
    },

    confirmUser: function () {
        event.preventDefault();

        var code = $('#code').val();
        var username = module.exports.getUrlParameter('user');

        var poolData = {
            UserPoolId: config.PoolId,
            ClientId: config.ClientPoolId
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: username,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.confirmRegistration(code, true, function (err, result) {
            if (err) {
                alert(err);
                return;
            }
            console.log('call result: ' + result);
            window.location.replace("sign-in.html?user=" + username);
        });
    },

    resendConfirmUser: function () {
        event.preventDefault();
        var username = module.exports.getUrlParameter('user');
        var poolData = {
            UserPoolId: config.PoolId,
            ClientId: config.ClientPoolId
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: username,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                alert(err);
                return;
            }
            console.log('call result: ' + result);
        })
    },

    getUrlParameter: function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },

    signinUser: function () {
        event.preventDefault();
        
        var authenticationData = {
            Username: $('#username').val(),
            Password: $('#password').val(),
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        var poolData = {
            UserPoolId: config.PoolId,
            ClientId: config.ClientPoolId
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: authenticationData.Username,
            Pool: userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());

                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: config.IdentityPoolId, 
                    Logins: {
                        // Change the key below according to the specific region your user pool is in.
                        'cognito-idp.eu-central-1.amazonaws.com/eu-central-1_7yREshiYe': result.getIdToken().getJwtToken()
                    }
                });

                // Instantiate aws sdk service objects now that the credentials have been updated.
                // example: var s3 = new AWS.S3();
                window.location.replace('logged.html')

            },

            onFailure: function (err) {
                alert(err);
            },

        });
    }


}