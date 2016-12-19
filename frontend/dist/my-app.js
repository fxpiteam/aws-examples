var EntryPoint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var AmazonCognitoIdentity = __webpack_require__(1);
	var config = __webpack_require__(197);
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright 2016 Amazon.com,
	 * Inc. or its affiliates. All Rights Reserved.
	 * 
	 * Licensed under the Amazon Software License (the "License").
	 * You may not use this file except in compliance with the
	 * License. A copy of the License is located at
	 * 
	 *     http://aws.amazon.com/asl/
	 * 
	 * or in the "license" file accompanying this file. This file is
	 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	 * CONDITIONS OF ANY KIND, express or implied. See the License
	 * for the specific language governing permissions and
	 * limitations under the License. 
	 */


	!function(e,t){ true?module.exports=t(__webpack_require__(2),__webpack_require__(60),__webpack_require__(196)):"function"==typeof define&&define.amd?define(["sjcl","aws-sdk/clients/cognitoidentityserviceprovider","jsbn"],t):"object"==typeof exports?exports.AmazonCognitoIdentity=t(require("sjcl"),require("aws-sdk/clients/cognitoidentityserviceprovider"),require("jsbn")):e.AmazonCognitoIdentity=t(e.sjcl,e.AWSCognito.CognitoIdentityServiceProvider,e)}(this,function(e,t,n){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(10),a=s(o),u=i(r);Object.keys(u).forEach(function(e){a["default"][e]=u[e]})},function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),a=i(o),u=n(11),c="FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",l="userAttributes.",h=function(){function e(t,n){s(this,e),this.N=new u.BigInteger(c,16),this.g=new u.BigInteger("2"),this.k=new u.BigInteger(this.hexHash("00"+this.N.toString(16)+"0"+this.g.toString(16)),16),this.paranoia=n,this.smallAValue=this.generateRandomSmallA(),this.largeAValue=this.calculateA(this.smallAValue),this.infoBits=a.codec.utf8String.toBits("Caldera Derived Key"),this.poolName=t}return r(e,[{key:"getSmallAValue",value:function(){return this.smallAValue}},{key:"getLargeAValue",value:function(){return this.largeAValue}},{key:"generateRandomSmallA",value:function(){var e=a.random.randomWords(32,this.paranoia),t=a.codec.hex.fromBits(e),n=new u.BigInteger(t,16),i=n.mod(this.N);return i}},{key:"generateRandomString",value:function(){var e=a.random.randomWords(10,this.paranoia),t=a.codec.base64.fromBits(e);return t}},{key:"getRandomPassword",value:function(){return this.randomPassword}},{key:"getSaltDevices",value:function(){return this.SaltToHashDevices}},{key:"getVerifierDevices",value:function(){return this.verifierDevices}},{key:"generateHashDevice",value:function(e,t){this.randomPassword=this.generateRandomString();var n=""+e+t+":"+this.randomPassword,i=this.hash(n),s=a.random.randomWords(4,this.paranoia),r=a.codec.hex.fromBits(s),o=new u.BigInteger(r,16),c=o.toString(16)[0];this.SaltToHashDevices=o.toString(16),o.toString(16).length%2===1?this.SaltToHashDevices="0"+this.SaltToHashDevices:"89ABCDEFabcdef".indexOf(c)!==-1&&(this.SaltToHashDevices="00"+this.SaltToHashDevices);var l=this.g.modPow(new u.BigInteger(this.hexHash(this.SaltToHashDevices+i),16),this.N),h=l.toString(16)[0];this.verifierDevices=l.toString(16),l.toString(16).length%2===1?this.verifierDevices="0"+this.verifierDevices:"89ABCDEFabcdef".indexOf(h)!==-1&&(this.verifierDevices="00"+this.verifierDevices)}},{key:"calculateA",value:function(e){var t=this.g.modPow(e,this.N);if("0"===t.mod(this.N).toString())throw new Error("Illegal paramater. A mod N cannot be 0.");return t}},{key:"calculateU",value:function(e,t){var n=e.toString(16)[0],i=t.toString(16)[0],s=e.toString(16),r=t.toString(16);e.toString(16).length%2===1?s="0"+s:"89ABCDEFabcdef".indexOf(n)!==-1&&(s="00"+s),t.toString(16).length%2===1?r="0"+r:"89ABCDEFabcdef".indexOf(i)!==-1&&(r="00"+r),this.UHexHash=this.hexHash(s+r);var o=new u.BigInteger(this.UHexHash,16);return o}},{key:"hash",value:function(e){var t=a.codec.hex.fromBits(a.hash.sha256.hash(e));return new Array(64-t.length).join("0")+t}},{key:"hexHash",value:function(e){var t=a.codec.hex.fromBits(a.hash.sha256.hash(a.codec.hex.toBits(e)));return new Array(64-t.length).join("0")+t}},{key:"computehkdf",value:function(e,t){var n=new a.misc.hmac(t,a.hash.sha256);n.update(e);var i=n.digest(),s=new a.misc.hmac(i,a.hash.sha256),r=a.bitArray.concat(this.infoBits,a.codec.utf8String.toBits(String.fromCharCode(1)));return s.update(r),a.bitArray.clamp(s.digest(),128)}},{key:"getPasswordAuthenticationKey",value:function(e,t,n,i){if(n.mod(this.N).equals(new u.BigInteger("0",16)))throw new Error("B cannot be zero.");if(this.UValue=this.calculateU(this.largeAValue,n),this.UValue.equals(new u.BigInteger("0",16)))throw new Error("U cannot be zero.");var s=""+this.poolName+e+":"+t,r=this.hash(s),o=i.toString(16)[0],c=i.toString(16);i.toString(16).length%2===1?c="0"+c:"89ABCDEFabcdef".indexOf(o)!==-1&&(c="00"+c);var l=new u.BigInteger(this.hexHash(c+r),16),h=this.g.modPow(l,this.N),d=n.subtract(this.k.multiply(h)),f=d.modPow(this.smallAValue.add(this.UValue.multiply(l)),this.N).mod(this.N),g=f.toString(16),v=f.toString(16)[0];f.toString(16).length%2===1?g="0"+g:"89ABCDEFabcdef".indexOf(v)!==-1&&(g="00"+g);var S=this.UHexHash,m=this.UHexHash[0];this.UHexHash.length%2===1?S="0"+S:this.UHexHash.length%2===0&&"89ABCDEFabcdef".indexOf(m)!==-1&&(S="00"+S);var C=this.computehkdf(a.codec.hex.toBits(g),a.codec.hex.toBits(S));return C}},{key:"getNewPasswordRequiredChallengeUserAttributePrefix",value:function(){return l}}]),e}();t["default"]=h},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),a=i(o),u=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.AccessToken;s(this,e),this.jwtToken=n||""}return r(e,[{key:"getJwtToken",value:function(){return this.jwtToken}},{key:"getExpiration",value:function(){var e=this.jwtToken.split(".")[1],t=JSON.parse(a.codec.utf8String.fromBits(a.codec.base64url.toBits(e)));return t.exp}}]),e}();t["default"]=u},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),a=i(o),u=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.IdToken;s(this,e),this.jwtToken=n||""}return r(e,[{key:"getJwtToken",value:function(){return this.jwtToken}},{key:"getExpiration",value:function(){var e=this.jwtToken.split(".")[1],t=JSON.parse(a.codec.utf8String.fromBits(a.codec.base64url.toBits(e)));return t.exp}}]),e}();t["default"]=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=t.RefreshToken;n(this,e),this.token=i||""}return i(e,[{key:"getToken",value:function(){return this.token}}]),e}();t["default"]=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),u=s(a),c=n(11),l=n(2),h=i(l),d=n(3),f=i(d),g=n(4),v=i(g),S=n(5),m=i(S),C=n(8),y=i(C),k=n(9),A=i(k),U=n(7),w=i(U),p=function(){function e(t){if(r(this,e),null==t||null==t.Username||null==t.Pool)throw new Error("Username and pool information are required.");this.username=t.Username||"",this.pool=t.Pool,this.Session=null,this.client=t.Pool.client,this.signInUserSession=null,this.authenticationFlowType="USER_SRP_AUTH"}return o(e,[{key:"getSignInUserSession",value:function(){return this.signInUserSession}},{key:"getUsername",value:function(){return this.username}},{key:"getAuthenticationFlowType",value:function(){return this.authenticationFlowType}},{key:"setAuthenticationFlowType",value:function(e){this.authenticationFlowType=e}},{key:"authenticateUser",value:function(e,t){var n=this,i=new h["default"](this.pool.getUserPoolId().split("_")[1],this.pool.getParanoia()),s=new A["default"],r=void 0,o=void 0,a={};null!=this.deviceKey&&(a.DEVICE_KEY=this.deviceKey),a.USERNAME=this.username,a.SRP_A=i.getLargeAValue().toString(16),"CUSTOM_AUTH"===this.authenticationFlowType&&(a.CHALLENGE_NAME="SRP_A"),this.client.makeUnauthenticatedRequest("initiateAuth",{AuthFlow:this.authenticationFlowType,ClientId:this.pool.getClientId(),AuthParameters:a,ClientMetadata:e.getValidationData()},function(a,l){if(a)return t.onFailure(a);var h=l.ChallengeParameters;n.username=h.USER_ID_FOR_SRP,r=new c.BigInteger(h.SRP_B,16),o=new c.BigInteger(h.SALT,16),n.getCachedDeviceKeyAndPassword();var d=i.getPasswordAuthenticationKey(n.username,e.getPassword(),r,o),f=u.codec.base64.toBits(h.SECRET_BLOCK),g=new u.misc.hmac(d,u.hash.sha256);g.update(u.codec.utf8String.toBits(n.pool.getUserPoolId().split("_")[1])),g.update(u.codec.utf8String.toBits(n.username)),g.update(f);var v=s.getNowString();g.update(u.codec.utf8String.toBits(v));var S=g.digest(),m=u.codec.base64.fromBits(S),C={};C.USERNAME=n.username,C.PASSWORD_CLAIM_SECRET_BLOCK=h.SECRET_BLOCK,C.TIMESTAMP=v,C.PASSWORD_CLAIM_SIGNATURE=m,null!=n.deviceKey&&(C.DEVICE_KEY=n.deviceKey);var y=function k(e,t){return n.client.makeUnauthenticatedRequest("respondToAuthChallenge",e,function(i,s){return i&&"ResourceNotFoundException"===i.code&&i.message.toLowerCase().indexOf("device")!==-1?(C.DEVICE_KEY=null,n.deviceKey=null,n.randomPassword=null,n.deviceGroupKey=null,n.clearCachedDeviceKeyAndPassword(),k(e,t)):t(i,s)})};y({ChallengeName:"PASSWORD_VERIFIER",ClientId:n.pool.getClientId(),ChallengeResponses:C,Session:l.Session},function(e,s){if(e)return t.onFailure(e);var r=s.ChallengeName;if("NEW_PASSWORD_REQUIRED"===r){n.Session=s.Session;var o=null,a=null,u=[],c=i.getNewPasswordRequiredChallengeUserAttributePrefix();if(s.ChallengeParameters&&(o=JSON.parse(s.ChallengeParameters.userAttributes),a=JSON.parse(s.ChallengeParameters.requiredAttributes)),a)for(var l=0;l<a.length;l++)u[l]=a[l].substr(c.length);return t.newPasswordRequired(o,u)}return n.authenticateUserInternal(s,i,t)})})}},{key:"authenticateUserInternal",value:function(e,t,n){var i=this,s=e.ChallengeName;if("SMS_MFA"===s)return this.Session=e.Session,n.mfaRequired(s);if("CUSTOM_CHALLENGE"===s)return this.Session=e.Session,n.customChallenge(e.ChallengeParameters);if("DEVICE_SRP_AUTH"===s)return void this.getDeviceResponse(n);this.signInUserSession=this.getCognitoUserSession(e.AuthenticationResult),this.cacheTokens();var r=e.AuthenticationResult.NewDeviceMetadata;if(null==r)return n.onSuccess(this.signInUserSession);t.generateHashDevice(e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,e.AuthenticationResult.NewDeviceMetadata.DeviceKey);var o={Salt:u.codec.base64.fromBits(u.codec.hex.toBits(t.getSaltDevices().toString(16))),PasswordVerifier:u.codec.base64.fromBits(u.codec.hex.toBits(t.getVerifierDevices().toString(16)))};this.verifierDevices=u.codec.base64.fromBits(t.getVerifierDevices()),this.deviceGroupKey=r.DeviceGroupKey,this.randomPassword=t.getRandomPassword(),this.client.makeUnauthenticatedRequest("confirmDevice",{DeviceKey:r.DeviceKey,AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceSecretVerifierConfig:o,DeviceName:navigator.userAgent},function(t,s){return t?n.onFailure(t):(i.deviceKey=e.AuthenticationResult.NewDeviceMetadata.DeviceKey,i.cacheDeviceKeyAndPassword(),s.UserConfirmationNecessary===!0?n.onSuccess(i.signInUserSession,s.UserConfirmationNecessary):n.onSuccess(i.signInUserSession))})}},{key:"completeNewPasswordChallenge",value:function(e,t,n){var i=this;if(!e)return n.onFailure("New password is required.");var s=new h["default"](this.pool.getUserPoolId().split("_")[1],this.pool.getParanoia()),r=s.getNewPasswordRequiredChallengeUserAttributePrefix(),o={};t&&Object.keys(t).forEach(function(e){o[r+e]=t[e]}),o.NEW_PASSWORD=e,o.USERNAME=this.username,this.client.makeUnauthenticatedRequest("respondToAuthChallenge",{ChallengeName:"NEW_PASSWORD_REQUIRED",ClientId:this.pool.getClientId(),ChallengeResponses:o,Session:this.Session},function(e,t){return e?n.onFailure(e):i.authenticateUserInternal(t,s,n)})}},{key:"getDeviceResponse",value:function(e){var t=this,n=new h["default"](this.deviceGroupKey,this.pool.getParanoia()),i=new A["default"],s={};s.USERNAME=this.username,s.DEVICE_KEY=this.deviceKey,s.SRP_A=n.getLargeAValue().toString(16),this.client.makeUnauthenticatedRequest("respondToAuthChallenge",{ChallengeName:"DEVICE_SRP_AUTH",ClientId:this.pool.getClientId(),ChallengeResponses:s},function(s,r){if(s)return e.onFailure(s);var o=r.ChallengeParameters,a=new c.BigInteger(o.SRP_B,16),l=new c.BigInteger(o.SALT,16),h=n.getPasswordAuthenticationKey(t.deviceKey,t.randomPassword,a,l),d=u.codec.base64.toBits(o.SECRET_BLOCK),f=new u.misc.hmac(h,u.hash.sha256);f.update(u.codec.utf8String.toBits(t.deviceGroupKey)),f.update(u.codec.utf8String.toBits(t.deviceKey)),f.update(d);var g=i.getNowString();f.update(u.codec.utf8String.toBits(g));var v=f.digest(),S=u.codec.base64.fromBits(v),m={};m.USERNAME=t.username,m.PASSWORD_CLAIM_SECRET_BLOCK=o.SECRET_BLOCK,m.TIMESTAMP=g,m.PASSWORD_CLAIM_SIGNATURE=S,m.DEVICE_KEY=t.deviceKey,t.client.makeUnauthenticatedRequest("respondToAuthChallenge",{ChallengeName:"DEVICE_PASSWORD_VERIFIER",ClientId:t.pool.getClientId(),ChallengeResponses:m,Session:r.Session},function(n,i){return n?e.onFailure(n):(t.signInUserSession=t.getCognitoUserSession(i.AuthenticationResult),t.cacheTokens(),e.onSuccess(t.signInUserSession))})})}},{key:"confirmRegistration",value:function(e,t,n){this.client.makeUnauthenticatedRequest("confirmSignUp",{ClientId:this.pool.getClientId(),ConfirmationCode:e,Username:this.username,ForceAliasCreation:t},function(e){return e?n(e,null):n(null,"SUCCESS")})}},{key:"sendCustomChallengeAnswer",value:function(e,t){var n=this,i={};i.USERNAME=this.username,i.ANSWER=e,this.client.makeUnauthenticatedRequest("respondToAuthChallenge",{ChallengeName:"CUSTOM_CHALLENGE",ChallengeResponses:i,ClientId:this.pool.getClientId(),Session:this.Session},function(e,i){if(e)return t.onFailure(e);var s=i.ChallengeName;return"CUSTOM_CHALLENGE"===s?(n.Session=i.Session,t.customChallenge(i.challengeParameters)):(n.signInUserSession=n.getCognitoUserSession(i.AuthenticationResult),n.cacheTokens(),t.onSuccess(n.signInUserSession))})}},{key:"sendMFACode",value:function(e,t){var n=this,i={};i.USERNAME=this.username,i.SMS_MFA_CODE=e,null!=this.deviceKey&&(i.DEVICE_KEY=this.deviceKey),this.client.makeUnauthenticatedRequest("respondToAuthChallenge",{ChallengeName:"SMS_MFA",ChallengeResponses:i,ClientId:this.pool.getClientId(),Session:this.Session},function(e,i){if(e)return t.onFailure(e);var s=i.ChallengeName;if("DEVICE_SRP_AUTH"===s)return void n.getDeviceResponse(t);if(n.signInUserSession=n.getCognitoUserSession(i.AuthenticationResult),n.cacheTokens(),null==i.AuthenticationResult.NewDeviceMetadata)return t.onSuccess(n.signInUserSession);var r=new h["default"](n.pool.getUserPoolId().split("_")[1],n.pool.getParanoia());r.generateHashDevice(i.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,i.AuthenticationResult.NewDeviceMetadata.DeviceKey);var o={Salt:u.codec.base64.fromBits(u.codec.hex.toBits(r.getSaltDevices().toString(16))),PasswordVerifier:u.codec.base64.fromBits(u.codec.hex.toBits(r.getVerifierDevices().toString(16)))};n.verifierDevices=u.codec.base64.fromBits(r.getVerifierDevices()),n.deviceGroupKey=i.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,n.randomPassword=r.getRandomPassword(),n.client.makeUnauthenticatedRequest("confirmDevice",{DeviceKey:i.AuthenticationResult.NewDeviceMetadata.DeviceKey,AccessToken:n.signInUserSession.getAccessToken().getJwtToken(),DeviceSecretVerifierConfig:o,DeviceName:navigator.userAgent},function(e,s){return e?t.onFailure(e):(n.deviceKey=i.AuthenticationResult.NewDeviceMetadata.DeviceKey,n.cacheDeviceKeyAndPassword(),s.UserConfirmationNecessary===!0?t.onSuccess(n.signInUserSession,s.UserConfirmationNecessary):t.onSuccess(n.signInUserSession))})})}},{key:"changePassword",value:function(e,t,n){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("changePassword",{PreviousPassword:e,ProposedPassword:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?n(e,null):n(null,"SUCCESS")}):n(new Error("User is not authenticated"),null)}},{key:"enableMFA",value:function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null);var t=[],n={DeliveryMedium:"SMS",AttributeName:"phone_number"};t.push(n),this.client.makeUnauthenticatedRequest("setUserSettings",{MFAOptions:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t){return t?e(t,null):e(null,"SUCCESS")})}},{key:"disableMFA",value:function(e){if(null==this.signInUserSession||!this.signInUserSession.isValid())return e(new Error("User is not authenticated"),null);var t=[];this.client.makeUnauthenticatedRequest("setUserSettings",{MFAOptions:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t){return t?e(t,null):e(null,"SUCCESS")})}},{key:"deleteUser",value:function(e){var t=this;return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("deleteUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(n){return n?e(n,null):(t.clearCachedTokens(),e(null,"SUCCESS"))}):e(new Error("User is not authenticated"),null)}},{key:"updateAttributes",value:function(e,t){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("updateUserAttributes",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),UserAttributes:e},function(e){return e?t(e,null):t(null,"SUCCESS")}):t(new Error("User is not authenticated"),null)}},{key:"getUserAttributes",value:function(e){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("getUser",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(t,n){if(t)return e(t,null);for(var i=[],s=0;s<n.UserAttributes.length;s++){var r={Name:n.UserAttributes[s].Name,Value:n.UserAttributes[s].Value},o=new w["default"](r);i.push(o)}return e(null,i)}):e(new Error("User is not authenticated"),null)}},{key:"deleteAttributes",value:function(e,t){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("deleteUserAttributes",{UserAttributeNames:e,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?t(e,null):t(null,"SUCCESS")}):t(new Error("User is not authenticated"),null)}},{key:"resendConfirmationCode",value:function(e){this.client.makeUnauthenticatedRequest("resendConfirmationCode",{ClientId:this.pool.getClientId(),Username:this.username},function(t){return t?e(t,null):e(null,"SUCCESS")})}},{key:"getSession",value:function(e){if(null==this.username)return e(new Error("Username is null. Cannot retrieve a new session"),null);if(null!=this.signInUserSession&&this.signInUserSession.isValid())return e(null,this.signInUserSession);var t="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,n=t+".idToken",i=t+".accessToken",s=t+".refreshToken",r=window.localStorage;if(r.getItem(n)){var o=new v["default"]({IdToken:r.getItem(n)}),a=new f["default"]({AccessToken:r.getItem(i)}),u=new m["default"]({RefreshToken:r.getItem(s)}),c={IdToken:o,AccessToken:a,RefreshToken:u},l=new y["default"](c);if(l.isValid())return this.signInUserSession=l,e(null,this.signInUserSession);if(null==u.getToken())return e(new Error("Cannot retrieve a new session. Please authenticate."),null);this.refreshSession(u,e)}}},{key:"refreshSession",value:function(e,t){var n=this,i={};i.REFRESH_TOKEN=e.getToken();var s="CognitoIdentityServiceProvider."+this.pool.getClientId(),r=s+".LastAuthUser",o=window.localStorage;if(o.getItem(r)){this.username=o.getItem(r);var a=s+"."+this.username+".deviceKey";this.deviceKey=o.getItem(a),i.DEVICE_KEY=this.deviceKey}this.client.makeUnauthenticatedRequest("initiateAuth",{ClientId:this.pool.getClientId(),AuthFlow:"REFRESH_TOKEN_AUTH",AuthParameters:i},function(i,s){if(i)return t(i,null);if(s){var r=s.AuthenticationResult;return Object.prototype.hasOwnProperty.call(r,"RefreshToken")||(r.RefreshToken=e.getToken()),n.signInUserSession=n.getCognitoUserSession(r),n.cacheTokens(),t(null,n.signInUserSession)}})}},{key:"cacheTokens",value:function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId(),t=e+"."+this.username+".idToken",n=e+"."+this.username+".accessToken",i=e+"."+this.username+".refreshToken",s=e+".LastAuthUser",r=window.localStorage;r.setItem(t,this.signInUserSession.getIdToken().getJwtToken()),r.setItem(n,this.signInUserSession.getAccessToken().getJwtToken()),r.setItem(i,this.signInUserSession.getRefreshToken().getToken()),r.setItem(s,this.username)}},{key:"cacheDeviceKeyAndPassword",value:function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",i=e+".deviceGroupKey",s=window.localStorage;s.setItem(t,this.deviceKey),s.setItem(n,this.randomPassword),s.setItem(i,this.deviceGroupKey)}},{key:"getCachedDeviceKeyAndPassword",value:function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",i=e+".deviceGroupKey",s=window.localStorage;s.getItem(t)&&(this.deviceKey=s.getItem(t),this.randomPassword=s.getItem(n),this.deviceGroupKey=s.getItem(i))}},{key:"clearCachedDeviceKeyAndPassword",value:function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId()+"."+this.username,t=e+".deviceKey",n=e+".randomPasswordKey",i=e+".deviceGroupKey",s=window.localStorage;s.removeItem(t),s.removeItem(n),s.removeItem(i)}},{key:"clearCachedTokens",value:function(){var e="CognitoIdentityServiceProvider."+this.pool.getClientId(),t=e+"."+this.username+".idToken",n=e+"."+this.username+".accessToken",i=e+"."+this.username+".refreshToken",s=e+".LastAuthUser",r=window.localStorage;r.removeItem(t),r.removeItem(n),r.removeItem(i),r.removeItem(s)}},{key:"getCognitoUserSession",value:function(e){var t=new v["default"](e),n=new f["default"](e),i=new m["default"](e),s={IdToken:t,AccessToken:n,RefreshToken:i};return new y["default"](s)}},{key:"forgotPassword",value:function(e){this.client.makeUnauthenticatedRequest("forgotPassword",{ClientId:this.pool.getClientId(),Username:this.username},function(t,n){return t?e.onFailure(t):"function"==typeof e.inputVerificationCode?e.inputVerificationCode(n):e.onSuccess()})}},{key:"confirmPassword",value:function(e,t,n){this.client.makeUnauthenticatedRequest("confirmForgotPassword",{ClientId:this.pool.getClientId(),Username:this.username,ConfirmationCode:e,Password:t},function(e){return e?n.onFailure(e):n.onSuccess()})}},{key:"getAttributeVerificationCode",value:function(e,t){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("getUserAttributeVerificationCode",{AttributeName:e,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e,n){return e?t.onFailure(e):t.inputVerificationCode(n)}):t(new Error("User is not authenticated"),null)}},{key:"verifyAttribute",value:function(e,t,n){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("verifyUserAttribute",{AttributeName:e,Code:t,AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(e){return e?n.onFailure(e):n.onSuccess("SUCCESS")}):n(new Error("User is not authenticated"),null)}},{key:"getDevice",value:function(e){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("getDevice",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey},function(t,n){return t?e.onFailure(t):e.onSuccess(n)}):e(new Error("User is not authenticated"),null)}},{key:"forgetSpecificDevice",value:function(e,t){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("forgetDevice",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:e},function(e){return e?t.onFailure(e):t.onSuccess("SUCCESS")}):t(new Error("User is not authenticated"),null)}},{key:"forgetDevice",value:function(e){var t=this;this.forgetSpecificDevice(this.deviceKey,{onFailure:e.onFailure,onSuccess:function(n){return t.deviceKey=null,t.deviceGroupKey=null,t.randomPassword=null,t.clearCachedDeviceKeyAndPassword(),e.onSuccess(n)}})}},{key:"setDeviceStatusRemembered",value:function(e){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("updateDeviceStatus",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey,DeviceRememberedStatus:"remembered"},function(t){return t?e.onFailure(t):e.onSuccess("SUCCESS")}):e(new Error("User is not authenticated"),null)}},{key:"setDeviceStatusNotRemembered",value:function(e){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("updateDeviceStatus",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),DeviceKey:this.deviceKey,DeviceRememberedStatus:"not_remembered"},function(t){return t?e.onFailure(t):e.onSuccess("SUCCESS")}):e(new Error("User is not authenticated"),null)}},{key:"listDevices",value:function(e,t,n){return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("listDevices",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken(),Limit:e,PaginationToken:t},function(e,t){return e?n.onFailure(e):n.onSuccess(t)}):n(new Error("User is not authenticated"),null)}},{key:"globalSignOut",value:function(e){var t=this;return null!=this.signInUserSession&&this.signInUserSession.isValid()?void this.client.makeUnauthenticatedRequest("globalSignOut",{AccessToken:this.signInUserSession.getAccessToken().getJwtToken()},function(n){return n?e.onFailure(n):(t.clearCachedTokens(),e.onSuccess("SUCCESS"))}):e(new Error("User is not authenticated"),null)}},{key:"signOut",value:function(){this.signInUserSession=null,this.clearCachedTokens()}}]),e}();t["default"]=p},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=t.Name,s=t.Value;n(this,e),this.Name=i||"",this.Value=s||""}return i(e,[{key:"getValue",value:function(){return this.Value}},{key:"setValue",value:function(e){return this.Value=e,this}},{key:"getName",value:function(){return this.Name}},{key:"setName",value:function(e){return this.Name=e,this}},{key:"toString",value:function(){return JSON.stringify(this)}},{key:"toJSON",value:function(){return{Name:this.Name,Value:this.Value}}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=t.IdToken,s=t.RefreshToken,r=t.AccessToken;if(n(this,e),null==r||null==i)throw new Error("Id token and Access Token must be present.");this.idToken=i,this.refreshToken=s,this.accessToken=r}return i(e,[{key:"getIdToken",value:function(){return this.idToken}},{key:"getRefreshToken",value:function(){return this.refreshToken}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"isValid",value:function(){var e=Math.floor(new Date/1e3);return e<this.accessToken.getExpiration()&&e<this.idToken.getExpiration()}}]),e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=function(){function e(){n(this,e)}return i(e,[{key:"getNowString",value:function(){var e=new Date,t=r[e.getUTCDay()],n=s[e.getUTCMonth()],i=e.getUTCDate(),o=e.getUTCHours();o<10&&(o="0"+o);var a=e.getUTCMinutes();a<10&&(a="0"+a);var u=e.getUTCSeconds();
	u<10&&(u="0"+u);var c=e.getUTCFullYear(),l=t+" "+n+" "+i+" "+o+":"+a+":"+u+" UTC "+c;return l}}]),e}();t["default"]=o},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t){n(this,e);var i=t||{},s=i.ValidationData,r=i.Username,o=i.Password;this.validationData=s||[],this.username=r,this.password=o}return i(e,[{key:"getUsername",value:function(){return this.username}},{key:"getPassword",value:function(){return this.password}},{key:"getValidationData",value:function(){return this.validationData}}]),e}();t["default"]=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(10),a=i(o),u=n(6),c=i(u),l=function(){function e(t){s(this,e);var n=t||{},i=n.UserPoolId,r=n.ClientId,o=n.Paranoia;if(!i||!r)throw new Error("Both UserPoolId and ClientId are required.");if(!/^[\w-]+_.+$/.test(i))throw new Error("Invalid UserPoolId format.");var u=i.split("_")[0];this.userPoolId=i,this.clientId=r,this.paranoia=o||0,this.client=new a["default"]({apiVersion:"2016-04-19",region:u})}return r(e,[{key:"getUserPoolId",value:function(){return this.userPoolId}},{key:"getClientId",value:function(){return this.clientId}},{key:"getParanoia",value:function(){return this.paranoia}},{key:"setParanoia",value:function(e){this.paranoia=e}},{key:"signUp",value:function(e,t,n,i,s){var r=this;this.client.makeUnauthenticatedRequest("signUp",{ClientId:this.clientId,Username:e,Password:t,UserAttributes:n,ValidationData:i},function(t,n){if(t)return s(t,null);var i={Username:e,Pool:r},o={user:new c["default"](i),userConfirmed:n.UserConfirmed};return s(null,o)})}},{key:"getCurrentUser",value:function(){var e="CognitoIdentityServiceProvider."+this.clientId+".LastAuthUser",t=window.localStorage,n=t.getItem(e);if(n){var i={Username:n,Pool:this};return new c["default"](i)}return null}}]),e}();t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(12);Object.defineProperty(t,"AuthenticationDetails",{enumerable:!0,get:function(){return i(s)["default"]}});var r=n(2);Object.defineProperty(t,"AuthenticationHelper",{enumerable:!0,get:function(){return i(r)["default"]}});var o=n(3);Object.defineProperty(t,"CognitoAccessToken",{enumerable:!0,get:function(){return i(o)["default"]}});var a=n(4);Object.defineProperty(t,"CognitoIdToken",{enumerable:!0,get:function(){return i(a)["default"]}});var u=n(5);Object.defineProperty(t,"CognitoRefreshToken",{enumerable:!0,get:function(){return i(u)["default"]}});var c=n(6);Object.defineProperty(t,"CognitoUser",{enumerable:!0,get:function(){return i(c)["default"]}});var l=n(7);Object.defineProperty(t,"CognitoUserAttribute",{enumerable:!0,get:function(){return i(l)["default"]}});var h=n(13);Object.defineProperty(t,"CognitoUserPool",{enumerable:!0,get:function(){return i(h)["default"]}});var d=n(8);Object.defineProperty(t,"CognitoUserSession",{enumerable:!0,get:function(){return i(d)["default"]}});var f=n(9);Object.defineProperty(t,"DateHelper",{enumerable:!0,get:function(){return i(f)["default"]}})}])});
	//# sourceMappingURL=amazon-cognito-identity.min.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
	sjcl.cipher.aes=function(a){this.s[0][0][0]||this.O();var b,c,d,e,f=this.s[0][4],g=this.s[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^g[3][f[c&
	255]]};
	sjcl.cipher.aes.prototype={encrypt:function(a){return t(this,a,0)},decrypt:function(a){return t(this,a,1)},s:[[[],[],[],[],[]],[[],[],[],[],[]]],O:function(){var a=this.s[0],b=this.s[1],c=a[4],d=b[4],e,f,g,h=[],k=[],l,n,m,p;for(e=0;0x100>e;e++)k[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=l||1,g=k[g]||1)for(m=g^g<<1^g<<2^g<<3^g<<4,m=m>>8^m&255^99,c[f]=m,d[m]=f,n=h[e=h[l=h[f]]],p=0x1010101*n^0x10001*e^0x101*l^0x1010100*f,n=0x101*h[m]^0x1010100*m,e=0;4>e;e++)a[e][f]=n=n<<24^n>>>8,b[e][m]=p=p<<24^p>>>8;for(e=
	0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
	function t(a,b,c){if(4!==b.length)throw new sjcl.exception.invalid("invalid aes block size");var d=a.b[c],e=b[0]^d[0],f=b[c?3:1]^d[1],g=b[2]^d[2];b=b[c?1:3]^d[3];var h,k,l,n=d.length/4-2,m,p=4,r=[0,0,0,0];h=a.s[c];a=h[0];var q=h[1],v=h[2],w=h[3],x=h[4];for(m=0;m<n;m++)h=a[e>>>24]^q[f>>16&255]^v[g>>8&255]^w[b&255]^d[p],k=a[f>>>24]^q[g>>16&255]^v[b>>8&255]^w[e&255]^d[p+1],l=a[g>>>24]^q[b>>16&255]^v[e>>8&255]^w[f&255]^d[p+2],b=a[b>>>24]^q[e>>16&255]^v[f>>8&255]^w[g&255]^d[p+3],p+=4,e=h,f=k,g=l;for(m=
	0;4>m;m++)r[c?3&-m:m]=x[e>>>24]<<24^x[f>>16&255]<<16^x[g>>8&255]<<8^x[b&255]^d[p++],h=e,e=f,f=g,g=b,b=h;return r}
	sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.$(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.$(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
	b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b=b&31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
	c},$:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},i:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};
	sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
	sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a=a+"00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
	sjcl.codec.base32={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",X:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f="",g=0,h=sjcl.codec.base32.B,k=0,l=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32.X);for(c=0;f.length*d<l;)f+=h.charAt((k^a[c]>>>g)>>>e),g<d?(k=a[c]<<d-g,g+=e,c++):(k<<=d,g-=d);for(;f.length&7&&!b;)f+="=";return f},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();var c=sjcl.codec.base32.BITS,
	d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f=[],g,h=0,k=sjcl.codec.base32.B,l=0,n,m="base32";b&&(k=sjcl.codec.base32.X,m="base32hex");for(g=0;g<a.length;g++){n=k.indexOf(a.charAt(g));if(0>n){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}throw new sjcl.exception.invalid("this isn't "+m+"!");}h>e?(h-=e,f.push(l^n>>>h),l=n<<c-h):(h+=d,l^=n<<c-h)}h&56&&f.push(sjcl.bitArray.partial(h&56,l,1));return f}};
	sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};
	sjcl.codec.base64={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.B,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64.B,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=f.indexOf(a.charAt(d));
	if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.O();a?(this.F=a.F.slice(0),this.A=a.A.slice(0),this.l=a.l):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
	sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.F=this.Y.slice(0);this.A=[];this.l=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.A=sjcl.bitArray.concat(this.A,a);b=this.l;a=this.l=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,d.subarray(16*e,
	16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,c.splice(0,16));return this},finalize:function(){var a,b=this.A,c=this.F,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.l/0x100000000));for(b.push(this.l|0);b.length;)u(this,b.splice(0,16));this.reset();return c},Y:[],b:[],O:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}for(var b=0,c=2,d,e;64>b;c++){e=!0;for(d=2;d*d<=c;d++)if(0===c%d){e=
	!1;break}e&&(8>b&&(this.Y[b]=a(Math.pow(c,.5))),this.b[b]=a(Math.pow(c,1/3)),b++)}}};
	function u(a,b){var c,d,e,f=a.F,g=a.b,h=f[0],k=f[1],l=f[2],n=f[3],m=f[4],p=f[5],r=f[6],q=f[7];for(c=0;64>c;c++)16>c?d=b[c]:(d=b[c+1&15],e=b[c+14&15],d=b[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+b[c&15]+b[c+9&15]|0),d=d+q+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(r^m&(p^r))+g[c],q=r,r=p,p=m,m=n+d|0,n=l,l=k,k=h,h=d+(k&l^n&(k^l))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+h|0;f[1]=f[1]+k|0;f[2]=f[2]+l|0;f[3]=f[3]+n|0;f[4]=f[4]+m|0;f[5]=f[5]+p|0;f[6]=f[6]+r|0;f[7]=
	f[7]+q|0}
	sjcl.mode.ccm={name:"ccm",G:[],listenProgress:function(a){sjcl.mode.ccm.G.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm.G.indexOf(a);-1<a&&sjcl.mode.ccm.G.splice(a,1)},fa:function(a){var b=sjcl.mode.ccm.G.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,k=h.bitLength(c)/8,l=h.bitLength(g)/8;e=e||64;d=d||[];if(7>k)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;4>f&&l>>>8*f;f++);f<15-k&&(f=15-k);c=h.clamp(c,
	8*(15-f));b=sjcl.mode.ccm.V(a,b,c,d,e,f);g=sjcl.mode.ccm.C(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),k=f.clamp(b,h-e),l=f.bitSlice(b,h-e),h=(h-e)/8;if(7>g)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));k=sjcl.mode.ccm.C(a,k,c,l,e,b);a=sjcl.mode.ccm.V(a,k.data,c,d,e,b);if(!f.equal(k.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");
	return k.data},na:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,k=h.i;d=[h.partial(8,(b.length?64:0)|d-2<<2|f-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length)for(c=h.bitLength(b)/8,65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c])),g=h.concat(g,b),b=0;b<g.length;b+=4)d=a.encrypt(k(d,g.slice(b,b+4).concat([0,0,0])));return d},V:function(a,b,c,d,e,f){var g=sjcl.bitArray,h=g.i;e/=8;if(e%2||4>e||16<e)throw new sjcl.exception.invalid("ccm: invalid tag length");
	if(0xffffffff<d.length||0xffffffff<b.length)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");c=sjcl.mode.ccm.na(a,d,c,e,g.bitLength(b)/8,f);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return g.clamp(c,8*e)},C:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.i;var k=b.length,l=h.bitLength(b),n=k/50,m=n;c=h.concat([h.partial(8,f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!k)return{tag:d,data:[]};for(g=0;g<k;g+=4)g>n&&(sjcl.mode.ccm.fa(g/
	k),n+=m),c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,l)}}};
	sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.S,k=sjcl.bitArray,l=k.i,n=[0,0,0,0];c=h(a.encrypt(c));var m,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)m=b.slice(g,g+4),n=l(n,m),p=p.concat(l(c,a.encrypt(l(c,m)))),c=h(c);m=b.slice(g);b=k.bitLength(m);g=a.encrypt(l(c,[0,0,0,b]));m=k.clamp(l(m.concat([0,0,0]),g),b);n=l(n,l(m.concat([0,0,0]),g));n=a.encrypt(l(n,l(c,h(c))));
	d.length&&(n=l(n,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(k.concat(m,k.clamp(n,e)))},decrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.S,h=sjcl.bitArray,k=h.i,l=[0,0,0,0],n=g(a.encrypt(c)),m,p,r=sjcl.bitArray.bitLength(b)-e,q=[];d=d||[];for(c=0;c+4<r/32;c+=4)m=k(n,a.decrypt(k(n,b.slice(c,c+4)))),l=k(l,m),q=q.concat(m),n=g(n);p=r-32*c;m=a.encrypt(k(n,[0,0,0,p]));m=k(m,h.clamp(b.slice(c),p).concat([0,
	0,0]));l=k(l,m);l=a.encrypt(k(l,k(n,g(n))));d.length&&(l=k(l,f?d:sjcl.mode.ocb2.pmac(a,d)));if(!h.equal(h.clamp(l,e),h.bitSlice(b,r)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return q.concat(h.clamp(m,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.S,e=sjcl.bitArray,f=e.i,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));g=f(g,c);
	return a.encrypt(f(d(f(h,d(h))),g))},S:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
	sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.C(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm.C(!1,a,f,d,c,e);if(!g.equal(a.tag,b))throw new sjcl.exception.corrupt("gcm: tag doesn't match");return a.data},ka:function(a,b){var c,d,e,f,g,h=sjcl.bitArray.i;e=[0,0,
	0,0];f=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},j:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.ka(b,a);return b},C:function(a,b,c,d,e,f){var g,h,k,l,n,m,p,r,q=sjcl.bitArray;m=c.length;p=q.bitLength(c);r=q.bitLength(d);h=q.bitLength(e);
	g=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=q.concat(e,[1])):(e=sjcl.mode.gcm.j(g,[0,0,0,0],e),e=sjcl.mode.gcm.j(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.j(g,[0,0,0,0],d);n=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.j(g,h,c));for(l=0;l<m;l+=4)n[3]++,k=b.encrypt(n),c[l]^=k[0],c[l+1]^=k[1],c[l+2]^=k[2],c[l+3]^=k[3];c=q.clamp(c,p);a&&(d=sjcl.mode.gcm.j(g,h,c));a=[Math.floor(r/0x100000000),r&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.j(g,d,a);k=b.encrypt(e);
	d[0]^=k[0];d[1]^=k[1];d[2]^=k[2];d[3]^=k[3];return{tag:q.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this.W=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.w=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.w[0].update(c[0]);this.w[1].update(c[1]);this.R=new b(this.w[0])};
	sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this.aa)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.R=new this.W(this.w[0]);this.aa=!1};sjcl.misc.hmac.prototype.update=function(a){this.aa=!0;this.R.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.R.finalize(),a=(new this.W(this.w[1])).update(a).finalize();this.reset();return a};
	sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E4;if(0>d||0>c)throw new sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,k,l=[],n=sjcl.bitArray;for(k=1;32*l.length<(d||1);k++){e=f=a.encrypt(n.concat(b,[k]));for(g=1;g<c;g++)for(f=a.encrypt(f),h=0;h<f.length;h++)e[h]^=f[h];l=l.concat(e)}d&&(l=n.clamp(l,d));return l};
	sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.m=[0];this.P=0;this.H={};this.N=0;this.U={};this.Z=this.f=this.o=this.ha=0;this.b=[0,0,0,0,0,0,0,0];this.h=[0,0,0,0];this.L=void 0;this.M=a;this.D=!1;this.K={progress:{},seeded:{}};this.u=this.ga=0;this.I=1;this.J=2;this.ca=0x10000;this.T=[0,48,64,96,128,192,0x100,384,512,768,1024];this.da=3E4;this.ba=80};
	sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;if(d===this.u)throw new sjcl.exception.notReady("generator isn't seeded");if(d&this.J){d=!(d&this.I);e=[];var f=0,g;this.Z=e[0]=(new Date).valueOf()+this.da;for(g=0;16>g;g++)e.push(0x100000000*Math.random()|0);for(g=0;g<this.c.length&&(e=e.concat(this.c[g].finalize()),f+=this.m[g],this.m[g]=0,d||!(this.P&1<<g));g++);this.P>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.m.push(0));this.f-=f;f>this.o&&(this.o=
	f);this.P++;this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.L=new sjcl.cipher.aes(this.b);for(d=0;4>d&&(this.h[d]=this.h[d]+1|0,!this.h[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.ca&&y(this),e=z(this),c.push(e[0],e[1],e[2],e[3]);y(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){if(0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b)throw new sjcl.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.M=a},addEntropy:function(a,
	b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.H[c],h=this.isReady(),k=0;d=this.U[c];void 0===d&&(d=this.U[c]=this.ha++);void 0===g&&(g=this.H[c]=0);this.H[c]=(this.H[c]+1)%this.c.length;switch(typeof a){case "number":void 0===b&&(b=1);this.c[g].update([d,this.N++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else for("[object Array]"!==c&&(k=1),c=0;c<a.length&&!k;c++)"number"!==typeof a[c]&&
	(k=1);if(!k){if(void 0===b)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e=e>>>1;this.c[g].update([d,this.N++,2,b,f,a.length].concat(a))}break;case "string":void 0===b&&(b=a.length);this.c[g].update([d,this.N++,3,b,f,a.length]);this.c[g].update(a);break;default:k=1}if(k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.m[g]+=b;this.f+=b;h===this.u&&(this.isReady()!==this.u&&A("seeded",Math.max(this.o,this.f)),A("progress",this.getProgress()))},
	isReady:function(a){a=this.T[void 0!==a?a:this.M];return this.o&&this.o>=a?this.m[0]>this.ba&&(new Date).valueOf()>this.Z?this.J|this.I:this.I:this.f>=a?this.J|this.u:this.u},getProgress:function(a){a=this.T[a?a:this.M];return this.o>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.D){this.a={loadTimeCollector:B(this,this.ma),mouseCollector:B(this,this.oa),keyboardCollector:B(this,this.la),accelerometerCollector:B(this,this.ea),touchCollector:B(this,this.qa)};if(window.addEventListener)window.addEventListener("load",
	this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector);else throw new sjcl.exception.bug("can't attach event");
	this.D=!0}},stopCollectors:function(){this.D&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",
	this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.D=!1)},addEventListener:function(a,b){this.K[a][this.ga++]=b},removeEventListener:function(a,b){var c,d,e=this.K[a],f=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},la:function(){C(this,1)},oa:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&this.addEntropy([b,c],2,"mouse");C(this,0)},qa:function(a){a=
	a.touches[0]||a.changedTouches[0];this.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");C(this,0)},ma:function(){C(this,2)},ea:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&this.addEntropy(b,1,"accelerometer")}a&&this.addEntropy(a,2,"accelerometer");C(this,0)}};
	function A(a,b){var c,d=sjcl.random.K[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function C(a,b){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?a.addEntropy(window.performance.now(),b,"loadtime"):a.addEntropy((new Date).valueOf(),b,"loadtime")}function y(a){a.b=z(a).concat(z(a));a.L=new sjcl.cipher.aes(a.b)}function z(a){for(var b=0;4>b&&(a.h[b]=a.h[b]+1|0,!a.h[b]);b++);return a.L.encrypt(a.h)}
	function B(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);
	a:try{var D,E,F,G;if(G="undefined"!==typeof module&&module.exports){var H;try{H=__webpack_require__(3)}catch(a){H=null}G=E=H}if(G&&E.randomBytes)D=E.randomBytes(128),D=new Uint32Array((new Uint8Array(D)).buffer),sjcl.random.addEntropy(D,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){F=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(F);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(F);
	else break a;sjcl.random.addEntropy(F,1024,"crypto['getRandomValues']")}}catch(a){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(a))}
	sjcl.json={defaults:{v:1,iter:1E4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},ja:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.g({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.g(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>f.iv.length||
	4<f.iv.length)throw new sjcl.exception.invalid("json encrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(f.adata=c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.g(d,f);d.key=a;f.ct="ccm"===f.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&
	b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(g,b,f.iv,c,f.ts):sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,b,c,d){var e=sjcl.json,f=e.ja.apply(e,arguments);return e.encode(f)},ia:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.g(e.g(e.g({},e.defaults),b),c,!0);var f,g;f=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===
	typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)throw new sjcl.exception.invalid("json decrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,b),a=g.key.slice(0,b.ks/32),b.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof f&&(f=sjcl.codec.utf8String.toBits(f));g=new sjcl.cipher[b.cipher](a);f="ccm"===
	b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(g,b.ct,b.iv,b.tag,f,b.ts):sjcl.mode[b.mode].decrypt(g,b.ct,b.iv,f,b.ts);e.g(d,b);d.key=a;return 1===c.raw?f:sjcl.codec.utf8String.fromBits(f)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.ia(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+
	b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
	null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5])}return b},g:function(a,b,c){void 0===a&&(a={});if(void 0===b)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&void 0!==a[d]&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},sa:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},ra:function(a,
	b){var c={},d;for(d=0;d<b.length;d++)void 0!==a[b[d]]&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.pa={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.pa,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=void 0===b.salt?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
	"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"==="function"&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return sjcl}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(8)

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = __webpack_require__(10)

	exports.createHmac = __webpack_require__(23)

	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}

	var p = __webpack_require__(24)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync
	__webpack_require__(26)(exports, module.exports);

	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(5)
	var ieee754 = __webpack_require__(6)
	var isArray = __webpack_require__(7)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(9)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4).Buffer))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(11)

	var md5 = toConstructor(__webpack_require__(20))
	var rmd160 = toConstructor(__webpack_require__(22))

	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}

	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}

	var Buffer = __webpack_require__(4).Buffer
	var Hash   = __webpack_require__(12)(Buffer)

	exports.sha1 = __webpack_require__(13)(Buffer, Hash)
	exports.sha256 = __webpack_require__(18)(Buffer, Hash)
	exports.sha512 = __webpack_require__(19)(Buffer, Hash)


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {

	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }

	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }

	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }

	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block

	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)

	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }

	      s += ch
	      f += ch

	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s

	    return this
	  }

	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8

	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80

	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)

	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }

	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)

	    var hash = this._update(this._block) || this._hash()

	    return enc ? hash.toString(enc) : hash
	  }

	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }

	  return Hash
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(14).inherits

	module.exports = function (Buffer, Hash) {

	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0

	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

	  var POOL = []

	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()

	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)

	    this._h = null
	    this.init()
	  }

	  inherits(Sha1, Hash)

	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0

	    Hash.prototype.init.call(this)
	    return this
	  }

	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {

	    var a, b, c, d, e, _a, _b, _c, _d, _e

	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e

	    var w = this._w

	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )

	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }

	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }

	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }

	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }

	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }

	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }

	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }

	  return Sha1
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(16);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(17);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(14).inherits

	module.exports = function (Buffer, Hash) {

	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]

	  var W = new Array(64)

	  function Sha256() {
	    this.init()

	    this._w = W //new Array(64)

	    Hash.call(this, 16*4, 14*4)
	  }

	  inherits(Sha256, Hash)

	  Sha256.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }

	  function R (X, n) {
	    return (X >>> n);
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }

	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }

	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }

	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }

	  Sha256.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }

	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0

	  };

	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)

	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)

	    return H
	  }

	  return Sha256

	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(14).inherits

	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]

	  var W = new Array(160)

	  function Sha512() {
	    this.init()
	    this._w = W

	    Hash.call(this, 128, 112)
	  }

	  inherits(Sha512, Hash)

	  Sha512.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  Sha512.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0

	    for (var i = 0; i < 80; i++) {
	      var j = i * 2

	      var Wi, Wil

	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]

	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]

	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

	        W[j] = Wi
	        W[j + 1] = Wil
	      }

	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)

	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]

	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)

	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }

	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0

	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }

	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)

	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }

	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)

	    return H
	  }

	  return Sha512

	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(21);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160



	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};

	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};

	var processBlock = function (H, M, offset) {

	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};

	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}

	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}

	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}

	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}

	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}

	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );

	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(10)

	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)

	module.exports = Hmac

	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg

	  var blocksize = (alg === 'sha512') ? 128 : 64

	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)

	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  this._hash = createHash(alg).update(ipad)
	}

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(25)

	module.exports = function (crypto, exports) {
	  exports = exports || {}

	  var exported = pbkdf2Export(crypto)

	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync

	  return exports
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }

	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')

	    setTimeout(function() {
	      var result

	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }

	      callback(undefined, result)
	    })
	  }

	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')

	    if (iterations < 0)
	      throw new TypeError('Bad iterations')

	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')

	    if (keylen < 0)
	      throw new TypeError('Bad key length')

	    digest = digest || 'sha1'

	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)

	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)

	      var U = crypto.createHmac(digest, password).update(block1).digest()

	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen

	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }

	      U.copy(T, 0, 0, hLen)

	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()

	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }

	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }

	    return DK
	  }

	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (crypto, exports) {
	  exports = exports || {};
	  var ciphers = __webpack_require__(27)(crypto);
	  exports.createCipher = ciphers.createCipher;
	  exports.createCipheriv = ciphers.createCipheriv;
	  var deciphers = __webpack_require__(59)(crypto);
	  exports.createDecipher = deciphers.createDecipher;
	  exports.createDecipheriv = deciphers.createDecipheriv;
	  var modes = __webpack_require__(50);
	  function listCiphers () {
	    return Object.keys(modes);
	  }
	  exports.listCiphers = listCiphers;
	};



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(28);
	var Transform = __webpack_require__(29);
	var inherits = __webpack_require__(32);
	var modes = __webpack_require__(50);
	var ebtk = __webpack_require__(51);
	var StreamCipher = __webpack_require__(52);
	inherits(Cipher, Transform);
	function Cipher(mode, key, iv) {
	  if (!(this instanceof Cipher)) {
	    return new Cipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Cipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.encrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Cipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  this.push(this._mode.encrypt(this, chunk));
	  this._cipher.scrub();
	  next();
	};


	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};

	Splitter.prototype.get = function () {
	  if (this.cache.length > 15) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  var len = 16 - this.cache.length;
	  var padBuff = new Buffer(len);

	  var i = -1;
	  while (++i < len) {
	    padBuff.writeUInt8(len, i);
	  }
	  var out = Buffer.concat([this.cache, padBuff]);
	  return out;
	};
	var modelist = {
	  ECB: __webpack_require__(53),
	  CBC: __webpack_require__(54),
	  CFB: __webpack_require__(56),
	  OFB: __webpack_require__(57),
	  CTR: __webpack_require__(58)
	};
	module.exports = function (crypto) {
	  function createCipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv);
	    }
	    return new Cipher(modelist[config.mode], password, iv);
	  }
	  function createCipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createCipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createCipher: createCipher,
	    createCipheriv: createCipheriv
	  };
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var uint_max = Math.pow(2, 32);
	function fixup_uint32(x) {
	    var ret, x_pos;
	    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
	    return ret;
	}
	function scrub_vec(v) {
	  var i, _i, _ref;
	  for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	    v[i] = 0;
	  }
	  return false;
	}

	function Global() {
	  var i;
	  this.SBOX = [];
	  this.INV_SBOX = [];
	  this.SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.INV_SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.init();
	  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	}

	Global.prototype.init = function() {
	  var d, i, sx, t, x, x2, x4, x8, xi, _i;
	  d = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 256; i = ++_i) {
	      if (i < 128) {
	        _results.push(i << 1);
	      } else {
	        _results.push((i << 1) ^ 0x11b);
	      }
	    }
	    return _results;
	  })();
	  x = 0;
	  xi = 0;
	  for (i = _i = 0; _i < 256; i = ++_i) {
	    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	    this.SBOX[x] = sx;
	    this.INV_SBOX[sx] = x;
	    x2 = d[x];
	    x4 = d[x2];
	    x8 = d[x4];
	    t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8);
	    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16);
	    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24);
	    this.SUB_MIX[3][x] = t;
	    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8);
	    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16);
	    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24);
	    this.INV_SUB_MIX[3][sx] = t;
	    if (x === 0) {
	      x = xi = 1;
	    } else {
	      x = x2 ^ d[d[d[x8 ^ x2]]];
	      xi ^= d[d[xi]];
	    }
	  }
	  return true;
	};

	var G = new Global();


	AES.blockSize = 4 * 4;

	AES.prototype.blockSize = AES.blockSize;

	AES.keySize = 256 / 8;

	AES.prototype.keySize = AES.keySize;

	AES.ivSize = AES.blockSize;

	AES.prototype.ivSize = AES.ivSize;

	 function bufferToArray(buf) {
	  var len = buf.length/4;
	  var out = new Array(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = buf.readUInt32BE(i * 4);
	  }
	  return out;
	 }
	function AES(key) {
	  this._key = bufferToArray(key);
	  this._doReset();
	}

	AES.prototype._doReset = function() {
	  var invKsRow, keySize, keyWords, ksRow, ksRows, t, _i, _j;
	  keyWords = this._key;
	  keySize = keyWords.length;
	  this._nRounds = keySize + 6;
	  ksRows = (this._nRounds + 1) * 4;
	  this._keySchedule = [];
	  for (ksRow = _i = 0; 0 <= ksRows ? _i < ksRows : _i > ksRows; ksRow = 0 <= ksRows ? ++_i : --_i) {
	    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
	  }
	  this._invKeySchedule = [];
	  for (invKsRow = _j = 0; 0 <= ksRows ? _j < ksRows : _j > ksRows; invKsRow = 0 <= ksRows ? ++_j : --_j) {
	    ksRow = ksRows - invKsRow;
	    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
	    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
	  }
	  return true;
	};

	AES.prototype.encryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[1], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[3], 12);
	  return buf;
	};

	AES.prototype.decryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var temp = [M[3], M[1]];
	  M[1] = temp[0];
	  M[3] = temp[1];
	  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[3], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[1], 12);
	  return buf;
	};

	AES.prototype.scrub = function() {
	  scrub_vec(this._keySchedule);
	  scrub_vec(this._invKeySchedule);
	  scrub_vec(this._key);
	};

	AES.prototype._doCryptBlock = function(M, keySchedule, SUB_MIX, SBOX) {
	  var ksRow, round, s0, s1, s2, s3, t0, t1, t2, t3, _i, _ref;

	  s0 = M[0] ^ keySchedule[0];
	  s1 = M[1] ^ keySchedule[1];
	  s2 = M[2] ^ keySchedule[2];
	  s3 = M[3] ^ keySchedule[3];
	  ksRow = 4;
	  for (round = _i = 1, _ref = this._nRounds; 1 <= _ref ? _i < _ref : _i > _ref; round = 1 <= _ref ? ++_i : --_i) {
	    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
	    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
	    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
	    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
	    s0 = t0;
	    s1 = t1;
	    s2 = t2;
	    s3 = t3;
	  }
	  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
	  return [
	    fixup_uint32(t0),
	    fixup_uint32(t1),
	    fixup_uint32(t2),
	    fixup_uint32(t3)
	  ];

	};




	  exports.AES = AES;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var Transform = __webpack_require__(30).Transform;
	var inherits = __webpack_require__(32);

	module.exports = CipherBase;
	inherits(CipherBase, Transform);
	function CipherBase() {
	  Transform.call(this);
	}
	CipherBase.prototype.update = function (data, inputEnd, outputEnc) {
	  this.write(data, inputEnd);
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	CipherBase.prototype.final = function (outputEnc) {
	  this.end();
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(31).EventEmitter;
	var inherits = __webpack_require__(32);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(33);
	Stream.Writable = __webpack_require__(46);
	Stream.Duplex = __webpack_require__(47);
	Stream.Transform = __webpack_require__(48);
	Stream.PassThrough = __webpack_require__(49);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = (function (){
	  try {
	    return __webpack_require__(30); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(34);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(39);
	exports.Duplex = __webpack_require__(38);
	exports.Transform = __webpack_require__(44);
	exports.PassThrough = __webpack_require__(45);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(35);
	/*</replacement>*/

	/*<replacement>*/
	var isArray = __webpack_require__(7);
	/*</replacement>*/

	/*<replacement>*/
	var Buffer = __webpack_require__(4).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(31);

	/*<replacement>*/
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(30);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(31).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(4).Buffer;

	/*<replacement>*/
	var util = __webpack_require__(36);
	util.inherits = __webpack_require__(32);
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = __webpack_require__(37);
	var debug = undefined;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/

	var StringDecoder;

	util.inherits(Readable, Stream);

	var Duplex;
	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(38);

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(43).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	var Duplex;
	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(38);

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(43).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended) return 0;

	  if (state.objectMode) return n === 0 ? 0 : 1;

	  if (n === null || isNaN(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
	  }

	  if (n <= 0) return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else {
	      return state.length;
	    }
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended) state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      if (state.pipesCount === 1 && state.pipes[0] === dest && src.listenerCount('data') === 1 && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error];

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && !this._readableState.endEmitted) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0) return null;

	  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode) ret = '';else ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = __webpack_require__(35);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(36);
	util.inherits = __webpack_require__(32);
	/*</replacement>*/

	var Readable = __webpack_require__(34);
	var Writable = __webpack_require__(39);

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(35);
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Buffer = __webpack_require__(4).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = __webpack_require__(36);
	util.inherits = __webpack_require__(32);
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(42)
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(30);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(31).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(4).Buffer;

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	var Duplex;
	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(38);

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // create the two objects needed to store the corked requests
	  // they are not a linked list, as no new elements are inserted in there
	  this.corkedRequestsFree = new CorkedRequest(this);
	  this.corkedRequestsFree.next = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	var Duplex;
	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(38);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;

	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    state.corkedRequestsFree = holder.next;
	    holder.next = null;
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(40).setImmediate))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(41);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15)))

/***/ },
/* 42 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(4).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = __webpack_require__(38);

	/*<replacement>*/
	var util = __webpack_require__(36);
	util.inherits = __webpack_require__(32);
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = __webpack_require__(44);

	/*<replacement>*/
	var util = __webpack_require__(36);
	util.inherits = __webpack_require__(32);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(39)


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38)


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44)


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45)


/***/ },
/* 50 */
/***/ function(module, exports) {

	exports['aes-128-ecb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-192-ecb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-256-ecb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-128-cbc'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-192-cbc'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-256-cbc'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes128'] = exports['aes-128-cbc'];
	exports['aes192'] = exports['aes-192-cbc'];
	exports['aes256'] = exports['aes-256-cbc'];
	exports['aes-128-cfb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-192-cfb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-256-cfb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-128-ofb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-192-ofb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-256-ofb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-128-ctr'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-192-ctr'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-256-ctr'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = function (crypto, password, keyLen, ivLen) {
	  keyLen = keyLen/8;
	  ivLen = ivLen || 0;
	  var ki = 0;
	  var ii = 0;
	  var key = new Buffer(keyLen);
	  var iv = new Buffer(ivLen);
	  var addmd = 0;
	  var md, md_buf;
	  var i;
	  while (true) {
	    md = crypto.createHash('md5');
	    if(addmd++ > 0) {
	       md.update(md_buf);
	    }
	    md.update(password);
	    md_buf = md.digest();
	    i = 0;
	    if(keyLen > 0) {
	      while(true) {
	        if(keyLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	        key[ki++] = md_buf[i];
	        keyLen--;
	        i++;
	       }
	    }
	    if(ivLen > 0 && i !== md_buf.length) {
	      while(true) {
	        if(ivLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	       iv[ii++] = md_buf[i];
	       ivLen--;
	       i++;
	     }
	   }
	   if(keyLen === 0 && ivLen === 0) {
	      break;
	    }
	  }
	  for(i=0;i<md_buf.length;i++) {
	    md_buf[i] = 0;
	  }
	  return {
	    key: key,
	    iv: iv
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(28);
	var Transform = __webpack_require__(29);
	var inherits = __webpack_require__(32);

	inherits(StreamCipher, Transform);
	module.exports = StreamCipher;
	function StreamCipher(mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  this._cache = new Buffer('');
	  this._secCache = new Buffer('');
	  this._decrypt = decrypt;
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	StreamCipher.prototype._transform = function (chunk, _, next) {
	  next(null, this._mode.encrypt(this, chunk, this._decrypt));
	};
	StreamCipher.prototype._flush = function (next) {
	  this._cipher.scrub();
	  next();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 53 */
/***/ function(module, exports) {

	exports.encrypt = function (self, block) {
	  return self._cipher.encryptBlock(block);
	};
	exports.decrypt = function (self, block) {
	  return self._cipher.decryptBlock(block);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var xor = __webpack_require__(55);
	exports.encrypt = function (self, block) {
	  var data = xor(block, self._prev);
	  self._prev = self._cipher.encryptBlock(data);
	  return self._prev;
	};
	exports.decrypt = function (self, block) {
	  var pad = self._prev;
	  self._prev = block;
	  var out = self._cipher.decryptBlock(block);
	  return xor(out, pad);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = xor;
	function xor(a, b) {
	  var len = Math.min(a.length, b.length);
	  var out = new Buffer(len);
	  var i = -1;
	  while (++i < len) {
	    out.writeUInt8(a[i] ^ b[i], i);
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(55);
	exports.encrypt = function (self, data, decrypt) {
	  var out = new Buffer('');
	  var len;
	  while (data.length) {
	    if (self._cache.length === 0) {
	      self._cache = self._cipher.encryptBlock(self._prev);
	      self._prev = new Buffer('');
	    }
	    if (self._cache.length <= data.length) {
	      len = self._cache.length;
	      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
	      data = data.slice(len);
	    } else {
	      out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
	      break;
	    }
	  }
	  return out;
	};
	function encryptStart(self, data, decrypt) {
	  var len = data.length;
	  var out = xor(data, self._cache);
	  self._cache = self._cache.slice(len);
	  self._prev = Buffer.concat([self._prev, decrypt?data:out]);
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(55);
	function getBlock(self) {
	  self._prev = self._cipher.encryptBlock(self._prev);
	  return self._prev;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(55);
	function getBlock(self) {
	  var out = self._cipher.encryptBlock(self._prev);
	  incr32(self._prev);
	  return out;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	function incr32(iv) {
	  var len = iv.length;
	  var item;
	  while (len--) {
	    item = iv.readUInt8(len);
	    if (item === 255) {
	      iv.writeUInt8(0, len);
	    } else {
	      item++;
	      iv.writeUInt8(item, len);
	      break;
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(28);
	var Transform = __webpack_require__(29);
	var inherits = __webpack_require__(32);
	var modes = __webpack_require__(50);
	var StreamCipher = __webpack_require__(52);
	var ebtk = __webpack_require__(51);

	inherits(Decipher, Transform);
	function Decipher(mode, key, iv) {
	  if (!(this instanceof Decipher)) {
	    return new Decipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._last = void 0;
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Decipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.decrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Decipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  if (!chunk) {
	    return next;
	  }

	  this.push(unpad(this._mode.decrypt(this, chunk)));

	  next();
	};

	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};

	Splitter.prototype.get = function () {
	  if (this.cache.length > 16) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  if (this.cache.length) {
	    return this.cache;
	  }
	};
	function unpad(last) {
	  var padded = last[15];
	  if (padded === 16) {
	    return;
	  }
	  return last.slice(0, 16 - padded);
	}

	var modelist = {
	  ECB: __webpack_require__(53),
	  CBC: __webpack_require__(54),
	  CFB: __webpack_require__(56),
	  OFB: __webpack_require__(57),
	  CTR: __webpack_require__(58)
	};

	module.exports = function (crypto) {
	  function createDecipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv, true);
	    }
	    return new Decipher(modelist[config.mode], password, iv);
	  }

	  function createDecipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createDecipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createDecipher: createDecipher,
	    createDecipheriv: createDecipheriv
	  };
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var AWS = __webpack_require__(63);
	var Service = __webpack_require__(144);
	var apiLoader = __webpack_require__(152);

	apiLoader.services['cognitoidentityserviceprovider'] = {};
	AWS.CognitoIdentityServiceProvider = Service.defineService('cognitoidentityserviceprovider', ['2016-04-18']);
	Object.defineProperty(apiLoader.services['cognitoidentityserviceprovider'], '2016-04-18', {
	  get: function get() {
	    var model = __webpack_require__(195);
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.CognitoIdentityServiceProvider;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var util = __webpack_require__(62);

	// browser specific modules
	util.crypto.lib = __webpack_require__(181);
	util.Buffer = __webpack_require__(4).Buffer;
	util.url = __webpack_require__(187);
	util.querystring = __webpack_require__(190);

	var AWS = __webpack_require__(63);

	// Use default API loader function
	__webpack_require__(152);

	// Load the DOMParser XML parser
	AWS.XML.Parser = __webpack_require__(193);

	// Load the XHR HttpClient
	__webpack_require__(194);

	if (typeof process === 'undefined') {
	  process = {
	    browser: true
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* eslint guard-for-in:0 */
	var AWS;

	/**
	 * A set of utility methods for use with the AWS SDK.
	 *
	 * @!attribute abort
	 *   Return this value from an iterator function {each} or {arrayEach}
	 *   to break out of the iteration.
	 *   @example Breaking out of an iterator function
	 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
	 *       if (key == 'b') return AWS.util.abort;
	 *     });
	 *   @see each
	 *   @see arrayEach
	 * @api private
	 */
	var util = {
	  engine: function engine() {
	    if (util.isBrowser() && typeof navigator !== 'undefined') {
	      return navigator.userAgent;
	    } else {
	      var engine = process.platform + '/' + process.version;
	      if (process.env.AWS_EXECUTION_ENV) {
	        engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
	      }
	      return engine;
	    }
	  },

	  userAgent: function userAgent() {
	    var name = util.isBrowser() ? 'js' : 'nodejs';
	    var agent = 'aws-sdk-' + name + '/' + __webpack_require__(63).VERSION;
	    if (name === 'nodejs') agent += ' ' + util.engine();
	    return agent;
	  },

	  isBrowser: function isBrowser() { return process && process.browser; },
	  isNode: function isNode() { return !util.isBrowser(); },
	  uriEscape: function uriEscape(string) {
	    var output = encodeURIComponent(string);
	    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

	    // AWS percent-encodes some extra non-standard characters in a URI
	    output = output.replace(/[*]/g, function(ch) {
	      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
	    });

	    return output;
	  },

	  uriEscapePath: function uriEscapePath(string) {
	    var parts = [];
	    util.arrayEach(string.split('/'), function (part) {
	      parts.push(util.uriEscape(part));
	    });
	    return parts.join('/');
	  },

	  urlParse: function urlParse(url) {
	    return util.url.parse(url);
	  },

	  urlFormat: function urlFormat(url) {
	    return util.url.format(url);
	  },

	  queryStringParse: function queryStringParse(qs) {
	    return util.querystring.parse(qs);
	  },

	  queryParamsToString: function queryParamsToString(params) {
	    var items = [];
	    var escape = util.uriEscape;
	    var sortedKeys = Object.keys(params).sort();

	    util.arrayEach(sortedKeys, function(name) {
	      var value = params[name];
	      var ename = escape(name);
	      var result = ename + '=';
	      if (Array.isArray(value)) {
	        var vals = [];
	        util.arrayEach(value, function(item) { vals.push(escape(item)); });
	        result = ename + '=' + vals.sort().join('&' + ename + '=');
	      } else if (value !== undefined && value !== null) {
	        result = ename + '=' + escape(value);
	      }
	      items.push(result);
	    });

	    return items.join('&');
	  },

	  readFileSync: function readFileSync(path) {
	    if (util.isBrowser()) return null;
	    return __webpack_require__(179).readFileSync(path, 'utf-8');
	  },

	  base64: {
	    encode: function encode64(string) {
	      if (typeof string === 'number') {
	        throw util.error(new Error('Cannot base64 encode number ' + string));
	      }
	      var buf = (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string) : new util.Buffer(string);
	      return buf.toString('base64');
	    },

	    decode: function decode64(string) {
	      if (typeof string === 'number') {
	        throw util.error(new Error('Cannot base64 decode number ' + string));
	      }
	      return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string, 'base64') : new util.Buffer(string, 'base64');
	    }

	  },

	  buffer: {
	    toStream: function toStream(buffer) {
	      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

	      var readable = new (util.stream.Readable)();
	      var pos = 0;
	      readable._read = function(size) {
	        if (pos >= buffer.length) return readable.push(null);

	        var end = pos + size;
	        if (end > buffer.length) end = buffer.length;
	        readable.push(buffer.slice(pos, end));
	        pos = end;
	      };

	      return readable;
	    },

	    /**
	     * Concatenates a list of Buffer objects.
	     */
	    concat: function(buffers) {
	      var length = 0,
	          offset = 0,
	          buffer = null, i;

	      for (i = 0; i < buffers.length; i++) {
	        length += buffers[i].length;
	      }

	      buffer = new util.Buffer(length);

	      for (i = 0; i < buffers.length; i++) {
	        buffers[i].copy(buffer, offset);
	        offset += buffers[i].length;
	      }

	      return buffer;
	    }
	  },

	  string: {
	    byteLength: function byteLength(string) {
	      if (string === null || string === undefined) return 0;
	      if (typeof string === 'string') string = new util.Buffer(string);

	      if (typeof string.byteLength === 'number') {
	        return string.byteLength;
	      } else if (typeof string.length === 'number') {
	        return string.length;
	      } else if (typeof string.size === 'number') {
	        return string.size;
	      } else if (typeof string.path === 'string') {
	        return __webpack_require__(179).lstatSync(string.path).size;
	      } else {
	        throw util.error(new Error('Cannot determine length of ' + string),
	          { object: string });
	      }
	    },

	    upperFirst: function upperFirst(string) {
	      return string[0].toUpperCase() + string.substr(1);
	    },

	    lowerFirst: function lowerFirst(string) {
	      return string[0].toLowerCase() + string.substr(1);
	    }
	  },

	  ini: {
	    parse: function string(ini) {
	      var currentSection, map = {};
	      util.arrayEach(ini.split(/\r?\n/), function(line) {
	        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
	        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
	        if (section) {
	          currentSection = section[1];
	        } else if (currentSection) {
	          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
	          if (item) {
	            map[currentSection] = map[currentSection] || {};
	            map[currentSection][item[1]] = item[2];
	          }
	        }
	      });

	      return map;
	    }
	  },

	  fn: {
	    noop: function() {},

	    /**
	     * Turn a synchronous function into as "async" function by making it call
	     * a callback. The underlying function is called with all but the last argument,
	     * which is treated as the callback. The callback is passed passed a first argument
	     * of null on success to mimick standard node callbacks.
	     */
	    makeAsync: function makeAsync(fn, expectedArgs) {
	      if (expectedArgs && expectedArgs <= fn.length) {
	        return fn;
	      }

	      return function() {
	        var args = Array.prototype.slice.call(arguments, 0);
	        var callback = args.pop();
	        var result = fn.apply(null, args);
	        callback(result);
	      };
	    }
	  },

	  /**
	   * Date and time utility functions.
	   */
	  date: {

	    /**
	     * @return [Date] the current JavaScript date object. Since all
	     *   AWS services rely on this date object, you can override
	     *   this function to provide a special time value to AWS service
	     *   requests.
	     */
	    getDate: function getDate() {
	      if (!AWS) AWS = __webpack_require__(63);
	      if (AWS.config.systemClockOffset) { // use offset when non-zero
	        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
	      } else {
	        return new Date();
	      }
	    },

	    /**
	     * @return [String] the date in ISO-8601 format
	     */
	    iso8601: function iso8601(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
	    },

	    /**
	     * @return [String] the date in RFC 822 format
	     */
	    rfc822: function rfc822(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.toUTCString();
	    },

	    /**
	     * @return [Integer] the UNIX timestamp value for the current time
	     */
	    unixTimestamp: function unixTimestamp(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.getTime() / 1000;
	    },

	    /**
	     * @param [String,number,Date] date
	     * @return [Date]
	     */
	    from: function format(date) {
	      if (typeof date === 'number') {
	        return new Date(date * 1000); // unix timestamp
	      } else {
	        return new Date(date);
	      }
	    },

	    /**
	     * Given a Date or date-like value, this function formats the
	     * date into a string of the requested value.
	     * @param [String,number,Date] date
	     * @param [String] formatter Valid formats are:
	     #   * 'iso8601'
	     #   * 'rfc822'
	     #   * 'unixTimestamp'
	     * @return [String]
	     */
	    format: function format(date, formatter) {
	      if (!formatter) formatter = 'iso8601';
	      return util.date[formatter](util.date.from(date));
	    },

	    parseTimestamp: function parseTimestamp(value) {
	      if (typeof value === 'number') { // unix timestamp (number)
	        return new Date(value * 1000);
	      } else if (value.match(/^\d+$/)) { // unix timestamp
	        return new Date(value * 1000);
	      } else if (value.match(/^\d{4}/)) { // iso8601
	        return new Date(value);
	      } else if (value.match(/^\w{3},/)) { // rfc822
	        return new Date(value);
	      } else {
	        throw util.error(
	          new Error('unhandled timestamp format: ' + value),
	          {code: 'TimestampParserError'});
	      }
	    }

	  },

	  crypto: {
	    crc32Table: [
	     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
	     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
	     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
	     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
	     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
	     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
	     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
	     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
	     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
	     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
	     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
	     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
	     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
	     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
	     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
	     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
	     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
	     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
	     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
	     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
	     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
	     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
	     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
	     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
	     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
	     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
	     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
	     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
	     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
	     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
	     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
	     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
	     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
	     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
	     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
	     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
	     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
	     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
	     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
	     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
	     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
	     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
	     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
	     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
	     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
	     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
	     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
	     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
	     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
	     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
	     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
	     0x2D02EF8D],

	    crc32: function crc32(data) {
	      var tbl = util.crypto.crc32Table;
	      var crc = 0 ^ -1;

	      if (typeof data === 'string') {
	        data = new util.Buffer(data);
	      }

	      for (var i = 0; i < data.length; i++) {
	        var code = data.readUInt8(i);
	        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
	      }
	      return (crc ^ -1) >>> 0;
	    },

	    hmac: function hmac(key, string, digest, fn) {
	      if (!digest) digest = 'binary';
	      if (digest === 'buffer') { digest = undefined; }
	      if (!fn) fn = 'sha256';
	      if (typeof string === 'string') string = new util.Buffer(string);
	      return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
	    },

	    md5: function md5(data, digest, callback) {
	      return util.crypto.hash('md5', data, digest, callback);
	    },

	    sha256: function sha256(data, digest, callback) {
	      return util.crypto.hash('sha256', data, digest, callback);
	    },

	    hash: function(algorithm, data, digest, callback) {
	      var hash = util.crypto.createHash(algorithm);
	      if (!digest) { digest = 'binary'; }
	      if (digest === 'buffer') { digest = undefined; }
	      if (typeof data === 'string') data = new util.Buffer(data);
	      var sliceFn = util.arraySliceFn(data);
	      var isBuffer = util.Buffer.isBuffer(data);
	      //Identifying objects with an ArrayBuffer as buffers
	      if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;

	      if (callback && typeof data === 'object' &&
	          typeof data.on === 'function' && !isBuffer) {
	        data.on('data', function(chunk) { hash.update(chunk); });
	        data.on('error', function(err) { callback(err); });
	        data.on('end', function() { callback(null, hash.digest(digest)); });
	      } else if (callback && sliceFn && !isBuffer &&
	                 typeof FileReader !== 'undefined') {
	        // this might be a File/Blob
	        var index = 0, size = 1024 * 512;
	        var reader = new FileReader();
	        reader.onerror = function() {
	          callback(new Error('Failed to read data.'));
	        };
	        reader.onload = function() {
	          var buf = new util.Buffer(new Uint8Array(reader.result));
	          hash.update(buf);
	          index += buf.length;
	          reader._continueReading();
	        };
	        reader._continueReading = function() {
	          if (index >= data.size) {
	            callback(null, hash.digest(digest));
	            return;
	          }

	          var back = index + size;
	          if (back > data.size) back = data.size;
	          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
	        };

	        reader._continueReading();
	      } else {
	        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
	          data = new util.Buffer(new Uint8Array(data));
	        }
	        var out = hash.update(data).digest(digest);
	        if (callback) callback(null, out);
	        return out;
	      }
	    },

	    toHex: function toHex(data) {
	      var out = [];
	      for (var i = 0; i < data.length; i++) {
	        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
	      }
	      return out.join('');
	    },

	    createHash: function createHash(algorithm) {
	      return util.crypto.lib.createHash(algorithm);
	    }

	  },

	  /** @!ignore */

	  /* Abort constant */
	  abort: {},

	  each: function each(object, iterFunction) {
	    for (var key in object) {
	      if (Object.prototype.hasOwnProperty.call(object, key)) {
	        var ret = iterFunction.call(this, key, object[key]);
	        if (ret === util.abort) break;
	      }
	    }
	  },

	  arrayEach: function arrayEach(array, iterFunction) {
	    for (var idx in array) {
	      if (Object.prototype.hasOwnProperty.call(array, idx)) {
	        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
	        if (ret === util.abort) break;
	      }
	    }
	  },

	  update: function update(obj1, obj2) {
	    util.each(obj2, function iterator(key, item) {
	      obj1[key] = item;
	    });
	    return obj1;
	  },

	  merge: function merge(obj1, obj2) {
	    return util.update(util.copy(obj1), obj2);
	  },

	  copy: function copy(object) {
	    if (object === null || object === undefined) return object;
	    var dupe = {};
	    // jshint forin:false
	    for (var key in object) {
	      dupe[key] = object[key];
	    }
	    return dupe;
	  },

	  isEmpty: function isEmpty(obj) {
	    for (var prop in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	        return false;
	      }
	    }
	    return true;
	  },

	  arraySliceFn: function arraySliceFn(obj) {
	    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
	    return typeof fn === 'function' ? fn : null;
	  },

	  isType: function isType(obj, type) {
	    // handle cross-"frame" objects
	    if (typeof type === 'function') type = util.typeName(type);
	    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	  },

	  typeName: function typeName(type) {
	    if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
	    var str = type.toString();
	    var match = str.match(/^\s*function (.+)\(/);
	    return match ? match[1] : str;
	  },

	  error: function error(err, options) {
	    var originalError = null;
	    if (typeof err.message === 'string' && err.message !== '') {
	      if (typeof options === 'string' || (options && options.message)) {
	        originalError = util.copy(err);
	        originalError.message = err.message;
	      }
	    }
	    err.message = err.message || null;

	    if (typeof options === 'string') {
	      err.message = options;
	    } else if (typeof options === 'object' && options !== null) {
	      util.update(err, options);
	      if (options.message)
	        err.message = options.message;
	      if (options.code || options.name)
	        err.code = options.code || options.name;
	      if (options.stack)
	        err.stack = options.stack;
	    }

	    if (typeof Object.defineProperty === 'function') {
	      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
	      Object.defineProperty(err, 'message', {enumerable: true});
	    }

	    err.name = options && options.name || err.name || err.code || 'Error';
	    err.time = new Date();

	    if (originalError) err.originalError = originalError;

	    return err;
	  },

	  /**
	   * @api private
	   */
	  inherit: function inherit(klass, features) {
	    var newObject = null;
	    if (features === undefined) {
	      features = klass;
	      klass = Object;
	      newObject = {};
	    } else {
	      var ctor = function ConstructorWrapper() {};
	      ctor.prototype = klass.prototype;
	      newObject = new ctor();
	    }

	    // constructor not supplied, create pass-through ctor
	    if (features.constructor === Object) {
	      features.constructor = function() {
	        if (klass !== Object) {
	          return klass.apply(this, arguments);
	        }
	      };
	    }

	    features.constructor.prototype = newObject;
	    util.update(features.constructor.prototype, features);
	    features.constructor.__super__ = klass;
	    return features.constructor;
	  },

	  /**
	   * @api private
	   */
	  mixin: function mixin() {
	    var klass = arguments[0];
	    for (var i = 1; i < arguments.length; i++) {
	      // jshint forin:false
	      for (var prop in arguments[i].prototype) {
	        var fn = arguments[i].prototype[prop];
	        if (prop !== 'constructor') {
	          klass.prototype[prop] = fn;
	        }
	      }
	    }
	    return klass;
	  },

	  /**
	   * @api private
	   */
	  hideProperties: function hideProperties(obj, props) {
	    if (typeof Object.defineProperty !== 'function') return;

	    util.arrayEach(props, function (key) {
	      Object.defineProperty(obj, key, {
	        enumerable: false, writable: true, configurable: true });
	    });
	  },

	  /**
	   * @api private
	   */
	  property: function property(obj, name, value, enumerable, isValue) {
	    var opts = {
	      configurable: true,
	      enumerable: enumerable !== undefined ? enumerable : true
	    };
	    if (typeof value === 'function' && !isValue) {
	      opts.get = value;
	    }
	    else {
	      opts.value = value; opts.writable = true;
	    }

	    Object.defineProperty(obj, name, opts);
	  },

	  /**
	   * @api private
	   */
	  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
	    var cachedValue = null;

	    // build enumerable attribute for each value with lazy accessor.
	    util.property(obj, name, function() {
	      if (cachedValue === null) {
	        cachedValue = get();
	      }
	      return cachedValue;
	    }, enumerable);
	  },

	  /**
	   * TODO Remove in major version revision
	   * This backfill populates response data without the
	   * top-level payload name.
	   *
	   * @api private
	   */
	  hoistPayloadMember: function hoistPayloadMember(resp) {
	    var req = resp.request;
	    var operation = req.operation;
	    var output = req.service.api.operations[operation].output;
	    if (output.payload) {
	      var payloadMember = output.members[output.payload];
	      var responsePayload = resp.data[output.payload];
	      if (payloadMember.type === 'structure') {
	        util.each(responsePayload, function(key, value) {
	          util.property(resp.data, key, value, false);
	        });
	      }
	    }
	  },

	  /**
	   * Compute SHA-256 checksums of streams
	   *
	   * @api private
	   */
	  computeSha256: function computeSha256(body, done) {
	    if (util.isNode()) {
	      var Stream = util.stream.Stream;
	      var fs = __webpack_require__(179);
	      if (body instanceof Stream) {
	        if (typeof body.path === 'string') { // assume file object
	          var settings = {};
	          if (typeof body.start === 'number') {
	            settings.start = body.start;
	          }
	          if (typeof body.end === 'number') {
	            settings.end = body.end;
	          }
	          body = fs.createReadStream(body.path, settings);
	        } else { // TODO support other stream types
	          return done(new Error('Non-file stream objects are ' +
	                                'not supported with SigV4'));
	        }
	      }
	    }

	    util.crypto.sha256(body, 'hex', function(err, sha) {
	      if (err) done(err);
	      else done(null, sha);
	    });
	  },

	  /**
	   * @api private
	   */
	  isClockSkewed: function isClockSkewed(serverTime) {
	    if (serverTime) {
	      util.property(AWS.config, 'isClockSkewed',
	        Math.abs(new Date().getTime() - serverTime) >= 300000, false);
	      return AWS.config.isClockSkewed;
	    }
	  },

	  applyClockOffset: function applyClockOffset(serverTime) {
	    if (serverTime)
	      AWS.config.systemClockOffset = serverTime - new Date().getTime();
	  },

	  /**
	   * @api private
	   */
	  extractRequestId: function extractRequestId(resp) {
	    var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
	                     resp.httpResponse.headers['x-amzn-requestid'];

	    if (!requestId && resp.data && resp.data.ResponseMetadata) {
	      requestId = resp.data.ResponseMetadata.RequestId;
	    }

	    if (requestId) {
	      resp.requestId = requestId;
	    }

	    if (resp.error) {
	      resp.error.requestId = requestId;
	    }
	  },

	  /**
	   * @api private
	   */
	  addPromises: function addPromises(constructors, PromiseDependency) {
	    if (PromiseDependency === undefined && AWS && AWS.config) {
	      PromiseDependency = AWS.config.getPromisesDependency();
	    }
	    if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
	      PromiseDependency = Promise;
	    }
	    if (typeof PromiseDependency !== 'function') var deletePromises = true;
	    if (!Array.isArray(constructors)) constructors = [constructors];

	    for (var ind = 0; ind < constructors.length; ind++) {
	      var constructor = constructors[ind];
	      if (deletePromises) {
	        if (constructor.deletePromisesFromClass) {
	          constructor.deletePromisesFromClass();
	        }
	      } else if (constructor.addPromisesToClass) {
	        constructor.addPromisesToClass(PromiseDependency);
	      }
	    }
	  },

	  /**
	   * @api private
	   */
	  promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
	    return function promise() {
	      var self = this;
	      return new PromiseDependency(function(resolve, reject) {
	        self[methodName](function(err, data) {
	          if (err) {
	            reject(err);
	          } else {
	            resolve(data);
	          }
	        });
	      });
	    };
	  },

	  /**
	   * @api private
	   */
	  isDualstackAvailable: function isDualstackAvailable(service) {
	    if (!service) return false;
	    var metadata = __webpack_require__(180);
	    if (typeof service !== 'string') service = service.serviceIdentifier;
	    if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
	    return !!metadata[service].dualstackAvailable;
	  },

	  /**
	   * @api private
	   */
	  calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions) {
	    if (!retryDelayOptions) retryDelayOptions = {};
	    var customBackoff = retryDelayOptions.customBackoff || null;
	    if (typeof customBackoff === 'function') {
	      return customBackoff(retryCount);
	    }
	    var base = retryDelayOptions.base || 100;
	    var delay = Math.random() * (Math.pow(2, retryCount) * base);
	    return delay;
	  },

	  /**
	   * @api private
	   */
	  handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
	    if (!options) options = {};
	    var http = AWS.HttpClient.getInstance();
	    var httpOptions = options.httpOptions || {};
	    var retryCount = 0;

	    var errCallback = function(err) {
	      var maxRetries = options.maxRetries || 0;
	      if (err && err.code === 'TimeoutError') err.retryable = true;
	      if (err && err.retryable && retryCount < maxRetries) {
	        retryCount++;
	        var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions);
	        setTimeout(sendRequest, delay + (err.retryAfter || 0));
	      } else {
	        cb(err);
	      }
	    };

	    var sendRequest = function() {
	      var data = '';
	      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
	        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
	        httpResponse.on('end', function() {
	          var statusCode = httpResponse.statusCode;
	          if (statusCode < 300) {
	            cb(null, data);
	          } else {
	            var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
	            var err = util.error(new Error(),
	              { retryable: statusCode >= 500 || statusCode === 429 }
	            );
	            if (retryAfter && err.retryable) err.retryAfter = retryAfter;
	            errCallback(err);
	          }
	        });
	      }, errCallback);
	    };

	    process.nextTick(sendRequest);
	  }

	};

	module.exports = util;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The main AWS namespace
	 */
	var AWS = { util: __webpack_require__(62) };

	/**
	 * @api private
	 * @!macro [new] nobrowser
	 *   @note This feature is not supported in the browser environment of the SDK.
	 */
	var _hidden = {}; _hidden.toString(); // hack to parse macro

	module.exports = AWS;

	AWS.util.update(AWS, {

	  /**
	   * @constant
	   */
	  VERSION: '2.7.15',

	  /**
	   * @api private
	   */
	  Signers: {},

	  /**
	   * @api private
	   */
	  Protocol: {
	    Json: __webpack_require__(64),
	    Query: __webpack_require__(67),
	    Rest: __webpack_require__(71),
	    RestJson: __webpack_require__(72),
	    RestXml: __webpack_require__(73)
	  },

	  /**
	   * @api private
	   */
	  XML: {
	    Builder: __webpack_require__(74),
	    Parser: null // conditionally set based on environment
	  },

	  /**
	   * @api private
	   */
	  JSON: {
	    Builder: __webpack_require__(65),
	    Parser: __webpack_require__(66)
	  },

	  /**
	   * @api private
	   */
	  Model: {
	    Api: __webpack_require__(140),
	    Operation: __webpack_require__(141),
	    Shape: __webpack_require__(69),
	    Paginator: __webpack_require__(142),
	    ResourceWaiter: __webpack_require__(143)
	  },

	  util: __webpack_require__(62),

	  /**
	   * @api private
	   */
	  apiLoader: function() { throw new Error('No API loader set'); }
	});

	__webpack_require__(144);
	__webpack_require__(147);

	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(160);

	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(166);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(178);

	/**
	 * @readonly
	 * @return [AWS.SequentialExecutor] a collection of global event listeners that
	 *   are attached to every sent request.
	 * @see AWS.Request AWS.Request for a list of events to listen for
	 * @example Logging the time taken to send a request
	 *   AWS.events.on('send', function startSend(resp) {
	 *     resp.startTime = new Date().getTime();
	 *   }).on('complete', function calculateTime(resp) {
	 *     var time = (new Date().getTime() - resp.startTime) / 1000;
	 *     console.log('Request took ' + time + ' seconds');
	 *   });
	 *
	 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
	 */
	AWS.events = new AWS.SequentialExecutor();


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var JsonBuilder = __webpack_require__(65);
	var JsonParser = __webpack_require__(66);

	function buildRequest(req) {
	  var httpRequest = req.httpRequest;
	  var api = req.service.api;
	  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
	  var version = api.jsonVersion || '1.0';
	  var input = api.operations[req.operation].input;
	  var builder = new JsonBuilder();

	  if (version === 1) version = '1.0';
	  httpRequest.body = builder.build(req.params || {}, input);
	  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
	  httpRequest.headers['X-Amz-Target'] = target;
	}

	function extractError(resp) {
	  var error = {};
	  var httpResponse = resp.httpResponse;

	  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
	  if (typeof error.code === 'string') {
	    error.code = error.code.split(':')[0];
	  }

	  if (httpResponse.body.length > 0) {
	    var e = JSON.parse(httpResponse.body.toString());
	    if (e.__type || e.code) {
	      error.code = (e.__type || e.code).split('#').pop();
	    }
	    if (error.code === 'RequestEntityTooLarge') {
	      error.message = 'Request body must be less than 1 MB';
	    } else {
	      error.message = (e.message || e.Message || null);
	    }
	  } else {
	    error.statusCode = httpResponse.statusCode;
	    error.message = httpResponse.statusCode.toString();
	  }

	  resp.error = util.error(new Error(), error);
	}

	function extractData(resp) {
	  var body = resp.httpResponse.body.toString() || '{}';
	  if (resp.request.service.config.convertResponseTypes === false) {
	    resp.data = JSON.parse(body);
	  } else {
	    var operation = resp.request.service.api.operations[resp.request.operation];
	    var shape = operation.output || {};
	    var parser = new JsonParser();
	    resp.data = parser.parse(body, shape);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);

	function JsonBuilder() { }

	JsonBuilder.prototype.build = function(value, shape) {
	  return JSON.stringify(translate(value, shape));
	};

	function translate(value, shape) {
	  if (!shape || value === undefined || value === null) return undefined;

	  switch (shape.type) {
	    case 'structure': return translateStructure(value, shape);
	    case 'map': return translateMap(value, shape);
	    case 'list': return translateList(value, shape);
	    default: return translateScalar(value, shape);
	  }
	}

	function translateStructure(structure, shape) {
	  var struct = {};
	  util.each(structure, function(name, value) {
	    var memberShape = shape.members[name];
	    if (memberShape) {
	      if (memberShape.location !== 'body') return;
	      var locationName = memberShape.isLocationName ? memberShape.name : name;
	      var result = translate(value, memberShape);
	      if (result !== undefined) struct[locationName] = result;
	    }
	  });
	  return struct;
	}

	function translateList(list, shape) {
	  var out = [];
	  util.arrayEach(list, function(value) {
	    var result = translate(value, shape.member);
	    if (result !== undefined) out.push(result);
	  });
	  return out;
	}

	function translateMap(map, shape) {
	  var out = {};
	  util.each(map, function(key, value) {
	    var result = translate(value, shape.value);
	    if (result !== undefined) out[key] = result;
	  });
	  return out;
	}

	function translateScalar(value, shape) {
	  return shape.toWireFormat(value);
	}

	module.exports = JsonBuilder;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);

	function JsonParser() { }

	JsonParser.prototype.parse = function(value, shape) {
	  return translate(JSON.parse(value), shape);
	};

	function translate(value, shape) {
	  if (!shape || value === undefined) return undefined;

	  switch (shape.type) {
	    case 'structure': return translateStructure(value, shape);
	    case 'map': return translateMap(value, shape);
	    case 'list': return translateList(value, shape);
	    default: return translateScalar(value, shape);
	  }
	}

	function translateStructure(structure, shape) {
	  if (structure == null) return undefined;

	  var struct = {};
	  var shapeMembers = shape.members;
	  util.each(shapeMembers, function(name, memberShape) {
	    var locationName = memberShape.isLocationName ? memberShape.name : name;
	    if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
	      var value = structure[locationName];
	      var result = translate(value, memberShape);
	      if (result !== undefined) struct[name] = result;
	    }
	  });
	  return struct;
	}

	function translateList(list, shape) {
	  if (list == null) return undefined;

	  var out = [];
	  util.arrayEach(list, function(value) {
	    var result = translate(value, shape.member);
	    if (result === undefined) out.push(null);
	    else out.push(result);
	  });
	  return out;
	}

	function translateMap(map, shape) {
	  if (map == null) return undefined;

	  var out = {};
	  util.each(map, function(key, value) {
	    var result = translate(value, shape.value);
	    if (result === undefined) out[key] = null;
	    else out[key] = result;
	  });
	  return out;
	}

	function translateScalar(value, shape) {
	  return shape.toType(value);
	}

	module.exports = JsonParser;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var util = __webpack_require__(62);
	var QueryParamSerializer = __webpack_require__(68);
	var Shape = __webpack_require__(69);

	function buildRequest(req) {
	  var operation = req.service.api.operations[req.operation];
	  var httpRequest = req.httpRequest;
	  httpRequest.headers['Content-Type'] =
	    'application/x-www-form-urlencoded; charset=utf-8';
	  httpRequest.params = {
	    Version: req.service.api.apiVersion,
	    Action: operation.name
	  };

	  // convert the request parameters into a list of query params,
	  // e.g. Deeply.NestedParam.0.Name=value
	  var builder = new QueryParamSerializer();
	  builder.serialize(req.params, operation.input, function(name, value) {
	    httpRequest.params[name] = value;
	  });
	  httpRequest.body = util.queryParamsToString(httpRequest.params);
	}

	function extractError(resp) {
	  var data, body = resp.httpResponse.body.toString();
	  if (body.match('<UnknownOperationException')) {
	    data = {
	      Code: 'UnknownOperation',
	      Message: 'Unknown operation ' + resp.request.operation
	    };
	  } else {
	    data = new AWS.XML.Parser().parse(body);
	  }

	  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
	  if (data.Errors) data = data.Errors;
	  if (data.Error) data = data.Error;
	  if (data.Code) {
	    resp.error = util.error(new Error(), {
	      code: data.Code,
	      message: data.Message
	    });
	  } else {
	    resp.error = util.error(new Error(), {
	      code: resp.httpResponse.statusCode,
	      message: null
	    });
	  }
	}

	function extractData(resp) {
	  var req = resp.request;
	  var operation = req.service.api.operations[req.operation];
	  var shape = operation.output || {};
	  var origRules = shape;

	  if (origRules.resultWrapper) {
	    var tmp = Shape.create({type: 'structure'});
	    tmp.members[origRules.resultWrapper] = shape;
	    tmp.memberNames = [origRules.resultWrapper];
	    util.property(shape, 'name', shape.resultWrapper);
	    shape = tmp;
	  }

	  var parser = new AWS.XML.Parser();

	  // TODO: Refactor XML Parser to parse RequestId from response.
	  if (shape && shape.members && !shape.members._XAMZRequestId) {
	    var requestIdShape = Shape.create(
	      { type: 'string' },
	      { api: { protocol: 'query' } },
	      'requestId'
	    );
	    shape.members._XAMZRequestId = requestIdShape;
	  }

	  var data = parser.parse(resp.httpResponse.body.toString(), shape);
	  resp.requestId = data._XAMZRequestId || data.requestId;

	  if (data._XAMZRequestId) delete data._XAMZRequestId;

	  if (origRules.resultWrapper) {
	    if (data[origRules.resultWrapper]) {
	      util.update(data, data[origRules.resultWrapper]);
	      delete data[origRules.resultWrapper];
	    }
	  }

	  resp.data = data;
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);

	function QueryParamSerializer() {
	}

	QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
	  serializeStructure('', params, shape, fn);
	};

	function ucfirst(shape) {
	  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
	    return shape.name;
	  } else {
	    return shape.name[0].toUpperCase() + shape.name.substr(1);
	  }
	}

	function serializeStructure(prefix, struct, rules, fn) {
	  util.each(rules.members, function(name, member) {
	    var value = struct[name];
	    if (value === null || value === undefined) return;

	    var memberName = ucfirst(member);
	    memberName = prefix ? prefix + '.' + memberName : memberName;
	    serializeMember(memberName, value, member, fn);
	  });
	}

	function serializeMap(name, map, rules, fn) {
	  var i = 1;
	  util.each(map, function (key, value) {
	    var prefix = rules.flattened ? '.' : '.entry.';
	    var position = prefix + (i++) + '.';
	    var keyName = position + (rules.key.name || 'key');
	    var valueName = position + (rules.value.name || 'value');
	    serializeMember(name + keyName, key, rules.key, fn);
	    serializeMember(name + valueName, value, rules.value, fn);
	  });
	}

	function serializeList(name, list, rules, fn) {
	  var memberRules = rules.member || {};

	  if (list.length === 0) {
	    fn.call(this, name, null);
	    return;
	  }

	  util.arrayEach(list, function (v, n) {
	    var suffix = '.' + (n + 1);
	    if (rules.api.protocol === 'ec2') {
	      // Do nothing for EC2
	      suffix = suffix + ''; // make linter happy
	    } else if (rules.flattened) {
	      if (memberRules.name) {
	        var parts = name.split('.');
	        parts.pop();
	        parts.push(ucfirst(memberRules));
	        name = parts.join('.');
	      }
	    } else {
	      suffix = '.member' + suffix;
	    }
	    serializeMember(name + suffix, v, memberRules, fn);
	  });
	}

	function serializeMember(name, value, rules, fn) {
	  if (value === null || value === undefined) return;
	  if (rules.type === 'structure') {
	    serializeStructure(name, value, rules, fn);
	  } else if (rules.type === 'list') {
	    serializeList(name, value, rules, fn);
	  } else if (rules.type === 'map') {
	    serializeMap(name, value, rules, fn);
	  } else {
	    fn(name, rules.toWireFormat(value).toString());
	  }
	}

	module.exports = QueryParamSerializer;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Collection = __webpack_require__(70);

	var util = __webpack_require__(62);

	function property(obj, name, value) {
	  if (value !== null && value !== undefined) {
	    util.property.apply(this, arguments);
	  }
	}

	function memoizedProperty(obj, name) {
	  if (!obj.constructor.prototype[name]) {
	    util.memoizedProperty.apply(this, arguments);
	  }
	}

	function Shape(shape, options, memberName) {
	  options = options || {};

	  property(this, 'shape', shape.shape);
	  property(this, 'api', options.api, false);
	  property(this, 'type', shape.type);
	  property(this, 'enum', shape.enum);
	  property(this, 'min', shape.min);
	  property(this, 'max', shape.max);
	  property(this, 'pattern', shape.pattern);
	  property(this, 'location', shape.location || this.location || 'body');
	  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
	    shape.locationName || memberName);
	  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
	  property(this, 'isComposite', shape.isComposite || false);
	  property(this, 'isShape', true, false);
	  property(this, 'isQueryName', shape.queryName ? true : false, false);
	  property(this, 'isLocationName', shape.locationName ? true : false, false);
	  property(this, 'isIdempotent', shape.idempotencyToken === true);

	  if (options.documentation) {
	    property(this, 'documentation', shape.documentation);
	    property(this, 'documentationUrl', shape.documentationUrl);
	  }

	  if (shape.xmlAttribute) {
	    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
	  }

	  // type conversion and parsing
	  property(this, 'defaultValue', null);
	  this.toWireFormat = function(value) {
	    if (value === null || value === undefined) return '';
	    return value;
	  };
	  this.toType = function(value) { return value; };
	}

	/**
	 * @api private
	 */
	Shape.normalizedTypes = {
	  character: 'string',
	  double: 'float',
	  long: 'integer',
	  short: 'integer',
	  biginteger: 'integer',
	  bigdecimal: 'float',
	  blob: 'binary'
	};

	/**
	 * @api private
	 */
	Shape.types = {
	  'structure': StructureShape,
	  'list': ListShape,
	  'map': MapShape,
	  'boolean': BooleanShape,
	  'timestamp': TimestampShape,
	  'float': FloatShape,
	  'integer': IntegerShape,
	  'string': StringShape,
	  'base64': Base64Shape,
	  'binary': BinaryShape
	};

	Shape.resolve = function resolve(shape, options) {
	  if (shape.shape) {
	    var refShape = options.api.shapes[shape.shape];
	    if (!refShape) {
	      throw new Error('Cannot find shape reference: ' + shape.shape);
	    }

	    return refShape;
	  } else {
	    return null;
	  }
	};

	Shape.create = function create(shape, options, memberName) {
	  if (shape.isShape) return shape;

	  var refShape = Shape.resolve(shape, options);
	  if (refShape) {
	    var filteredKeys = Object.keys(shape);
	    if (!options.documentation) {
	      filteredKeys = filteredKeys.filter(function(name) {
	        return !name.match(/documentation/);
	      });
	    }
	    if (filteredKeys === ['shape']) { // no inline customizations
	      return refShape;
	    }

	    // create an inline shape with extra members
	    var InlineShape = function() {
	      refShape.constructor.call(this, shape, options, memberName);
	    };
	    InlineShape.prototype = refShape;
	    return new InlineShape();
	  } else {
	    // set type if not set
	    if (!shape.type) {
	      if (shape.members) shape.type = 'structure';
	      else if (shape.member) shape.type = 'list';
	      else if (shape.key) shape.type = 'map';
	      else shape.type = 'string';
	    }

	    // normalize types
	    var origType = shape.type;
	    if (Shape.normalizedTypes[shape.type]) {
	      shape.type = Shape.normalizedTypes[shape.type];
	    }

	    if (Shape.types[shape.type]) {
	      return new Shape.types[shape.type](shape, options, memberName);
	    } else {
	      throw new Error('Unrecognized shape type: ' + origType);
	    }
	  }
	};

	function CompositeShape(shape) {
	  Shape.apply(this, arguments);
	  property(this, 'isComposite', true);

	  if (shape.flattened) {
	    property(this, 'flattened', shape.flattened || false);
	  }
	}

	function StructureShape(shape, options) {
	  var requiredMap = null, firstInit = !this.isShape;

	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return {}; });
	    property(this, 'members', {});
	    property(this, 'memberNames', []);
	    property(this, 'required', []);
	    property(this, 'isRequired', function() { return false; });
	  }

	  if (shape.members) {
	    property(this, 'members', new Collection(shape.members, options, function(name, member) {
	      return Shape.create(member, options, name);
	    }));
	    memoizedProperty(this, 'memberNames', function() {
	      return shape.xmlOrder || Object.keys(shape.members);
	    });
	  }

	  if (shape.required) {
	    property(this, 'required', shape.required);
	    property(this, 'isRequired', function(name) {
	      if (!requiredMap) {
	        requiredMap = {};
	        for (var i = 0; i < shape.required.length; i++) {
	          requiredMap[shape.required[i]] = true;
	        }
	      }

	      return requiredMap[name];
	    }, false, true);
	  }

	  property(this, 'resultWrapper', shape.resultWrapper || null);

	  if (shape.payload) {
	    property(this, 'payload', shape.payload);
	  }

	  if (typeof shape.xmlNamespace === 'string') {
	    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
	  } else if (typeof shape.xmlNamespace === 'object') {
	    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
	    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
	  }
	}

	function ListShape(shape, options) {
	  var self = this, firstInit = !this.isShape;
	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return []; });
	  }

	  if (shape.member) {
	    memoizedProperty(this, 'member', function() {
	      return Shape.create(shape.member, options);
	    });
	  }

	  if (this.flattened) {
	    var oldName = this.name;
	    memoizedProperty(this, 'name', function() {
	      return self.member.name || oldName;
	    });
	  }
	}

	function MapShape(shape, options) {
	  var firstInit = !this.isShape;
	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return {}; });
	    property(this, 'key', Shape.create({type: 'string'}, options));
	    property(this, 'value', Shape.create({type: 'string'}, options));
	  }

	  if (shape.key) {
	    memoizedProperty(this, 'key', function() {
	      return Shape.create(shape.key, options);
	    });
	  }
	  if (shape.value) {
	    memoizedProperty(this, 'value', function() {
	      return Shape.create(shape.value, options);
	    });
	  }
	}

	function TimestampShape(shape) {
	  var self = this;
	  Shape.apply(this, arguments);

	  if (this.location === 'header') {
	    property(this, 'timestampFormat', 'rfc822');
	  } else if (shape.timestampFormat) {
	    property(this, 'timestampFormat', shape.timestampFormat);
	  } else if (this.api) {
	    if (this.api.timestampFormat) {
	      property(this, 'timestampFormat', this.api.timestampFormat);
	    } else {
	      switch (this.api.protocol) {
	        case 'json':
	        case 'rest-json':
	          property(this, 'timestampFormat', 'unixTimestamp');
	          break;
	        case 'rest-xml':
	        case 'query':
	        case 'ec2':
	          property(this, 'timestampFormat', 'iso8601');
	          break;
	      }
	    }
	  }

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    if (typeof value.toUTCString === 'function') return value;
	    return typeof value === 'string' || typeof value === 'number' ?
	           util.date.parseTimestamp(value) : null;
	  };

	  this.toWireFormat = function(value) {
	    return util.date.format(value, self.timestampFormat);
	  };
	}

	function StringShape() {
	  Shape.apply(this, arguments);

	  if (this.api) {
	    switch (this.api.protocol) {
	      case 'rest-xml':
	      case 'query':
	      case 'ec2':
	        this.toType = function(value) { return value || ''; };
	    }
	  }
	}

	function FloatShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    return parseFloat(value);
	  };
	  this.toWireFormat = this.toType;
	}

	function IntegerShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    return parseInt(value, 10);
	  };
	  this.toWireFormat = this.toType;
	}

	function BinaryShape() {
	  Shape.apply(this, arguments);
	  this.toType = util.base64.decode;
	  this.toWireFormat = util.base64.encode;
	}

	function Base64Shape() {
	  BinaryShape.apply(this, arguments);
	}

	function BooleanShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (typeof value === 'boolean') return value;
	    if (value === null || value === undefined) return null;
	    return value === 'true';
	  };
	}

	/**
	 * @api private
	 */
	Shape.shapes = {
	  StructureShape: StructureShape,
	  ListShape: ListShape,
	  MapShape: MapShape,
	  StringShape: StringShape,
	  BooleanShape: BooleanShape,
	  Base64Shape: Base64Shape
	};

	module.exports = Shape;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var memoizedProperty = __webpack_require__(62).memoizedProperty;

	function memoize(name, value, fn, nameTr) {
	  memoizedProperty(this, nameTr(name), function() {
	    return fn(name, value);
	  });
	}

	function Collection(iterable, options, fn, nameTr) {
	  nameTr = nameTr || String;
	  var self = this;

	  for (var id in iterable) {
	    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
	      memoize.call(self, id, iterable[id], fn, nameTr);
	    }
	  }
	}

	module.exports = Collection;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);

	function populateMethod(req) {
	  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
	}

	function generateURI(endpointPath, operationPath, input, params) {
	  var uri = [endpointPath, operationPath].join('/');
	  uri = uri.replace(/\/+/g, '/');

	  var queryString = {}, queryStringSet = false;
	  util.each(input.members, function (name, member) {
	    var paramValue = params[name];
	    if (paramValue === null || paramValue === undefined) return;
	    if (member.location === 'uri') {
	      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
	      uri = uri.replace(regex, function(_, plus) {
	        var fn = plus ? util.uriEscapePath : util.uriEscape;
	        return fn(String(paramValue));
	      });
	    } else if (member.location === 'querystring') {
	      queryStringSet = true;

	      if (member.type === 'list') {
	        queryString[member.name] = paramValue.map(function(val) {
	          return util.uriEscape(String(val));
	        });
	      } else if (member.type === 'map') {
	        util.each(paramValue, function(key, value) {
	          if (Array.isArray(value)) {
	            queryString[key] = value.map(function(val) {
	              return util.uriEscape(String(val));
	            });
	          } else {
	            queryString[key] = util.uriEscape(String(value));
	          }
	        });
	      } else {
	        queryString[member.name] = util.uriEscape(String(paramValue));
	      }
	    }
	  });

	  if (queryStringSet) {
	    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
	    var parts = [];
	    util.arrayEach(Object.keys(queryString).sort(), function(key) {
	      if (!Array.isArray(queryString[key])) {
	        queryString[key] = [queryString[key]];
	      }
	      for (var i = 0; i < queryString[key].length; i++) {
	        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
	      }
	    });
	    uri += parts.join('&');
	  }

	  return uri;
	}

	function populateURI(req) {
	  var operation = req.service.api.operations[req.operation];
	  var input = operation.input;

	  var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
	  req.httpRequest.path = uri;
	}

	function populateHeaders(req) {
	  var operation = req.service.api.operations[req.operation];
	  util.each(operation.input.members, function (name, member) {
	    var value = req.params[name];
	    if (value === null || value === undefined) return;

	    if (member.location === 'headers' && member.type === 'map') {
	      util.each(value, function(key, memberValue) {
	        req.httpRequest.headers[member.name + key] = memberValue;
	      });
	    } else if (member.location === 'header') {
	      value = member.toWireFormat(value).toString();
	      req.httpRequest.headers[member.name] = value;
	    }
	  });
	}

	function buildRequest(req) {
	  populateMethod(req);
	  populateURI(req);
	  populateHeaders(req);
	}

	function extractError() {
	}

	function extractData(resp) {
	  var req = resp.request;
	  var data = {};
	  var r = resp.httpResponse;
	  var operation = req.service.api.operations[req.operation];
	  var output = operation.output;

	  // normalize headers names to lower-cased keys for matching
	  var headers = {};
	  util.each(r.headers, function (k, v) {
	    headers[k.toLowerCase()] = v;
	  });

	  util.each(output.members, function(name, member) {
	    var header = (member.name || name).toLowerCase();
	    if (member.location === 'headers' && member.type === 'map') {
	      data[name] = {};
	      var location = member.isLocationName ? member.name : '';
	      var pattern = new RegExp('^' + location + '(.+)', 'i');
	      util.each(r.headers, function (k, v) {
	        var result = k.match(pattern);
	        if (result !== null) {
	          data[name][result[1]] = v;
	        }
	      });
	    } else if (member.location === 'header') {
	      if (headers[header] !== undefined) {
	        data[name] = headers[header];
	      }
	    } else if (member.location === 'statusCode') {
	      data[name] = parseInt(r.statusCode, 10);
	    }
	  });

	  resp.data = data;
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData,
	  generateURI: generateURI
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var Rest = __webpack_require__(71);
	var Json = __webpack_require__(64);
	var JsonBuilder = __webpack_require__(65);
	var JsonParser = __webpack_require__(66);

	function populateBody(req) {
	  var builder = new JsonBuilder();
	  var input = req.service.api.operations[req.operation].input;

	  if (input.payload) {
	    var params = {};
	    var payloadShape = input.members[input.payload];
	    params = req.params[input.payload];
	    if (params === undefined) return;

	    if (payloadShape.type === 'structure') {
	      req.httpRequest.body = builder.build(params, payloadShape);
	    } else { // non-JSON payload
	      req.httpRequest.body = params;
	    }
	  } else {
	    req.httpRequest.body = builder.build(req.params, input);
	  }
	}

	function buildRequest(req) {
	  Rest.buildRequest(req);

	  // never send body payload on GET/HEAD/DELETE
	  if (['GET', 'HEAD', 'DELETE'].indexOf(req.httpRequest.method) < 0) {
	    populateBody(req);
	  }
	}

	function extractError(resp) {
	  Json.extractError(resp);
	}

	function extractData(resp) {
	  Rest.extractData(resp);

	  var req = resp.request;
	  var rules = req.service.api.operations[req.operation].output || {};
	  if (rules.payload) {
	    var payloadMember = rules.members[rules.payload];
	    var body = resp.httpResponse.body;
	    if (payloadMember.isStreaming) {
	      resp.data[rules.payload] = body;
	    } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
	      var parser = new JsonParser();
	      resp.data[rules.payload] = parser.parse(body, payloadMember);
	    } else {
	      resp.data[rules.payload] = body.toString();
	    }
	  } else {
	    var data = resp.data;
	    Json.extractData(resp);
	    resp.data = util.merge(data, resp.data);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var util = __webpack_require__(62);
	var Rest = __webpack_require__(71);

	function populateBody(req) {
	  var input = req.service.api.operations[req.operation].input;
	  var builder = new AWS.XML.Builder();
	  var params = req.params;

	  var payload = input.payload;
	  if (payload) {
	    var payloadMember = input.members[payload];
	    params = params[payload];
	    if (params === undefined) return;

	    if (payloadMember.type === 'structure') {
	      var rootElement = payloadMember.name;
	      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
	    } else { // non-xml payload
	      req.httpRequest.body = params;
	    }
	  } else {
	    req.httpRequest.body = builder.toXML(params, input, input.name ||
	      input.shape || util.string.upperFirst(req.operation) + 'Request');
	  }
	}

	function buildRequest(req) {
	  Rest.buildRequest(req);

	  // never send body payload on GET/HEAD
	  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
	    populateBody(req);
	  }
	}

	function extractError(resp) {
	  Rest.extractError(resp);

	  var data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
	  if (data.Errors) data = data.Errors;
	  if (data.Error) data = data.Error;
	  if (data.Code) {
	    resp.error = util.error(new Error(), {
	      code: data.Code,
	      message: data.Message
	    });
	  } else {
	    resp.error = util.error(new Error(), {
	      code: resp.httpResponse.statusCode,
	      message: null
	    });
	  }
	}

	function extractData(resp) {
	  Rest.extractData(resp);

	  var parser;
	  var req = resp.request;
	  var body = resp.httpResponse.body;
	  var operation = req.service.api.operations[req.operation];
	  var output = operation.output;

	  var payload = output.payload;
	  if (payload) {
	    var payloadMember = output.members[payload];
	    if (payloadMember.isStreaming) {
	      resp.data[payload] = body;
	    } else if (payloadMember.type === 'structure') {
	      parser = new AWS.XML.Parser();
	      resp.data[payload] = parser.parse(body.toString(), payloadMember);
	    } else {
	      resp.data[payload] = body.toString();
	    }
	  } else if (body.length > 0) {
	    parser = new AWS.XML.Parser();
	    var data = parser.parse(body.toString(), output);
	    util.update(resp.data, data);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var builder = __webpack_require__(75);

	function XmlBuilder() { }

	XmlBuilder.prototype.toXML = function(params, shape, rootElement, noEmpty) {
	  var xml = builder.create(rootElement);
	  applyNamespaces(xml, shape);
	  serialize(xml, params, shape);
	  return xml.children.length > 0 || noEmpty ? xml.root().toString() : '';
	};

	function serialize(xml, value, shape) {
	  switch (shape.type) {
	    case 'structure': return serializeStructure(xml, value, shape);
	    case 'map': return serializeMap(xml, value, shape);
	    case 'list': return serializeList(xml, value, shape);
	    default: return serializeScalar(xml, value, shape);
	  }
	}

	function serializeStructure(xml, params, shape) {
	  util.arrayEach(shape.memberNames, function(memberName) {
	    var memberShape = shape.members[memberName];
	    if (memberShape.location !== 'body') return;

	    var value = params[memberName];
	    var name = memberShape.name;
	    if (value !== undefined && value !== null) {
	      if (memberShape.isXmlAttribute) {
	        xml.att(name, value);
	      } else if (memberShape.flattened) {
	        serialize(xml, value, memberShape);
	      } else {
	        var element = xml.ele(name);
	        applyNamespaces(element, memberShape);
	        serialize(element, value, memberShape);
	      }
	    }
	  });
	}

	function serializeMap(xml, map, shape) {
	  var xmlKey = shape.key.name || 'key';
	  var xmlValue = shape.value.name || 'value';

	  util.each(map, function(key, value) {
	    var entry = xml.ele(shape.flattened ? shape.name : 'entry');
	    serialize(entry.ele(xmlKey), key, shape.key);
	    serialize(entry.ele(xmlValue), value, shape.value);
	  });
	}

	function serializeList(xml, list, shape) {
	  if (shape.flattened) {
	    util.arrayEach(list, function(value) {
	      var name = shape.member.name || shape.name;
	      var element = xml.ele(name);
	      serialize(element, value, shape.member);
	    });
	  } else {
	    util.arrayEach(list, function(value) {
	      var name = shape.member.name || 'member';
	      var element = xml.ele(name);
	      serialize(element, value, shape.member);
	    });
	  }
	}

	function serializeScalar(xml, value, shape) {
	  xml.txt(shape.toWireFormat(value));
	}

	function applyNamespaces(xml, shape) {
	  var uri, prefix = 'xmlns';
	  if (shape.xmlNamespaceUri) {
	    uri = shape.xmlNamespaceUri;
	    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
	  } else if (xml.isRoot && shape.api.xmlNamespaceUri) {
	    uri = shape.api.xmlNamespaceUri;
	  }

	  if (uri) xml.att(prefix, uri);
	}

	module.exports = XmlBuilder;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, assign;

	  assign = __webpack_require__(76);

	  XMLBuilder = __webpack_require__(96);

	  module.exports.create = function(name, xmldec, doctype, options) {
	    options = assign({}, xmldec, doctype, options);
	    return new XMLBuilder(name, options).root();
	  };

	}).call(this);


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssign = __webpack_require__(77),
	    createAssigner = __webpack_require__(92);

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it is invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments;
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return typeof value == 'undefined' ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(baseAssign);

	module.exports = assign;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(78),
	    keys = __webpack_require__(79);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize assigning values.
	 * @returns {Object} Returns the destination object.
	 */
	function baseAssign(object, source, customizer) {
	  var props = keys(source);
	  if (!customizer) {
	    return baseCopy(source, object, props);
	  }
	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (typeof value == 'undefined' && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	module.exports = baseAssign;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Copies the properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Array} props The property names to copy.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, object, props) {
	  if (!props) {
	    props = object;
	    object = {};
	  }
	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(80),
	    isNative = __webpack_require__(81),
	    isObject = __webpack_require__(85),
	    shimKeys = __webpack_require__(86);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  if (object) {
	    var Ctor = object.constructor,
	        length = object.length;
	  }
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && (length && isLength(length)))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Used as the maximum length of an array-like value.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * for more details.
	 */
	var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on ES `ToLength`. See the
	 * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
	 * for more details.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var escapeRegExp = __webpack_require__(82),
	    isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reNative = RegExp('^' +
	  escapeRegExp(objToString)
	  .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (objToString.call(value) == funcTag) {
	    return reNative.test(fnToString.call(value));
	  }
	  return (isObjectLike(value) && reHostCtor.test(value)) || false;
	}

	module.exports = isNative;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(83);

	/**
	 * Used to match `RegExp` special characters.
	 * See this [article on `RegExp` characters](http://www.regular-expressions.info/characters.html#special)
	 * for more details.
	 */
	var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
	    reHasRegExpChars = RegExp(reRegExpChars.source);

	/**
	 * Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
	 * "+", "(", ")", "[", "]", "{" and "}" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https://lodash\.com/\)'
	 */
	function escapeRegExp(string) {
	  string = baseToString(string);
	  return (string && reHasRegExpChars.test(string))
	    ? string.replace(reRegExpChars, '\\$&')
	    : string;
	}

	module.exports = escapeRegExp;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it is not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  if (typeof value == 'string') {
	    return value;
	  }
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return (value && typeof value == 'object') || false;
	}

	module.exports = isObjectLike;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the language type of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return type == 'function' || (value && type == 'object') || false;
	}

	module.exports = isObject;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(87),
	    isArray = __webpack_require__(88),
	    isIndex = __webpack_require__(89),
	    isLength = __webpack_require__(80),
	    keysIn = __webpack_require__(90),
	    support = __webpack_require__(91);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = length && isLength(length) &&
	    (isArray(object) || (support.nonEnumArgs && isArguments(object)));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(80),
	    isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  var length = isObjectLike(value) ? value.length : undefined;
	  return (isLength(length) && objToString.call(value) == argsTag) || false;
	}

	module.exports = isArguments;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(80),
	    isNative = __webpack_require__(81),
	    isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return (isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag) || false;
	};

	module.exports = isArray;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Used as the maximum length of an array-like value.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * for more details.
	 */
	var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = +value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(87),
	    isArray = __webpack_require__(88),
	    isIndex = __webpack_require__(89),
	    isLength = __webpack_require__(80),
	    isObject = __webpack_require__(85),
	    support = __webpack_require__(91);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || (support.nonEnumArgs && isArguments(object))) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isNative = __webpack_require__(81);

	/** Used to detect functions containing a `this` reference. */
	var reThis = /\bthis\b/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to detect DOM support. */
	var document = (document = global.window) && document.document;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * An object environment feature flags.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var support = {};

	(function(x) {

	  /**
	   * Detect if functions can be decompiled by `Function#toString`
	   * (all but Firefox OS certified apps, older Opera mobile browsers, and
	   * the PlayStation 3; forced `false` for Windows 8 apps).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() { return this; });

	  /**
	   * Detect if `Function#name` is supported (all but IE).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.funcNames = typeof Function.name == 'string';

	  /**
	   * Detect if the DOM is supported.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  try {
	    support.dom = document.createDocumentFragment().nodeType === 11;
	  } catch(e) {
	    support.dom = false;
	  }

	  /**
	   * Detect if `arguments` object indexes are non-enumerable.
	   *
	   * In Firefox < 4, IE < 9, PhantomJS, and Safari < 5.1 `arguments` object
	   * indexes are non-enumerable. Chrome < 25 and Node.js < 0.11.0 treat
	   * `arguments` object indexes as non-enumerable and fail `hasOwnProperty`
	   * checks for indexes that exceed their function's formal parameters with
	   * associated values of `0`.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  try {
	    support.nonEnumArgs = !propertyIsEnumerable.call(arguments, 1);
	  } catch(e) {
	    support.nonEnumArgs = true;
	  }
	}(0, 0));

	module.exports = support;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(93),
	    isIterateeCall = __webpack_require__(95);

	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return function() {
	    var args = arguments,
	        length = args.length,
	        object = args[0];

	    if (length < 2 || object == null) {
	      return object;
	    }
	    var customizer = args[length - 2],
	        thisArg = args[length - 1],
	        guard = args[3];

	    if (length > 3 && typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = (length > 2 && typeof thisArg == 'function') ? thisArg : null;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(args[1], args[2], guard)) {
	      customizer = length == 3 ? null : customizer;
	      length = 2;
	    }
	    var index = 0;
	    while (++index < length) {
	      var source = args[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  };
	}

	module.exports = createAssigner;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(94);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (typeof thisArg == 'undefined') {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var isIndex = __webpack_require__(89),
	    isLength = __webpack_require__(80),
	    isObject = __webpack_require__(85);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number') {
	    var length = object.length,
	        prereq = isLength(length) && isIndex(index, length);
	  } else {
	    prereq = type == 'string' && index in object;
	  }
	  if (prereq) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

	  XMLStringifier = __webpack_require__(97);

	  XMLDeclaration = __webpack_require__(98);

	  XMLDocType = __webpack_require__(133);

	  XMLElement = __webpack_require__(106);

	  module.exports = XMLBuilder = (function() {
	    function XMLBuilder(name, options) {
	      var root, temp;
	      if (name == null) {
	        throw new Error("Root element needs a name");
	      }
	      if (options == null) {
	        options = {};
	      }
	      this.options = options;
	      this.stringify = new XMLStringifier(options);
	      temp = new XMLElement(this, 'doc');
	      root = temp.element(name);
	      root.isRoot = true;
	      root.documentObject = this;
	      this.rootObject = root;
	      if (!options.headless) {
	        root.declaration(options);
	        if ((options.pubID != null) || (options.sysID != null)) {
	          root.doctype(options);
	        }
	      }
	    }

	    XMLBuilder.prototype.root = function() {
	      return this.rootObject;
	    };

	    XMLBuilder.prototype.end = function(options) {
	      return this.toString(options);
	    };

	    XMLBuilder.prototype.toString = function(options) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      r = '';
	      if (this.xmldec != null) {
	        r += this.xmldec.toString(options);
	      }
	      if (this.doctype != null) {
	        r += this.doctype.toString(options);
	      }
	      r += this.rootObject.toString(options);
	      if (pretty && r.slice(-newline.length) === newline) {
	        r = r.slice(0, -newline.length);
	      }
	      return r;
	    };

	    return XMLBuilder;

	  })();

	}).call(this);


/***/ },
/* 97 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLStringifier,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    hasProp = {}.hasOwnProperty;

	  module.exports = XMLStringifier = (function() {
	    function XMLStringifier(options) {
	      this.assertLegalChar = bind(this.assertLegalChar, this);
	      var key, ref, value;
	      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
	      ref = (options != null ? options.stringify : void 0) || {};
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this[key] = value;
	      }
	    }

	    XMLStringifier.prototype.eleName = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.eleText = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(this.elEscape(val));
	    };

	    XMLStringifier.prototype.cdata = function(val) {
	      val = '' + val || '';
	      if (val.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.comment = function(val) {
	      val = '' + val || '';
	      if (val.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.raw = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attName = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attValue = function(val) {
	      val = '' + val || '';
	      return this.attEscape(val);
	    };

	    XMLStringifier.prototype.insTarget = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.insValue = function(val) {
	      val = '' + val || '';
	      if (val.match(/\?>/)) {
	        throw new Error("Invalid processing instruction value: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlVersion = function(val) {
	      val = '' + val || '';
	      if (!val.match(/1\.[0-9]+/)) {
	        throw new Error("Invalid version number: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlEncoding = function(val) {
	      val = '' + val || '';
	      if (!val.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/)) {
	        throw new Error("Invalid encoding: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlStandalone = function(val) {
	      if (val) {
	        return "yes";
	      } else {
	        return "no";
	      }
	    };

	    XMLStringifier.prototype.dtdPubID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdSysID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdElementValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttType = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttDefault = function(val) {
	      if (val != null) {
	        return '' + val || '';
	      } else {
	        return val;
	      }
	    };

	    XMLStringifier.prototype.dtdEntityValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdNData = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.convertAttKey = '@';

	    XMLStringifier.prototype.convertPIKey = '?';

	    XMLStringifier.prototype.convertTextKey = '#text';

	    XMLStringifier.prototype.convertCDataKey = '#cdata';

	    XMLStringifier.prototype.convertCommentKey = '#comment';

	    XMLStringifier.prototype.convertRawKey = '#raw';

	    XMLStringifier.prototype.convertListKey = '#list';

	    XMLStringifier.prototype.assertLegalChar = function(str) {
	      var chars, chr;
	      if (this.allowSurrogateChars) {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
	      } else {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      }
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
	      }
	      return str;
	    };

	    XMLStringifier.prototype.elEscape = function(str) {
	      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
	    };

	    XMLStringifier.prototype.attEscape = function(str) {
	      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;');
	    };

	    return XMLStringifier;

	  })();

	}).call(this);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDeclaration, XMLNode, create, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  isObject = __webpack_require__(85);

	  XMLNode = __webpack_require__(101);

	  module.exports = XMLDeclaration = (function(superClass) {
	    extend(XMLDeclaration, superClass);

	    function XMLDeclaration(parent, version, encoding, standalone) {
	      var ref;
	      XMLDeclaration.__super__.constructor.call(this, parent);
	      if (isObject(version)) {
	        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
	      }
	      if (!version) {
	        version = '1.0';
	      }
	      if (version != null) {
	        this.version = this.stringify.xmlVersion(version);
	      }
	      if (encoding != null) {
	        this.encoding = this.stringify.xmlEncoding(encoding);
	      }
	      if (standalone != null) {
	        this.standalone = this.stringify.xmlStandalone(standalone);
	      }
	    }

	    XMLDeclaration.prototype.clone = function() {
	      return create(XMLDeclaration.prototype, this);
	    };

	    XMLDeclaration.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?xml';
	      if (this.version != null) {
	        r += ' version="' + this.version + '"';
	      }
	      if (this.encoding != null) {
	        r += ' encoding="' + this.encoding + '"';
	      }
	      if (this.standalone != null) {
	        r += ' standalone="' + this.standalone + '"';
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDeclaration;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(78),
	    baseCreate = __webpack_require__(100),
	    isIterateeCall = __webpack_require__(95),
	    keys = __webpack_require__(79);

	/**
	 * Creates an object that inherits from the given `prototype` object. If a
	 * `properties` object is provided its own enumerable properties are assigned
	 * to the created object.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} prototype The object to inherit from.
	 * @param {Object} [properties] The properties to assign to the object.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * function Shape() {
	 *   this.x = 0;
	 *   this.y = 0;
	 * }
	 *
	 * function Circle() {
	 *   Shape.call(this);
	 * }
	 *
	 * Circle.prototype = _.create(Shape.prototype, {
	 *   'constructor': Circle
	 * });
	 *
	 * var circle = new Circle;
	 * circle instanceof Circle;
	 * // => true
	 *
	 * circle instanceof Shape;
	 * // => true
	 */
	function create(prototype, properties, guard) {
	  var result = baseCreate(prototype);
	  if (guard && isIterateeCall(prototype, properties, guard)) {
	    properties = null;
	  }
	  return properties ? baseCopy(properties, result, keys(properties)) : result;
	}

	module.exports = create;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isObject = __webpack_require__(85);

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function Object() {}
	  return function(prototype) {
	    if (isObject(prototype)) {
	      Object.prototype = prototype;
	      var result = new Object;
	      Object.prototype = null;
	    }
	    return result || global.Object();
	  };
	}());

	module.exports = baseCreate;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isArray, isEmpty, isFunction, isObject,
	    hasProp = {}.hasOwnProperty;

	  isObject = __webpack_require__(85);

	  isArray = __webpack_require__(88);

	  isFunction = __webpack_require__(102);

	  isEmpty = __webpack_require__(104);

	  XMLElement = null;

	  XMLCData = null;

	  XMLComment = null;

	  XMLDeclaration = null;

	  XMLDocType = null;

	  XMLRaw = null;

	  XMLText = null;

	  module.exports = XMLNode = (function() {
	    function XMLNode(parent) {
	      this.parent = parent;
	      this.options = this.parent.options;
	      this.stringify = this.parent.stringify;
	      if (XMLElement === null) {
	        XMLElement = __webpack_require__(106);
	        XMLCData = __webpack_require__(131);
	        XMLComment = __webpack_require__(132);
	        XMLDeclaration = __webpack_require__(98);
	        XMLDocType = __webpack_require__(133);
	        XMLRaw = __webpack_require__(138);
	        XMLText = __webpack_require__(139);
	      }
	    }

	    XMLNode.prototype.clone = function() {
	      throw new Error("Cannot clone generic XMLNode");
	    };

	    XMLNode.prototype.element = function(name, attributes, text) {
	      var item, j, key, lastChild, len, ref, val;
	      lastChild = null;
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isArray(name)) {
	        for (j = 0, len = name.length; j < len; j++) {
	          item = name[j];
	          lastChild = this.element(item);
	        }
	      } else if (isFunction(name)) {
	        lastChild = this.element(name.apply());
	      } else if (isObject(name)) {
	        for (key in name) {
	          if (!hasProp.call(name, key)) continue;
	          val = name[key];
	          if (isFunction(val)) {
	            val = val.apply();
	          }
	          if ((isObject(val)) && (isEmpty(val))) {
	            val = null;
	          }
	          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
	            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
	          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
	            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
	          } else if (isObject(val)) {
	            if (!this.options.ignoreDecorators && this.stringify.convertListKey && key.indexOf(this.stringify.convertListKey) === 0 && isArray(val)) {
	              lastChild = this.element(val);
	            } else {
	              lastChild = this.element(key);
	              lastChild.element(val);
	            }
	          } else {
	            lastChild = this.element(key, val);
	          }
	        }
	      } else {
	        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
	          lastChild = this.text(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
	          lastChild = this.cdata(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
	          lastChild = this.comment(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
	          lastChild = this.raw(text);
	        } else {
	          lastChild = this.node(name, attributes, text);
	        }
	      }
	      if (lastChild == null) {
	        throw new Error("Could not create any elements with: " + name);
	      }
	      return lastChild;
	    };

	    XMLNode.prototype.insertBefore = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.insertAfter = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i + 1);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.remove = function() {
	      var i, ref;
	      if (this.isRoot) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
	      return this.parent;
	    };

	    XMLNode.prototype.node = function(name, attributes, text) {
	      var child, ref;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      child = new XMLElement(this, name, attributes);
	      if (text != null) {
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };

	    XMLNode.prototype.text = function(value) {
	      var child;
	      child = new XMLText(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.raw = function(value) {
	      var child;
	      child = new XMLRaw(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.declaration = function(version, encoding, standalone) {
	      var doc, xmldec;
	      doc = this.document();
	      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
	      doc.xmldec = xmldec;
	      return doc.root();
	    };

	    XMLNode.prototype.doctype = function(pubID, sysID) {
	      var doc, doctype;
	      doc = this.document();
	      doctype = new XMLDocType(doc, pubID, sysID);
	      doc.doctype = doctype;
	      return doctype;
	    };

	    XMLNode.prototype.up = function() {
	      if (this.isRoot) {
	        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };

	    XMLNode.prototype.root = function() {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };

	    XMLNode.prototype.document = function() {
	      return this.root().documentObject;
	    };

	    XMLNode.prototype.end = function(options) {
	      return this.document().toString(options);
	    };

	    XMLNode.prototype.prev = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };

	    XMLNode.prototype.next = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };

	    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
	      var clonedRoot;
	      clonedRoot = xmlbuilder.root().clone();
	      clonedRoot.parent = this;
	      clonedRoot.isRoot = false;
	      this.children.push(clonedRoot);
	      return this;
	    };

	    XMLNode.prototype.ele = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.nod = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.txt = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.doc = function() {
	      return this.document();
	    };

	    XMLNode.prototype.dec = function(version, encoding, standalone) {
	      return this.declaration(version, encoding, standalone);
	    };

	    XMLNode.prototype.dtd = function(pubID, sysID) {
	      return this.doctype(pubID, sysID);
	    };

	    XMLNode.prototype.e = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.n = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.t = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.d = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.c = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.r = function(value) {
	      return this.raw(value);
	    };

	    XMLNode.prototype.u = function() {
	      return this.up();
	    };

	    return XMLNode;

	  })();

	}).call(this);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var baseIsFunction = __webpack_require__(103),
	    isNative = __webpack_require__(81);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/** Native method references. */
	var Uint8Array = isNative(Uint8Array = global.Uint8Array) && Uint8Array;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	var isFunction = !(baseIsFunction(/x/) || (Uint8Array && !baseIsFunction(Uint8Array))) ? baseIsFunction : function(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return objToString.call(value) == funcTag;
	};

	module.exports = isFunction;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isFunction` without support for environments
	 * with incorrect `typeof` results.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 */
	function baseIsFunction(value) {
	  // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	  // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	  return typeof value == 'function' || false;
	}

	module.exports = baseIsFunction;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(87),
	    isArray = __webpack_require__(88),
	    isFunction = __webpack_require__(102),
	    isLength = __webpack_require__(80),
	    isObjectLike = __webpack_require__(84),
	    isString = __webpack_require__(105),
	    keys = __webpack_require__(79);

	/**
	 * Checks if `value` is empty. A value is considered empty unless it is an
	 * `arguments` object, array, string, or jQuery-like collection with a length
	 * greater than `0` or an object with own enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {Array|Object|string} value The value to inspect.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  var length = value.length;
	  if (isLength(length) && (isArray(value) || isString(value) || isArguments(value) ||
	      (isObjectLike(value) && isFunction(value.splice)))) {
	    return !length;
	  }
	  return !keys(value).length;
	}

	module.exports = isEmpty;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag) || false;
	}

	module.exports = isString;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isArray, isFunction, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  isObject = __webpack_require__(85);

	  isArray = __webpack_require__(88);

	  isFunction = __webpack_require__(102);

	  every = __webpack_require__(107);

	  XMLNode = __webpack_require__(101);

	  XMLAttribute = __webpack_require__(129);

	  XMLProcessingInstruction = __webpack_require__(130);

	  module.exports = XMLElement = (function(superClass) {
	    extend(XMLElement, superClass);

	    function XMLElement(parent, name, attributes) {
	      XMLElement.__super__.constructor.call(this, parent);
	      if (name == null) {
	        throw new Error("Missing element name");
	      }
	      this.name = this.stringify.eleName(name);
	      this.children = [];
	      this.instructions = [];
	      this.attributes = {};
	      if (attributes != null) {
	        this.attribute(attributes);
	      }
	    }

	    XMLElement.prototype.clone = function() {
	      var att, attName, clonedSelf, i, len, pi, ref, ref1;
	      clonedSelf = create(XMLElement.prototype, this);
	      if (clonedSelf.isRoot) {
	        clonedSelf.documentObject = null;
	      }
	      clonedSelf.attributes = {};
	      ref = this.attributes;
	      for (attName in ref) {
	        if (!hasProp.call(ref, attName)) continue;
	        att = ref[attName];
	        clonedSelf.attributes[attName] = att.clone();
	      }
	      clonedSelf.instructions = [];
	      ref1 = this.instructions;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        pi = ref1[i];
	        clonedSelf.instructions.push(pi.clone());
	      }
	      clonedSelf.children = [];
	      this.children.forEach(function(child) {
	        var clonedChild;
	        clonedChild = child.clone();
	        clonedChild.parent = clonedSelf;
	        return clonedSelf.children.push(clonedChild);
	      });
	      return clonedSelf;
	    };

	    XMLElement.prototype.attribute = function(name, value) {
	      var attName, attValue;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isObject(name)) {
	        for (attName in name) {
	          if (!hasProp.call(name, attName)) continue;
	          attValue = name[attName];
	          this.attribute(attName, attValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        if (!this.options.skipNullAttributes || (value != null)) {
	          this.attributes[name] = new XMLAttribute(this, name, value);
	        }
	      }
	      return this;
	    };

	    XMLElement.prototype.removeAttribute = function(name) {
	      var attName, i, len;
	      if (name == null) {
	        throw new Error("Missing attribute name");
	      }
	      name = name.valueOf();
	      if (isArray(name)) {
	        for (i = 0, len = name.length; i < len; i++) {
	          attName = name[i];
	          delete this.attributes[attName];
	        }
	      } else {
	        delete this.attributes[name];
	      }
	      return this;
	    };

	    XMLElement.prototype.instruction = function(target, value) {
	      var i, insTarget, insValue, instruction, len;
	      if (target != null) {
	        target = target.valueOf();
	      }
	      if (value != null) {
	        value = value.valueOf();
	      }
	      if (isArray(target)) {
	        for (i = 0, len = target.length; i < len; i++) {
	          insTarget = target[i];
	          this.instruction(insTarget);
	        }
	      } else if (isObject(target)) {
	        for (insTarget in target) {
	          if (!hasProp.call(target, insTarget)) continue;
	          insValue = target[insTarget];
	          this.instruction(insTarget, insValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        instruction = new XMLProcessingInstruction(this, target, value);
	        this.instructions.push(instruction);
	      }
	      return this;
	    };

	    XMLElement.prototype.toString = function(options, level) {
	      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      ref3 = this.instructions;
	      for (i = 0, len = ref3.length; i < len; i++) {
	        instruction = ref3[i];
	        r += instruction.toString(options, level + 1);
	      }
	      if (pretty) {
	        r += space;
	      }
	      r += '<' + this.name;
	      ref4 = this.attributes;
	      for (name in ref4) {
	        if (!hasProp.call(ref4, name)) continue;
	        att = ref4[name];
	        r += att.toString(options);
	      }
	      if (this.children.length === 0 || every(this.children, function(e) {
	        return e.value === '';
	      })) {
	        r += '/>';
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        ref5 = this.children;
	        for (j = 0, len1 = ref5.length; j < len1; j++) {
	          child = ref5[j];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };

	    XMLElement.prototype.att = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLElement.prototype.a = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.i = function(target, value) {
	      return this.instruction(target, value);
	    };

	    return XMLElement;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEvery = __webpack_require__(108),
	    baseCallback = __webpack_require__(109),
	    baseEvery = __webpack_require__(124),
	    isArray = __webpack_require__(88);

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * The predicate is bound to `thisArg` and invoked with three arguments;
	 * (value, index|key, collection).
	 *
	 * If a property name is provided for `predicate` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `predicate` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias all
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'active': false },
	 *   { 'user': 'fred',   'active': false }
	 * ];
	 *
	 * // using the `_.matches` callback shorthand
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.every(users, 'active', false);
	 * // => true
	 *
	 * // using the `_.property` callback shorthand
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, thisArg) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (typeof predicate != 'function' || typeof thisArg != 'undefined') {
	    predicate = baseCallback(predicate, thisArg, 3);
	  }
	  return func(collection, predicate);
	}

	module.exports = every;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.every` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = arrayEvery;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(110),
	    baseMatchesProperty = __webpack_require__(119),
	    baseProperty = __webpack_require__(120),
	    bindCallback = __webpack_require__(93),
	    identity = __webpack_require__(94),
	    isBindable = __webpack_require__(121);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return (typeof thisArg != 'undefined' && isBindable(func))
	      ? bindCallback(func, thisArg, argCount)
	      : func;
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return typeof thisArg == 'undefined'
	    ? baseProperty(func + '')
	    : baseMatchesProperty(func + '', thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(111),
	    isStrictComparable = __webpack_require__(118),
	    keys = __webpack_require__(79);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var props = keys(source),
	      length = props.length;

	  if (length == 1) {
	    var key = props[0],
	        value = source[key];

	    if (isStrictComparable(value)) {
	      return function(object) {
	        return object != null && object[key] === value && hasOwnProperty.call(object, key);
	      };
	    }
	  }
	  var values = Array(length),
	      strictCompareFlags = Array(length);

	  while (length--) {
	    value = source[props[length]];
	    values[length] = value;
	    strictCompareFlags[length] = isStrictComparable(value);
	  }
	  return function(object) {
	    return baseIsMatch(object, props, values, strictCompareFlags);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(112);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} props The source property names to match.
	 * @param {Array} values The source values to match.
	 * @param {Array} strictCompareFlags Strict comparison flags for source values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, props, values, strictCompareFlags, customizer) {
	  var length = props.length;
	  if (object == null) {
	    return !length;
	  }
	  var index = -1,
	      noCustomizer = !customizer;

	  while (++index < length) {
	    if ((noCustomizer && strictCompareFlags[index])
	          ? values[index] !== object[props[index]]
	          : !hasOwnProperty.call(object, props[index])
	        ) {
	      return false;
	    }
	  }
	  index = -1;
	  while (++index < length) {
	    var key = props[index];
	    if (noCustomizer && strictCompareFlags[index]) {
	      var result = hasOwnProperty.call(object, key);
	    } else {
	      var objValue = object[key],
	          srcValue = values[index];

	      result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (typeof result == 'undefined') {
	        result = baseIsEqual(srcValue, objValue, customizer, true);
	      }
	    }
	    if (!result) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(113);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isWhere] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isWhere, stackA, stackB) {
	  // Exit early for identical values.
	  if (value === other) {
	    // Treat `+0` vs. `-0` as not equal.
	    return value !== 0 || (1 / value == 1 / other);
	  }
	  var valType = typeof value,
	      othType = typeof other;

	  // Exit early for unlike primitive values.
	  if ((valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object') ||
	      value == null || other == null) {
	    // Return `false` unless both values are `NaN`.
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isWhere, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(114),
	    equalByTag = __webpack_require__(115),
	    equalObjects = __webpack_require__(116),
	    isArray = __webpack_require__(88),
	    isTypedArray = __webpack_require__(117);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isWhere] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  var valWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	      othWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	  if (valWrapped || othWrapped) {
	    return equalFunc(valWrapped ? object.value() : object, othWrapped ? other.value() : other, customizer, isWhere, stackA, stackB);
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isWhere, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isWhere] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isWhere, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length,
	      result = true;

	  if (arrLength != othLength && !(isWhere && othLength > arrLength)) {
	    return false;
	  }
	  // Deep compare the contents, ignoring non-numeric properties.
	  while (result && ++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    result = undefined;
	    if (customizer) {
	      result = isWhere
	        ? customizer(othValue, arrValue, index)
	        : customizer(arrValue, othValue, index);
	    }
	    if (typeof result == 'undefined') {
	      // Recursively compare arrays (susceptible to call stack limits).
	      if (isWhere) {
	        var othIndex = othLength;
	        while (othIndex--) {
	          othValue = other[othIndex];
	          result = (arrValue && arrValue === othValue) || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
	          if (result) {
	            break;
	          }
	        }
	      } else {
	        result = (arrValue && arrValue === othValue) || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
	      }
	    }
	  }
	  return !!result;
	}

	module.exports = equalArrays;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} value The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        // But, treat `-0` vs. `+0` as not equal.
	        : (object == 0 ? ((1 / object) == (1 / other)) : object == +other);

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(79);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isWhere] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isWhere) {
	    return false;
	  }
	  var hasCtor,
	      index = -1;

	  while (++index < objLength) {
	    var key = objProps[index],
	        result = hasOwnProperty.call(other, key);

	    if (result) {
	      var objValue = object[key],
	          othValue = other[key];

	      result = undefined;
	      if (customizer) {
	        result = isWhere
	          ? customizer(othValue, objValue, key)
	          : customizer(objValue, othValue, key);
	      }
	      if (typeof result == 'undefined') {
	        // Recursively compare objects (susceptible to call stack limits).
	        result = (objValue && objValue === othValue) || equalFunc(objValue, othValue, customizer, isWhere, stackA, stackB);
	      }
	    }
	    if (!result) {
	      return false;
	    }
	    hasCtor || (hasCtor = key == 'constructor');
	  }
	  if (!hasCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(80),
	    isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the `toStringTag` of values.
	 * See the [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * for more details.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return (isObjectLike(value) && isLength(value.length) && typedArrayTags[objToString.call(value)]) || false;
	}

	module.exports = isTypedArray;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(85);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && (value === 0 ? ((1 / value) > 0) : !isObject(value));
	}

	module.exports = isStrictComparable;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(112),
	    isStrictComparable = __webpack_require__(118);

	/**
	 * The base implementation of `_.matchesProperty` which does not coerce `key`
	 * to a string.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} value The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(key, value) {
	  if (isStrictComparable(value)) {
	    return function(object) {
	      return object != null && object[key] === value;
	    };
	  }
	  return function(object) {
	    return object != null && baseIsEqual(value, object[key], null, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` which does not coerce `key` to a string.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(122),
	    isNative = __webpack_require__(81),
	    support = __webpack_require__(91);

	/** Used to detect named functions. */
	var reFuncName = /^\s*function[ \n\r\t]+\w/;

	/** Used to detect functions containing a `this` reference. */
	var reThis = /\bthis\b/;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/**
	 * Checks if `func` is eligible for `this` binding.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is eligible, else `false`.
	 */
	function isBindable(func) {
	  var result = !(support.funcNames ? func.name : support.funcDecomp);

	  if (!result) {
	    var source = fnToString.call(func);
	    if (!support.funcNames) {
	      result = !reFuncName.test(source);
	    }
	    if (!result) {
	      // Check if `func` references the `this` keyword and store the result.
	      result = reThis.test(source) || isNative(func);
	      baseSetData(func, result);
	    }
	  }
	  return result;
	}

	module.exports = isBindable;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(94),
	    metaMap = __webpack_require__(123);

	/**
	 * The base implementation of `setData` without support for hot loop detection.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var isNative = __webpack_require__(81);

	/** Native method references. */
	var WeakMap = isNative(WeakMap = global.WeakMap) && WeakMap;

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(125);

	/**
	 * The base implementation of `_.every` without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	module.exports = baseEvery;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(126),
	    isLength = __webpack_require__(80),
	    toObject = __webpack_require__(128);

	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	function baseEach(collection, iteratee) {
	  var length = collection ? collection.length : 0;
	  if (!isLength(length)) {
	    return baseForOwn(collection, iteratee);
	  }
	  var index = -1,
	      iterable = toObject(collection);

	  while (++index < length) {
	    if (iteratee(iterable[index], index, iterable) === false) {
	      break;
	    }
	  }
	  return collection;
	}

	module.exports = baseEach;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(127),
	    keys = __webpack_require__(79);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(128);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iterator functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	function baseFor(object, iteratee, keysFunc) {
	  var index = -1,
	      iterable = toObject(object),
	      props = keysFunc(object),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    if (iteratee(iterable[key], key, iterable) === false) {
	      break;
	    }
	  }
	  return object;
	}

	module.exports = baseFor;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(85);

	/**
	 * Converts `value` to an object if it is not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, create;

	  create = __webpack_require__(99);

	  module.exports = XMLAttribute = (function() {
	    function XMLAttribute(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing attribute name of element " + parent.name);
	      }
	      if (value == null) {
	        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
	      }
	      this.name = this.stringify.attName(name);
	      this.value = this.stringify.attValue(value);
	    }

	    XMLAttribute.prototype.clone = function() {
	      return create(XMLAttribute.prototype, this);
	    };

	    XMLAttribute.prototype.toString = function(options, level) {
	      return ' ' + this.name + '="' + this.value + '"';
	    };

	    return XMLAttribute;

	  })();

	}).call(this);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLProcessingInstruction, create;

	  create = __webpack_require__(99);

	  module.exports = XMLProcessingInstruction = (function() {
	    function XMLProcessingInstruction(parent, target, value) {
	      this.stringify = parent.stringify;
	      if (target == null) {
	        throw new Error("Missing instruction target");
	      }
	      this.target = this.stringify.insTarget(target);
	      if (value) {
	        this.value = this.stringify.insValue(value);
	      }
	    }

	    XMLProcessingInstruction.prototype.clone = function() {
	      return create(XMLProcessingInstruction.prototype, this);
	    };

	    XMLProcessingInstruction.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?';
	      r += this.target;
	      if (this.value) {
	        r += ' ' + this.value;
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLProcessingInstruction;

	  })();

	}).call(this);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  XMLNode = __webpack_require__(101);

	  module.exports = XMLCData = (function(superClass) {
	    extend(XMLCData, superClass);

	    function XMLCData(parent, text) {
	      XMLCData.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing CDATA text");
	      }
	      this.text = this.stringify.cdata(text);
	    }

	    XMLCData.prototype.clone = function() {
	      return create(XMLCData.prototype, this);
	    };

	    XMLCData.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<![CDATA[' + this.text + ']]>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLCData;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLComment, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  XMLNode = __webpack_require__(101);

	  module.exports = XMLComment = (function(superClass) {
	    extend(XMLComment, superClass);

	    function XMLComment(parent, text) {
	      XMLComment.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing comment text");
	      }
	      this.text = this.stringify.comment(text);
	    }

	    XMLComment.prototype.clone = function() {
	      return create(XMLComment.prototype, this);
	    };

	    XMLComment.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!-- ' + this.text + ' -->';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLComment;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

	  create = __webpack_require__(99);

	  isObject = __webpack_require__(85);

	  XMLCData = __webpack_require__(131);

	  XMLComment = __webpack_require__(132);

	  XMLDTDAttList = __webpack_require__(134);

	  XMLDTDEntity = __webpack_require__(135);

	  XMLDTDElement = __webpack_require__(136);

	  XMLDTDNotation = __webpack_require__(137);

	  XMLProcessingInstruction = __webpack_require__(130);

	  module.exports = XMLDocType = (function() {
	    function XMLDocType(parent, pubID, sysID) {
	      var ref, ref1;
	      this.documentObject = parent;
	      this.stringify = this.documentObject.stringify;
	      this.children = [];
	      if (isObject(pubID)) {
	        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
	      }
	      if (sysID == null) {
	        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
	      }
	      if (pubID != null) {
	        this.pubID = this.stringify.dtdPubID(pubID);
	      }
	      if (sysID != null) {
	        this.sysID = this.stringify.dtdSysID(sysID);
	      }
	    }

	    XMLDocType.prototype.clone = function() {
	      return create(XMLDocType.prototype, this);
	    };

	    XMLDocType.prototype.element = function(name, value) {
	      var child;
	      child = new XMLDTDElement(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      var child;
	      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.entity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, false, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.pEntity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, true, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.notation = function(name, value) {
	      var child;
	      child = new XMLDTDNotation(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.instruction = function(target, value) {
	      var child;
	      child = new XMLProcessingInstruction(this, target, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.root = function() {
	      return this.documentObject.root();
	    };

	    XMLDocType.prototype.document = function() {
	      return this.documentObject;
	    };

	    XMLDocType.prototype.toString = function(options, level) {
	      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!DOCTYPE ' + this.root().name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      if (this.children.length > 0) {
	        r += ' [';
	        if (pretty) {
	          r += newline;
	        }
	        ref3 = this.children;
	        for (i = 0, len = ref3.length; i < len; i++) {
	          child = ref3[i];
	          r += child.toString(options, level + 1);
	        }
	        r += ']';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    XMLDocType.prototype.ele = function(name, value) {
	      return this.element(name, value);
	    };

	    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
	    };

	    XMLDocType.prototype.ent = function(name, value) {
	      return this.entity(name, value);
	    };

	    XMLDocType.prototype.pent = function(name, value) {
	      return this.pEntity(name, value);
	    };

	    XMLDocType.prototype.not = function(name, value) {
	      return this.notation(name, value);
	    };

	    XMLDocType.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLDocType.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLDocType.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLDocType.prototype.up = function() {
	      return this.root();
	    };

	    XMLDocType.prototype.doc = function() {
	      return this.document();
	    };

	    return XMLDocType;

	  })();

	}).call(this);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDAttList, create;

	  create = __webpack_require__(99);

	  module.exports = XMLDTDAttList = (function() {
	    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      this.stringify = parent.stringify;
	      if (elementName == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (attributeName == null) {
	        throw new Error("Missing DTD attribute name");
	      }
	      if (!attributeType) {
	        throw new Error("Missing DTD attribute type");
	      }
	      if (!defaultValueType) {
	        throw new Error("Missing DTD attribute default");
	      }
	      if (defaultValueType.indexOf('#') !== 0) {
	        defaultValueType = '#' + defaultValueType;
	      }
	      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
	        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
	      }
	      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
	        throw new Error("Default value only applies to #FIXED or #DEFAULT");
	      }
	      this.elementName = this.stringify.eleName(elementName);
	      this.attributeName = this.stringify.attName(attributeName);
	      this.attributeType = this.stringify.dtdAttType(attributeType);
	      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
	      this.defaultValueType = defaultValueType;
	    }

	    XMLDTDAttList.prototype.clone = function() {
	      return create(XMLDTDAttList.prototype, this);
	    };

	    XMLDTDAttList.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
	      if (this.defaultValueType !== '#DEFAULT') {
	        r += ' ' + this.defaultValueType;
	      }
	      if (this.defaultValue) {
	        r += ' "' + this.defaultValue + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDAttList;

	  })();

	}).call(this);


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDEntity, create, isObject;

	  create = __webpack_require__(99);

	  isObject = __webpack_require__(85);

	  module.exports = XMLDTDEntity = (function() {
	    function XMLDTDEntity(parent, pe, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing entity name");
	      }
	      if (value == null) {
	        throw new Error("Missing entity value");
	      }
	      this.pe = !!pe;
	      this.name = this.stringify.eleName(name);
	      if (!isObject(value)) {
	        this.value = this.stringify.dtdEntityValue(value);
	      } else {
	        if (!value.pubID && !value.sysID) {
	          throw new Error("Public and/or system identifiers are required for an external entity");
	        }
	        if (value.pubID && !value.sysID) {
	          throw new Error("System identifier is required for a public external entity");
	        }
	        if (value.pubID != null) {
	          this.pubID = this.stringify.dtdPubID(value.pubID);
	        }
	        if (value.sysID != null) {
	          this.sysID = this.stringify.dtdSysID(value.sysID);
	        }
	        if (value.nData != null) {
	          this.nData = this.stringify.dtdNData(value.nData);
	        }
	        if (this.pe && this.nData) {
	          throw new Error("Notation declaration is not allowed in a parameter entity");
	        }
	      }
	    }

	    XMLDTDEntity.prototype.clone = function() {
	      return create(XMLDTDEntity.prototype, this);
	    };

	    XMLDTDEntity.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ENTITY';
	      if (this.pe) {
	        r += ' %';
	      }
	      r += ' ' + this.name;
	      if (this.value) {
	        r += ' "' + this.value + '"';
	      } else {
	        if (this.pubID && this.sysID) {
	          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	        } else if (this.sysID) {
	          r += ' SYSTEM "' + this.sysID + '"';
	        }
	        if (this.nData) {
	          r += ' NDATA ' + this.nData;
	        }
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDEntity;

	  })();

	}).call(this);


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDElement, create, isArray;

	  create = __webpack_require__(99);

	  isArray = __webpack_require__(88);

	  module.exports = XMLDTDElement = (function() {
	    function XMLDTDElement(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (!value) {
	        value = '(#PCDATA)';
	      }
	      if (isArray(value)) {
	        value = '(' + value.join(',') + ')';
	      }
	      this.name = this.stringify.eleName(name);
	      this.value = this.stringify.dtdElementValue(value);
	    }

	    XMLDTDElement.prototype.clone = function() {
	      return create(XMLDTDElement.prototype, this);
	    };

	    XMLDTDElement.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDElement;

	  })();

	}).call(this);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDNotation, create;

	  create = __webpack_require__(99);

	  module.exports = XMLDTDNotation = (function() {
	    function XMLDTDNotation(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing notation name");
	      }
	      if (!value.pubID && !value.sysID) {
	        throw new Error("Public or system identifiers are required for an external entity");
	      }
	      this.name = this.stringify.eleName(name);
	      if (value.pubID != null) {
	        this.pubID = this.stringify.dtdPubID(value.pubID);
	      }
	      if (value.sysID != null) {
	        this.sysID = this.stringify.dtdSysID(value.sysID);
	      }
	    }

	    XMLDTDNotation.prototype.clone = function() {
	      return create(XMLDTDNotation.prototype, this);
	    };

	    XMLDTDNotation.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!NOTATION ' + this.name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.pubID) {
	        r += ' PUBLIC "' + this.pubID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDNotation;

	  })();

	}).call(this);


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLRaw, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  XMLNode = __webpack_require__(101);

	  module.exports = XMLRaw = (function(superClass) {
	    extend(XMLRaw, superClass);

	    function XMLRaw(parent, text) {
	      XMLRaw.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing raw text");
	      }
	      this.value = this.stringify.raw(text);
	    }

	    XMLRaw.prototype.clone = function() {
	      return create(XMLRaw.prototype, this);
	    };

	    XMLRaw.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLRaw;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLText, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(99);

	  XMLNode = __webpack_require__(101);

	  module.exports = XMLText = (function(superClass) {
	    extend(XMLText, superClass);

	    function XMLText(parent, text) {
	      XMLText.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing element text");
	      }
	      this.value = this.stringify.eleText(text);
	    }

	    XMLText.prototype.clone = function() {
	      return create(XMLText.prototype, this);
	    };

	    XMLText.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLText;

	  })(XMLNode);

	}).call(this);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var Collection = __webpack_require__(70);
	var Operation = __webpack_require__(141);
	var Shape = __webpack_require__(69);
	var Paginator = __webpack_require__(142);
	var ResourceWaiter = __webpack_require__(143);

	var util = __webpack_require__(62);
	var property = util.property;
	var memoizedProperty = util.memoizedProperty;

	function Api(api, options) {
	  api = api || {};
	  options = options || {};
	  options.api = this;

	  api.metadata = api.metadata || {};

	  property(this, 'isApi', true, false);
	  property(this, 'apiVersion', api.metadata.apiVersion);
	  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
	  property(this, 'signingName', api.metadata.signingName);
	  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
	  property(this, 'signatureVersion', api.metadata.signatureVersion);
	  property(this, 'jsonVersion', api.metadata.jsonVersion);
	  property(this, 'targetPrefix', api.metadata.targetPrefix);
	  property(this, 'protocol', api.metadata.protocol);
	  property(this, 'timestampFormat', api.metadata.timestampFormat);
	  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
	  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
	  property(this, 'fullName', api.metadata.serviceFullName);

	  memoizedProperty(this, 'className', function() {
	    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
	    if (!name) return null;

	    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
	    if (name === 'ElasticLoadBalancing') name = 'ELB';
	    return name;
	  });

	  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
	    return new Operation(name, operation, options);
	  }, util.string.lowerFirst));

	  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
	    return Shape.create(shape, options);
	  }));

	  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
	    return new Paginator(name, paginator, options);
	  }));

	  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
	    return new ResourceWaiter(name, waiter, options);
	  }, util.string.lowerFirst));

	  if (options.documentation) {
	    property(this, 'documentation', api.documentation);
	    property(this, 'documentationUrl', api.documentationUrl);
	  }
	}

	module.exports = Api;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Shape = __webpack_require__(69);

	var util = __webpack_require__(62);
	var property = util.property;
	var memoizedProperty = util.memoizedProperty;

	function Operation(name, operation, options) {
	  var self = this;
	  options = options || {};

	  property(this, 'name', operation.name || name);
	  property(this, 'api', options.api, false);

	  operation.http = operation.http || {};
	  property(this, 'httpMethod', operation.http.method || 'POST');
	  property(this, 'httpPath', operation.http.requestUri || '/');
	  property(this, 'authtype', operation.authtype || '');

	  memoizedProperty(this, 'input', function() {
	    if (!operation.input) {
	      return new Shape.create({type: 'structure'}, options);
	    }
	    return Shape.create(operation.input, options);
	  });

	  memoizedProperty(this, 'output', function() {
	    if (!operation.output) {
	      return new Shape.create({type: 'structure'}, options);
	    }
	    return Shape.create(operation.output, options);
	  });

	  memoizedProperty(this, 'errors', function() {
	    var list = [];
	    if (!operation.errors) return null;

	    for (var i = 0; i < operation.errors.length; i++) {
	      list.push(Shape.create(operation.errors[i], options));
	    }

	    return list;
	  });

	  memoizedProperty(this, 'paginator', function() {
	    return options.api.paginators[name];
	  });

	  if (options.documentation) {
	    property(this, 'documentation', operation.documentation);
	    property(this, 'documentationUrl', operation.documentationUrl);
	  }

	  // idempotentMembers only tracks top-level input shapes
	  memoizedProperty(this, 'idempotentMembers', function() {
	    var idempotentMembers = [];
	    var input = self.input;
	    var members = input.members;
	    if (!input.members) {
	      return idempotentMembers;
	    }
	    for (var name in members) {
	      if (!members.hasOwnProperty(name)) {
	        continue;
	      }
	      if (members[name].isIdempotent === true) {
	        idempotentMembers.push(name);
	      }
	    }
	    return idempotentMembers;
	  });

	}

	module.exports = Operation;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var property = __webpack_require__(62).property;

	function Paginator(name, paginator) {
	  property(this, 'inputToken', paginator.input_token);
	  property(this, 'limitKey', paginator.limit_key);
	  property(this, 'moreResults', paginator.more_results);
	  property(this, 'outputToken', paginator.output_token);
	  property(this, 'resultKey', paginator.result_key);
	}

	module.exports = Paginator;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var property = util.property;

	function ResourceWaiter(name, waiter, options) {
	  options = options || {};
	  property(this, 'name', name);
	  property(this, 'api', options.api, false);

	  if (waiter.operation) {
	    property(this, 'operation', util.string.lowerFirst(waiter.operation));
	  }

	  var self = this;
	  var keys = [
	    'type',
	    'description',
	    'delay',
	    'maxAttempts',
	    'acceptors'
	  ];

	  keys.forEach(function(key) {
	    var value = waiter[key];
	    if (value) {
	      property(self, key, value);
	    }
	  });
	}

	module.exports = ResourceWaiter;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var Api = __webpack_require__(140);
	var regionConfig = __webpack_require__(145);
	var inherit = AWS.util.inherit;
	var clientCount = 0;

	/**
	 * The service class representing an AWS service.
	 *
	 * @abstract
	 *
	 * @!attribute apiVersions
	 *   @return [Array<String>] the list of API versions supported by this service.
	 *   @readonly
	 */
	AWS.Service = inherit({
	  /**
	   * Create a new service object with a configuration object
	   *
	   * @param config [map] a map of configuration options
	   */
	  constructor: function Service(config) {
	    if (!this.loadServiceClass) {
	      throw AWS.util.error(new Error(),
	        'Service must be constructed with `new\' operator');
	    }
	    var ServiceClass = this.loadServiceClass(config || {});
	    if (ServiceClass) {
	      var originalConfig = AWS.util.copy(config);
	      var svc = new ServiceClass(config);
	      Object.defineProperty(svc, '_originalConfig', {
	        get: function() { return originalConfig; },
	        enumerable: false,
	        configurable: true
	      });
	      svc._clientId = ++clientCount;
	      return svc;
	    }
	    this.initialize(config);
	  },

	  /**
	   * @api private
	   */
	  initialize: function initialize(config) {
	    var svcConfig = AWS.config[this.serviceIdentifier];

	    this.config = new AWS.Config(AWS.config);
	    if (svcConfig) this.config.update(svcConfig, true);
	    if (config) this.config.update(config, true);

	    this.validateService();
	    if (!this.config.endpoint) regionConfig(this);

	    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
	    this.setEndpoint(this.config.endpoint);
	  },

	  /**
	   * @api private
	   */
	  validateService: function validateService() {
	  },

	  /**
	   * @api private
	   */
	  loadServiceClass: function loadServiceClass(serviceConfig) {
	    var config = serviceConfig;
	    if (!AWS.util.isEmpty(this.api)) {
	      return null;
	    } else if (config.apiConfig) {
	      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
	    } else if (!this.constructor.services) {
	      return null;
	    } else {
	      config = new AWS.Config(AWS.config);
	      config.update(serviceConfig, true);
	      var version = config.apiVersions[this.constructor.serviceIdentifier];
	      version = version || config.apiVersion;
	      return this.getLatestServiceClass(version);
	    }
	  },

	  /**
	   * @api private
	   */
	  getLatestServiceClass: function getLatestServiceClass(version) {
	    version = this.getLatestServiceVersion(version);
	    if (this.constructor.services[version] === null) {
	      AWS.Service.defineServiceApi(this.constructor, version);
	    }

	    return this.constructor.services[version];
	  },

	  /**
	   * @api private
	   */
	  getLatestServiceVersion: function getLatestServiceVersion(version) {
	    if (!this.constructor.services || this.constructor.services.length === 0) {
	      throw new Error('No services defined on ' +
	                      this.constructor.serviceIdentifier);
	    }

	    if (!version) {
	      version = 'latest';
	    } else if (AWS.util.isType(version, Date)) {
	      version = AWS.util.date.iso8601(version).split('T')[0];
	    }

	    if (Object.hasOwnProperty(this.constructor.services, version)) {
	      return version;
	    }

	    var keys = Object.keys(this.constructor.services).sort();
	    var selectedVersion = null;
	    for (var i = keys.length - 1; i >= 0; i--) {
	      // versions that end in "*" are not available on disk and can be
	      // skipped, so do not choose these as selectedVersions
	      if (keys[i][keys[i].length - 1] !== '*') {
	        selectedVersion = keys[i];
	      }
	      if (keys[i].substr(0, 10) <= version) {
	        return selectedVersion;
	      }
	    }

	    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
	                    ' API to satisfy version constraint `' + version + '\'');
	  },

	  /**
	   * @api private
	   */
	  api: {},

	  /**
	   * @api private
	   */
	  defaultRetryCount: 3,

	  /**
	   * @api private
	   */
	  customizeRequests: function customizeRequests(callback) {
	    if (!callback) {
	      this.customRequestHandler = null;
	    } else if (typeof callback === 'function') {
	      this.customRequestHandler = callback;
	    } else {
	      throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
	    }
	  },

	  /**
	   * Calls an operation on a service with the given input parameters.
	   *
	   * @param operation [String] the name of the operation to call on the service.
	   * @param params [map] a map of input options for the operation
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  makeRequest: function makeRequest(operation, params, callback) {
	    if (typeof params === 'function') {
	      callback = params;
	      params = null;
	    }

	    params = params || {};
	    if (this.config.params) { // copy only toplevel bound params
	      var rules = this.api.operations[operation];
	      if (rules) {
	        params = AWS.util.copy(params);
	        AWS.util.each(this.config.params, function(key, value) {
	          if (rules.input.members[key]) {
	            if (params[key] === undefined || params[key] === null) {
	              params[key] = value;
	            }
	          }
	        });
	      }
	    }

	    var request = new AWS.Request(this, operation, params);
	    this.addAllRequestListeners(request);

	    if (callback) request.send(callback);
	    return request;
	  },

	  /**
	   * Calls an operation on a service with the given input parameters, without
	   * any authentication data. This method is useful for "public" API operations.
	   *
	   * @param operation [String] the name of the operation to call on the service.
	   * @param params [map] a map of input options for the operation
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
	    if (typeof params === 'function') {
	      callback = params;
	      params = {};
	    }

	    var request = this.makeRequest(operation, params).toUnauthenticated();
	    return callback ? request.send(callback) : request;
	  },

	  /**
	   * Waits for a given state
	   *
	   * @param state [String] the state on the service to wait for
	   * @param params [map] a map of parameters to pass with each request
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  waitFor: function waitFor(state, params, callback) {
	    var waiter = new AWS.ResourceWaiter(this, state);
	    return waiter.wait(params, callback);
	  },

	  /**
	   * @api private
	   */
	  addAllRequestListeners: function addAllRequestListeners(request) {
	    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
	                AWS.EventListeners.CorePost];
	    for (var i = 0; i < list.length; i++) {
	      if (list[i]) request.addListeners(list[i]);
	    }

	    // disable parameter validation
	    if (!this.config.paramValidation) {
	      request.removeListener('validate',
	        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
	    }

	    if (this.config.logger) { // add logging events
	      request.addListeners(AWS.EventListeners.Logger);
	    }

	    this.setupRequestListeners(request);
	    // call prototype's customRequestHandler
	    if (typeof this.constructor.prototype.customRequestHandler === 'function') {
	      this.constructor.prototype.customRequestHandler(request);
	    }
	    // call instance's customRequestHandler
	    if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
	      this.customRequestHandler(request);
	    }
	  },

	  /**
	   * Override this method to setup any custom request listeners for each
	   * new request to the service.
	   *
	   * @abstract
	   */
	  setupRequestListeners: function setupRequestListeners() {
	  },

	  /**
	   * Gets the signer class for a given request
	   * @api private
	   */
	  getSignerClass: function getSignerClass() {
	    var version;
	    if (this.config.signatureVersion) {
	      version = this.config.signatureVersion;
	    } else {
	      version = this.api.signatureVersion;
	    }
	    return AWS.Signers.RequestSigner.getVersion(version);
	  },

	  /**
	   * @api private
	   */
	  serviceInterface: function serviceInterface() {
	    switch (this.api.protocol) {
	      case 'ec2': return AWS.EventListeners.Query;
	      case 'query': return AWS.EventListeners.Query;
	      case 'json': return AWS.EventListeners.Json;
	      case 'rest-json': return AWS.EventListeners.RestJson;
	      case 'rest-xml': return AWS.EventListeners.RestXml;
	    }
	    if (this.api.protocol) {
	      throw new Error('Invalid service `protocol\' ' +
	        this.api.protocol + ' in API config');
	    }
	  },

	  /**
	   * @api private
	   */
	  successfulResponse: function successfulResponse(resp) {
	    return resp.httpResponse.statusCode < 300;
	  },

	  /**
	   * How many times a failed request should be retried before giving up.
	   * the defaultRetryCount can be overriden by service classes.
	   *
	   * @api private
	   */
	  numRetries: function numRetries() {
	    if (this.config.maxRetries !== undefined) {
	      return this.config.maxRetries;
	    } else {
	      return this.defaultRetryCount;
	    }
	  },

	  /**
	   * @api private
	   */
	  retryDelays: function retryDelays(retryCount) {
	    return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions);
	  },

	  /**
	   * @api private
	   */
	  retryableError: function retryableError(error) {
	    if (this.networkingError(error)) return true;
	    if (this.expiredCredentialsError(error)) return true;
	    if (this.throttledError(error)) return true;
	    if (error.statusCode >= 500) return true;
	    return false;
	  },

	  /**
	   * @api private
	   */
	  networkingError: function networkingError(error) {
	    return error.code === 'NetworkingError';
	  },

	  /**
	   * @api private
	   */
	  expiredCredentialsError: function expiredCredentialsError(error) {
	    // TODO : this only handles *one* of the expired credential codes
	    return (error.code === 'ExpiredTokenException');
	  },

	  /**
	   * @api private
	   */
	  clockSkewError: function clockSkewError(error) {
	    switch (error.code) {
	      case 'RequestTimeTooSkewed':
	      case 'RequestExpired':
	      case 'InvalidSignatureException':
	      case 'SignatureDoesNotMatch':
	      case 'AuthFailure':
	      case 'RequestInTheFuture':
	        return true;
	      default: return false;
	    }
	  },

	  /**
	   * @api private
	   */
	  throttledError: function throttledError(error) {
	    // this logic varies between services
	    switch (error.code) {
	      case 'ProvisionedThroughputExceededException':
	      case 'Throttling':
	      case 'ThrottlingException':
	      case 'RequestLimitExceeded':
	      case 'RequestThrottled':
	        return true;
	      default:
	        return false;
	    }
	  },

	  /**
	   * @api private
	   */
	  endpointFromTemplate: function endpointFromTemplate(endpoint) {
	    if (typeof endpoint !== 'string') return endpoint;

	    var e = endpoint;
	    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
	    e = e.replace(/\{region\}/g, this.config.region);
	    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
	    return e;
	  },

	  /**
	   * @api private
	   */
	  setEndpoint: function setEndpoint(endpoint) {
	    this.endpoint = new AWS.Endpoint(endpoint, this.config);
	  },

	  /**
	   * @api private
	   */
	  paginationConfig: function paginationConfig(operation, throwException) {
	    var paginator = this.api.operations[operation].paginator;
	    if (!paginator) {
	      if (throwException) {
	        var e = new Error();
	        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
	      }
	      return null;
	    }

	    return paginator;
	  }
	});

	AWS.util.update(AWS.Service, {

	  /**
	   * Adds one method for each operation described in the api configuration
	   *
	   * @api private
	   */
	  defineMethods: function defineMethods(svc) {
	    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
	      if (svc.prototype[method]) return;
	      var operation = svc.prototype.api.operations[method];
	      if (operation.authtype === 'none') {
	        svc.prototype[method] = function (params, callback) {
	          return this.makeUnauthenticatedRequest(method, params, callback);
	        };
	      } else {
	        svc.prototype[method] = function (params, callback) {
	          return this.makeRequest(method, params, callback);
	        };
	      }
	    });
	  },

	  /**
	   * Defines a new Service class using a service identifier and list of versions
	   * including an optional set of features (functions) to apply to the class
	   * prototype.
	   *
	   * @param serviceIdentifier [String] the identifier for the service
	   * @param versions [Array<String>] a list of versions that work with this
	   *   service
	   * @param features [Object] an object to attach to the prototype
	   * @return [Class<Service>] the service class defined by this function.
	   */
	  defineService: function defineService(serviceIdentifier, versions, features) {
	    AWS.Service._serviceMap[serviceIdentifier] = true;
	    if (!Array.isArray(versions)) {
	      features = versions;
	      versions = [];
	    }

	    var svc = inherit(AWS.Service, features || {});

	    if (typeof serviceIdentifier === 'string') {
	      AWS.Service.addVersions(svc, versions);

	      var identifier = svc.serviceIdentifier || serviceIdentifier;
	      svc.serviceIdentifier = identifier;
	    } else { // defineService called with an API
	      svc.prototype.api = serviceIdentifier;
	      AWS.Service.defineMethods(svc);
	    }

	    return svc;
	  },

	  /**
	   * @api private
	   */
	  addVersions: function addVersions(svc, versions) {
	    if (!Array.isArray(versions)) versions = [versions];

	    svc.services = svc.services || {};
	    for (var i = 0; i < versions.length; i++) {
	      if (svc.services[versions[i]] === undefined) {
	        svc.services[versions[i]] = null;
	      }
	    }

	    svc.apiVersions = Object.keys(svc.services).sort();
	  },

	  /**
	   * @api private
	   */
	  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
	    var svc = inherit(superclass, {
	      serviceIdentifier: superclass.serviceIdentifier
	    });

	    function setApi(api) {
	      if (api.isApi) {
	        svc.prototype.api = api;
	      } else {
	        svc.prototype.api = new Api(api);
	      }
	    }

	    if (typeof version === 'string') {
	      if (apiConfig) {
	        setApi(apiConfig);
	      } else {
	        try {
	          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
	        } catch (err) {
	          throw AWS.util.error(err, {
	            message: 'Could not find API configuration ' +
	              superclass.serviceIdentifier + '-' + version
	          });
	        }
	      }
	      if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
	        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
	      }
	      superclass.services[version] = svc;
	    } else {
	      setApi(version);
	    }

	    AWS.Service.defineMethods(svc);
	    return svc;
	  },

	  /**
	   * @api private
	   */
	  hasService: function(identifier) {
	    return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
	  },

	  /**
	   * @api private
	   */
	  _serviceMap: {}
	});

	module.exports = AWS.Service;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var regionConfig = __webpack_require__(146);

	function generateRegionPrefix(region) {
	  if (!region) return null;

	  var parts = region.split('-');
	  if (parts.length < 3) return null;
	  return parts.slice(0, parts.length - 2).join('-') + '-*';
	}

	function derivedKeys(service) {
	  var region = service.config.region;
	  var regionPrefix = generateRegionPrefix(region);
	  var endpointPrefix = service.api.endpointPrefix;

	  return [
	    [region, endpointPrefix],
	    [regionPrefix, endpointPrefix],
	    [region, '*'],
	    [regionPrefix, '*'],
	    ['*', endpointPrefix],
	    ['*', '*']
	  ].map(function(item) {
	    return item[0] && item[1] ? item.join('/') : null;
	  });
	}

	function applyConfig(service, config) {
	  util.each(config, function(key, value) {
	    if (key === 'globalEndpoint') return;
	    if (service.config[key] === undefined || service.config[key] === null) {
	      service.config[key] = value;
	    }
	  });
	}

	function configureEndpoint(service) {
	  var keys = derivedKeys(service);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!key) continue;

	    if (Object.prototype.hasOwnProperty.call(regionConfig.rules, key)) {
	      var config = regionConfig.rules[key];
	      if (typeof config === 'string') {
	        config = regionConfig.patterns[config];
	      }

	      // set dualstack endpoint
	      if (service.config.useDualstack && util.isDualstackAvailable(service)) {
	        config = util.copy(config);
	        config.endpoint = '{service}.dualstack.{region}.amazonaws.com';
	      }

	      // set global endpoint
	      service.isGlobalEndpoint = !!config.globalEndpoint;

	      // signature version
	      if (!config.signatureVersion) config.signatureVersion = 'v4';

	      // merge config
	      applyConfig(service, config);
	      return;
	    }
	  }
	}

	module.exports = configureEndpoint;


/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = {
		"rules": {
			"*/*": {
				"endpoint": "{service}.{region}.amazonaws.com"
			},
			"cn-*/*": {
				"endpoint": "{service}.{region}.amazonaws.com.cn"
			},
			"*/budgets": "globalSSL",
			"*/cloudfront": "globalSSL",
			"*/iam": "globalSSL",
			"*/sts": "globalSSL",
			"*/importexport": {
				"endpoint": "{service}.amazonaws.com",
				"signatureVersion": "v2",
				"globalEndpoint": true
			},
			"*/route53": {
				"endpoint": "https://{service}.amazonaws.com",
				"signatureVersion": "v3https",
				"globalEndpoint": true
			},
			"*/waf": "globalSSL",
			"us-gov-*/iam": "globalGovCloud",
			"us-gov-*/sts": {
				"endpoint": "{service}.{region}.amazonaws.com"
			},
			"us-gov-west-1/s3": "s3dash",
			"us-west-1/s3": "s3dash",
			"us-west-2/s3": "s3dash",
			"eu-west-1/s3": "s3dash",
			"ap-southeast-1/s3": "s3dash",
			"ap-southeast-2/s3": "s3dash",
			"ap-northeast-1/s3": "s3dash",
			"sa-east-1/s3": "s3dash",
			"us-east-1/s3": {
				"endpoint": "{service}.amazonaws.com",
				"signatureVersion": "s3"
			},
			"us-east-1/sdb": {
				"endpoint": "{service}.amazonaws.com",
				"signatureVersion": "v2"
			},
			"*/sdb": {
				"endpoint": "{service}.{region}.amazonaws.com",
				"signatureVersion": "v2"
			}
		},
		"patterns": {
			"globalSSL": {
				"endpoint": "https://{service}.amazonaws.com",
				"globalEndpoint": true
			},
			"globalGovCloud": {
				"endpoint": "{service}.us-gov.amazonaws.com"
			},
			"s3dash": {
				"endpoint": "{service}-{region}.amazonaws.com",
				"signatureVersion": "s3"
			}
		}
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	__webpack_require__(148);
	__webpack_require__(149);
	var PromisesDependency;

	/**
	 * The main configuration class used by all service objects to set
	 * the region, credentials, and other options for requests.
	 *
	 * By default, credentials and region settings are left unconfigured.
	 * This should be configured by the application before using any
	 * AWS service APIs.
	 *
	 * In order to set global configuration options, properties should
	 * be assigned to the global {AWS.config} object.
	 *
	 * @see AWS.config
	 *
	 * @!group General Configuration Options
	 *
	 * @!attribute credentials
	 *   @return [AWS.Credentials] the AWS credentials to sign requests with.
	 *
	 * @!attribute region
	 *   @example Set the global region setting to us-west-2
	 *     AWS.config.update({region: 'us-west-2'});
	 *   @return [AWS.Credentials] The region to send service requests to.
	 *   @see http://docs.amazonwebservices.com/general/latest/gr/rande.html
	 *     A list of available endpoints for each AWS service
	 *
	 * @!attribute maxRetries
	 *   @return [Integer] the maximum amount of retries to perform for a
	 *     service request. By default this value is calculated by the specific
	 *     service object that the request is being made to.
	 *
	 * @!attribute maxRedirects
	 *   @return [Integer] the maximum amount of redirects to follow for a
	 *     service request. Defaults to 10.
	 *
	 * @!attribute paramValidation
	 *   @return [Boolean|map] whether input parameters should be validated against
	 *     the operation description before sending the request. Defaults to true.
	 *     Pass a map to enable any of the following specific validation features:
	 *
	 *     * **min** [Boolean] &mdash; Validates that a value meets the min
	 *       constraint. This is enabled by default when paramValidation is set
	 *       to `true`.
	 *     * **max** [Boolean] &mdash; Validates that a value meets the max
	 *       constraint.
	 *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
	 *       regular expression.
	 *     * **enum** [Boolean] &mdash; Validates that a string value matches one
	 *       of the allowable enum values.
	 *
	 * @!attribute computeChecksums
	 *   @return [Boolean] whether to compute checksums for payload bodies when
	 *     the service accepts it (currently supported in S3 only).
	 *
	 * @!attribute convertResponseTypes
	 *   @return [Boolean] whether types are converted when parsing response data.
	 *     Currently only supported for JSON based services. Turning this off may
	 *     improve performance on large response payloads. Defaults to `true`.
	 *
	 * @!attribute correctClockSkew
	 *   @return [Boolean] whether to apply a clock skew correction and retry
	 *     requests that fail because of an skewed client clock. Defaults to
	 *     `false`.
	 *
	 * @!attribute sslEnabled
	 *   @return [Boolean] whether SSL is enabled for requests
	 *
	 * @!attribute s3ForcePathStyle
	 *   @return [Boolean] whether to force path style URLs for S3 objects
	 *
	 * @!attribute s3BucketEndpoint
	 *   @note Setting this configuration option requires an `endpoint` to be
	 *     provided explicitly to the service constructor.
	 *   @return [Boolean] whether the provided endpoint addresses an individual
	 *     bucket (false if it addresses the root API endpoint).
	 *
	 * @!attribute s3DisableBodySigning
	 *   @return [Boolean] whether to disable S3 body signing when using signature version `v4`.
	 *     Body signing can only be disabled when using https. Defaults to `true`.
	 *
	 * @!attribute useAccelerateEndpoint
	 *   @note This configuration option is only compatible with S3 while accessing
	 *     dns-compatible buckets.
	 *   @return [Boolean] Whether to use the Accelerate endpoint with the S3 service.
	 *     Defaults to `false`.
	 *
	 * @!attribute retryDelayOptions
	 *   @example Set the base retry delay for all services to 300 ms
	 *     AWS.config.update({retryDelayOptions: {base: 300}});
	 *     // Delays with maxRetries = 3: 300, 600, 1200
	 *   @example Set a custom backoff function to provide delay values on retries
	 *     AWS.config.update({retryDelayOptions: {customBackoff: function(retryCount) {
	 *       // returns delay in ms
	 *     }}});
	 *   @note This works with all services except DynamoDB.
	 *   @return [map] A set of options to configure the retry delay on retryable errors.
	 *     Currently supported options are:
	 *
	 *     * **base** [Integer] &mdash; The base number of milliseconds to use in the
	 *       exponential backoff for operation retries. Defaults to 100 ms.
	 *     * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
	 *       and returns the amount of time to delay in milliseconds. The `base` option will be
	 *       ignored if this option is supplied.
	 *
	 * @!attribute httpOptions
	 *   @return [map] A set of options to pass to the low-level HTTP request.
	 *     Currently supported options are:
	 *
	 *     * **proxy** [String] &mdash; the URL to proxy requests through
	 *     * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
	 *       HTTP requests with. Used for connection pooling. Defaults to the global
	 *       agent (`http.globalAgent`) for non-SSL connections. Note that for
	 *       SSL connections, a special Agent object is used in order to enable
	 *       peer certificate verification. This feature is only supported in the
	 *       Node.js environment.
	 *     * **timeout** [Integer] &mdash; The number of milliseconds to wait before
	 *       giving up on a connection attempt. Defaults to two minutes (120000).
	 *     * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
	 *       HTTP requests. Used in the browser environment only. Set to false to
	 *       send requests synchronously. Defaults to true (async on).
	 *     * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
	 *       property of an XMLHttpRequest object. Used in the browser environment
	 *       only. Defaults to false.
	 * @!attribute logger
	 *   @return [#write,#log] an object that responds to .write() (like a stream)
	 *     or .log() (like the console object) in order to log information about
	 *     requests
	 *
	 * @!attribute systemClockOffset
	 *   @return [Number] an offset value in milliseconds to apply to all signing
	 *     times. Use this to compensate for clock skew when your system may be
	 *     out of sync with the service time. Note that this configuration option
	 *     can only be applied to the global `AWS.config` object and cannot be
	 *     overridden in service-specific configuration. Defaults to 0 milliseconds.
	 *
	 * @!attribute signatureVersion
	 *   @return [String] the signature version to sign requests with (overriding
	 *     the API configuration). Possible values are: 'v2', 'v3', 'v4'.
	 *
	 * @!attribute signatureCache
	 *   @return [Boolean] whether the signature to sign requests with (overriding
	 *     the API configuration) is cached. Only applies to the signature version 'v4'.
	 *     Defaults to `true`.
	 */
	AWS.Config = AWS.util.inherit({
	  /**
	   * @!endgroup
	   */

	  /**
	   * Creates a new configuration object. This is the object that passes
	   * option data along to service requests, including credentials, security,
	   * region information, and some service specific settings.
	   *
	   * @example Creating a new configuration object with credentials and region
	   *   var config = new AWS.Config({
	   *     accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
	   *   });
	   * @option options accessKeyId [String] your AWS access key ID.
	   * @option options secretAccessKey [String] your AWS secret access key.
	   * @option options sessionToken [AWS.Credentials] the optional AWS
	   *   session token to sign requests with.
	   * @option options credentials [AWS.Credentials] the AWS credentials
	   *   to sign requests with. You can either specify this object, or
	   *   specify the accessKeyId and secretAccessKey options directly.
	   * @option options credentialProvider [AWS.CredentialProviderChain] the
	   *   provider chain used to resolve credentials if no static `credentials`
	   *   property is set.
	   * @option options region [String] the region to send service requests to.
	   *   See {region} for more information.
	   * @option options maxRetries [Integer] the maximum amount of retries to
	   *   attempt with a request. See {maxRetries} for more information.
	   * @option options maxRedirects [Integer] the maximum amount of redirects to
	   *   follow with a request. See {maxRedirects} for more information.
	   * @option options sslEnabled [Boolean] whether to enable SSL for
	   *   requests.
	   * @option options paramValidation [Boolean|map] whether input parameters
	   *   should be validated against the operation description before sending
	   *   the request. Defaults to true. Pass a map to enable any of the
	   *   following specific validation features:
	   *
	   *   * **min** [Boolean] &mdash; Validates that a value meets the min
	   *     constraint. This is enabled by default when paramValidation is set
	   *     to `true`.
	   *   * **max** [Boolean] &mdash; Validates that a value meets the max
	   *     constraint.
	   *   * **pattern** [Boolean] &mdash; Validates that a string value matches a
	   *     regular expression.
	   *   * **enum** [Boolean] &mdash; Validates that a string value matches one
	   *     of the allowable enum values.
	   * @option options computeChecksums [Boolean] whether to compute checksums
	   *   for payload bodies when the service accepts it (currently supported
	   *   in S3 only)
	   * @option options convertResponseTypes [Boolean] whether types are converted
	   *     when parsing response data. Currently only supported for JSON based
	   *     services. Turning this off may improve performance on large response
	   *     payloads. Defaults to `true`.
	   * @option options correctClockSkew [Boolean] whether to apply a clock skew
	   *     correction and retry requests that fail because of an skewed client
	   *     clock. Defaults to `false`.
	   * @option options s3ForcePathStyle [Boolean] whether to force path
	   *   style URLs for S3 objects.
	   * @option options s3BucketEndpoint [Boolean] whether the provided endpoint
	   *   addresses an individual bucket (false if it addresses the root API
	   *   endpoint). Note that setting this configuration option requires an
	   *   `endpoint` to be provided explicitly to the service constructor.
	   * @option options s3DisableBodySigning [Boolean] whether S3 body signing
	   *   should be disabled when using signature version `v4`. Body signing
	   *   can only be disabled when using https. Defaults to `true`.
	   *
	   * @option options retryDelayOptions [map] A set of options to configure
	   *   the retry delay on retryable errors. Currently supported options are:
	   *
	   *   * **base** [Integer] &mdash; The base number of milliseconds to use in the
	   *     exponential backoff for operation retries. Defaults to 100 ms.
	   *   * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
	   *     and returns the amount of time to delay in milliseconds. The `base` option will be
	   *     ignored if this option is supplied.
	   * @option options httpOptions [map] A set of options to pass to the low-level
	   *   HTTP request. Currently supported options are:
	   *
	   *   * **proxy** [String] &mdash; the URL to proxy requests through
	   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
	   *     HTTP requests with. Used for connection pooling. Defaults to the global
	   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
	   *     SSL connections, a special Agent object is used in order to enable
	   *     peer certificate verification. This feature is only available in the
	   *     Node.js environment.
	   *   * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
	   *     milliseconds of inactivity on the socket. Defaults to two minutes
	   *     (120000).
	   *   * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
	   *     HTTP requests. Used in the browser environment only. Set to false to
	   *     send requests synchronously. Defaults to true (async on).
	   *   * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
	   *     property of an XMLHttpRequest object. Used in the browser environment
	   *     only. Defaults to false.
	   * @option options apiVersion [String, Date] a String in YYYY-MM-DD format
	   *   (or a date) that represents the latest possible API version that can be
	   *   used in all services (unless overridden by `apiVersions`). Specify
	   *   'latest' to use the latest possible version.
	   * @option options apiVersions [map<String, String|Date>] a map of service
	   *   identifiers (the lowercase service class name) with the API version to
	   *   use when instantiating a service. Specify 'latest' for each individual
	   *   that can use the latest available version.
	   * @option options logger [#write,#log] an object that responds to .write()
	   *   (like a stream) or .log() (like the console object) in order to log
	   *   information about requests
	   * @option options systemClockOffset [Number] an offset value in milliseconds
	   *   to apply to all signing times. Use this to compensate for clock skew
	   *   when your system may be out of sync with the service time. Note that
	   *   this configuration option can only be applied to the global `AWS.config`
	   *   object and cannot be overridden in service-specific configuration.
	   *   Defaults to 0 milliseconds.
	   * @option options signatureVersion [String] the signature version to sign
	   *   requests with (overriding the API configuration). Possible values are:
	   *   'v2', 'v3', 'v4'.
	   * @option options signatureCache [Boolean] whether the signature to sign
	   *   requests with (overriding the API configuration) is cached. Only applies
	   *   to the signature version 'v4'. Defaults to `true`.
	   */
	  constructor: function Config(options) {
	    if (options === undefined) options = {};
	    options = this.extractCredentials(options);

	    AWS.util.each.call(this, this.keys, function (key, value) {
	      this.set(key, options[key], value);
	    });
	  },

	  /**
	   * @!group Managing Credentials
	   */

	  /**
	   * Loads credentials from the configuration object. This is used internally
	   * by the SDK to ensure that refreshable {Credentials} objects are properly
	   * refreshed and loaded when sending a request. If you want to ensure that
	   * your credentials are loaded prior to a request, you can use this method
	   * directly to provide accurate credential data stored in the object.
	   *
	   * @note If you configure the SDK with static or environment credentials,
	   *   the credential data should already be present in {credentials} attribute.
	   *   This method is primarily necessary to load credentials from asynchronous
	   *   sources, or sources that can refresh credentials periodically.
	   * @example Getting your access key
	   *   AWS.config.getCredentials(function(err) {
	   *     if (err) console.log(err.stack); // credentials not loaded
	   *     else console.log("Access Key:", AWS.config.credentials.accessKeyId);
	   *   })
	   * @callback callback function(err)
	   *   Called when the {credentials} have been properly set on the configuration
	   *   object.
	   *
	   *   @param err [Error] if this is set, credentials were not successfuly
	   *     loaded and this error provides information why.
	   * @see credentials
	   * @see Credentials
	   */
	  getCredentials: function getCredentials(callback) {
	    var self = this;

	    function finish(err) {
	      callback(err, err ? null : self.credentials);
	    }

	    function credError(msg, err) {
	      return new AWS.util.error(err || new Error(), {
	        code: 'CredentialsError', message: msg
	      });
	    }

	    function getAsyncCredentials() {
	      self.credentials.get(function(err) {
	        if (err) {
	          var msg = 'Could not load credentials from ' +
	            self.credentials.constructor.name;
	          err = credError(msg, err);
	        }
	        finish(err);
	      });
	    }

	    function getStaticCredentials() {
	      var err = null;
	      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
	        err = credError('Missing credentials');
	      }
	      finish(err);
	    }

	    if (self.credentials) {
	      if (typeof self.credentials.get === 'function') {
	        getAsyncCredentials();
	      } else { // static credentials
	        getStaticCredentials();
	      }
	    } else if (self.credentialProvider) {
	      self.credentialProvider.resolve(function(err, creds) {
	        if (err) {
	          err = credError('Could not load credentials from any providers', err);
	        }
	        self.credentials = creds;
	        finish(err);
	      });
	    } else {
	      finish(credError('No credentials to load'));
	    }
	  },

	  /**
	   * @!group Loading and Setting Configuration Options
	   */

	  /**
	   * @overload update(options, allowUnknownKeys = false)
	   *   Updates the current configuration object with new options.
	   *
	   *   @example Update maxRetries property of a configuration object
	   *     config.update({maxRetries: 10});
	   *   @param [Object] options a map of option keys and values.
	   *   @param [Boolean] allowUnknownKeys whether unknown keys can be set on
	   *     the configuration object. Defaults to `false`.
	   *   @see constructor
	   */
	  update: function update(options, allowUnknownKeys) {
	    allowUnknownKeys = allowUnknownKeys || false;
	    options = this.extractCredentials(options);
	    AWS.util.each.call(this, options, function (key, value) {
	      if (allowUnknownKeys || Object.prototype.hasOwnProperty.call(this.keys, key) ||
	          AWS.Service.hasService(key)) {
	        this.set(key, value);
	      }
	    });
	  },

	  /**
	   * Loads configuration data from a JSON file into this config object.
	   * @note Loading configuration will reset all existing configuration
	   *   on the object.
	   * @!macro nobrowser
	   * @param path [String] the path relative to your process's current
	   *    working directory to load configuration from.
	   * @return [AWS.Config] the same configuration object
	   */
	  loadFromPath: function loadFromPath(path) {
	    this.clear();

	    var options = JSON.parse(AWS.util.readFileSync(path));
	    var fileSystemCreds = new AWS.FileSystemCredentials(path);
	    var chain = new AWS.CredentialProviderChain();
	    chain.providers.unshift(fileSystemCreds);
	    chain.resolve(function (err, creds) {
	      if (err) throw err;
	      else options.credentials = creds;
	    });

	    this.constructor(options);

	    return this;
	  },

	  /**
	   * Clears configuration data on this object
	   *
	   * @api private
	   */
	  clear: function clear() {
	    /*jshint forin:false */
	    AWS.util.each.call(this, this.keys, function (key) {
	      delete this[key];
	    });

	    // reset credential provider
	    this.set('credentials', undefined);
	    this.set('credentialProvider', undefined);
	  },

	  /**
	   * Sets a property on the configuration object, allowing for a
	   * default value
	   * @api private
	   */
	  set: function set(property, value, defaultValue) {
	    if (value === undefined) {
	      if (defaultValue === undefined) {
	        defaultValue = this.keys[property];
	      }
	      if (typeof defaultValue === 'function') {
	        this[property] = defaultValue.call(this);
	      } else {
	        this[property] = defaultValue;
	      }
	    } else if (property === 'httpOptions' && this[property]) {
	      // deep merge httpOptions
	      this[property] = AWS.util.merge(this[property], value);
	    } else {
	      this[property] = value;
	    }
	  },

	  /**
	   * All of the keys with their default values.
	   *
	   * @constant
	   * @api private
	   */
	  keys: {
	    credentials: null,
	    credentialProvider: null,
	    region: null,
	    logger: null,
	    apiVersions: {},
	    apiVersion: null,
	    endpoint: undefined,
	    httpOptions: {
	      timeout: 120000
	    },
	    maxRetries: undefined,
	    maxRedirects: 10,
	    paramValidation: true,
	    sslEnabled: true,
	    s3ForcePathStyle: false,
	    s3BucketEndpoint: false,
	    s3DisableBodySigning: true,
	    computeChecksums: true,
	    convertResponseTypes: true,
	    correctClockSkew: false,
	    customUserAgent: null,
	    dynamoDbCrc32: true,
	    systemClockOffset: 0,
	    signatureVersion: null,
	    signatureCache: true,
	    retryDelayOptions: {
	      base: 100
	    },
	    useAccelerateEndpoint: false
	  },

	  /**
	   * Extracts accessKeyId, secretAccessKey and sessionToken
	   * from a configuration hash.
	   *
	   * @api private
	   */
	  extractCredentials: function extractCredentials(options) {
	    if (options.accessKeyId && options.secretAccessKey) {
	      options = AWS.util.copy(options);
	      options.credentials = new AWS.Credentials(options);
	    }
	    return options;
	  },

	  /**
	   * Sets the promise dependency the SDK will use wherever Promises are returned.
	   * @param [Constructor] dep A reference to a Promise constructor
	   */
	  setPromisesDependency: function setPromisesDependency(dep) {
	    PromisesDependency = dep;
	    var constructors = [AWS.Request, AWS.Credentials, AWS.CredentialProviderChain];
	    if (AWS.S3 && AWS.S3.ManagedUpload) constructors.push(AWS.S3.ManagedUpload);
	    AWS.util.addPromises(constructors, dep);
	  },

	  /**
	   * Gets the promise dependency set by `AWS.config.setPromisesDependency`.
	   */
	  getPromisesDependency: function getPromisesDependency() {
	    return PromisesDependency;
	  }
	});

	/**
	 * @return [AWS.Config] The global configuration object singleton instance
	 * @readonly
	 * @see AWS.Config
	 */
	AWS.config = new AWS.Config();


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	/**
	 * Represents your AWS security credentials, specifically the
	 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
	 * Creating a `Credentials` object allows you to pass around your
	 * security information to configuration and service objects.
	 *
	 * Note that this class typically does not need to be constructed manually,
	 * as the {AWS.Config} and {AWS.Service} classes both accept simple
	 * options hashes with the three keys. These structures will be converted
	 * into Credentials objects automatically.
	 *
	 * ## Expiring and Refreshing Credentials
	 *
	 * Occasionally credentials can expire in the middle of a long-running
	 * application. In this case, the SDK will automatically attempt to
	 * refresh the credentials from the storage location if the Credentials
	 * class implements the {refresh} method.
	 *
	 * If you are implementing a credential storage location, you
	 * will want to create a subclass of the `Credentials` class and
	 * override the {refresh} method. This method allows credentials to be
	 * retrieved from the backing store, be it a file system, database, or
	 * some network storage. The method should reset the credential attributes
	 * on the object.
	 *
	 * @!attribute expired
	 *   @return [Boolean] whether the credentials have been expired and
	 *     require a refresh. Used in conjunction with {expireTime}.
	 * @!attribute expireTime
	 *   @return [Date] a time when credentials should be considered expired. Used
	 *     in conjunction with {expired}.
	 * @!attribute accessKeyId
	 *   @return [String] the AWS access key ID
	 * @!attribute secretAccessKey
	 *   @return [String] the AWS secret access key
	 * @!attribute sessionToken
	 *   @return [String] an optional AWS session token
	 */
	AWS.Credentials = AWS.util.inherit({
	  /**
	   * A credentials object can be created using positional arguments or an options
	   * hash.
	   *
	   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
	   *   Creates a Credentials object with a given set of credential information
	   *   as positional arguments.
	   *   @param accessKeyId [String] the AWS access key ID
	   *   @param secretAccessKey [String] the AWS secret access key
	   *   @param sessionToken [String] the optional AWS session token
	   *   @example Create a credentials object with AWS credentials
	   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
	   * @overload AWS.Credentials(options)
	   *   Creates a Credentials object with a given set of credential information
	   *   as an options hash.
	   *   @option options accessKeyId [String] the AWS access key ID
	   *   @option options secretAccessKey [String] the AWS secret access key
	   *   @option options sessionToken [String] the optional AWS session token
	   *   @example Create a credentials object with AWS credentials
	   *     var creds = new AWS.Credentials({
	   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
	   *     });
	   */
	  constructor: function Credentials() {
	    // hide secretAccessKey from being displayed with util.inspect
	    AWS.util.hideProperties(this, ['secretAccessKey']);

	    this.expired = false;
	    this.expireTime = null;
	    if (arguments.length === 1 && typeof arguments[0] === 'object') {
	      var creds = arguments[0].credentials || arguments[0];
	      this.accessKeyId = creds.accessKeyId;
	      this.secretAccessKey = creds.secretAccessKey;
	      this.sessionToken = creds.sessionToken;
	    } else {
	      this.accessKeyId = arguments[0];
	      this.secretAccessKey = arguments[1];
	      this.sessionToken = arguments[2];
	    }
	  },

	  /**
	   * @return [Integer] the window size in seconds to attempt refreshing of
	   *   credentials before the expireTime occurs.
	   */
	  expiryWindow: 15,

	  /**
	   * @return [Boolean] whether the credentials object should call {refresh}
	   * @note Subclasses should override this method to provide custom refresh
	   *   logic.
	   */
	  needsRefresh: function needsRefresh() {
	    var currentTime = AWS.util.date.getDate().getTime();
	    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

	    if (this.expireTime && adjustedTime > this.expireTime) {
	      return true;
	    } else {
	      return this.expired || !this.accessKeyId || !this.secretAccessKey;
	    }
	  },

	  /**
	   * Gets the existing credentials, refreshing them if they are not yet loaded
	   * or have expired. Users should call this method before using {refresh},
	   * as this will not attempt to reload credentials when they are already
	   * loaded into the object.
	   *
	   * @callback callback function(err)
	   *   When this callback is called with no error, it means either credentials
	   *   do not need to be refreshed or refreshed credentials information has
	   *   been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
	   *   and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   */
	  get: function get(callback) {
	    var self = this;
	    if (this.needsRefresh()) {
	      this.refresh(function(err) {
	        if (!err) self.expired = false; // reset expired flag
	        if (callback) callback(err);
	      });
	    } else if (callback) {
	      callback();
	    }
	  },

	  /**
	   * @!method  getPromise()
	   *   Returns a 'thenable' promise.
	   *   Gets the existing credentials, refreshing them if they are not yet loaded
	   *   or have expired. Users should call this method before using {refresh},
	   *   as this will not attempt to reload credentials when they are already
	   *   loaded into the object.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function()
	   *     Called if the promise is fulfilled. When this callback is called, it
	   *     means either credentials do not need to be refreshed or refreshed
	   *     credentials information has been loaded into the object (as the
	   *     `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @callback rejectedCallback function(err)
	   *     Called if the promise is rejected.
	   *     @param err [Error] if an error occurred, this value will be filled
	   *   @return [Promise] A promise that represents the state of the `get` call.
	   *   @example Calling the `getPromise` method.
	   *     var promise = credProvider.getPromise();
	   *     promise.then(function() { ... }, function(err) { ... });
	   */

	  /**
	   * @!method  refreshPromise()
	   *   Returns a 'thenable' promise.
	   *   Refreshes the credentials. Users should call {get} before attempting
	   *   to forcibly refresh credentials.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function()
	   *     Called if the promise is fulfilled. When this callback is called, it
	   *     means refreshed credentials information has been loaded into the object
	   *     (as the `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @callback rejectedCallback function(err)
	   *     Called if the promise is rejected.
	   *     @param err [Error] if an error occurred, this value will be filled
	   *   @return [Promise] A promise that represents the state of the `refresh` call.
	   *   @example Calling the `refreshPromise` method.
	   *     var promise = credProvider.refreshPromise();
	   *     promise.then(function() { ... }, function(err) { ... });
	   */

	  /**
	   * Refreshes the credentials. Users should call {get} before attempting
	   * to forcibly refresh credentials.
	   *
	   * @callback callback function(err)
	   *   When this callback is called with no error, it means refreshed
	   *   credentials information has been loaded into the object (as the
	   *   `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @note Subclasses should override this class to reset the
	   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
	   *   on the credentials object and then call the callback with
	   *   any error information.
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    this.expired = false;
	    callback();
	  }
	});

	/**
	 * @api private
	 */
	AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
	  this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
	};

	/**
	 * @api private
	 */
	AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.getPromise;
	  delete this.prototype.refreshPromise;
	};

	AWS.util.addPromises(AWS.Credentials);


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	/**
	 * Creates a credential provider chain that searches for AWS credentials
	 * in a list of credential providers specified by the {providers} property.
	 *
	 * By default, the chain will use the {defaultProviders} to resolve credentials.
	 * These providers will look in the environment using the
	 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
	 *
	 * ## Setting Providers
	 *
	 * Each provider in the {providers} list should be a function that returns
	 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
	 * form allows for delayed execution of the credential construction.
	 *
	 * ## Resolving Credentials from a Chain
	 *
	 * Call {resolve} to return the first valid credential object that can be
	 * loaded by the provider chain.
	 *
	 * For example, to resolve a chain with a custom provider that checks a file
	 * on disk after the set of {defaultProviders}:
	 *
	 * ```javascript
	 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
	 * var chain = new AWS.CredentialProviderChain();
	 * chain.providers.push(diskProvider);
	 * chain.resolve();
	 * ```
	 *
	 * The above code will return the `diskProvider` object if the
	 * file contains credentials and the `defaultProviders` do not contain
	 * any credential settings.
	 *
	 * @!attribute providers
	 *   @return [Array<AWS.Credentials, Function>]
	 *     a list of credentials objects or functions that return credentials
	 *     objects. If the provider is a function, the function will be
	 *     executed lazily when the provider needs to be checked for valid
	 *     credentials. By default, this object will be set to the
	 *     {defaultProviders}.
	 *   @see defaultProviders
	 */
	AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {

	  /**
	   * Creates a new CredentialProviderChain with a default set of providers
	   * specified by {defaultProviders}.
	   */
	  constructor: function CredentialProviderChain(providers) {
	    if (providers) {
	      this.providers = providers;
	    } else {
	      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
	    }
	  },

	  /**
	   * @!method  resolvePromise()
	   *   Returns a 'thenable' promise.
	   *   Resolves the provider chain by searching for the first set of
	   *   credentials in {providers}.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function(credentials)
	   *     Called if the promise is fulfilled and the provider resolves the chain
	   *     to a credentials object
	   *     @param credentials [AWS.Credentials] the credentials object resolved
	   *       by the provider chain.
	   *   @callback rejectedCallback function(error)
	   *     Called if the promise is rejected.
	   *     @param err [Error] the error object returned if no credentials are found.
	   *   @return [Promise] A promise that represents the state of the `resolve` method call.
	   *   @example Calling the `resolvePromise` method.
	   *     var promise = chain.resolvePromise();
	   *     promise.then(function(credentials) { ... }, function(err) { ... });
	   */

	  /**
	   * Resolves the provider chain by searching for the first set of
	   * credentials in {providers}.
	   *
	   * @callback callback function(err, credentials)
	   *   Called when the provider resolves the chain to a credentials object
	   *   or null if no credentials can be found.
	   *
	   *   @param err [Error] the error object returned if no credentials are
	   *     found.
	   *   @param credentials [AWS.Credentials] the credentials object resolved
	   *     by the provider chain.
	   * @return [AWS.CredentialProviderChain] the provider, for chaining.
	   */
	  resolve: function resolve(callback) {
	    if (this.providers.length === 0) {
	      callback(new Error('No providers'));
	      return this;
	    }

	    var index = 0;
	    var providers = this.providers.slice(0);

	    function resolveNext(err, creds) {
	      if ((!err && creds) || index === providers.length) {
	        callback(err, creds);
	        return;
	      }

	      var provider = providers[index++];
	      if (typeof provider === 'function') {
	        creds = provider.call();
	      } else {
	        creds = provider;
	      }

	      if (creds.get) {
	        creds.get(function(getErr) {
	          resolveNext(getErr, getErr ? null : creds);
	        });
	      } else {
	        resolveNext(null, creds);
	      }
	    }

	    resolveNext();
	    return this;
	  }
	});

	/**
	 * The default set of providers used by a vanilla CredentialProviderChain.
	 *
	 * In the browser:
	 *
	 * ```javascript
	 * AWS.CredentialProviderChain.defaultProviders = []
	 * ```
	 *
	 * In Node.js:
	 *
	 * ```javascript
	 * AWS.CredentialProviderChain.defaultProviders = [
	 *   function () { return new AWS.EnvironmentCredentials('AWS'); },
	 *   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
	 *   function () { return new AWS.SharedIniFileCredentials(); },
	 *   function () {
	 *     // if AWS_CONTAINER_CREDENTIALS_RELATIVE_URI is set
	 *       return new AWS.ECSCredentials();
	 *     // else
	 *       return new AWS.EC2MetadataCredentials();
	 *   }
	 * ]
	 * ```
	 */
	AWS.CredentialProviderChain.defaultProviders = [];

	/**
	 * @api private
	 */
	AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
	};

	/**
	 * @api private
	 */
	AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.resolvePromise;
	};

	AWS.util.addPromises(AWS.CredentialProviderChain);


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var STS = __webpack_require__(151);

	/**
	 * Represents temporary credentials retrieved from {AWS.STS}. Without any
	 * extra parameters, credentials will be fetched from the
	 * {AWS.STS.getSessionToken} operation. If an IAM role is provided, the
	 * {AWS.STS.assumeRole} operation will be used to fetch credentials for the
	 * role instead.
	 *
	 * To setup temporary credentials, configure a set of master credentials
	 * using the standard credentials providers (environment, EC2 instance metadata,
	 * or from the filesystem), then set the global credentials to a new
	 * temporary credentials object:
	 *
	 * ```javascript
	 * // Note that environment credentials are loaded by default,
	 * // the following line is shown for clarity:
	 * AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
	 *
	 * // Now set temporary credentials seeded from the master credentials
	 * AWS.config.credentials = new AWS.TemporaryCredentials();
	 *
	 * // subsequent requests will now use temporary credentials from AWS STS.
	 * new AWS.S3().listBucket(function(err, data) { ... });
	 * ```
	 *
	 * @!attribute masterCredentials
	 *   @return [AWS.Credentials] the master (non-temporary) credentials used to
	 *     get and refresh temporary credentials from AWS STS.
	 * @note (see constructor)
	 */
	AWS.TemporaryCredentials = AWS.util.inherit(AWS.Credentials, {
	  /**
	   * Creates a new temporary credentials object.
	   *
	   * @note In order to create temporary credentials, you first need to have
	   *   "master" credentials configured in {AWS.Config.credentials}. These
	   *   master credentials are necessary to retrieve the temporary credentials,
	   *   as well as refresh the credentials when they expire.
	   * @param params [map] a map of options that are passed to the
	   *   {AWS.STS.assumeRole} or {AWS.STS.getSessionToken} operations.
	   *   If a `RoleArn` parameter is passed in, credentials will be based on the
	   *   IAM role.
	   * @example Creating a new credentials object for generic temporary credentials
	   *   AWS.config.credentials = new AWS.TemporaryCredentials();
	   * @example Creating a new credentials object for an IAM role
	   *   AWS.config.credentials = new AWS.TemporaryCredentials({
	   *     RoleArn: 'arn:aws:iam::1234567890:role/TemporaryCredentials',
	   *   });
	   * @see AWS.STS.assumeRole
	   * @see AWS.STS.getSessionToken
	   */
	  constructor: function TemporaryCredentials(params) {
	    AWS.Credentials.call(this);
	    this.loadMasterCredentials();
	    this.expired = true;

	    this.params = params || {};
	    if (this.params.RoleArn) {
	      this.params.RoleSessionName =
	        this.params.RoleSessionName || 'temporary-credentials';
	    }
	  },

	  /**
	   * Refreshes credentials using {AWS.STS.assumeRole} or
	   * {AWS.STS.getSessionToken}, depending on whether an IAM role ARN was passed
	   * to the credentials {constructor}.
	   *
	   * @callback callback function(err)
	   *   Called when the STS service responds (or fails). When
	   *   this callback is called with no error, it means that the credentials
	   *   information has been loaded into the object (as the `accessKeyId`,
	   *   `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    var self = this;
	    self.createClients();
	    if (!callback) callback = function(err) { if (err) throw err; };

	    self.service.config.credentials = self.masterCredentials;
	    var operation = self.params.RoleArn ?
	      self.service.assumeRole : self.service.getSessionToken;
	    operation.call(self.service, function (err, data) {
	      if (!err) {
	        self.service.credentialsFrom(data, self);
	      }
	      callback(err);
	    });
	  },

	  /**
	   * @api private
	   */
	  loadMasterCredentials: function loadMasterCredentials() {
	    this.masterCredentials = AWS.config.credentials;
	    while (this.masterCredentials.masterCredentials) {
	      this.masterCredentials = this.masterCredentials.masterCredentials;
	    }
	  },

	  /**
	   * @api private
	   */
	  createClients: function() {
	    this.service = this.service || new STS({params: this.params});
	  }

	});


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var AWS = __webpack_require__(63);
	var Service = __webpack_require__(144);
	var apiLoader = __webpack_require__(152);

	apiLoader.services['sts'] = {};
	AWS.STS = Service.defineService('sts', ['2011-06-15']);
	__webpack_require__(153);
	Object.defineProperty(apiLoader.services['sts'], '2011-06-15', {
	  get: function get() {
	    var model = __webpack_require__(154);
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.STS;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	AWS.apiLoader = function(svc, version) {
	  if (!AWS.apiLoader.services.hasOwnProperty(svc)) {
	    throw new Error('InvalidService: Failed to load api for ' + svc);
	  }
	  return AWS.apiLoader.services[svc][version];
	};

	AWS.apiLoader.services = {};

	module.exports = AWS.apiLoader;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	AWS.util.update(AWS.STS.prototype, {
	  /**
	   * @overload credentialsFrom(data, credentials = null)
	   *   Creates a credentials object from STS response data containing
	   *   credentials information. Useful for quickly setting AWS credentials.
	   *
	   *   @note This is a low-level utility function. If you want to load temporary
	   *     credentials into your process for subsequent requests to AWS resources,
	   *     you should use {AWS.TemporaryCredentials} instead.
	   *   @param data [map] data retrieved from a call to {getFederatedToken},
	   *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
	   *   @param credentials [AWS.Credentials] an optional credentials object to
	   *     fill instead of creating a new object. Useful when modifying an
	   *     existing credentials object from a refresh call.
	   *   @return [AWS.TemporaryCredentials] the set of temporary credentials
	   *     loaded from a raw STS operation response.
	   *   @example Using credentialsFrom to load global AWS credentials
	   *     var sts = new AWS.STS();
	   *     sts.getSessionToken(function (err, data) {
	   *       if (err) console.log("Error getting credentials");
	   *       else {
	   *         AWS.config.credentials = sts.credentialsFrom(data);
	   *       }
	   *     });
	   *   @see AWS.TemporaryCredentials
	   */
	  credentialsFrom: function credentialsFrom(data, credentials) {
	    if (!data) return null;
	    if (!credentials) credentials = new AWS.TemporaryCredentials();
	    credentials.expired = false;
	    credentials.accessKeyId = data.Credentials.AccessKeyId;
	    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
	    credentials.sessionToken = data.Credentials.SessionToken;
	    credentials.expireTime = data.Credentials.Expiration;
	    return credentials;
	  },

	  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
	    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
	  },

	  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
	    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
	  }
	});


/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = {
		"version": "2.0",
		"metadata": {
			"apiVersion": "2011-06-15",
			"endpointPrefix": "sts",
			"globalEndpoint": "sts.amazonaws.com",
			"protocol": "query",
			"serviceAbbreviation": "AWS STS",
			"serviceFullName": "AWS Security Token Service",
			"signatureVersion": "v4",
			"uid": "sts-2011-06-15",
			"xmlNamespace": "https://sts.amazonaws.com/doc/2011-06-15/"
		},
		"operations": {
			"AssumeRole": {
				"input": {
					"type": "structure",
					"required": [
						"RoleArn",
						"RoleSessionName"
					],
					"members": {
						"RoleArn": {},
						"RoleSessionName": {},
						"Policy": {},
						"DurationSeconds": {
							"type": "integer"
						},
						"ExternalId": {},
						"SerialNumber": {},
						"TokenCode": {}
					}
				},
				"output": {
					"resultWrapper": "AssumeRoleResult",
					"type": "structure",
					"members": {
						"Credentials": {
							"shape": "Sa"
						},
						"AssumedRoleUser": {
							"shape": "Sf"
						},
						"PackedPolicySize": {
							"type": "integer"
						}
					}
				}
			},
			"AssumeRoleWithSAML": {
				"input": {
					"type": "structure",
					"required": [
						"RoleArn",
						"PrincipalArn",
						"SAMLAssertion"
					],
					"members": {
						"RoleArn": {},
						"PrincipalArn": {},
						"SAMLAssertion": {},
						"Policy": {},
						"DurationSeconds": {
							"type": "integer"
						}
					}
				},
				"output": {
					"resultWrapper": "AssumeRoleWithSAMLResult",
					"type": "structure",
					"members": {
						"Credentials": {
							"shape": "Sa"
						},
						"AssumedRoleUser": {
							"shape": "Sf"
						},
						"PackedPolicySize": {
							"type": "integer"
						},
						"Subject": {},
						"SubjectType": {},
						"Issuer": {},
						"Audience": {},
						"NameQualifier": {}
					}
				}
			},
			"AssumeRoleWithWebIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"RoleArn",
						"RoleSessionName",
						"WebIdentityToken"
					],
					"members": {
						"RoleArn": {},
						"RoleSessionName": {},
						"WebIdentityToken": {},
						"ProviderId": {},
						"Policy": {},
						"DurationSeconds": {
							"type": "integer"
						}
					}
				},
				"output": {
					"resultWrapper": "AssumeRoleWithWebIdentityResult",
					"type": "structure",
					"members": {
						"Credentials": {
							"shape": "Sa"
						},
						"SubjectFromWebIdentityToken": {},
						"AssumedRoleUser": {
							"shape": "Sf"
						},
						"PackedPolicySize": {
							"type": "integer"
						},
						"Provider": {},
						"Audience": {}
					}
				}
			},
			"DecodeAuthorizationMessage": {
				"input": {
					"type": "structure",
					"required": [
						"EncodedMessage"
					],
					"members": {
						"EncodedMessage": {}
					}
				},
				"output": {
					"resultWrapper": "DecodeAuthorizationMessageResult",
					"type": "structure",
					"members": {
						"DecodedMessage": {}
					}
				}
			},
			"GetCallerIdentity": {
				"input": {
					"type": "structure",
					"members": {}
				},
				"output": {
					"resultWrapper": "GetCallerIdentityResult",
					"type": "structure",
					"members": {
						"UserId": {},
						"Account": {},
						"Arn": {}
					}
				}
			},
			"GetFederationToken": {
				"input": {
					"type": "structure",
					"required": [
						"Name"
					],
					"members": {
						"Name": {},
						"Policy": {},
						"DurationSeconds": {
							"type": "integer"
						}
					}
				},
				"output": {
					"resultWrapper": "GetFederationTokenResult",
					"type": "structure",
					"members": {
						"Credentials": {
							"shape": "Sa"
						},
						"FederatedUser": {
							"type": "structure",
							"required": [
								"FederatedUserId",
								"Arn"
							],
							"members": {
								"FederatedUserId": {},
								"Arn": {}
							}
						},
						"PackedPolicySize": {
							"type": "integer"
						}
					}
				}
			},
			"GetSessionToken": {
				"input": {
					"type": "structure",
					"members": {
						"DurationSeconds": {
							"type": "integer"
						},
						"SerialNumber": {},
						"TokenCode": {}
					}
				},
				"output": {
					"resultWrapper": "GetSessionTokenResult",
					"type": "structure",
					"members": {
						"Credentials": {
							"shape": "Sa"
						}
					}
				}
			}
		},
		"shapes": {
			"Sa": {
				"type": "structure",
				"required": [
					"AccessKeyId",
					"SecretAccessKey",
					"SessionToken",
					"Expiration"
				],
				"members": {
					"AccessKeyId": {},
					"SecretAccessKey": {},
					"SessionToken": {},
					"Expiration": {
						"type": "timestamp"
					}
				}
			},
			"Sf": {
				"type": "structure",
				"required": [
					"AssumedRoleId",
					"Arn"
				],
				"members": {
					"AssumedRoleId": {},
					"Arn": {}
				}
			}
		}
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var STS = __webpack_require__(151);

	/**
	 * Represents credentials retrieved from STS Web Identity Federation support.
	 *
	 * By default this provider gets credentials using the
	 * {AWS.STS.assumeRoleWithWebIdentity} service operation. This operation
	 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
	 * application for which credentials will be given. In addition, the
	 * `WebIdentityToken` must be set to the token provided by the identity
	 * provider. See {constructor} for an example on creating a credentials
	 * object with proper `RoleArn` and `WebIdentityToken` values.
	 *
	 * ## Refreshing Credentials from Identity Service
	 *
	 * In addition to AWS credentials expiring after a given amount of time, the
	 * login token from the identity provider will also expire. Once this token
	 * expires, it will not be usable to refresh AWS credentials, and another
	 * token will be needed. The SDK does not manage refreshing of the token value,
	 * but this can be done through a "refresh token" supported by most identity
	 * providers. Consult the documentation for the identity provider for refreshing
	 * tokens. Once the refreshed token is acquired, you should make sure to update
	 * this new token in the credentials object's {params} property. The following
	 * code will update the WebIdentityToken, assuming you have retrieved an updated
	 * token from the identity provider:
	 *
	 * ```javascript
	 * AWS.config.credentials.params.WebIdentityToken = updatedToken;
	 * ```
	 *
	 * Future calls to `credentials.refresh()` will now use the new token.
	 *
	 * @!attribute params
	 *   @return [map] the map of params passed to
	 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
	 *     `params.WebIdentityToken` property.
	 * @!attribute data
	 *   @return [map] the raw data response from the call to
	 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
	 *     access to other properties from the response.
	 */
	AWS.WebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
	  /**
	   * Creates a new credentials object.
	   * @param (see AWS.STS.assumeRoleWithWebIdentity)
	   * @example Creating a new credentials object
	   *   AWS.config.credentials = new AWS.WebIdentityCredentials({
	   *     RoleArn: 'arn:aws:iam::1234567890:role/WebIdentity',
	   *     WebIdentityToken: 'ABCDEFGHIJKLMNOP', // token from identity service
	   *     RoleSessionName: 'web' // optional name, defaults to web-identity
	   *   });
	   * @see AWS.STS.assumeRoleWithWebIdentity
	   */
	  constructor: function WebIdentityCredentials(params) {
	    AWS.Credentials.call(this);
	    this.expired = true;
	    this.params = params;
	    this.params.RoleSessionName = this.params.RoleSessionName || 'web-identity';
	    this.data = null;
	  },

	  /**
	   * Refreshes credentials using {AWS.STS.assumeRoleWithWebIdentity}
	   *
	   * @callback callback function(err)
	   *   Called when the STS service responds (or fails). When
	   *   this callback is called with no error, it means that the credentials
	   *   information has been loaded into the object (as the `accessKeyId`,
	   *   `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    var self = this;
	    self.createClients();
	    if (!callback) callback = function(err) { if (err) throw err; };

	    self.service.assumeRoleWithWebIdentity(function (err, data) {
	      self.data = null;
	      if (!err) {
	        self.data = data;
	        self.service.credentialsFrom(data, self);
	      }
	      callback(err);
	    });
	  },

	  /**
	   * @api private
	   */
	  createClients: function() {
	    this.service = this.service || new STS({params: this.params});
	  }

	});


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var CognitoIdentity = __webpack_require__(157);
	var STS = __webpack_require__(151);

	/**
	 * Represents credentials retrieved from STS Web Identity Federation using
	 * the Amazon Cognito Identity service.
	 *
	 * By default this provider gets credentials using the
	 * {AWS.CognitoIdentity.getCredentialsForIdentity} service operation, which
	 * requires either an `IdentityId` or an `IdentityPoolId` (Amazon Cognito
	 * Identity Pool ID), which is used to call {AWS.CognitoIdentity.getId} to
	 * obtain an `IdentityId`. If the identity or identity pool is not configured in
	 * the Amazon Cognito Console to use IAM roles with the appropriate permissions,
	 * then additionally a `RoleArn` is required containing the ARN of the IAM trust
	 * policy for the Amazon Cognito role that the user will log into. If a `RoleArn`
	 * is provided, then this provider gets credentials using the
	 * {AWS.STS.assumeRoleWithWebIdentity} service operation, after first getting an
	 * Open ID token from {AWS.CognitoIdentity.getOpenIdToken}.
	 *
	 * In addition, if this credential provider is used to provide authenticated
	 * login, the `Logins` map may be set to the tokens provided by the respective
	 * identity providers. See {constructor} for an example on creating a credentials
	 * object with proper property values.
	 *
	 * ## Refreshing Credentials from Identity Service
	 *
	 * In addition to AWS credentials expiring after a given amount of time, the
	 * login token from the identity provider will also expire. Once this token
	 * expires, it will not be usable to refresh AWS credentials, and another
	 * token will be needed. The SDK does not manage refreshing of the token value,
	 * but this can be done through a "refresh token" supported by most identity
	 * providers. Consult the documentation for the identity provider for refreshing
	 * tokens. Once the refreshed token is acquired, you should make sure to update
	 * this new token in the credentials object's {params} property. The following
	 * code will update the WebIdentityToken, assuming you have retrieved an updated
	 * token from the identity provider:
	 *
	 * ```javascript
	 * AWS.config.credentials.params.Logins['graph.facebook.com'] = updatedToken;
	 * ```
	 *
	 * Future calls to `credentials.refresh()` will now use the new token.
	 *
	 * @!attribute params
	 *   @return [map] the map of params passed to
	 *     {AWS.CognitoIdentity.getId},
	 *     {AWS.CognitoIdentity.getOpenIdToken}, and
	 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
	 *     `params.WebIdentityToken` property.
	 * @!attribute data
	 *   @return [map] the raw data response from the call to
	 *     {AWS.CognitoIdentity.getCredentialsForIdentity}, or
	 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
	 *     access to other properties from the response.
	 * @!attribute identityId
	 *   @return [String] the Cognito ID returned by the last call to
	 *     {AWS.CognitoIdentity.getOpenIdToken}. This ID represents the actual
	 *     final resolved identity ID from Amazon Cognito.
	 */
	AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
	  /**
	   * @api private
	   */
	  localStorageKey: {
	    id: 'aws.cognito.identity-id.',
	    providers: 'aws.cognito.identity-providers.'
	  },

	  /**
	   * Creates a new credentials object.
	   * @example Creating a new credentials object
	   *   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	   *
	   *     // either IdentityPoolId or IdentityId is required
	   *     // See the IdentityPoolId param for AWS.CognitoIdentity.getID (linked below)
	   *     // See the IdentityId param for AWS.CognitoIdentity.getCredentialsForIdentity
	   *     // or AWS.CognitoIdentity.getOpenIdToken (linked below)
	   *     IdentityPoolId: 'us-east-1:1699ebc0-7900-4099-b910-2df94f52a030',
	   *     IdentityId: 'us-east-1:128d0a74-c82f-4553-916d-90053e4a8b0f'
	   *
	   *     // optional, only necessary when the identity pool is not configured
	   *     // to use IAM roles in the Amazon Cognito Console
	   *     // See the RoleArn param for AWS.STS.assumeRoleWithWebIdentity (linked below)
	   *     RoleArn: 'arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity',
	   *
	   *     // optional tokens, used for authenticated login
	   *     // See the Logins param for AWS.CognitoIdentity.getID (linked below)
	   *     Logins: {
	   *       'graph.facebook.com': 'FBTOKEN',
	   *       'www.amazon.com': 'AMAZONTOKEN',
	   *       'accounts.google.com': 'GOOGLETOKEN',
	   *       'api.twitter.com': 'TWITTERTOKEN',
	   *       'www.digits.com': 'DIGITSTOKEN'
	   *     },
	   *
	   *     // optional name, defaults to web-identity
	   *     // See the RoleSessionName param for AWS.STS.assumeRoleWithWebIdentity (linked below)
	   *     RoleSessionName: 'web',
	   *
	   *     // optional, only necessary when application runs in a browser
	   *     // and multiple users are signed in at once, used for caching
	   *     LoginId: 'example@gmail.com'
	   *
	   *   });
	   * @see AWS.CognitoIdentity.getId
	   * @see AWS.CognitoIdentity.getCredentialsForIdentity
	   * @see AWS.STS.assumeRoleWithWebIdentity
	   * @see AWS.CognitoIdentity.getOpenIdToken
	   */
	  constructor: function CognitoIdentityCredentials(params) {
	    AWS.Credentials.call(this);
	    this.expired = true;
	    this.params = params;
	    this.data = null;
	    this.identityId = null;
	    this.loadCachedId();
	  },

	  /**
	   * Refreshes credentials using {AWS.CognitoIdentity.getCredentialsForIdentity},
	   * or {AWS.STS.assumeRoleWithWebIdentity}.
	   *
	   * @callback callback function(err)
	   *   Called when the STS service responds (or fails). When
	   *   this callback is called with no error, it means that the credentials
	   *   information has been loaded into the object (as the `accessKeyId`,
	   *   `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    var self = this;
	    self.createClients();
	    self.data = null;
	    self.identityId = null;
	    self.getId(function(err) {
	      if (!err) {
	        if (!self.params.RoleArn) {
	          self.getCredentialsForIdentity(callback);
	        } else {
	          self.getCredentialsFromSTS(callback);
	        }
	      } else {
	        self.clearIdOnNotAuthorized(err);
	        callback(err);
	      }
	    });
	  },

	  /**
	   * Clears the cached Cognito ID associated with the currently configured
	   * identity pool ID. Use this to manually invalidate your cache if
	   * the identity pool ID was deleted.
	   */
	  clearCachedId: function clearCache() {
	    this.identityId = null;
	    delete this.params.IdentityId;

	    var poolId = this.params.IdentityPoolId;
	    var loginId = this.params.LoginId || '';
	    delete this.storage[this.localStorageKey.id + poolId + loginId];
	    delete this.storage[this.localStorageKey.providers + poolId + loginId];
	  },

	  /**
	   * @api private
	   */
	  clearIdOnNotAuthorized: function clearIdOnNotAuthorized(err) {
	    var self = this;
	    if (err.code == 'NotAuthorizedException') {
	      self.clearCachedId();
	    }
	  },

	  /**
	   * Retrieves a Cognito ID, loading from cache if it was already retrieved
	   * on this device.
	   *
	   * @callback callback function(err, identityId)
	   *   @param err [Error, null] an error object if the call failed or null if
	   *     it succeeded.
	   *   @param identityId [String, null] if successful, the callback will return
	   *     the Cognito ID.
	   * @note If not loaded explicitly, the Cognito ID is loaded and stored in
	   *   localStorage in the browser environment of a device.
	   * @api private
	   */
	  getId: function getId(callback) {
	    var self = this;
	    if (typeof self.params.IdentityId === 'string') {
	      return callback(null, self.params.IdentityId);
	    }

	    self.cognito.getId(function(err, data) {
	      if (!err && data.IdentityId) {
	        self.params.IdentityId = data.IdentityId;
	        callback(null, data.IdentityId);
	      } else {
	        callback(err);
	      }
	    });
	  },


	  /**
	   * @api private
	   */
	  loadCredentials: function loadCredentials(data, credentials) {
	    if (!data || !credentials) return;
	    credentials.expired = false;
	    credentials.accessKeyId = data.Credentials.AccessKeyId;
	    credentials.secretAccessKey = data.Credentials.SecretKey;
	    credentials.sessionToken = data.Credentials.SessionToken;
	    credentials.expireTime = data.Credentials.Expiration;
	  },

	  /**
	   * @api private
	   */
	  getCredentialsForIdentity: function getCredentialsForIdentity(callback) {
	    var self = this;
	    self.cognito.getCredentialsForIdentity(function(err, data) {
	      if (!err) {
	        self.cacheId(data);
	        self.data = data;
	        self.loadCredentials(self.data, self);
	      } else {
	        self.clearIdOnNotAuthorized(err);
	      }
	      callback(err);
	    });
	  },

	  /**
	   * @api private
	   */
	  getCredentialsFromSTS: function getCredentialsFromSTS(callback) {
	    var self = this;
	    self.cognito.getOpenIdToken(function(err, data) {
	      if (!err) {
	        self.cacheId(data);
	        self.params.WebIdentityToken = data.Token;
	        self.webIdentityCredentials.refresh(function(webErr) {
	          if (!webErr) {
	            self.data = self.webIdentityCredentials.data;
	            self.sts.credentialsFrom(self.data, self);
	          }
	          callback(webErr);
	        });
	      } else {
	        self.clearIdOnNotAuthorized(err);
	        callback(err);
	      }
	    });
	  },

	  /**
	   * @api private
	   */
	  loadCachedId: function loadCachedId() {
	    var self = this;

	    // in the browser we source default IdentityId from localStorage
	    if (AWS.util.isBrowser() && !self.params.IdentityId) {
	      var id = self.getStorage('id');
	      if (id && self.params.Logins) {
	        var actualProviders = Object.keys(self.params.Logins);
	        var cachedProviders =
	          (self.getStorage('providers') || '').split(',');

	        // only load ID if at least one provider used this ID before
	        var intersect = cachedProviders.filter(function(n) {
	          return actualProviders.indexOf(n) !== -1;
	        });
	        if (intersect.length !== 0) {
	          self.params.IdentityId = id;
	        }
	      } else if (id) {
	        self.params.IdentityId = id;
	      }
	    }
	  },

	  /**
	   * @api private
	   */
	  createClients: function() {
	    this.webIdentityCredentials = this.webIdentityCredentials ||
	      new AWS.WebIdentityCredentials(this.params);
	    this.cognito = this.cognito ||
	      new CognitoIdentity({params: this.params});
	    this.sts = this.sts || new STS();
	  },

	  /**
	   * @api private
	   */
	  cacheId: function cacheId(data) {
	    this.identityId = data.IdentityId;
	    this.params.IdentityId = this.identityId;

	    // cache this IdentityId in browser localStorage if possible
	    if (AWS.util.isBrowser()) {
	      this.setStorage('id', data.IdentityId);

	      if (this.params.Logins) {
	        this.setStorage('providers', Object.keys(this.params.Logins).join(','));
	      }
	    }
	  },

	  /**
	   * @api private
	   */
	  getStorage: function getStorage(key) {
	    return this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')];
	  },

	  /**
	   * @api private
	   */
	  setStorage: function setStorage(key, val) {
	    try {
	      this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')] = val;
	    } catch (_) {}
	  },

	  /**
	   * @api private
	   */
	  storage: (function() {
	    try {
	      var storage = AWS.util.isBrowser() && window.localStorage !== null && typeof window.localStorage === 'object' ?
	          window.localStorage : {};

	      // Test set/remove which would throw an error in Safari's private browsing
	      storage['aws.test-storage'] = 'foobar';
	      delete storage['aws.test-storage'];

	      return storage;
	    } catch (_) {
	      return {};
	    }
	  })()
	});


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var AWS = __webpack_require__(63);
	var Service = __webpack_require__(144);
	var apiLoader = __webpack_require__(152);

	apiLoader.services['cognitoidentity'] = {};
	AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
	__webpack_require__(158);
	Object.defineProperty(apiLoader.services['cognitoidentity'], '2014-06-30', {
	  get: function get() {
	    var model = __webpack_require__(159);
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.CognitoIdentity;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	AWS.util.update(AWS.CognitoIdentity.prototype, {
	  getOpenIdToken: function getOpenIdToken(params, callback) {
	    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
	  },

	  getId: function getId(params, callback) {
	    return this.makeUnauthenticatedRequest('getId', params, callback);
	  },

	  getCredentialsForIdentity: function getCredentialsForIdentity(params, callback) {
	    return this.makeUnauthenticatedRequest('getCredentialsForIdentity', params, callback);
	  }
	});


/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = {
		"version": "2.0",
		"metadata": {
			"apiVersion": "2014-06-30",
			"endpointPrefix": "cognito-identity",
			"jsonVersion": "1.1",
			"protocol": "json",
			"serviceFullName": "Amazon Cognito Identity",
			"signatureVersion": "v4",
			"targetPrefix": "AWSCognitoIdentityService",
			"uid": "cognito-identity-2014-06-30"
		},
		"operations": {
			"CreateIdentityPool": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolName",
						"AllowUnauthenticatedIdentities"
					],
					"members": {
						"IdentityPoolName": {},
						"AllowUnauthenticatedIdentities": {
							"type": "boolean"
						},
						"SupportedLoginProviders": {
							"shape": "S4"
						},
						"DeveloperProviderName": {},
						"OpenIdConnectProviderARNs": {
							"shape": "S8"
						},
						"CognitoIdentityProviders": {
							"shape": "Sa"
						},
						"SamlProviderARNs": {
							"shape": "Se"
						}
					}
				},
				"output": {
					"shape": "Sf"
				}
			},
			"DeleteIdentities": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityIdsToDelete"
					],
					"members": {
						"IdentityIdsToDelete": {
							"type": "list",
							"member": {}
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UnprocessedIdentityIds": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"IdentityId": {},
									"ErrorCode": {}
								}
							}
						}
					}
				}
			},
			"DeleteIdentityPool": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId"
					],
					"members": {
						"IdentityPoolId": {}
					}
				}
			},
			"DescribeIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityId"
					],
					"members": {
						"IdentityId": {}
					}
				},
				"output": {
					"shape": "Sq"
				}
			},
			"DescribeIdentityPool": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId"
					],
					"members": {
						"IdentityPoolId": {}
					}
				},
				"output": {
					"shape": "Sf"
				}
			},
			"GetCredentialsForIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityId"
					],
					"members": {
						"IdentityId": {},
						"Logins": {
							"shape": "Sv"
						},
						"CustomRoleArn": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {},
						"Credentials": {
							"type": "structure",
							"members": {
								"AccessKeyId": {},
								"SecretKey": {},
								"SessionToken": {},
								"Expiration": {
									"type": "timestamp"
								}
							}
						}
					}
				}
			},
			"GetId": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId"
					],
					"members": {
						"AccountId": {},
						"IdentityPoolId": {},
						"Logins": {
							"shape": "Sv"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {}
					}
				}
			},
			"GetIdentityPoolRoles": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId"
					],
					"members": {
						"IdentityPoolId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityPoolId": {},
						"Roles": {
							"shape": "S17"
						}
					}
				}
			},
			"GetOpenIdToken": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityId"
					],
					"members": {
						"IdentityId": {},
						"Logins": {
							"shape": "Sv"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {},
						"Token": {}
					}
				}
			},
			"GetOpenIdTokenForDeveloperIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId",
						"Logins"
					],
					"members": {
						"IdentityPoolId": {},
						"IdentityId": {},
						"Logins": {
							"shape": "Sv"
						},
						"TokenDuration": {
							"type": "long"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {},
						"Token": {}
					}
				}
			},
			"ListIdentities": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId",
						"MaxResults"
					],
					"members": {
						"IdentityPoolId": {},
						"MaxResults": {
							"type": "integer"
						},
						"NextToken": {},
						"HideDisabled": {
							"type": "boolean"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityPoolId": {},
						"Identities": {
							"type": "list",
							"member": {
								"shape": "Sq"
							}
						},
						"NextToken": {}
					}
				}
			},
			"ListIdentityPools": {
				"input": {
					"type": "structure",
					"required": [
						"MaxResults"
					],
					"members": {
						"MaxResults": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityPools": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"IdentityPoolId": {},
									"IdentityPoolName": {}
								}
							}
						},
						"NextToken": {}
					}
				}
			},
			"LookupDeveloperIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId"
					],
					"members": {
						"IdentityPoolId": {},
						"IdentityId": {},
						"DeveloperUserIdentifier": {},
						"MaxResults": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {},
						"DeveloperUserIdentifierList": {
							"type": "list",
							"member": {}
						},
						"NextToken": {}
					}
				}
			},
			"MergeDeveloperIdentities": {
				"input": {
					"type": "structure",
					"required": [
						"SourceUserIdentifier",
						"DestinationUserIdentifier",
						"DeveloperProviderName",
						"IdentityPoolId"
					],
					"members": {
						"SourceUserIdentifier": {},
						"DestinationUserIdentifier": {},
						"DeveloperProviderName": {},
						"IdentityPoolId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"IdentityId": {}
					}
				}
			},
			"SetIdentityPoolRoles": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityPoolId",
						"Roles"
					],
					"members": {
						"IdentityPoolId": {},
						"Roles": {
							"shape": "S17"
						}
					}
				}
			},
			"UnlinkDeveloperIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityId",
						"IdentityPoolId",
						"DeveloperProviderName",
						"DeveloperUserIdentifier"
					],
					"members": {
						"IdentityId": {},
						"IdentityPoolId": {},
						"DeveloperProviderName": {},
						"DeveloperUserIdentifier": {}
					}
				}
			},
			"UnlinkIdentity": {
				"input": {
					"type": "structure",
					"required": [
						"IdentityId",
						"Logins",
						"LoginsToRemove"
					],
					"members": {
						"IdentityId": {},
						"Logins": {
							"shape": "Sv"
						},
						"LoginsToRemove": {
							"shape": "Sr"
						}
					}
				}
			},
			"UpdateIdentityPool": {
				"input": {
					"shape": "Sf"
				},
				"output": {
					"shape": "Sf"
				}
			}
		},
		"shapes": {
			"S4": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S8": {
				"type": "list",
				"member": {}
			},
			"Sa": {
				"type": "list",
				"member": {
					"type": "structure",
					"members": {
						"ProviderName": {},
						"ClientId": {}
					}
				}
			},
			"Se": {
				"type": "list",
				"member": {}
			},
			"Sf": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityPoolName",
					"AllowUnauthenticatedIdentities"
				],
				"members": {
					"IdentityPoolId": {},
					"IdentityPoolName": {},
					"AllowUnauthenticatedIdentities": {
						"type": "boolean"
					},
					"SupportedLoginProviders": {
						"shape": "S4"
					},
					"DeveloperProviderName": {},
					"OpenIdConnectProviderARNs": {
						"shape": "S8"
					},
					"CognitoIdentityProviders": {
						"shape": "Sa"
					},
					"SamlProviderARNs": {
						"shape": "Se"
					}
				}
			},
			"Sq": {
				"type": "structure",
				"members": {
					"IdentityId": {},
					"Logins": {
						"shape": "Sr"
					},
					"CreationDate": {
						"type": "timestamp"
					},
					"LastModifiedDate": {
						"type": "timestamp"
					}
				}
			},
			"Sr": {
				"type": "list",
				"member": {}
			},
			"Sv": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S17": {
				"type": "map",
				"key": {},
				"value": {}
			}
		}
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var STS = __webpack_require__(151);

	/**
	 * Represents credentials retrieved from STS SAML support.
	 *
	 * By default this provider gets credentials using the
	 * {AWS.STS.assumeRoleWithSAML} service operation. This operation
	 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
	 * application for which credentials will be given, as well as a `PrincipalArn`
	 * representing the ARN for the SAML identity provider. In addition, the
	 * `SAMLAssertion` must be set to the token provided by the identity
	 * provider. See {constructor} for an example on creating a credentials
	 * object with proper `RoleArn`, `PrincipalArn`, and `SAMLAssertion` values.
	 *
	 * ## Refreshing Credentials from Identity Service
	 *
	 * In addition to AWS credentials expiring after a given amount of time, the
	 * login token from the identity provider will also expire. Once this token
	 * expires, it will not be usable to refresh AWS credentials, and another
	 * token will be needed. The SDK does not manage refreshing of the token value,
	 * but this can be done through a "refresh token" supported by most identity
	 * providers. Consult the documentation for the identity provider for refreshing
	 * tokens. Once the refreshed token is acquired, you should make sure to update
	 * this new token in the credentials object's {params} property. The following
	 * code will update the SAMLAssertion, assuming you have retrieved an updated
	 * token from the identity provider:
	 *
	 * ```javascript
	 * AWS.config.credentials.params.SAMLAssertion = updatedToken;
	 * ```
	 *
	 * Future calls to `credentials.refresh()` will now use the new token.
	 *
	 * @!attribute params
	 *   @return [map] the map of params passed to
	 *     {AWS.STS.assumeRoleWithSAML}. To update the token, set the
	 *     `params.SAMLAssertion` property.
	 */
	AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {
	  /**
	   * Creates a new credentials object.
	   * @param (see AWS.STS.assumeRoleWithSAML)
	   * @example Creating a new credentials object
	   *   AWS.config.credentials = new AWS.SAMLCredentials({
	   *     RoleArn: 'arn:aws:iam::1234567890:role/SAMLRole',
	   *     PrincipalArn: 'arn:aws:iam::1234567890:role/SAMLPrincipal',
	   *     SAMLAssertion: 'base64-token', // base64-encoded token from IdP
	   *   });
	   * @see AWS.STS.assumeRoleWithSAML
	   */
	  constructor: function SAMLCredentials(params) {
	    AWS.Credentials.call(this);
	    this.expired = true;
	    this.params = params;
	  },

	  /**
	   * Refreshes credentials using {AWS.STS.assumeRoleWithSAML}
	   *
	   * @callback callback function(err)
	   *   Called when the STS service responds (or fails). When
	   *   this callback is called with no error, it means that the credentials
	   *   information has been loaded into the object (as the `accessKeyId`,
	   *   `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    var self = this;
	    self.createClients();
	    if (!callback) callback = function(err) { if (err) throw err; };

	    self.service.assumeRoleWithSAML(function (err, data) {
	      if (!err) {
	        self.service.credentialsFrom(data, self);
	      }
	      callback(err);
	    });
	  },

	  /**
	   * @api private
	   */
	  createClients: function() {
	    this.service = this.service || new STS({params: this.params});
	  }

	});


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * The endpoint that a service will talk to, for example,
	 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
	 * you need to override an endpoint for a service, you can
	 * set the endpoint on a service by passing the endpoint
	 * object with the `endpoint` option key:
	 *
	 * ```javascript
	 * var ep = new AWS.Endpoint('awsproxy.example.com');
	 * var s3 = new AWS.S3({endpoint: ep});
	 * s3.service.endpoint.hostname == 'awsproxy.example.com'
	 * ```
	 *
	 * Note that if you do not specify a protocol, the protocol will
	 * be selected based on your current {AWS.config} configuration.
	 *
	 * @!attribute protocol
	 *   @return [String] the protocol (http or https) of the endpoint
	 *     URL
	 * @!attribute hostname
	 *   @return [String] the host portion of the endpoint, e.g.,
	 *     example.com
	 * @!attribute host
	 *   @return [String] the host portion of the endpoint including
	 *     the port, e.g., example.com:80
	 * @!attribute port
	 *   @return [Integer] the port of the endpoint
	 * @!attribute href
	 *   @return [String] the full URL of the endpoint
	 */
	AWS.Endpoint = inherit({

	  /**
	   * @overload Endpoint(endpoint)
	   *   Constructs a new endpoint given an endpoint URL. If the
	   *   URL omits a protocol (http or https), the default protocol
	   *   set in the global {AWS.config} will be used.
	   *   @param endpoint [String] the URL to construct an endpoint from
	   */
	  constructor: function Endpoint(endpoint, config) {
	    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

	    if (typeof endpoint === 'undefined' || endpoint === null) {
	      throw new Error('Invalid endpoint: ' + endpoint);
	    } else if (typeof endpoint !== 'string') {
	      return AWS.util.copy(endpoint);
	    }

	    if (!endpoint.match(/^http/)) {
	      var useSSL = config && config.sslEnabled !== undefined ?
	        config.sslEnabled : AWS.config.sslEnabled;
	      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
	    }

	    AWS.util.update(this, AWS.util.urlParse(endpoint));

	    // Ensure the port property is set as an integer
	    if (this.port) {
	      this.port = parseInt(this.port, 10);
	    } else {
	      this.port = this.protocol === 'https:' ? 443 : 80;
	    }
	  }

	});

	/**
	 * The low level HTTP request object, encapsulating all HTTP header
	 * and body data sent by a service request.
	 *
	 * @!attribute method
	 *   @return [String] the HTTP method of the request
	 * @!attribute path
	 *   @return [String] the path portion of the URI, e.g.,
	 *     "/list/?start=5&num=10"
	 * @!attribute headers
	 *   @return [map<String,String>]
	 *     a map of header keys and their respective values
	 * @!attribute body
	 *   @return [String] the request body payload
	 * @!attribute endpoint
	 *   @return [AWS.Endpoint] the endpoint for the request
	 * @!attribute region
	 *   @api private
	 *   @return [String] the region, for signing purposes only.
	 */
	AWS.HttpRequest = inherit({

	  /**
	   * @api private
	   */
	  constructor: function HttpRequest(endpoint, region, customUserAgent) {
	    endpoint = new AWS.Endpoint(endpoint);
	    this.method = 'POST';
	    this.path = endpoint.path || '/';
	    this.headers = {};
	    this.body = '';
	    this.endpoint = endpoint;
	    this.region = region;
	    this.setUserAgent(customUserAgent);
	  },

	  /**
	   * @api private
	   */
	  setUserAgent: function setUserAgent(customUserAgent) {
	    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
	    var customSuffix = '';
	    if (typeof customUserAgent === 'string' && customUserAgent) {
	      customSuffix += ' ' + customUserAgent;
	    }
	    this.headers[prefix + 'User-Agent'] = AWS.util.userAgent() + customSuffix;
	  },

	  /**
	   * @return [String] the part of the {path} excluding the
	   *   query string
	   */
	  pathname: function pathname() {
	    return this.path.split('?', 1)[0];
	  },

	  /**
	   * @return [String] the query string portion of the {path}
	   */
	  search: function search() {
	    var query = this.path.split('?', 2)[1];
	    if (query) {
	      query = AWS.util.queryStringParse(query);
	      return AWS.util.queryParamsToString(query);
	    }
	    return '';
	  }

	});

	/**
	 * The low level HTTP response object, encapsulating all HTTP header
	 * and body data returned from the request.
	 *
	 * @!attribute statusCode
	 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
	 * @!attribute headers
	 *   @return [map<String,String>]
	 *      a map of response header keys and their respective values
	 * @!attribute body
	 *   @return [String] the response body payload
	 * @!attribute [r] streaming
	 *   @return [Boolean] whether this response is being streamed at a low-level.
	 *     Defaults to `false` (buffered reads). Do not modify this manually, use
	 *     {createUnbufferedStream} to convert the stream to unbuffered mode
	 *     instead.
	 */
	AWS.HttpResponse = inherit({

	  /**
	   * @api private
	   */
	  constructor: function HttpResponse() {
	    this.statusCode = undefined;
	    this.headers = {};
	    this.body = undefined;
	    this.streaming = false;
	    this.stream = null;
	  },

	  /**
	   * Disables buffering on the HTTP response and returns the stream for reading.
	   * @return [Stream, XMLHttpRequest, null] the underlying stream object.
	   *   Use this object to directly read data off of the stream.
	   * @note This object is only available after the {AWS.Request~httpHeaders}
	   *   event has fired. This method must be called prior to
	   *   {AWS.Request~httpData}.
	   * @example Taking control of a stream
	   *   request.on('httpHeaders', function(statusCode, headers) {
	   *     if (statusCode < 300) {
	   *       if (headers.etag === 'xyz') {
	   *         // pipe the stream, disabling buffering
	   *         var stream = this.response.httpResponse.createUnbufferedStream();
	   *         stream.pipe(process.stdout);
	   *       } else { // abort this request and set a better error message
	   *         this.abort();
	   *         this.response.error = new Error('Invalid ETag');
	   *       }
	   *     }
	   *   }).send(console.log);
	   */
	  createUnbufferedStream: function createUnbufferedStream() {
	    this.streaming = true;
	    return this.stream;
	  }
	});


	AWS.HttpClient = inherit({});

	/**
	 * @api private
	 */
	AWS.HttpClient.getInstance = function getInstance() {
	  if (this.singleton === undefined) {
	    this.singleton = new this();
	  }
	  return this.singleton;
	};


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	/**
	 * @api private
	 * @!method on(eventName, callback)
	 *   Registers an event listener callback for the event given by `eventName`.
	 *   Parameters passed to the callback function depend on the individual event
	 *   being triggered. See the event documentation for those parameters.
	 *
	 *   @param eventName [String] the event name to register the listener for
	 *   @param callback [Function] the listener callback function
	 *   @return [AWS.SequentialExecutor] the same object for chaining
	 */
	AWS.SequentialExecutor = AWS.util.inherit({

	  constructor: function SequentialExecutor() {
	    this._events = {};
	  },

	  /**
	   * @api private
	   */
	  listeners: function listeners(eventName) {
	    return this._events[eventName] ? this._events[eventName].slice(0) : [];
	  },

	  on: function on(eventName, listener) {
	    if (this._events[eventName]) {
	      this._events[eventName].push(listener);
	    } else {
	      this._events[eventName] = [listener];
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  onAsync: function onAsync(eventName, listener) {
	    listener._isAsync = true;
	    return this.on(eventName, listener);
	  },

	  removeListener: function removeListener(eventName, listener) {
	    var listeners = this._events[eventName];
	    if (listeners) {
	      var length = listeners.length;
	      var position = -1;
	      for (var i = 0; i < length; ++i) {
	        if (listeners[i] === listener) {
	          position = i;
	        }
	      }
	      if (position > -1) {
	        listeners.splice(position, 1);
	      }
	    }
	    return this;
	  },

	  removeAllListeners: function removeAllListeners(eventName) {
	    if (eventName) {
	      delete this._events[eventName];
	    } else {
	      this._events = {};
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  emit: function emit(eventName, eventArgs, doneCallback) {
	    if (!doneCallback) doneCallback = function() { };
	    var listeners = this.listeners(eventName);
	    var count = listeners.length;
	    this.callListeners(listeners, eventArgs, doneCallback);
	    return count > 0;
	  },

	  /**
	   * @api private
	   */
	  callListeners: function callListeners(listeners, args, doneCallback, prevError) {
	    var self = this;
	    var error = prevError || null;

	    function callNextListener(err) {
	      if (err) {
	        error = AWS.util.error(error || new Error(), err);
	        if (self._haltHandlersOnError) {
	          return doneCallback.call(self, error);
	        }
	      }
	      self.callListeners(listeners, args, doneCallback, error);
	    }

	    while (listeners.length > 0) {
	      var listener = listeners.shift();
	      if (listener._isAsync) { // asynchronous listener
	        listener.apply(self, args.concat([callNextListener]));
	        return; // stop here, callNextListener will continue
	      } else { // synchronous listener
	        try {
	          listener.apply(self, args);
	        } catch (err) {
	          error = AWS.util.error(error || new Error(), err);
	        }
	        if (error && self._haltHandlersOnError) {
	          doneCallback.call(self, error);
	          return;
	        }
	      }
	    }
	    doneCallback.call(self, error);
	  },

	  /**
	   * Adds or copies a set of listeners from another list of
	   * listeners or SequentialExecutor object.
	   *
	   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
	   *   a list of events and callbacks, or an event emitter object
	   *   containing listeners to add to this emitter object.
	   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
	   * @example Adding listeners from a map of listeners
	   *   emitter.addListeners({
	   *     event1: [function() { ... }, function() { ... }],
	   *     event2: [function() { ... }]
	   *   });
	   *   emitter.emit('event1'); // emitter has event1
	   *   emitter.emit('event2'); // emitter has event2
	   * @example Adding listeners from another emitter object
	   *   var emitter1 = new AWS.SequentialExecutor();
	   *   emitter1.on('event1', function() { ... });
	   *   emitter1.on('event2', function() { ... });
	   *   var emitter2 = new AWS.SequentialExecutor();
	   *   emitter2.addListeners(emitter1);
	   *   emitter2.emit('event1'); // emitter2 has event1
	   *   emitter2.emit('event2'); // emitter2 has event2
	   */
	  addListeners: function addListeners(listeners) {
	    var self = this;

	    // extract listeners if parameter is an SequentialExecutor object
	    if (listeners._events) listeners = listeners._events;

	    AWS.util.each(listeners, function(event, callbacks) {
	      if (typeof callbacks === 'function') callbacks = [callbacks];
	      AWS.util.arrayEach(callbacks, function(callback) {
	        self.on(event, callback);
	      });
	    });

	    return self;
	  },

	  /**
	   * Registers an event with {on} and saves the callback handle function
	   * as a property on the emitter object using a given `name`.
	   *
	   * @param name [String] the property name to set on this object containing
	   *   the callback function handle so that the listener can be removed in
	   *   the future.
	   * @param (see on)
	   * @return (see on)
	   * @example Adding a named listener DATA_CALLBACK
	   *   var listener = function() { doSomething(); };
	   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
	   *
	   *   // the following prints: true
	   *   console.log(emitter.DATA_CALLBACK == listener);
	   */
	  addNamedListener: function addNamedListener(name, eventName, callback) {
	    this[name] = callback;
	    this.addListener(eventName, callback);
	    return this;
	  },

	  /**
	   * @api private
	   */
	  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
	    callback._isAsync = true;
	    return this.addNamedListener(name, eventName, callback);
	  },

	  /**
	   * Helper method to add a set of named listeners using
	   * {addNamedListener}. The callback contains a parameter
	   * with a handle to the `addNamedListener` method.
	   *
	   * @callback callback function(add)
	   *   The callback function is called immediately in order to provide
	   *   the `add` function to the block. This simplifies the addition of
	   *   a large group of named listeners.
	   *   @param add [Function] the {addNamedListener} function to call
	   *     when registering listeners.
	   * @example Adding a set of named listeners
	   *   emitter.addNamedListeners(function(add) {
	   *     add('DATA_CALLBACK', 'data', function() { ... });
	   *     add('OTHER', 'otherEvent', function() { ... });
	   *     add('LAST', 'lastEvent', function() { ... });
	   *   });
	   *
	   *   // these properties are now set:
	   *   emitter.DATA_CALLBACK;
	   *   emitter.OTHER;
	   *   emitter.LAST;
	   */
	  addNamedListeners: function addNamedListeners(callback) {
	    var self = this;
	    callback(
	      function() {
	        self.addNamedListener.apply(self, arguments);
	      },
	      function() {
	        self.addNamedAsyncListener.apply(self, arguments);
	      }
	    );
	    return this;
	  }
	});

	/**
	 * {on} is the prefered method.
	 * @api private
	 */
	AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

	module.exports = AWS.SequentialExecutor;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var SequentialExecutor = __webpack_require__(162);
	var uuid = __webpack_require__(164);
	/**
	 * The namespace used to register global event listeners for request building
	 * and sending.
	 */
	AWS.EventListeners = {
	  /**
	   * @!attribute VALIDATE_CREDENTIALS
	   *   A request listener that validates whether the request is being
	   *   sent with credentials.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating credentials
	   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
	   *     request.removeListener('validate', listener);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute VALIDATE_REGION
	   *   A request listener that validates whether the region is set
	   *   for a request.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating region configuration
	   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
	   *     request.removeListener('validate', listener);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute VALIDATE_PARAMETERS
	   *   A request listener that validates input parameters in a request.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating parameters
	   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
	   *     request.removeListener('validate', listener);
	   *   @example Disable parameter validation globally
	   *     AWS.EventListeners.Core.removeListener('validate',
	   *       AWS.EventListeners.Core.VALIDATE_REGION);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute SEND
	   *   A request listener that initiates the HTTP connection for a
	   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
	   *   @example Replacing the HTTP handler
	   *     var listener = AWS.EventListeners.Core.SEND;
	   *     request.removeListener('send', listener);
	   *     request.on('send', function(response) {
	   *       customHandler.send(response);
	   *     });
	   *   @return [Function]
	   *   @readonly
	   * @!attribute HTTP_DATA
	   *   A request listener that reads data from the HTTP connection in order
	   *   to build the response data.
	   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
	   *   Remove this handler if you are overriding the 'httpData' event and
	   *   do not want extra data processing and buffering overhead.
	   *   @example Disabling default data processing
	   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
	   *     request.removeListener('httpData', listener);
	   *   @return [Function]
	   *   @readonly
	   */
	  Core: {} /* doc hack */
	};

	AWS.EventListeners = {
	  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
	    addAsync('VALIDATE_CREDENTIALS', 'validate',
	        function VALIDATE_CREDENTIALS(req, done) {
	      if (!req.service.api.signatureVersion) return done(); // none
	      req.service.config.getCredentials(function(err) {
	        if (err) {
	          req.response.error = AWS.util.error(err,
	            {code: 'CredentialsError', message: 'Missing credentials in config'});
	        }
	        done();
	      });
	    });

	    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
	      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
	        req.response.error = AWS.util.error(new Error(),
	          {code: 'ConfigError', message: 'Missing region in config'});
	      }
	    });

	    add('BUILD_IDEMPOTENCY_TOKENS', 'validate', function BUILD_IDEMPOTENCY_TOKENS(req) {
	      var operation = req.service.api.operations[req.operation];
	      if (!operation) {
	        return;
	      }
	      var idempotentMembers = operation.idempotentMembers;
	      if (!idempotentMembers.length) {
	        return;
	      }
	      // creates a copy of params so user's param object isn't mutated
	      var params = AWS.util.copy(req.params);
	      for (var i = 0, iLen = idempotentMembers.length; i < iLen; i++) {
	        if (!params[idempotentMembers[i]]) {
	          // add the member
	          params[idempotentMembers[i]] = uuid.v4();
	        }
	      }
	      req.params = params;
	    });

	    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
	      var rules = req.service.api.operations[req.operation].input;
	      var validation = req.service.config.paramValidation;
	      new AWS.ParamValidator(validation).validate(rules, req.params);
	    });

	    addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
	      req.haltHandlersOnError();
	      if (!req.service.api.signatureVersion) return done(); // none
	      if (req.service.getSignerClass(req) === AWS.Signers.V4) {
	        var body = req.httpRequest.body || '';
	        AWS.util.computeSha256(body, function(err, sha) {
	          if (err) {
	            done(err);
	          }
	          else {
	            req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
	            done();
	          }
	        });
	      } else {
	        done();
	      }
	    });

	    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
	      if (req.httpRequest.headers['Content-Length'] === undefined) {
	        var length = AWS.util.string.byteLength(req.httpRequest.body);
	        req.httpRequest.headers['Content-Length'] = length;
	      }
	    });

	    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
	      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
	    });

	    add('RESTART', 'restart', function RESTART() {
	      var err = this.response.error;
	      if (!err || !err.retryable) return;

	      this.httpRequest = new AWS.HttpRequest(
	        this.service.endpoint,
	        this.service.region
	      );

	      if (this.response.retryCount < this.service.config.maxRetries) {
	        this.response.retryCount++;
	      } else {
	        this.response.error = null;
	      }
	    });

	    addAsync('SIGN', 'sign', function SIGN(req, done) {
	      var service = req.service;
	      if (!service.api.signatureVersion) return done(); // none

	      service.config.getCredentials(function (err, credentials) {
	        if (err) {
	          req.response.error = err;
	          return done();
	        }

	        try {
	          var date = AWS.util.date.getDate();
	          var SignerClass = service.getSignerClass(req);
	          var signer = new SignerClass(req.httpRequest,
	            service.api.signingName || service.api.endpointPrefix,
	           service.config.signatureCache);
	          signer.setServiceClientId(service._clientId);

	          // clear old authorization headers
	          delete req.httpRequest.headers['Authorization'];
	          delete req.httpRequest.headers['Date'];
	          delete req.httpRequest.headers['X-Amz-Date'];

	          // add new authorization
	          signer.addAuthorization(credentials, date);
	          req.signedAt = date;
	        } catch (e) {
	          req.response.error = e;
	        }
	        done();
	      });
	    });

	    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
	      if (this.service.successfulResponse(resp, this)) {
	        resp.data = {};
	        resp.error = null;
	      } else {
	        resp.data = null;
	        resp.error = AWS.util.error(new Error(),
	          {code: 'UnknownError', message: 'An unknown error occurred.'});
	      }
	    });

	    addAsync('SEND', 'send', function SEND(resp, done) {
	      resp.httpResponse._abortCallback = done;
	      resp.error = null;
	      resp.data = null;

	      function callback(httpResp) {
	        resp.httpResponse.stream = httpResp;

	        httpResp.on('headers', function onHeaders(statusCode, headers) {
	          resp.request.emit('httpHeaders', [statusCode, headers, resp]);

	          if (!resp.httpResponse.streaming) {
	            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
	              httpResp.on('readable', function onReadable() {
	                var data = httpResp.read();
	                if (data !== null) {
	                  resp.request.emit('httpData', [data, resp]);
	                }
	              });
	            } else { // legacy streams API
	              httpResp.on('data', function onData(data) {
	                resp.request.emit('httpData', [data, resp]);
	              });
	            }
	          }
	        });

	        httpResp.on('end', function onEnd() {
	          resp.request.emit('httpDone');
	          done();
	        });
	      }

	      function progress(httpResp) {
	        httpResp.on('sendProgress', function onSendProgress(value) {
	          resp.request.emit('httpUploadProgress', [value, resp]);
	        });

	        httpResp.on('receiveProgress', function onReceiveProgress(value) {
	          resp.request.emit('httpDownloadProgress', [value, resp]);
	        });
	      }

	      function error(err) {
	        resp.error = AWS.util.error(err, {
	          code: 'NetworkingError',
	          region: resp.request.httpRequest.region,
	          hostname: resp.request.httpRequest.endpoint.hostname,
	          retryable: true
	        });
	        resp.request.emit('httpError', [resp.error, resp], function() {
	          done();
	        });
	      }

	      function executeSend() {
	        var http = AWS.HttpClient.getInstance();
	        var httpOptions = resp.request.service.config.httpOptions || {};
	        try {
	          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
	                                          callback, error);
	          progress(stream);
	        } catch (err) {
	          error(err);
	        }
	      }

	      var timeDiff = (AWS.util.date.getDate() - this.signedAt) / 1000;
	      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
	        this.emit('sign', [this], function(err) {
	          if (err) done(err);
	          else executeSend();
	        });
	      } else {
	        executeSend();
	      }
	    });

	    add('HTTP_HEADERS', 'httpHeaders',
	        function HTTP_HEADERS(statusCode, headers, resp) {
	      resp.httpResponse.statusCode = statusCode;
	      resp.httpResponse.headers = headers;
	      resp.httpResponse.body = new AWS.util.Buffer('');
	      resp.httpResponse.buffers = [];
	      resp.httpResponse.numBytes = 0;
	      var dateHeader = headers.date || headers.Date;
	      if (dateHeader) {
	        var serverTime = Date.parse(dateHeader);
	        if (resp.request.service.config.correctClockSkew
	            && AWS.util.isClockSkewed(serverTime)) {
	          AWS.util.applyClockOffset(serverTime);
	        }
	      }
	    });

	    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
	      if (chunk) {
	        if (AWS.util.isNode()) {
	          resp.httpResponse.numBytes += chunk.length;

	          var total = resp.httpResponse.headers['content-length'];
	          var progress = { loaded: resp.httpResponse.numBytes, total: total };
	          resp.request.emit('httpDownloadProgress', [progress, resp]);
	        }

	        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
	      }
	    });

	    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
	      // convert buffers array into single buffer
	      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
	        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
	        resp.httpResponse.body = body;
	      }
	      delete resp.httpResponse.numBytes;
	      delete resp.httpResponse.buffers;
	    });

	    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
	      if (resp.httpResponse.statusCode) {
	        resp.error.statusCode = resp.httpResponse.statusCode;
	        if (resp.error.retryable === undefined) {
	          resp.error.retryable = this.service.retryableError(resp.error, this);
	        }
	      }
	    });

	    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
	      if (!resp.error) return;
	      switch (resp.error.code) {
	        case 'RequestExpired': // EC2 only
	        case 'ExpiredTokenException':
	        case 'ExpiredToken':
	          resp.error.retryable = true;
	          resp.request.service.config.credentials.expired = true;
	      }
	    });

	    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
	      var err = resp.error;
	      if (!err) return;
	      if (typeof err.code === 'string' && typeof err.message === 'string') {
	        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
	          resp.error.retryable = true;
	        }
	      }
	    });

	    add('CLOCK_SKEWED', 'retry', function CLOCK_SKEWED(resp) {
	      if (!resp.error) return;
	      if (this.service.clockSkewError(resp.error)
	          && this.service.config.correctClockSkew
	          && AWS.config.isClockSkewed) {
	        resp.error.retryable = true;
	      }
	    });

	    add('REDIRECT', 'retry', function REDIRECT(resp) {
	      if (resp.error && resp.error.statusCode >= 300 &&
	          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
	        this.httpRequest.endpoint =
	          new AWS.Endpoint(resp.httpResponse.headers['location']);
	        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
	        resp.error.redirect = true;
	        resp.error.retryable = true;
	      }
	    });

	    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
	      if (resp.error) {
	        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
	          resp.error.retryDelay = 0;
	        } else if (resp.retryCount < resp.maxRetries) {
	          resp.error.retryDelay = this.service.retryDelays(resp.retryCount) || 0;
	        }
	      }
	    });

	    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
	      var delay, willRetry = false;

	      if (resp.error) {
	        delay = resp.error.retryDelay || 0;
	        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
	          resp.retryCount++;
	          willRetry = true;
	        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
	          resp.redirectCount++;
	          willRetry = true;
	        }
	      }

	      if (willRetry) {
	        resp.error = null;
	        setTimeout(done, delay);
	      } else {
	        done();
	      }
	    });
	  }),

	  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
	    add('EXTRACT_REQUEST_ID', 'extractData', AWS.util.extractRequestId);
	    add('EXTRACT_REQUEST_ID', 'extractError', AWS.util.extractRequestId);

	    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
	      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
	        var message = 'Inaccessible host: `' + err.hostname +
	          '\'. This service may not be available in the `' + err.region +
	          '\' region.';
	        this.response.error = AWS.util.error(new Error(message), {
	          code: 'UnknownEndpoint',
	          region: err.region,
	          hostname: err.hostname,
	          retryable: true,
	          originalError: err
	        });
	      }
	    });
	  }),

	  Logger: new SequentialExecutor().addNamedListeners(function(add) {
	    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
	      var req = resp.request;
	      var logger = req.service.config.logger;
	      if (!logger) return;

	      function buildMessage() {
	        var time = AWS.util.date.getDate().getTime();
	        var delta = (time - req.startTime.getTime()) / 1000;
	        var ansi = logger.isTTY ? true : false;
	        var status = resp.httpResponse.statusCode;
	        var params = __webpack_require__(14).inspect(req.params, true, null);

	        var message = '';
	        if (ansi) message += '\x1B[33m';
	        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
	        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
	        if (ansi) message += '\x1B[0;1m';
	        message += ' ' + AWS.util.string.lowerFirst(req.operation);
	        message += '(' + params + ')';
	        if (ansi) message += '\x1B[0m';
	        return message;
	      }

	      var line = buildMessage();
	      if (typeof logger.log === 'function') {
	        logger.log(line);
	      } else if (typeof logger.write === 'function') {
	        logger.write(line + '\n');
	      }
	    });
	  }),

	  Json: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(64);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  Rest: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(71);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(72);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(73);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  Query: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(67);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  })
	};


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(165);

	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; ++i) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}

	function buff_to_string(buf, offset) {
	  var i = offset || 0;
	  var bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : buff_to_string(b);
	}

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || buff_to_string(rnds);
	}

	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;

	module.exports = uuid;


/***/ },
/* 165 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
	}

	module.exports = rng;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var AWS = __webpack_require__(63);
	var AcceptorStateMachine = __webpack_require__(167);
	var inherit = AWS.util.inherit;
	var domain = AWS.util.domain;
	var jmespath = __webpack_require__(168);

	/**
	 * @api private
	 */
	var hardErrorStates = {success: 1, error: 1, complete: 1};

	function isTerminalState(machine) {
	  return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
	}

	var fsm = new AcceptorStateMachine();
	fsm.setupStates = function() {
	  var transition = function(_, done) {
	    var self = this;
	    self._haltHandlersOnError = false;

	    self.emit(self._asm.currentState, function(err) {
	      if (err) {
	        if (isTerminalState(self)) {
	          if (domain && self.domain instanceof domain.Domain) {
	            err.domainEmitter = self;
	            err.domain = self.domain;
	            err.domainThrown = false;
	            self.domain.emit('error', err);
	          } else {
	            throw err;
	          }
	        } else {
	          self.response.error = err;
	          done(err);
	        }
	      } else {
	        done(self.response.error);
	      }
	    });

	  };

	  this.addState('validate', 'build', 'error', transition);
	  this.addState('build', 'afterBuild', 'restart', transition);
	  this.addState('afterBuild', 'sign', 'restart', transition);
	  this.addState('sign', 'send', 'retry', transition);
	  this.addState('retry', 'afterRetry', 'afterRetry', transition);
	  this.addState('afterRetry', 'sign', 'error', transition);
	  this.addState('send', 'validateResponse', 'retry', transition);
	  this.addState('validateResponse', 'extractData', 'extractError', transition);
	  this.addState('extractError', 'extractData', 'retry', transition);
	  this.addState('extractData', 'success', 'retry', transition);
	  this.addState('restart', 'build', 'error', transition);
	  this.addState('success', 'complete', 'complete', transition);
	  this.addState('error', 'complete', 'complete', transition);
	  this.addState('complete', null, null, transition);
	};
	fsm.setupStates();

	/**
	 * ## Asynchronous Requests
	 *
	 * All requests made through the SDK are asynchronous and use a
	 * callback interface. Each service method that kicks off a request
	 * returns an `AWS.Request` object that you can use to register
	 * callbacks.
	 *
	 * For example, the following service method returns the request
	 * object as "request", which can be used to register callbacks:
	 *
	 * ```javascript
	 * // request is an AWS.Request object
	 * var request = ec2.describeInstances();
	 *
	 * // register callbacks on request to retrieve response data
	 * request.on('success', function(response) {
	 *   console.log(response.data);
	 * });
	 * ```
	 *
	 * When a request is ready to be sent, the {send} method should
	 * be called:
	 *
	 * ```javascript
	 * request.send();
	 * ```
	 *
	 * ## Removing Default Listeners for Events
	 *
	 * Request objects are built with default listeners for the various events,
	 * depending on the service type. In some cases, you may want to remove
	 * some built-in listeners to customize behaviour. Doing this requires
	 * access to the built-in listener functions, which are exposed through
	 * the {AWS.EventListeners.Core} namespace. For instance, you may
	 * want to customize the HTTP handler used when sending a request. In this
	 * case, you can remove the built-in listener associated with the 'send'
	 * event, the {AWS.EventListeners.Core.SEND} listener and add your own.
	 *
	 * ## Multiple Callbacks and Chaining
	 *
	 * You can register multiple callbacks on any request object. The
	 * callbacks can be registered for different events, or all for the
	 * same event. In addition, you can chain callback registration, for
	 * example:
	 *
	 * ```javascript
	 * request.
	 *   on('success', function(response) {
	 *     console.log("Success!");
	 *   }).
	 *   on('error', function(response) {
	 *     console.log("Error!");
	 *   }).
	 *   on('complete', function(response) {
	 *     console.log("Always!");
	 *   }).
	 *   send();
	 * ```
	 *
	 * The above example will print either "Success! Always!", or "Error! Always!",
	 * depending on whether the request succeeded or not.
	 *
	 * @!attribute httpRequest
	 *   @readonly
	 *   @!group HTTP Properties
	 *   @return [AWS.HttpRequest] the raw HTTP request object
	 *     containing request headers and body information
	 *     sent by the service.
	 *
	 * @!attribute startTime
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Date] the time that the request started
	 *
	 * @!group Request Building Events
	 *
	 * @!event validate(request)
	 *   Triggered when a request is being validated. Listeners
	 *   should throw an error if the request should not be sent.
	 *   @param request [Request] the request object being sent
	 *   @see AWS.EventListeners.Core.VALIDATE_CREDENTIALS
	 *   @see AWS.EventListeners.Core.VALIDATE_REGION
	 *   @example Ensuring that a certain parameter is set before sending a request
	 *     var req = s3.putObject(params);
	 *     req.on('validate', function() {
	 *       if (!req.params.Body.match(/^Hello\s/)) {
	 *         throw new Error('Body must start with "Hello "');
	 *       }
	 *     });
	 *     req.send(function(err, data) { ... });
	 *
	 * @!event build(request)
	 *   Triggered when the request payload is being built. Listeners
	 *   should fill the necessary information to send the request
	 *   over HTTP.
	 *   @param (see AWS.Request~validate)
	 *   @example Add a custom HTTP header to a request
	 *     var req = s3.putObject(params);
	 *     req.on('build', function() {
	 *       req.httpRequest.headers['Custom-Header'] = 'value';
	 *     });
	 *     req.send(function(err, data) { ... });
	 *
	 * @!event sign(request)
	 *   Triggered when the request is being signed. Listeners should
	 *   add the correct authentication headers and/or adjust the body,
	 *   depending on the authentication mechanism being used.
	 *   @param (see AWS.Request~validate)
	 *
	 * @!group Request Sending Events
	 *
	 * @!event send(response)
	 *   Triggered when the request is ready to be sent. Listeners
	 *   should call the underlying transport layer to initiate
	 *   the sending of the request.
	 *   @param response [Response] the response object
	 *   @context [Request] the request object that was sent
	 *   @see AWS.EventListeners.Core.SEND
	 *
	 * @!event retry(response)
	 *   Triggered when a request failed and might need to be retried or redirected.
	 *   If the response is retryable, the listener should set the
	 *   `response.error.retryable` property to `true`, and optionally set
	 *   `response.error.retryCount` to the millisecond delay for the next attempt.
	 *   In the case of a redirect, `response.error.redirect` should be set to
	 *   `true` with `retryCount` set to an optional delay on the next request.
	 *
	 *   If a listener decides that a request should not be retried,
	 *   it should set both `retryable` and `redirect` to false.
	 *
	 *   Note that a retryable error will be retried at most
	 *   {AWS.Config.maxRetries} times (based on the service object's config).
	 *   Similarly, a request that is redirected will only redirect at most
	 *   {AWS.Config.maxRedirects} times.
	 *
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @example Adding a custom retry for a 404 response
	 *     request.on('retry', function(response) {
	 *       // this resource is not yet available, wait 10 seconds to get it again
	 *       if (response.httpResponse.statusCode === 404 && response.error) {
	 *         response.error.retryable = true;   // retry this error
	 *         response.error.retryCount = 10000; // wait 10 seconds
	 *       }
	 *     });
	 *
	 * @!group Data Parsing Events
	 *
	 * @!event extractError(response)
	 *   Triggered on all non-2xx requests so that listeners can extract
	 *   error details from the response body. Listeners to this event
	 *   should set the `response.error` property.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event extractData(response)
	 *   Triggered in successful requests to allow listeners to
	 *   de-serialize the response body into `response.data`.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!group Completion Events
	 *
	 * @!event success(response)
	 *   Triggered when the request completed successfully.
	 *   `response.data` will contain the response data and
	 *   `response.error` will be null.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event error(error, response)
	 *   Triggered when an error occurs at any point during the
	 *   request. `response.error` will contain details about the error
	 *   that occurred. `response.data` will be null.
	 *   @param error [Error] the error object containing details about
	 *     the error that occurred.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event complete(response)
	 *   Triggered whenever a request cycle completes. `response.error`
	 *   should be checked, since the request may have failed.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!group HTTP Events
	 *
	 * @!event httpHeaders(statusCode, headers, response)
	 *   Triggered when headers are sent by the remote server
	 *   @param statusCode [Integer] the HTTP response code
	 *   @param headers [map<String,String>] the response headers
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event httpData(chunk, response)
	 *   Triggered when data is sent by the remote server
	 *   @param chunk [Buffer] the buffer data containing the next data chunk
	 *     from the server
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @see AWS.EventListeners.Core.HTTP_DATA
	 *
	 * @!event httpUploadProgress(progress, response)
	 *   Triggered when the HTTP request has uploaded more data
	 *   @param progress [map] An object containing the `loaded` and `total` bytes
	 *     of the request.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @note This event will not be emitted in Node.js 0.8.x.
	 *
	 * @!event httpDownloadProgress(progress, response)
	 *   Triggered when the HTTP request has downloaded more data
	 *   @param progress [map] An object containing the `loaded` and `total` bytes
	 *     of the request.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @note This event will not be emitted in Node.js 0.8.x.
	 *
	 * @!event httpError(error, response)
	 *   Triggered when the HTTP request failed
	 *   @param error [Error] the error object that was thrown
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event httpDone(response)
	 *   Triggered when the server is finished sending data
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @see AWS.Response
	 */
	AWS.Request = inherit({

	  /**
	   * Creates a request for an operation on a given service with
	   * a set of input parameters.
	   *
	   * @param service [AWS.Service] the service to perform the operation on
	   * @param operation [String] the operation to perform on the service
	   * @param params [Object] parameters to send to the operation.
	   *   See the operation's documentation for the format of the
	   *   parameters.
	   */
	  constructor: function Request(service, operation, params) {
	    var endpoint = service.endpoint;
	    var region = service.config.region;
	    var customUserAgent = service.config.customUserAgent;

	    // global endpoints sign as us-east-1
	    if (service.isGlobalEndpoint) region = 'us-east-1';

	    this.domain = domain && domain.active;
	    this.service = service;
	    this.operation = operation;
	    this.params = params || {};
	    this.httpRequest = new AWS.HttpRequest(endpoint, region, customUserAgent);
	    this.startTime = AWS.util.date.getDate();

	    this.response = new AWS.Response(this);
	    this._asm = new AcceptorStateMachine(fsm.states, 'validate');
	    this._haltHandlersOnError = false;

	    AWS.SequentialExecutor.call(this);
	    this.emit = this.emitEvent;
	  },

	  /**
	   * @!group Sending a Request
	   */

	  /**
	   * @overload send(callback = null)
	   *   Sends the request object.
	   *
	   *   @callback callback function(err, data)
	   *     If a callback is supplied, it is called when a response is returned
	   *     from the service.
	   *     @context [AWS.Request] the request object being sent.
	   *     @param err [Error] the error object returned from the request.
	   *       Set to `null` if the request is successful.
	   *     @param data [Object] the de-serialized data returned from
	   *       the request. Set to `null` if a request error occurs.
	   *   @example Sending a request with a callback
	   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     request.send(function(err, data) { console.log(err, data); });
	   *   @example Sending a request with no callback (using event handlers)
	   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     request.on('complete', function(response) { ... }); // register a callback
	   *     request.send();
	   */
	  send: function send(callback) {
	    if (callback) {
	      this.on('complete', function (resp) {
	        callback.call(resp, resp.error, resp.data);
	      });
	    }
	    this.runTo();

	    return this.response;
	  },

	  /**
	   * @!method  promise()
	   *   Returns a 'thenable' promise.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function(data)
	   *     Called if the promise is fulfilled.
	   *     @param data [Object] the de-serialized data returned from the request.
	   *   @callback rejectedCallback function(error)
	   *     Called if the promise is rejected.
	   *     @param error [Error] the error object returned from the request.
	   *   @return [Promise] A promise that represents the state of the request.
	   *   @example Sending a request using promises.
	   *     var request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     var result = request.promise();
	   *     result.then(function(data) { ... }, function(error) { ... });
	   */

	  /**
	   * @api private
	   */
	  build: function build(callback) {
	    return this.runTo('send', callback);
	  },

	  /**
	   * @api private
	   */
	  runTo: function runTo(state, done) {
	    this._asm.runTo(state, done, this);
	    return this;
	  },

	  /**
	   * Aborts a request, emitting the error and complete events.
	   *
	   * @!macro nobrowser
	   * @example Aborting a request after sending
	   *   var params = {
	   *     Bucket: 'bucket', Key: 'key',
	   *     Body: new Buffer(1024 * 1024 * 5) // 5MB payload
	   *   };
	   *   var request = s3.putObject(params);
	   *   request.send(function (err, data) {
	   *     if (err) console.log("Error:", err.code, err.message);
	   *     else console.log(data);
	   *   });
	   *
	   *   // abort request in 1 second
	   *   setTimeout(request.abort.bind(request), 1000);
	   *
	   *   // prints "Error: RequestAbortedError Request aborted by user"
	   * @return [AWS.Request] the same request object, for chaining.
	   * @since v1.4.0
	   */
	  abort: function abort() {
	    this.removeAllListeners('validateResponse');
	    this.removeAllListeners('extractError');
	    this.on('validateResponse', function addAbortedError(resp) {
	      resp.error = AWS.util.error(new Error('Request aborted by user'), {
	         code: 'RequestAbortedError', retryable: false
	      });
	    });

	    if (this.httpRequest.stream) { // abort HTTP stream
	      this.httpRequest.stream.abort();
	      if (this.httpRequest._abortCallback) {
	         this.httpRequest._abortCallback();
	      } else {
	        this.removeAllListeners('send'); // haven't sent yet, so let's not
	      }
	    }

	    return this;
	  },

	  /**
	   * Iterates over each page of results given a pageable request, calling
	   * the provided callback with each page of data. After all pages have been
	   * retrieved, the callback is called with `null` data.
	   *
	   * @note This operation can generate multiple requests to a service.
	   * @example Iterating over multiple pages of objects in an S3 bucket
	   *   var pages = 1;
	   *   s3.listObjects().eachPage(function(err, data) {
	   *     if (err) return;
	   *     console.log("Page", pages++);
	   *     console.log(data);
	   *   });
	   * @example Iterating over multiple pages with an asynchronous callback
	   *   s3.listObjects(params).eachPage(function(err, data, done) {
	   *     doSomethingAsyncAndOrExpensive(function() {
	   *       // The next page of results isn't fetched until done is called
	   *       done();
	   *     });
	   *   });
	   * @callback callback function(err, data, [doneCallback])
	   *   Called with each page of resulting data from the request. If the
	   *   optional `doneCallback` is provided in the function, it must be called
	   *   when the callback is complete.
	   *
	   *   @param err [Error] an error object, if an error occurred.
	   *   @param data [Object] a single page of response data. If there is no
	   *     more data, this object will be `null`.
	   *   @param doneCallback [Function] an optional done callback. If this
	   *     argument is defined in the function declaration, it should be called
	   *     when the next page is ready to be retrieved. This is useful for
	   *     controlling serial pagination across asynchronous operations.
	   *   @return [Boolean] if the callback returns `false`, pagination will
	   *     stop.
	   *
	   * @see AWS.Request.eachItem
	   * @see AWS.Response.nextPage
	   * @since v1.4.0
	   */
	  eachPage: function eachPage(callback) {
	    // Make all callbacks async-ish
	    callback = AWS.util.fn.makeAsync(callback, 3);

	    function wrappedCallback(response) {
	      callback.call(response, response.error, response.data, function (result) {
	        if (result === false) return;

	        if (response.hasNextPage()) {
	          response.nextPage().on('complete', wrappedCallback).send();
	        } else {
	          callback.call(response, null, null, AWS.util.fn.noop);
	        }
	      });
	    }

	    this.on('complete', wrappedCallback).send();
	  },

	  /**
	   * Enumerates over individual items of a request, paging the responses if
	   * necessary.
	   *
	   * @api experimental
	   * @since v1.4.0
	   */
	  eachItem: function eachItem(callback) {
	    var self = this;
	    function wrappedCallback(err, data) {
	      if (err) return callback(err, null);
	      if (data === null) return callback(null, null);

	      var config = self.service.paginationConfig(self.operation);
	      var resultKey = config.resultKey;
	      if (Array.isArray(resultKey)) resultKey = resultKey[0];
	      var items = jmespath.search(data, resultKey);
	      var continueIteration = true;
	      AWS.util.arrayEach(items, function(item) {
	        continueIteration = callback(null, item);
	        if (continueIteration === false) {
	          return AWS.util.abort;
	        }
	      });
	      return continueIteration;
	    }

	    this.eachPage(wrappedCallback);
	  },

	  /**
	   * @return [Boolean] whether the operation can return multiple pages of
	   *   response data.
	   * @see AWS.Response.eachPage
	   * @since v1.4.0
	   */
	  isPageable: function isPageable() {
	    return this.service.paginationConfig(this.operation) ? true : false;
	  },

	  /**
	   * Converts the request object into a readable stream that
	   * can be read from or piped into a writable stream.
	   *
	   * @note The data read from a readable stream contains only
	   *   the raw HTTP body contents.
	   * @example Manually reading from a stream
	   *   request.createReadStream().on('data', function(data) {
	   *     console.log("Got data:", data.toString());
	   *   });
	   * @example Piping a request body into a file
	   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
	   *   s3.service.getObject(params).createReadStream().pipe(out);
	   * @return [Stream] the readable stream object that can be piped
	   *   or read from (by registering 'data' event listeners).
	   * @!macro nobrowser
	   */
	  createReadStream: function createReadStream() {
	    var streams = AWS.util.stream;
	    var req = this;
	    var stream = null;

	    if (AWS.HttpClient.streamsApiVersion === 2) {
	      stream = new streams.PassThrough();
	      req.send();
	    } else {
	      stream = new streams.Stream();
	      stream.readable = true;

	      stream.sent = false;
	      stream.on('newListener', function(event) {
	        if (!stream.sent && event === 'data') {
	          stream.sent = true;
	          process.nextTick(function() { req.send(); });
	        }
	      });
	    }

	    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
	      if (statusCode < 300) {
	        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
	        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
	        req.on('httpError', function streamHttpError(error) {
	          resp.error = error;
	          resp.error.retryable = false;
	        });

	        var shouldCheckContentLength = false;
	        var expectedLen;
	        if (req.httpRequest.method !== 'HEAD') {
	          expectedLen = parseInt(headers['content-length'], 10);
	        }
	        if (expectedLen !== undefined && !isNaN(expectedLen) && expectedLen >= 0) {
	          shouldCheckContentLength = true;
	          var receivedLen = 0;
	        }

	        var checkContentLengthAndEmit = function checkContentLengthAndEmit() {
	          if (shouldCheckContentLength && receivedLen !== expectedLen) {
	            stream.emit('error', AWS.util.error(
	              new Error('Stream content length mismatch. Received ' +
	                receivedLen + ' of ' + expectedLen + ' bytes.'),
	              { code: 'StreamContentLengthMismatch' }
	            ));
	          } else if (AWS.HttpClient.streamsApiVersion === 2) {
	            stream.end();
	          } else {
	            stream.emit('end')
	          }
	        }

	        var httpStream = resp.httpResponse.createUnbufferedStream();

	        if (AWS.HttpClient.streamsApiVersion === 2) {
	          if (shouldCheckContentLength) {
	            var lengthAccumulator = new streams.PassThrough();
	            lengthAccumulator._write = function(chunk) {
	              if (chunk && chunk.length) {
	                receivedLen += chunk.length;
	              }
	              return streams.PassThrough.prototype._write.apply(this, arguments);
	            };

	            lengthAccumulator.on('end', checkContentLengthAndEmit);
	            httpStream.pipe(lengthAccumulator).pipe(stream, { end: false });
	          } else {
	            httpStream.pipe(stream);
	          }
	        } else {

	          if (shouldCheckContentLength) {
	            httpStream.on('data', function(arg) {
	              if (arg && arg.length) {
	                receivedLen += arg.length;
	              }
	            });
	          }

	          httpStream.on('data', function(arg) {
	            stream.emit('data', arg);
	          });
	          httpStream.on('end', checkContentLengthAndEmit);
	        }

	        httpStream.on('error', function(err) {
	          shouldCheckContentLength = false;
	          stream.emit('error', err);
	        });
	      }
	    });

	    this.on('error', function(err) {
	      stream.emit('error', err);
	    });

	    return stream;
	  },

	  /**
	   * @param [Array,Response] args This should be the response object,
	   *   or an array of args to send to the event.
	   * @api private
	   */
	  emitEvent: function emit(eventName, args, done) {
	    if (typeof args === 'function') { done = args; args = null; }
	    if (!done) done = function() { };
	    if (!args) args = this.eventParameters(eventName, this.response);

	    var origEmit = AWS.SequentialExecutor.prototype.emit;
	    origEmit.call(this, eventName, args, function (err) {
	      if (err) this.response.error = err;
	      done.call(this, err);
	    });
	  },

	  /**
	   * @api private
	   */
	  eventParameters: function eventParameters(eventName) {
	    switch (eventName) {
	      case 'restart':
	      case 'validate':
	      case 'sign':
	      case 'build':
	      case 'afterValidate':
	      case 'afterBuild':
	        return [this];
	      case 'error':
	        return [this.response.error, this.response];
	      default:
	        return [this.response];
	    }
	  },

	  /**
	   * @api private
	   */
	  presign: function presign(expires, callback) {
	    if (!callback && typeof expires === 'function') {
	      callback = expires;
	      expires = null;
	    }
	    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
	  },

	  /**
	   * @api private
	   */
	  isPresigned: function isPresigned() {
	    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, 'presigned-expires');
	  },

	  /**
	   * @api private
	   */
	  toUnauthenticated: function toUnauthenticated() {
	    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
	    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
	    return this;
	  },

	  /**
	   * @api private
	   */
	  toGet: function toGet() {
	    if (this.service.api.protocol === 'query' ||
	        this.service.api.protocol === 'ec2') {
	      this.removeListener('build', this.buildAsGet);
	      this.addListener('build', this.buildAsGet);
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  buildAsGet: function buildAsGet(request) {
	    request.httpRequest.method = 'GET';
	    request.httpRequest.path = request.service.endpoint.path +
	                               '?' + request.httpRequest.body;
	    request.httpRequest.body = '';

	    // don't need these headers on a GET request
	    delete request.httpRequest.headers['Content-Length'];
	    delete request.httpRequest.headers['Content-Type'];
	  },

	  /**
	   * @api private
	   */
	  haltHandlersOnError: function haltHandlersOnError() {
	    this._haltHandlersOnError = true;
	  }
	});

	/**
	 * @api private
	 */
	AWS.Request.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.promise = function promise() {
	    var self = this;
	    return new PromiseDependency(function(resolve, reject) {
	      self.on('complete', function(resp) {
	        if (resp.error) {
	          reject(resp.error);
	        } else {
	          resolve(resp.data);
	        }
	      });
	      self.runTo();
	    });
	  };
	};

	/**
	 * @api private
	 */
	AWS.Request.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.promise;
	};

	AWS.util.addPromises(AWS.Request);

	AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 167 */
/***/ function(module, exports) {

	function AcceptorStateMachine(states, state) {
	  this.currentState = state || null;
	  this.states = states || {};
	}

	AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
	  if (typeof finalState === 'function') {
	    inputError = bindObject; bindObject = done;
	    done = finalState; finalState = null;
	  }

	  var self = this;
	  var state = self.states[self.currentState];
	  state.fn.call(bindObject || self, inputError, function(err) {
	    if (err) {
	      if (state.fail) self.currentState = state.fail;
	      else return done ? done.call(bindObject, err) : null;
	    } else {
	      if (state.accept) self.currentState = state.accept;
	      else return done ? done.call(bindObject) : null;
	    }
	    if (self.currentState === finalState) {
	      return done ? done.call(bindObject, err) : null;
	    }

	    self.runTo(finalState, done, bindObject, err);
	  });
	};

	AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
	  if (typeof acceptState === 'function') {
	    fn = acceptState; acceptState = null; failState = null;
	  } else if (typeof failState === 'function') {
	    fn = failState; failState = null;
	  }

	  if (!this.currentState) this.currentState = name;
	  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
	  return this;
	};

	module.exports = AcceptorStateMachine;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	(function(exports) {
	  "use strict";

	  function isArray(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Array]";
	    } else {
	      return false;
	    }
	  }

	  function isObject(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Object]";
	    } else {
	      return false;
	    }
	  }

	  function strictDeepEqual(first, second) {
	    // Check the scalar case first.
	    if (first === second) {
	      return true;
	    }

	    // Check if they are the same type.
	    var firstType = Object.prototype.toString.call(first);
	    if (firstType !== Object.prototype.toString.call(second)) {
	      return false;
	    }
	    // We know that first and second have the same type so we can just check the
	    // first type from now on.
	    if (isArray(first) === true) {
	      // Short circuit if they're not the same length;
	      if (first.length !== second.length) {
	        return false;
	      }
	      for (var i = 0; i < first.length; i++) {
	        if (strictDeepEqual(first[i], second[i]) === false) {
	          return false;
	        }
	      }
	      return true;
	    }
	    if (isObject(first) === true) {
	      // An object is equal if it has the same key/value pairs.
	      var keysSeen = {};
	      for (var key in first) {
	        if (hasOwnProperty.call(first, key)) {
	          if (strictDeepEqual(first[key], second[key]) === false) {
	            return false;
	          }
	          keysSeen[key] = true;
	        }
	      }
	      // Now check that there aren't any keys in second that weren't
	      // in first.
	      for (var key2 in second) {
	        if (hasOwnProperty.call(second, key2)) {
	          if (keysSeen[key2] !== true) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	    return false;
	  }

	  function isFalse(obj) {
	    // From the spec:
	    // A false value corresponds to the following values:
	    // Empty list
	    // Empty object
	    // Empty string
	    // False boolean
	    // null value

	    // First check the scalar values.
	    if (obj === "" || obj === false || obj === null) {
	        return true;
	    } else if (isArray(obj) && obj.length === 0) {
	        // Check for an empty array.
	        return true;
	    } else if (isObject(obj)) {
	        // Check for an empty object.
	        for (var key in obj) {
	            // If there are any keys, then
	            // the object is not empty so the object
	            // is not false.
	            if (obj.hasOwnProperty(key)) {
	              return false;
	            }
	        }
	        return true;
	    } else {
	        return false;
	    }
	  }

	  function objValues(obj) {
	    var keys = Object.keys(obj);
	    var values = [];
	    for (var i = 0; i < keys.length; i++) {
	      values.push(obj[keys[i]]);
	    }
	    return values;
	  }

	  function merge(a, b) {
	      var merged = {};
	      for (var key in a) {
	          merged[key] = a[key];
	      }
	      for (var key2 in b) {
	          merged[key2] = b[key2];
	      }
	      return merged;
	  }

	  var trimLeft;
	  if (typeof String.prototype.trimLeft === "function") {
	    trimLeft = function(str) {
	      return str.trimLeft();
	    };
	  } else {
	    trimLeft = function(str) {
	      return str.match(/^\s*(.*)/)[1];
	    };
	  }

	  // Type constants used to define functions.
	  var TYPE_NUMBER = 0;
	  var TYPE_ANY = 1;
	  var TYPE_STRING = 2;
	  var TYPE_ARRAY = 3;
	  var TYPE_OBJECT = 4;
	  var TYPE_BOOLEAN = 5;
	  var TYPE_EXPREF = 6;
	  var TYPE_NULL = 7;
	  var TYPE_ARRAY_NUMBER = 8;
	  var TYPE_ARRAY_STRING = 9;

	  var TOK_EOF = "EOF";
	  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
	  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
	  var TOK_RBRACKET = "Rbracket";
	  var TOK_RPAREN = "Rparen";
	  var TOK_COMMA = "Comma";
	  var TOK_COLON = "Colon";
	  var TOK_RBRACE = "Rbrace";
	  var TOK_NUMBER = "Number";
	  var TOK_CURRENT = "Current";
	  var TOK_EXPREF = "Expref";
	  var TOK_PIPE = "Pipe";
	  var TOK_OR = "Or";
	  var TOK_AND = "And";
	  var TOK_EQ = "EQ";
	  var TOK_GT = "GT";
	  var TOK_LT = "LT";
	  var TOK_GTE = "GTE";
	  var TOK_LTE = "LTE";
	  var TOK_NE = "NE";
	  var TOK_FLATTEN = "Flatten";
	  var TOK_STAR = "Star";
	  var TOK_FILTER = "Filter";
	  var TOK_DOT = "Dot";
	  var TOK_NOT = "Not";
	  var TOK_LBRACE = "Lbrace";
	  var TOK_LBRACKET = "Lbracket";
	  var TOK_LPAREN= "Lparen";
	  var TOK_LITERAL= "Literal";

	  // The "&", "[", "<", ">" tokens
	  // are not in basicToken because
	  // there are two token variants
	  // ("&&", "[?", "<=", ">=").  This is specially handled
	  // below.

	  var basicTokens = {
	    ".": TOK_DOT,
	    "*": TOK_STAR,
	    ",": TOK_COMMA,
	    ":": TOK_COLON,
	    "{": TOK_LBRACE,
	    "}": TOK_RBRACE,
	    "]": TOK_RBRACKET,
	    "(": TOK_LPAREN,
	    ")": TOK_RPAREN,
	    "@": TOK_CURRENT
	  };

	  var operatorStartToken = {
	      "<": true,
	      ">": true,
	      "=": true,
	      "!": true
	  };

	  var skipChars = {
	      " ": true,
	      "\t": true,
	      "\n": true
	  };


	  function isAlpha(ch) {
	      return (ch >= "a" && ch <= "z") ||
	             (ch >= "A" && ch <= "Z") ||
	             ch === "_";
	  }

	  function isNum(ch) {
	      return (ch >= "0" && ch <= "9") ||
	             ch === "-";
	  }
	  function isAlphaNum(ch) {
	      return (ch >= "a" && ch <= "z") ||
	             (ch >= "A" && ch <= "Z") ||
	             (ch >= "0" && ch <= "9") ||
	             ch === "_";
	  }

	  function Lexer() {
	  }
	  Lexer.prototype = {
	      tokenize: function(stream) {
	          var tokens = [];
	          this._current = 0;
	          var start;
	          var identifier;
	          var token;
	          while (this._current < stream.length) {
	              if (isAlpha(stream[this._current])) {
	                  start = this._current;
	                  identifier = this._consumeUnquotedIdentifier(stream);
	                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
	                               value: identifier,
	                               start: start});
	              } else if (basicTokens[stream[this._current]] !== undefined) {
	                  tokens.push({type: basicTokens[stream[this._current]],
	                              value: stream[this._current],
	                              start: this._current});
	                  this._current++;
	              } else if (isNum(stream[this._current])) {
	                  token = this._consumeNumber(stream);
	                  tokens.push(token);
	              } else if (stream[this._current] === "[") {
	                  // No need to increment this._current.  This happens
	                  // in _consumeLBracket
	                  token = this._consumeLBracket(stream);
	                  tokens.push(token);
	              } else if (stream[this._current] === "\"") {
	                  start = this._current;
	                  identifier = this._consumeQuotedIdentifier(stream);
	                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
	                               value: identifier,
	                               start: start});
	              } else if (stream[this._current] === "'") {
	                  start = this._current;
	                  identifier = this._consumeRawStringLiteral(stream);
	                  tokens.push({type: TOK_LITERAL,
	                               value: identifier,
	                               start: start});
	              } else if (stream[this._current] === "`") {
	                  start = this._current;
	                  var literal = this._consumeLiteral(stream);
	                  tokens.push({type: TOK_LITERAL,
	                               value: literal,
	                               start: start});
	              } else if (operatorStartToken[stream[this._current]] !== undefined) {
	                  tokens.push(this._consumeOperator(stream));
	              } else if (skipChars[stream[this._current]] !== undefined) {
	                  // Ignore whitespace.
	                  this._current++;
	              } else if (stream[this._current] === "&") {
	                  start = this._current;
	                  this._current++;
	                  if (stream[this._current] === "&") {
	                      this._current++;
	                      tokens.push({type: TOK_AND, value: "&&", start: start});
	                  } else {
	                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
	                  }
	              } else if (stream[this._current] === "|") {
	                  start = this._current;
	                  this._current++;
	                  if (stream[this._current] === "|") {
	                      this._current++;
	                      tokens.push({type: TOK_OR, value: "||", start: start});
	                  } else {
	                      tokens.push({type: TOK_PIPE, value: "|", start: start});
	                  }
	              } else {
	                  var error = new Error("Unknown character:" + stream[this._current]);
	                  error.name = "LexerError";
	                  throw error;
	              }
	          }
	          return tokens;
	      },

	      _consumeUnquotedIdentifier: function(stream) {
	          var start = this._current;
	          this._current++;
	          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
	              this._current++;
	          }
	          return stream.slice(start, this._current);
	      },

	      _consumeQuotedIdentifier: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (stream[this._current] !== "\"" && this._current < maxLength) {
	              // You can escape a double quote and you can escape an escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "\"")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          this._current++;
	          return JSON.parse(stream.slice(start, this._current));
	      },

	      _consumeRawStringLiteral: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (stream[this._current] !== "'" && this._current < maxLength) {
	              // You can escape a single quote and you can escape an escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "'")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          this._current++;
	          var literal = stream.slice(start + 1, this._current - 1);
	          return literal.replace("\\'", "'");
	      },

	      _consumeNumber: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (isNum(stream[this._current]) && this._current < maxLength) {
	              this._current++;
	          }
	          var value = parseInt(stream.slice(start, this._current));
	          return {type: TOK_NUMBER, value: value, start: start};
	      },

	      _consumeLBracket: function(stream) {
	          var start = this._current;
	          this._current++;
	          if (stream[this._current] === "?") {
	              this._current++;
	              return {type: TOK_FILTER, value: "[?", start: start};
	          } else if (stream[this._current] === "]") {
	              this._current++;
	              return {type: TOK_FLATTEN, value: "[]", start: start};
	          } else {
	              return {type: TOK_LBRACKET, value: "[", start: start};
	          }
	      },

	      _consumeOperator: function(stream) {
	          var start = this._current;
	          var startingChar = stream[start];
	          this._current++;
	          if (startingChar === "!") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_NE, value: "!=", start: start};
	              } else {
	                return {type: TOK_NOT, value: "!", start: start};
	              }
	          } else if (startingChar === "<") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_LTE, value: "<=", start: start};
	              } else {
	                  return {type: TOK_LT, value: "<", start: start};
	              }
	          } else if (startingChar === ">") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_GTE, value: ">=", start: start};
	              } else {
	                  return {type: TOK_GT, value: ">", start: start};
	              }
	          } else if (startingChar === "=") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_EQ, value: "==", start: start};
	              }
	          }
	      },

	      _consumeLiteral: function(stream) {
	          this._current++;
	          var start = this._current;
	          var maxLength = stream.length;
	          var literal;
	          while(stream[this._current] !== "`" && this._current < maxLength) {
	              // You can escape a literal char or you can escape the escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "`")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          var literalString = trimLeft(stream.slice(start, this._current));
	          literalString = literalString.replace("\\`", "`");
	          if (this._looksLikeJSON(literalString)) {
	              literal = JSON.parse(literalString);
	          } else {
	              // Try to JSON parse it as "<literal>"
	              literal = JSON.parse("\"" + literalString + "\"");
	          }
	          // +1 gets us to the ending "`", +1 to move on to the next char.
	          this._current++;
	          return literal;
	      },

	      _looksLikeJSON: function(literalString) {
	          var startingChars = "[{\"";
	          var jsonLiterals = ["true", "false", "null"];
	          var numberLooking = "-0123456789";

	          if (literalString === "") {
	              return false;
	          } else if (startingChars.indexOf(literalString[0]) >= 0) {
	              return true;
	          } else if (jsonLiterals.indexOf(literalString) >= 0) {
	              return true;
	          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
	              try {
	                  JSON.parse(literalString);
	                  return true;
	              } catch (ex) {
	                  return false;
	              }
	          } else {
	              return false;
	          }
	      }
	  };

	      var bindingPower = {};
	      bindingPower[TOK_EOF] = 0;
	      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
	      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
	      bindingPower[TOK_RBRACKET] = 0;
	      bindingPower[TOK_RPAREN] = 0;
	      bindingPower[TOK_COMMA] = 0;
	      bindingPower[TOK_RBRACE] = 0;
	      bindingPower[TOK_NUMBER] = 0;
	      bindingPower[TOK_CURRENT] = 0;
	      bindingPower[TOK_EXPREF] = 0;
	      bindingPower[TOK_PIPE] = 1;
	      bindingPower[TOK_OR] = 2;
	      bindingPower[TOK_AND] = 3;
	      bindingPower[TOK_EQ] = 5;
	      bindingPower[TOK_GT] = 5;
	      bindingPower[TOK_LT] = 5;
	      bindingPower[TOK_GTE] = 5;
	      bindingPower[TOK_LTE] = 5;
	      bindingPower[TOK_NE] = 5;
	      bindingPower[TOK_FLATTEN] = 9;
	      bindingPower[TOK_STAR] = 20;
	      bindingPower[TOK_FILTER] = 21;
	      bindingPower[TOK_DOT] = 40;
	      bindingPower[TOK_NOT] = 45;
	      bindingPower[TOK_LBRACE] = 50;
	      bindingPower[TOK_LBRACKET] = 55;
	      bindingPower[TOK_LPAREN] = 60;

	  function Parser() {
	  }

	  Parser.prototype = {
	      parse: function(expression) {
	          this._loadTokens(expression);
	          this.index = 0;
	          var ast = this.expression(0);
	          if (this._lookahead(0) !== TOK_EOF) {
	              var t = this._lookaheadToken(0);
	              var error = new Error(
	                  "Unexpected token type: " + t.type + ", value: " + t.value);
	              error.name = "ParserError";
	              throw error;
	          }
	          return ast;
	      },

	      _loadTokens: function(expression) {
	          var lexer = new Lexer();
	          var tokens = lexer.tokenize(expression);
	          tokens.push({type: TOK_EOF, value: "", start: expression.length});
	          this.tokens = tokens;
	      },

	      expression: function(rbp) {
	          var leftToken = this._lookaheadToken(0);
	          this._advance();
	          var left = this.nud(leftToken);
	          var currentToken = this._lookahead(0);
	          while (rbp < bindingPower[currentToken]) {
	              this._advance();
	              left = this.led(currentToken, left);
	              currentToken = this._lookahead(0);
	          }
	          return left;
	      },

	      _lookahead: function(number) {
	          return this.tokens[this.index + number].type;
	      },

	      _lookaheadToken: function(number) {
	          return this.tokens[this.index + number];
	      },

	      _advance: function() {
	          this.index++;
	      },

	      nud: function(token) {
	        var left;
	        var right;
	        var expression;
	        switch (token.type) {
	          case TOK_LITERAL:
	            return {type: "Literal", value: token.value};
	          case TOK_UNQUOTEDIDENTIFIER:
	            return {type: "Field", name: token.value};
	          case TOK_QUOTEDIDENTIFIER:
	            var node = {type: "Field", name: token.value};
	            if (this._lookahead(0) === TOK_LPAREN) {
	                throw new Error("Quoted identifier not allowed for function names.");
	            } else {
	                return node;
	            }
	            break;
	          case TOK_NOT:
	            right = this.expression(bindingPower.Not);
	            return {type: "NotExpression", children: [right]};
	          case TOK_STAR:
	            left = {type: "Identity"};
	            right = null;
	            if (this._lookahead(0) === TOK_RBRACKET) {
	                // This can happen in a multiselect,
	                // [a, b, *]
	                right = {type: "Identity"};
	            } else {
	                right = this._parseProjectionRHS(bindingPower.Star);
	            }
	            return {type: "ValueProjection", children: [left, right]};
	          case TOK_FILTER:
	            return this.led(token.type, {type: "Identity"});
	          case TOK_LBRACE:
	            return this._parseMultiselectHash();
	          case TOK_FLATTEN:
	            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
	            right = this._parseProjectionRHS(bindingPower.Flatten);
	            return {type: "Projection", children: [left, right]};
	          case TOK_LBRACKET:
	            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
	                right = this._parseIndexExpression();
	                return this._projectIfSlice({type: "Identity"}, right);
	            } else if (this._lookahead(0) === TOK_STAR &&
	                       this._lookahead(1) === TOK_RBRACKET) {
	                this._advance();
	                this._advance();
	                right = this._parseProjectionRHS(bindingPower.Star);
	                return {type: "Projection",
	                        children: [{type: "Identity"}, right]};
	            } else {
	                return this._parseMultiselectList();
	            }
	            break;
	          case TOK_CURRENT:
	            return {type: TOK_CURRENT};
	          case TOK_EXPREF:
	            expression = this.expression(bindingPower.Expref);
	            return {type: "ExpressionReference", children: [expression]};
	          case TOK_LPAREN:
	            var args = [];
	            while (this._lookahead(0) !== TOK_RPAREN) {
	              if (this._lookahead(0) === TOK_CURRENT) {
	                expression = {type: TOK_CURRENT};
	                this._advance();
	              } else {
	                expression = this.expression(0);
	              }
	              args.push(expression);
	            }
	            this._match(TOK_RPAREN);
	            return args[0];
	          default:
	            this._errorToken(token);
	        }
	      },

	      led: function(tokenName, left) {
	        var right;
	        switch(tokenName) {
	          case TOK_DOT:
	            var rbp = bindingPower.Dot;
	            if (this._lookahead(0) !== TOK_STAR) {
	                right = this._parseDotRHS(rbp);
	                return {type: "Subexpression", children: [left, right]};
	            } else {
	                // Creating a projection.
	                this._advance();
	                right = this._parseProjectionRHS(rbp);
	                return {type: "ValueProjection", children: [left, right]};
	            }
	            break;
	          case TOK_PIPE:
	            right = this.expression(bindingPower.Pipe);
	            return {type: TOK_PIPE, children: [left, right]};
	          case TOK_OR:
	            right = this.expression(bindingPower.Or);
	            return {type: "OrExpression", children: [left, right]};
	          case TOK_AND:
	            right = this.expression(bindingPower.And);
	            return {type: "AndExpression", children: [left, right]};
	          case TOK_LPAREN:
	            var name = left.name;
	            var args = [];
	            var expression, node;
	            while (this._lookahead(0) !== TOK_RPAREN) {
	              if (this._lookahead(0) === TOK_CURRENT) {
	                expression = {type: TOK_CURRENT};
	                this._advance();
	              } else {
	                expression = this.expression(0);
	              }
	              if (this._lookahead(0) === TOK_COMMA) {
	                this._match(TOK_COMMA);
	              }
	              args.push(expression);
	            }
	            this._match(TOK_RPAREN);
	            node = {type: "Function", name: name, children: args};
	            return node;
	          case TOK_FILTER:
	            var condition = this.expression(0);
	            this._match(TOK_RBRACKET);
	            if (this._lookahead(0) === TOK_FLATTEN) {
	              right = {type: "Identity"};
	            } else {
	              right = this._parseProjectionRHS(bindingPower.Filter);
	            }
	            return {type: "FilterProjection", children: [left, right, condition]};
	          case TOK_FLATTEN:
	            var leftNode = {type: TOK_FLATTEN, children: [left]};
	            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
	            return {type: "Projection", children: [leftNode, rightNode]};
	          case TOK_EQ:
	          case TOK_NE:
	          case TOK_GT:
	          case TOK_GTE:
	          case TOK_LT:
	          case TOK_LTE:
	            return this._parseComparator(left, tokenName);
	          case TOK_LBRACKET:
	            var token = this._lookaheadToken(0);
	            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
	                right = this._parseIndexExpression();
	                return this._projectIfSlice(left, right);
	            } else {
	                this._match(TOK_STAR);
	                this._match(TOK_RBRACKET);
	                right = this._parseProjectionRHS(bindingPower.Star);
	                return {type: "Projection", children: [left, right]};
	            }
	            break;
	          default:
	            this._errorToken(this._lookaheadToken(0));
	        }
	      },

	      _match: function(tokenType) {
	          if (this._lookahead(0) === tokenType) {
	              this._advance();
	          } else {
	              var t = this._lookaheadToken(0);
	              var error = new Error("Expected " + tokenType + ", got: " + t.type);
	              error.name = "ParserError";
	              throw error;
	          }
	      },

	      _errorToken: function(token) {
	          var error = new Error("Invalid token (" +
	                                token.type + "): \"" +
	                                token.value + "\"");
	          error.name = "ParserError";
	          throw error;
	      },


	      _parseIndexExpression: function() {
	          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
	              return this._parseSliceExpression();
	          } else {
	              var node = {
	                  type: "Index",
	                  value: this._lookaheadToken(0).value};
	              this._advance();
	              this._match(TOK_RBRACKET);
	              return node;
	          }
	      },

	      _projectIfSlice: function(left, right) {
	          var indexExpr = {type: "IndexExpression", children: [left, right]};
	          if (right.type === "Slice") {
	              return {
	                  type: "Projection",
	                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
	              };
	          } else {
	              return indexExpr;
	          }
	      },

	      _parseSliceExpression: function() {
	          // [start:end:step] where each part is optional, as well as the last
	          // colon.
	          var parts = [null, null, null];
	          var index = 0;
	          var currentToken = this._lookahead(0);
	          while (currentToken !== TOK_RBRACKET && index < 3) {
	              if (currentToken === TOK_COLON) {
	                  index++;
	                  this._advance();
	              } else if (currentToken === TOK_NUMBER) {
	                  parts[index] = this._lookaheadToken(0).value;
	                  this._advance();
	              } else {
	                  var t = this._lookahead(0);
	                  var error = new Error("Syntax error, unexpected token: " +
	                                        t.value + "(" + t.type + ")");
	                  error.name = "Parsererror";
	                  throw error;
	              }
	              currentToken = this._lookahead(0);
	          }
	          this._match(TOK_RBRACKET);
	          return {
	              type: "Slice",
	              children: parts
	          };
	      },

	      _parseComparator: function(left, comparator) {
	        var right = this.expression(bindingPower[comparator]);
	        return {type: "Comparator", name: comparator, children: [left, right]};
	      },

	      _parseDotRHS: function(rbp) {
	          var lookahead = this._lookahead(0);
	          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
	          if (exprTokens.indexOf(lookahead) >= 0) {
	              return this.expression(rbp);
	          } else if (lookahead === TOK_LBRACKET) {
	              this._match(TOK_LBRACKET);
	              return this._parseMultiselectList();
	          } else if (lookahead === TOK_LBRACE) {
	              this._match(TOK_LBRACE);
	              return this._parseMultiselectHash();
	          }
	      },

	      _parseProjectionRHS: function(rbp) {
	          var right;
	          if (bindingPower[this._lookahead(0)] < 10) {
	              right = {type: "Identity"};
	          } else if (this._lookahead(0) === TOK_LBRACKET) {
	              right = this.expression(rbp);
	          } else if (this._lookahead(0) === TOK_FILTER) {
	              right = this.expression(rbp);
	          } else if (this._lookahead(0) === TOK_DOT) {
	              this._match(TOK_DOT);
	              right = this._parseDotRHS(rbp);
	          } else {
	              var t = this._lookaheadToken(0);
	              var error = new Error("Sytanx error, unexpected token: " +
	                                    t.value + "(" + t.type + ")");
	              error.name = "ParserError";
	              throw error;
	          }
	          return right;
	      },

	      _parseMultiselectList: function() {
	          var expressions = [];
	          while (this._lookahead(0) !== TOK_RBRACKET) {
	              var expression = this.expression(0);
	              expressions.push(expression);
	              if (this._lookahead(0) === TOK_COMMA) {
	                  this._match(TOK_COMMA);
	                  if (this._lookahead(0) === TOK_RBRACKET) {
	                    throw new Error("Unexpected token Rbracket");
	                  }
	              }
	          }
	          this._match(TOK_RBRACKET);
	          return {type: "MultiSelectList", children: expressions};
	      },

	      _parseMultiselectHash: function() {
	        var pairs = [];
	        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
	        var keyToken, keyName, value, node;
	        for (;;) {
	          keyToken = this._lookaheadToken(0);
	          if (identifierTypes.indexOf(keyToken.type) < 0) {
	            throw new Error("Expecting an identifier token, got: " +
	                            keyToken.type);
	          }
	          keyName = keyToken.value;
	          this._advance();
	          this._match(TOK_COLON);
	          value = this.expression(0);
	          node = {type: "KeyValuePair", name: keyName, value: value};
	          pairs.push(node);
	          if (this._lookahead(0) === TOK_COMMA) {
	            this._match(TOK_COMMA);
	          } else if (this._lookahead(0) === TOK_RBRACE) {
	            this._match(TOK_RBRACE);
	            break;
	          }
	        }
	        return {type: "MultiSelectHash", children: pairs};
	      }
	  };


	  function TreeInterpreter(runtime) {
	    this.runtime = runtime;
	  }

	  TreeInterpreter.prototype = {
	      search: function(node, value) {
	          return this.visit(node, value);
	      },

	      visit: function(node, value) {
	          var matched, current, result, first, second, field, left, right, collected, i;
	          switch (node.type) {
	            case "Field":
	              if (value === null ) {
	                  return null;
	              } else if (isObject(value)) {
	                  field = value[node.name];
	                  if (field === undefined) {
	                      return null;
	                  } else {
	                      return field;
	                  }
	              } else {
	                return null;
	              }
	              break;
	            case "Subexpression":
	              result = this.visit(node.children[0], value);
	              for (i = 1; i < node.children.length; i++) {
	                  result = this.visit(node.children[1], result);
	                  if (result === null) {
	                      return null;
	                  }
	              }
	              return result;
	            case "IndexExpression":
	              left = this.visit(node.children[0], value);
	              right = this.visit(node.children[1], left);
	              return right;
	            case "Index":
	              if (!isArray(value)) {
	                return null;
	              }
	              var index = node.value;
	              if (index < 0) {
	                index = value.length + index;
	              }
	              result = value[index];
	              if (result === undefined) {
	                result = null;
	              }
	              return result;
	            case "Slice":
	              if (!isArray(value)) {
	                return null;
	              }
	              var sliceParams = node.children.slice(0);
	              var computed = this.computeSliceParams(value.length, sliceParams);
	              var start = computed[0];
	              var stop = computed[1];
	              var step = computed[2];
	              result = [];
	              if (step > 0) {
	                  for (i = start; i < stop; i += step) {
	                      result.push(value[i]);
	                  }
	              } else {
	                  for (i = start; i > stop; i += step) {
	                      result.push(value[i]);
	                  }
	              }
	              return result;
	            case "Projection":
	              // Evaluate left child.
	              var base = this.visit(node.children[0], value);
	              if (!isArray(base)) {
	                return null;
	              }
	              collected = [];
	              for (i = 0; i < base.length; i++) {
	                current = this.visit(node.children[1], base[i]);
	                if (current !== null) {
	                  collected.push(current);
	                }
	              }
	              return collected;
	            case "ValueProjection":
	              // Evaluate left child.
	              base = this.visit(node.children[0], value);
	              if (!isObject(base)) {
	                return null;
	              }
	              collected = [];
	              var values = objValues(base);
	              for (i = 0; i < values.length; i++) {
	                current = this.visit(node.children[1], values[i]);
	                if (current !== null) {
	                  collected.push(current);
	                }
	              }
	              return collected;
	            case "FilterProjection":
	              base = this.visit(node.children[0], value);
	              if (!isArray(base)) {
	                return null;
	              }
	              var filtered = [];
	              var finalResults = [];
	              for (i = 0; i < base.length; i++) {
	                matched = this.visit(node.children[2], base[i]);
	                if (!isFalse(matched)) {
	                  filtered.push(base[i]);
	                }
	              }
	              for (var j = 0; j < filtered.length; j++) {
	                current = this.visit(node.children[1], filtered[j]);
	                if (current !== null) {
	                  finalResults.push(current);
	                }
	              }
	              return finalResults;
	            case "Comparator":
	              first = this.visit(node.children[0], value);
	              second = this.visit(node.children[1], value);
	              switch(node.name) {
	                case TOK_EQ:
	                  result = strictDeepEqual(first, second);
	                  break;
	                case TOK_NE:
	                  result = !strictDeepEqual(first, second);
	                  break;
	                case TOK_GT:
	                  result = first > second;
	                  break;
	                case TOK_GTE:
	                  result = first >= second;
	                  break;
	                case TOK_LT:
	                  result = first < second;
	                  break;
	                case TOK_LTE:
	                  result = first <= second;
	                  break;
	                default:
	                  throw new Error("Unknown comparator: " + node.name);
	              }
	              return result;
	            case TOK_FLATTEN:
	              var original = this.visit(node.children[0], value);
	              if (!isArray(original)) {
	                return null;
	              }
	              var merged = [];
	              for (i = 0; i < original.length; i++) {
	                current = original[i];
	                if (isArray(current)) {
	                  merged.push.apply(merged, current);
	                } else {
	                  merged.push(current);
	                }
	              }
	              return merged;
	            case "Identity":
	              return value;
	            case "MultiSelectList":
	              if (value === null) {
	                return null;
	              }
	              collected = [];
	              for (i = 0; i < node.children.length; i++) {
	                  collected.push(this.visit(node.children[i], value));
	              }
	              return collected;
	            case "MultiSelectHash":
	              if (value === null) {
	                return null;
	              }
	              collected = {};
	              var child;
	              for (i = 0; i < node.children.length; i++) {
	                child = node.children[i];
	                collected[child.name] = this.visit(child.value, value);
	              }
	              return collected;
	            case "OrExpression":
	              matched = this.visit(node.children[0], value);
	              if (isFalse(matched)) {
	                  matched = this.visit(node.children[1], value);
	              }
	              return matched;
	            case "AndExpression":
	              first = this.visit(node.children[0], value);

	              if (isFalse(first) === true) {
	                return first;
	              }
	              return this.visit(node.children[1], value);
	            case "NotExpression":
	              first = this.visit(node.children[0], value);
	              return isFalse(first);
	            case "Literal":
	              return node.value;
	            case TOK_PIPE:
	              left = this.visit(node.children[0], value);
	              return this.visit(node.children[1], left);
	            case TOK_CURRENT:
	              return value;
	            case "Function":
	              var resolvedArgs = [];
	              for (i = 0; i < node.children.length; i++) {
	                  resolvedArgs.push(this.visit(node.children[i], value));
	              }
	              return this.runtime.callFunction(node.name, resolvedArgs);
	            case "ExpressionReference":
	              var refNode = node.children[0];
	              // Tag the node with a specific attribute so the type
	              // checker verify the type.
	              refNode.jmespathType = TOK_EXPREF;
	              return refNode;
	            default:
	              throw new Error("Unknown node type: " + node.type);
	          }
	      },

	      computeSliceParams: function(arrayLength, sliceParams) {
	        var start = sliceParams[0];
	        var stop = sliceParams[1];
	        var step = sliceParams[2];
	        var computed = [null, null, null];
	        if (step === null) {
	          step = 1;
	        } else if (step === 0) {
	          var error = new Error("Invalid slice, step cannot be 0");
	          error.name = "RuntimeError";
	          throw error;
	        }
	        var stepValueNegative = step < 0 ? true : false;

	        if (start === null) {
	            start = stepValueNegative ? arrayLength - 1 : 0;
	        } else {
	            start = this.capSliceRange(arrayLength, start, step);
	        }

	        if (stop === null) {
	            stop = stepValueNegative ? -1 : arrayLength;
	        } else {
	            stop = this.capSliceRange(arrayLength, stop, step);
	        }
	        computed[0] = start;
	        computed[1] = stop;
	        computed[2] = step;
	        return computed;
	      },

	      capSliceRange: function(arrayLength, actualValue, step) {
	          if (actualValue < 0) {
	              actualValue += arrayLength;
	              if (actualValue < 0) {
	                  actualValue = step < 0 ? -1 : 0;
	              }
	          } else if (actualValue >= arrayLength) {
	              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
	          }
	          return actualValue;
	      }

	  };

	  function Runtime(interpreter) {
	    this._interpreter = interpreter;
	    this.functionTable = {
	        // name: [function, <signature>]
	        // The <signature> can be:
	        //
	        // {
	        //   args: [[type1, type2], [type1, type2]],
	        //   variadic: true|false
	        // }
	        //
	        // Each arg in the arg list is a list of valid types
	        // (if the function is overloaded and supports multiple
	        // types.  If the type is "any" then no type checking
	        // occurs on the argument.  Variadic is optional
	        // and if not provided is assumed to be false.
	        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
	        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
	        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
	        contains: {
	            _func: this._functionContains,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
	                        {types: [TYPE_ANY]}]},
	        "ends_with": {
	            _func: this._functionEndsWith,
	            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
	        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
	        length: {
	            _func: this._functionLength,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
	        map: {
	            _func: this._functionMap,
	            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
	        max: {
	            _func: this._functionMax,
	            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
	        "merge": {
	            _func: this._functionMerge,
	            _signature: [{types: [TYPE_OBJECT], variadic: true}]
	        },
	        "max_by": {
	          _func: this._functionMaxBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
	        "starts_with": {
	            _func: this._functionStartsWith,
	            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
	        min: {
	            _func: this._functionMin,
	            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
	        "min_by": {
	          _func: this._functionMinBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
	        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
	        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
	        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
	        "sort_by": {
	          _func: this._functionSortBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        join: {
	            _func: this._functionJoin,
	            _signature: [
	                {types: [TYPE_STRING]},
	                {types: [TYPE_ARRAY_STRING]}
	            ]
	        },
	        reverse: {
	            _func: this._functionReverse,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
	        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
	        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
	        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
	        "not_null": {
	            _func: this._functionNotNull,
	            _signature: [{types: [TYPE_ANY], variadic: true}]
	        }
	    };
	  }

	  Runtime.prototype = {
	    callFunction: function(name, resolvedArgs) {
	      var functionEntry = this.functionTable[name];
	      if (functionEntry === undefined) {
	          throw new Error("Unknown function: " + name + "()");
	      }
	      this._validateArgs(name, resolvedArgs, functionEntry._signature);
	      return functionEntry._func.call(this, resolvedArgs);
	    },

	    _validateArgs: function(name, args, signature) {
	        // Validating the args requires validating
	        // the correct arity and the correct type of each arg.
	        // If the last argument is declared as variadic, then we need
	        // a minimum number of args to be required.  Otherwise it has to
	        // be an exact amount.
	        var pluralized;
	        if (signature[signature.length - 1].variadic) {
	            if (args.length < signature.length) {
	                pluralized = signature.length === 1 ? " argument" : " arguments";
	                throw new Error("ArgumentError: " + name + "() " +
	                                "takes at least" + signature.length + pluralized +
	                                " but received " + args.length);
	            }
	        } else if (args.length !== signature.length) {
	            pluralized = signature.length === 1 ? " argument" : " arguments";
	            throw new Error("ArgumentError: " + name + "() " +
	                            "takes " + signature.length + pluralized +
	                            " but received " + args.length);
	        }
	        var currentSpec;
	        var actualType;
	        var typeMatched;
	        for (var i = 0; i < signature.length; i++) {
	            typeMatched = false;
	            currentSpec = signature[i].types;
	            actualType = this._getTypeName(args[i]);
	            for (var j = 0; j < currentSpec.length; j++) {
	                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
	                    typeMatched = true;
	                    break;
	                }
	            }
	            if (!typeMatched) {
	                throw new Error("TypeError: " + name + "() " +
	                                "expected argument " + (i + 1) +
	                                " to be type " + currentSpec +
	                                " but received type " + actualType +
	                                " instead.");
	            }
	        }
	    },

	    _typeMatches: function(actual, expected, argValue) {
	        if (expected === TYPE_ANY) {
	            return true;
	        }
	        if (expected === TYPE_ARRAY_STRING ||
	            expected === TYPE_ARRAY_NUMBER ||
	            expected === TYPE_ARRAY) {
	            // The expected type can either just be array,
	            // or it can require a specific subtype (array of numbers).
	            //
	            // The simplest case is if "array" with no subtype is specified.
	            if (expected === TYPE_ARRAY) {
	                return actual === TYPE_ARRAY;
	            } else if (actual === TYPE_ARRAY) {
	                // Otherwise we need to check subtypes.
	                // I think this has potential to be improved.
	                var subtype;
	                if (expected === TYPE_ARRAY_NUMBER) {
	                  subtype = TYPE_NUMBER;
	                } else if (expected === TYPE_ARRAY_STRING) {
	                  subtype = TYPE_STRING;
	                }
	                for (var i = 0; i < argValue.length; i++) {
	                    if (!this._typeMatches(
	                            this._getTypeName(argValue[i]), subtype,
	                                             argValue[i])) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	        } else {
	            return actual === expected;
	        }
	    },
	    _getTypeName: function(obj) {
	        switch (Object.prototype.toString.call(obj)) {
	            case "[object String]":
	              return TYPE_STRING;
	            case "[object Number]":
	              return TYPE_NUMBER;
	            case "[object Array]":
	              return TYPE_ARRAY;
	            case "[object Boolean]":
	              return TYPE_BOOLEAN;
	            case "[object Null]":
	              return TYPE_NULL;
	            case "[object Object]":
	              // Check if it's an expref.  If it has, it's been
	              // tagged with a jmespathType attr of 'Expref';
	              if (obj.jmespathType === TOK_EXPREF) {
	                return TYPE_EXPREF;
	              } else {
	                return TYPE_OBJECT;
	              }
	        }
	    },

	    _functionStartsWith: function(resolvedArgs) {
	        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
	    },

	    _functionEndsWith: function(resolvedArgs) {
	        var searchStr = resolvedArgs[0];
	        var suffix = resolvedArgs[1];
	        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
	    },

	    _functionReverse: function(resolvedArgs) {
	        var typeName = this._getTypeName(resolvedArgs[0]);
	        if (typeName === TYPE_STRING) {
	          var originalStr = resolvedArgs[0];
	          var reversedStr = "";
	          for (var i = originalStr.length - 1; i >= 0; i--) {
	              reversedStr += originalStr[i];
	          }
	          return reversedStr;
	        } else {
	          var reversedArray = resolvedArgs[0].slice(0);
	          reversedArray.reverse();
	          return reversedArray;
	        }
	    },

	    _functionAbs: function(resolvedArgs) {
	      return Math.abs(resolvedArgs[0]);
	    },

	    _functionCeil: function(resolvedArgs) {
	        return Math.ceil(resolvedArgs[0]);
	    },

	    _functionAvg: function(resolvedArgs) {
	        var sum = 0;
	        var inputArray = resolvedArgs[0];
	        for (var i = 0; i < inputArray.length; i++) {
	            sum += inputArray[i];
	        }
	        return sum / inputArray.length;
	    },

	    _functionContains: function(resolvedArgs) {
	        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
	    },

	    _functionFloor: function(resolvedArgs) {
	        return Math.floor(resolvedArgs[0]);
	    },

	    _functionLength: function(resolvedArgs) {
	       if (!isObject(resolvedArgs[0])) {
	         return resolvedArgs[0].length;
	       } else {
	         // As far as I can tell, there's no way to get the length
	         // of an object without O(n) iteration through the object.
	         return Object.keys(resolvedArgs[0]).length;
	       }
	    },

	    _functionMap: function(resolvedArgs) {
	      var mapped = [];
	      var interpreter = this._interpreter;
	      var exprefNode = resolvedArgs[0];
	      var elements = resolvedArgs[1];
	      for (var i = 0; i < elements.length; i++) {
	          mapped.push(interpreter.visit(exprefNode, elements[i]));
	      }
	      return mapped;
	    },

	    _functionMerge: function(resolvedArgs) {
	      var merged = {};
	      for (var i = 0; i < resolvedArgs.length; i++) {
	        var current = resolvedArgs[i];
	        for (var key in current) {
	          merged[key] = current[key];
	        }
	      }
	      return merged;
	    },

	    _functionMax: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this._getTypeName(resolvedArgs[0][0]);
	        if (typeName === TYPE_NUMBER) {
	          return Math.max.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var maxElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (maxElement.localeCompare(elements[i]) < 0) {
	                  maxElement = elements[i];
	              }
	          }
	          return maxElement;
	        }
	      } else {
	          return null;
	      }
	    },

	    _functionMin: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this._getTypeName(resolvedArgs[0][0]);
	        if (typeName === TYPE_NUMBER) {
	          return Math.min.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var minElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (elements[i].localeCompare(minElement) < 0) {
	                  minElement = elements[i];
	              }
	          }
	          return minElement;
	        }
	      } else {
	        return null;
	      }
	    },

	    _functionSum: function(resolvedArgs) {
	      var sum = 0;
	      var listToSum = resolvedArgs[0];
	      for (var i = 0; i < listToSum.length; i++) {
	        sum += listToSum[i];
	      }
	      return sum;
	    },

	    _functionType: function(resolvedArgs) {
	        switch (this._getTypeName(resolvedArgs[0])) {
	          case TYPE_NUMBER:
	            return "number";
	          case TYPE_STRING:
	            return "string";
	          case TYPE_ARRAY:
	            return "array";
	          case TYPE_OBJECT:
	            return "object";
	          case TYPE_BOOLEAN:
	            return "boolean";
	          case TYPE_EXPREF:
	            return "expref";
	          case TYPE_NULL:
	            return "null";
	        }
	    },

	    _functionKeys: function(resolvedArgs) {
	        return Object.keys(resolvedArgs[0]);
	    },

	    _functionValues: function(resolvedArgs) {
	        var obj = resolvedArgs[0];
	        var keys = Object.keys(obj);
	        var values = [];
	        for (var i = 0; i < keys.length; i++) {
	            values.push(obj[keys[i]]);
	        }
	        return values;
	    },

	    _functionJoin: function(resolvedArgs) {
	        var joinChar = resolvedArgs[0];
	        var listJoin = resolvedArgs[1];
	        return listJoin.join(joinChar);
	    },

	    _functionToArray: function(resolvedArgs) {
	        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
	            return resolvedArgs[0];
	        } else {
	            return [resolvedArgs[0]];
	        }
	    },

	    _functionToString: function(resolvedArgs) {
	        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
	            return resolvedArgs[0];
	        } else {
	            return JSON.stringify(resolvedArgs[0]);
	        }
	    },

	    _functionToNumber: function(resolvedArgs) {
	        var typeName = this._getTypeName(resolvedArgs[0]);
	        var convertedValue;
	        if (typeName === TYPE_NUMBER) {
	            return resolvedArgs[0];
	        } else if (typeName === TYPE_STRING) {
	            convertedValue = +resolvedArgs[0];
	            if (!isNaN(convertedValue)) {
	                return convertedValue;
	            }
	        }
	        return null;
	    },

	    _functionNotNull: function(resolvedArgs) {
	        for (var i = 0; i < resolvedArgs.length; i++) {
	            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
	                return resolvedArgs[i];
	            }
	        }
	        return null;
	    },

	    _functionSort: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        sortedArray.sort();
	        return sortedArray;
	    },

	    _functionSortBy: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        if (sortedArray.length === 0) {
	            return sortedArray;
	        }
	        var interpreter = this._interpreter;
	        var exprefNode = resolvedArgs[1];
	        var requiredType = this._getTypeName(
	            interpreter.visit(exprefNode, sortedArray[0]));
	        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
	            throw new Error("TypeError");
	        }
	        var that = this;
	        // In order to get a stable sort out of an unstable
	        // sort algorithm, we decorate/sort/undecorate (DSU)
	        // by creating a new list of [index, element] pairs.
	        // In the cmp function, if the evaluated elements are
	        // equal, then the index will be used as the tiebreaker.
	        // After the decorated list has been sorted, it will be
	        // undecorated to extract the original elements.
	        var decorated = [];
	        for (var i = 0; i < sortedArray.length; i++) {
	          decorated.push([i, sortedArray[i]]);
	        }
	        decorated.sort(function(a, b) {
	          var exprA = interpreter.visit(exprefNode, a[1]);
	          var exprB = interpreter.visit(exprefNode, b[1]);
	          if (that._getTypeName(exprA) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that._getTypeName(exprA));
	          } else if (that._getTypeName(exprB) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that._getTypeName(exprB));
	          }
	          if (exprA > exprB) {
	            return 1;
	          } else if (exprA < exprB) {
	            return -1;
	          } else {
	            // If they're equal compare the items by their
	            // order to maintain relative order of equal keys
	            // (i.e. to get a stable sort).
	            return a[0] - b[0];
	          }
	        });
	        // Undecorate: extract out the original list elements.
	        for (var j = 0; j < decorated.length; j++) {
	          sortedArray[j] = decorated[j][1];
	        }
	        return sortedArray;
	    },

	    _functionMaxBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
	      var maxNumber = -Infinity;
	      var maxRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current > maxNumber) {
	          maxNumber = current;
	          maxRecord = resolvedArray[i];
	        }
	      }
	      return maxRecord;
	    },

	    _functionMinBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
	      var minNumber = Infinity;
	      var minRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current < minNumber) {
	          minNumber = current;
	          minRecord = resolvedArray[i];
	        }
	      }
	      return minRecord;
	    },

	    createKeyFunction: function(exprefNode, allowedTypes) {
	      var that = this;
	      var interpreter = this._interpreter;
	      var keyFunc = function(x) {
	        var current = interpreter.visit(exprefNode, x);
	        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
	          var msg = "TypeError: expected one of " + allowedTypes +
	                    ", received " + that._getTypeName(current);
	          throw new Error(msg);
	        }
	        return current;
	      };
	      return keyFunc;
	    }

	  };

	  function compile(stream) {
	    var parser = new Parser();
	    var ast = parser.parse(stream);
	    return ast;
	  }

	  function tokenize(stream) {
	      var lexer = new Lexer();
	      return lexer.tokenize(stream);
	  }

	  function search(data, expression) {
	      var parser = new Parser();
	      // This needs to be improved.  Both the interpreter and runtime depend on
	      // each other.  The runtime needs the interpreter to support exprefs.
	      // There's likely a clean way to avoid the cyclic dependency.
	      var runtime = new Runtime();
	      var interpreter = new TreeInterpreter(runtime);
	      runtime._interpreter = interpreter;
	      var node = parser.parse(expression);
	      return interpreter.search(node, data);
	  }

	  exports.tokenize = tokenize;
	  exports.compile = compile;
	  exports.search = search;
	  exports.strictDeepEqual = strictDeepEqual;
	})( false ? this.jmespath = {} : exports);


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;
	var jmespath = __webpack_require__(168);

	/**
	 * This class encapsulates the response information
	 * from a service request operation sent through {AWS.Request}.
	 * The response object has two main properties for getting information
	 * back from a request:
	 *
	 * ## The `data` property
	 *
	 * The `response.data` property contains the serialized object data
	 * retrieved from the service request. For instance, for an
	 * Amazon DynamoDB `listTables` method call, the response data might
	 * look like:
	 *
	 * ```
	 * > resp.data
	 * { TableNames:
	 *    [ 'table1', 'table2', ... ] }
	 * ```
	 *
	 * The `data` property can be null if an error occurs (see below).
	 *
	 * ## The `error` property
	 *
	 * In the event of a service error (or transfer error), the
	 * `response.error` property will be filled with the given
	 * error data in the form:
	 *
	 * ```
	 * { code: 'SHORT_UNIQUE_ERROR_CODE',
	 *   message: 'Some human readable error message' }
	 * ```
	 *
	 * In the case of an error, the `data` property will be `null`.
	 * Note that if you handle events that can be in a failure state,
	 * you should always check whether `response.error` is set
	 * before attempting to access the `response.data` property.
	 *
	 * @!attribute data
	 *   @readonly
	 *   @!group Data Properties
	 *   @note Inside of a {AWS.Request~httpData} event, this
	 *     property contains a single raw packet instead of the
	 *     full de-serialized service response.
	 *   @return [Object] the de-serialized response data
	 *     from the service.
	 *
	 * @!attribute error
	 *   An structure containing information about a service
	 *   or networking error.
	 *   @readonly
	 *   @!group Data Properties
	 *   @note This attribute is only filled if a service or
	 *     networking error occurs.
	 *   @return [Error]
	 *     * code [String] a unique short code representing the
	 *       error that was emitted.
	 *     * message [String] a longer human readable error message
	 *     * retryable [Boolean] whether the error message is
	 *       retryable.
	 *     * statusCode [Numeric] in the case of a request that reached the service,
	 *       this value contains the response status code.
	 *     * time [Date] the date time object when the error occurred.
	 *     * hostname [String] set when a networking error occurs to easily
	 *       identify the endpoint of the request.
	 *     * region [String] set when a networking error occurs to easily
	 *       identify the region of the request.
	 *
	 * @!attribute requestId
	 *   @readonly
	 *   @!group Data Properties
	 *   @return [String] the unique request ID associated with the response.
	 *     Log this value when debugging requests for AWS support.
	 *
	 * @!attribute retryCount
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Integer] the number of retries that were
	 *     attempted before the request was completed.
	 *
	 * @!attribute redirectCount
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Integer] the number of redirects that were
	 *     followed before the request was completed.
	 *
	 * @!attribute httpResponse
	 *   @readonly
	 *   @!group HTTP Properties
	 *   @return [AWS.HttpResponse] the raw HTTP response object
	 *     containing the response headers and body information
	 *     from the server.
	 *
	 * @see AWS.Request
	 */
	AWS.Response = inherit({

	  /**
	   * @api private
	   */
	  constructor: function Response(request) {
	    this.request = request;
	    this.data = null;
	    this.error = null;
	    this.retryCount = 0;
	    this.redirectCount = 0;
	    this.httpResponse = new AWS.HttpResponse();
	    if (request) {
	      this.maxRetries = request.service.numRetries();
	      this.maxRedirects = request.service.config.maxRedirects;
	    }
	  },

	  /**
	   * Creates a new request for the next page of response data, calling the
	   * callback with the page data if a callback is provided.
	   *
	   * @callback callback function(err, data)
	   *   Called when a page of data is returned from the next request.
	   *
	   *   @param err [Error] an error object, if an error occurred in the request
	   *   @param data [Object] the next page of data, or null, if there are no
	   *     more pages left.
	   * @return [AWS.Request] the request object for the next page of data
	   * @return [null] if no callback is provided and there are no pages left
	   *   to retrieve.
	   * @since v1.4.0
	   */
	  nextPage: function nextPage(callback) {
	    var config;
	    var service = this.request.service;
	    var operation = this.request.operation;
	    try {
	      config = service.paginationConfig(operation, true);
	    } catch (e) { this.error = e; }

	    if (!this.hasNextPage()) {
	      if (callback) callback(this.error, null);
	      else if (this.error) throw this.error;
	      return null;
	    }

	    var params = AWS.util.copy(this.request.params);
	    if (!this.nextPageTokens) {
	      return callback ? callback(null, null) : null;
	    } else {
	      var inputTokens = config.inputToken;
	      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
	      for (var i = 0; i < inputTokens.length; i++) {
	        params[inputTokens[i]] = this.nextPageTokens[i];
	      }
	      return service.makeRequest(this.request.operation, params, callback);
	    }
	  },

	  /**
	   * @return [Boolean] whether more pages of data can be returned by further
	   *   requests
	   * @since v1.4.0
	   */
	  hasNextPage: function hasNextPage() {
	    this.cacheNextPageTokens();
	    if (this.nextPageTokens) return true;
	    if (this.nextPageTokens === undefined) return undefined;
	    else return false;
	  },

	  /**
	   * @api private
	   */
	  cacheNextPageTokens: function cacheNextPageTokens() {
	    if (Object.prototype.hasOwnProperty.call(this, 'nextPageTokens')) return this.nextPageTokens;
	    this.nextPageTokens = undefined;

	    var config = this.request.service.paginationConfig(this.request.operation);
	    if (!config) return this.nextPageTokens;

	    this.nextPageTokens = null;
	    if (config.moreResults) {
	      if (!jmespath.search(this.data, config.moreResults)) {
	        return this.nextPageTokens;
	      }
	    }

	    var exprs = config.outputToken;
	    if (typeof exprs === 'string') exprs = [exprs];
	    AWS.util.arrayEach.call(this, exprs, function (expr) {
	      var output = jmespath.search(this.data, expr);
	      if (output) {
	        this.nextPageTokens = this.nextPageTokens || [];
	        this.nextPageTokens.push(output);
	      }
	    });

	    return this.nextPageTokens;
	  }

	});


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"). You
	 * may not use this file except in compliance with the License. A copy of
	 * the License is located at
	 *
	 *     http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file. This file is
	 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific
	 * language governing permissions and limitations under the License.
	 */

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;
	var jmespath = __webpack_require__(168);

	/**
	 * @api private
	 */
	function CHECK_ACCEPTORS(resp) {
	  var waiter = resp.request._waiter;
	  var acceptors = waiter.config.acceptors;
	  var acceptorMatched = false;
	  var state = 'retry';

	  acceptors.forEach(function(acceptor) {
	    if (!acceptorMatched) {
	      var matcher = waiter.matchers[acceptor.matcher];
	      if (matcher && matcher(resp, acceptor.expected, acceptor.argument)) {
	        acceptorMatched = true;
	        state = acceptor.state;
	      }
	    }
	  });

	  if (!acceptorMatched && resp.error) state = 'failure';

	  if (state === 'success') {
	    waiter.setSuccess(resp);
	  } else {
	    waiter.setError(resp, state === 'retry');
	  }
	}

	/**
	 * @api private
	 */
	AWS.ResourceWaiter = inherit({
	  /**
	   * Waits for a given state on a service object
	   * @param service [Service] the service object to wait on
	   * @param state [String] the state (defined in waiter configuration) to wait
	   *   for.
	   * @example Create a waiter for running EC2 instances
	   *   var ec2 = new AWS.EC2;
	   *   var waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
	   */
	  constructor: function constructor(service, state) {
	    this.service = service;
	    this.state = state;
	    this.loadWaiterConfig(this.state);
	  },

	  service: null,

	  state: null,

	  config: null,

	  matchers: {
	    path: function(resp, expected, argument) {
	      var result = jmespath.search(resp.data, argument);
	      return jmespath.strictDeepEqual(result,expected);
	    },

	    pathAll: function(resp, expected, argument) {
	      var results = jmespath.search(resp.data, argument);
	      if (!Array.isArray(results)) results = [results];
	      var numResults = results.length;
	      if (!numResults) return false;
	      for (var ind = 0 ; ind < numResults; ind++) {
	        if (!jmespath.strictDeepEqual(results[ind], expected)) {
	          return false;
	        }
	      }
	      return true;
	    },

	    pathAny: function(resp, expected, argument) {
	      var results = jmespath.search(resp.data, argument);
	      if (!Array.isArray(results)) results = [results];
	      var numResults = results.length;
	      for (var ind = 0 ; ind < numResults; ind++) {
	        if (jmespath.strictDeepEqual(results[ind], expected)) {
	          return true;
	        }
	      }
	      return false;
	    },

	    status: function(resp, expected) {
	      var statusCode = resp.httpResponse.statusCode;
	      return (typeof statusCode === 'number') && (statusCode === expected);
	    },

	    error: function(resp, expected) {
	      if (typeof expected === 'string' && resp.error) {
	        return expected === resp.error.code;
	      }
	      // if expected is not string, can be boolean indicating presence of error
	      return expected === !!resp.error;
	    }
	  },

	  listeners: new AWS.SequentialExecutor().addNamedListeners(function(add) {
	    add('RETRY_CHECK', 'retry', function(resp) {
	      var waiter = resp.request._waiter;
	      if (resp.error && resp.error.code === 'ResourceNotReady') {
	        resp.error.retryDelay = (waiter.config.delay || 0) * 1000;
	      }
	    });

	    add('CHECK_OUTPUT', 'extractData', CHECK_ACCEPTORS);

	    add('CHECK_ERROR', 'extractError', CHECK_ACCEPTORS);
	  }),

	  /**
	   * @return [AWS.Request]
	   */
	  wait: function wait(params, callback) {
	    if (typeof params === 'function') {
	      callback = params; params = undefined;
	    }

	    var request = this.service.makeRequest(this.config.operation, params);
	    request._waiter = this;
	    request.response.maxRetries = this.config.maxAttempts;
	    request.addListeners(this.listeners);

	    if (callback) request.send(callback);
	    return request;
	  },

	  setSuccess: function setSuccess(resp) {
	    resp.error = null;
	    resp.data = resp.data || {};
	    resp.request.removeAllListeners('extractData');
	  },

	  setError: function setError(resp, retryable) {
	    resp.data = null;
	    resp.error = AWS.util.error(resp.error || new Error(), {
	      code: 'ResourceNotReady',
	      message: 'Resource is not in the state ' + this.state,
	      retryable: retryable
	    });
	  },

	  /**
	   * Loads waiter configuration from API configuration
	   *
	   * @api private
	   */
	  loadWaiterConfig: function loadWaiterConfig(state) {
	    if (!this.service.api.waiters[state]) {
	      throw new AWS.util.error(new Error(), {
	        code: 'StateNotFoundError',
	        message: 'State ' + state + ' not found.'
	      });
	    }

	    this.config = this.service.api.waiters[state];
	  }
	});


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.RequestSigner = inherit({
	  constructor: function RequestSigner(request) {
	    this.request = request;
	  },

	  setServiceClientId: function setServiceClientId(id) {
	    this.serviceClientId = id;
	  },

	  getServiceClientId: function getServiceClientId() {
	    return this.serviceClientId;
	  }
	});

	AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
	  switch (version) {
	    case 'v2': return AWS.Signers.V2;
	    case 'v3': return AWS.Signers.V3;
	    case 'v4': return AWS.Signers.V4;
	    case 's3': return AWS.Signers.S3;
	    case 'v3https': return AWS.Signers.V3Https;
	  }
	  throw new Error('Unknown signing version ' + version);
	};

	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
	  addAuthorization: function addAuthorization(credentials, date) {

	    if (!date) date = AWS.util.date.getDate();

	    var r = this.request;

	    r.params.Timestamp = AWS.util.date.iso8601(date);
	    r.params.SignatureVersion = '2';
	    r.params.SignatureMethod = 'HmacSHA256';
	    r.params.AWSAccessKeyId = credentials.accessKeyId;

	    if (credentials.sessionToken) {
	      r.params.SecurityToken = credentials.sessionToken;
	    }

	    delete r.params.Signature; // delete old Signature for re-signing
	    r.params.Signature = this.signature(credentials);

	    r.body = AWS.util.queryParamsToString(r.params);
	    r.headers['Content-Length'] = r.body.length;
	  },

	  signature: function signature(credentials) {
	    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
	  },

	  stringToSign: function stringToSign() {
	    var parts = [];
	    parts.push(this.request.method);
	    parts.push(this.request.endpoint.host.toLowerCase());
	    parts.push(this.request.pathname());
	    parts.push(AWS.util.queryParamsToString(this.request.params));
	    return parts.join('\n');
	  }

	});

	module.exports = AWS.Signers.V2;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
	  addAuthorization: function addAuthorization(credentials, date) {

	    var datetime = AWS.util.date.rfc822(date);

	    this.request.headers['X-Amz-Date'] = datetime;

	    if (credentials.sessionToken) {
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }

	    this.request.headers['X-Amzn-Authorization'] =
	      this.authorization(credentials, datetime);

	  },

	  authorization: function authorization(credentials) {
	    return 'AWS3 ' +
	      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
	      'Algorithm=HmacSHA256,' +
	      'SignedHeaders=' + this.signedHeaders() + ',' +
	      'Signature=' + this.signature(credentials);
	  },

	  signedHeaders: function signedHeaders() {
	    var headers = [];
	    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
	      headers.push(h.toLowerCase());
	    });
	    return headers.sort().join(';');
	  },

	  canonicalHeaders: function canonicalHeaders() {
	    var headers = this.request.headers;
	    var parts = [];
	    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
	      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
	    });
	    return parts.sort().join('\n') + '\n';
	  },

	  headersToSign: function headersToSign() {
	    var headers = [];
	    AWS.util.each(this.request.headers, function iterator(k) {
	      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
	        headers.push(k);
	      }
	    });
	    return headers;
	  },

	  signature: function signature(credentials) {
	    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
	  },

	  stringToSign: function stringToSign() {
	    var parts = [];
	    parts.push(this.request.method);
	    parts.push('/');
	    parts.push('');
	    parts.push(this.canonicalHeaders());
	    parts.push(this.request.body);
	    return AWS.util.crypto.sha256(parts.join('\n'));
	  }

	});

	module.exports = AWS.Signers.V3;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	__webpack_require__(173);

	/**
	 * @api private
	 */
	AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
	  authorization: function authorization(credentials) {
	    return 'AWS3-HTTPS ' +
	      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
	      'Algorithm=HmacSHA256,' +
	      'Signature=' + this.signature(credentials);
	  },

	  stringToSign: function stringToSign() {
	    return this.request.headers['X-Amz-Date'];
	  }
	});

	module.exports = AWS.Signers.V3Https;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	var cachedSecret = {};

	/**
	 * @api private
	 */
	var cacheQueue = [];

	/**
	 * @api private
	 */
	var maxCacheEntries = 50;

	/**
	 * @api private
	 */
	var expiresHeader = 'presigned-expires';

	/**
	 * @api private
	 */
	AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
	  constructor: function V4(request, serviceName, signatureCache) {
	    AWS.Signers.RequestSigner.call(this, request);
	    this.serviceName = serviceName;
	    this.signatureCache = signatureCache;
	  },

	  algorithm: 'AWS4-HMAC-SHA256',

	  addAuthorization: function addAuthorization(credentials, date) {
	    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

	    if (this.isPresigned()) {
	      this.updateForPresigned(credentials, datetime);
	    } else {
	      this.addHeaders(credentials, datetime);
	    }

	    this.request.headers['Authorization'] =
	      this.authorization(credentials, datetime);
	  },

	  addHeaders: function addHeaders(credentials, datetime) {
	    this.request.headers['X-Amz-Date'] = datetime;
	    if (credentials.sessionToken) {
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }
	  },

	  updateForPresigned: function updateForPresigned(credentials, datetime) {
	    var credString = this.credentialString(datetime);
	    var qs = {
	      'X-Amz-Date': datetime,
	      'X-Amz-Algorithm': this.algorithm,
	      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
	      'X-Amz-Expires': this.request.headers[expiresHeader],
	      'X-Amz-SignedHeaders': this.signedHeaders()
	    };

	    if (credentials.sessionToken) {
	      qs['X-Amz-Security-Token'] = credentials.sessionToken;
	    }

	    if (this.request.headers['Content-Type']) {
	      qs['Content-Type'] = this.request.headers['Content-Type'];
	    }
	    if (this.request.headers['Content-MD5']) {
	      qs['Content-MD5'] = this.request.headers['Content-MD5'];
	    }
	    if (this.request.headers['Cache-Control']) {
	      qs['Cache-Control'] = this.request.headers['Cache-Control'];
	    }

	    // need to pull in any other X-Amz-* headers
	    AWS.util.each.call(this, this.request.headers, function(key, value) {
	      if (key === expiresHeader) return;
	      if (this.isSignableHeader(key)) {
	        var lowerKey = key.toLowerCase();
	        // Metadata should be normalized
	        if (lowerKey.indexOf('x-amz-meta-') === 0) {
	          qs[lowerKey] = value;
	        } else if (lowerKey.indexOf('x-amz-') === 0) {
	          qs[key] = value;
	        }
	      }
	    });

	    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
	    this.request.path += sep + AWS.util.queryParamsToString(qs);
	  },

	  authorization: function authorization(credentials, datetime) {
	    var parts = [];
	    var credString = this.credentialString(datetime);
	    parts.push(this.algorithm + ' Credential=' +
	      credentials.accessKeyId + '/' + credString);
	    parts.push('SignedHeaders=' + this.signedHeaders());
	    parts.push('Signature=' + this.signature(credentials, datetime));
	    return parts.join(', ');
	  },

	  signature: function signature(credentials, datetime) {
	    var cache = null;
	    var cacheIdentifier = this.serviceName + (this.getServiceClientId() ? '_' + this.getServiceClientId() : '');
	    if (this.signatureCache) {
	      var cache = cachedSecret[cacheIdentifier];
	      // If there isn't already a cache entry, we'll be adding one
	      if (!cache) {
	        cacheQueue.push(cacheIdentifier);
	        if (cacheQueue.length > maxCacheEntries) {
	          // remove the oldest entry (may not be last one used)
	          delete cachedSecret[cacheQueue.shift()];
	        }
	      }

	    }
	    var date = datetime.substr(0, 8);

	    if (!cache ||
	        cache.akid !== credentials.accessKeyId ||
	        cache.region !== this.request.region ||
	        cache.date !== date) {

	      var kSecret = credentials.secretAccessKey;
	      var kDate = AWS.util.crypto.hmac('AWS4' + kSecret, date, 'buffer');
	      var kRegion = AWS.util.crypto.hmac(kDate, this.request.region, 'buffer');
	      var kService = AWS.util.crypto.hmac(kRegion, this.serviceName, 'buffer');
	      var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request', 'buffer');

	      if (!this.signatureCache) {
	        return AWS.util.crypto.hmac(kCredentials, this.stringToSign(datetime), 'hex');
	      }

	      cachedSecret[cacheIdentifier] = {
	        region: this.request.region, date: date,
	        key: kCredentials, akid: credentials.accessKeyId
	      };
	    }

	    var key = cachedSecret[cacheIdentifier].key;
	    return AWS.util.crypto.hmac(key, this.stringToSign(datetime), 'hex');
	  },

	  stringToSign: function stringToSign(datetime) {
	    var parts = [];
	    parts.push('AWS4-HMAC-SHA256');
	    parts.push(datetime);
	    parts.push(this.credentialString(datetime));
	    parts.push(this.hexEncodedHash(this.canonicalString()));
	    return parts.join('\n');
	  },

	  canonicalString: function canonicalString() {
	    var parts = [], pathname = this.request.pathname();
	    if (this.serviceName !== 's3') pathname = AWS.util.uriEscapePath(pathname);

	    parts.push(this.request.method);
	    parts.push(pathname);
	    parts.push(this.request.search());
	    parts.push(this.canonicalHeaders() + '\n');
	    parts.push(this.signedHeaders());
	    parts.push(this.hexEncodedBodyHash());
	    return parts.join('\n');
	  },

	  canonicalHeaders: function canonicalHeaders() {
	    var headers = [];
	    AWS.util.each.call(this, this.request.headers, function (key, item) {
	      headers.push([key, item]);
	    });
	    headers.sort(function (a, b) {
	      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
	    });
	    var parts = [];
	    AWS.util.arrayEach.call(this, headers, function (item) {
	      var key = item[0].toLowerCase();
	      if (this.isSignableHeader(key)) {
	        parts.push(key + ':' +
	          this.canonicalHeaderValues(item[1].toString()));
	      }
	    });
	    return parts.join('\n');
	  },

	  canonicalHeaderValues: function canonicalHeaderValues(values) {
	    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
	  },

	  signedHeaders: function signedHeaders() {
	    var keys = [];
	    AWS.util.each.call(this, this.request.headers, function (key) {
	      key = key.toLowerCase();
	      if (this.isSignableHeader(key)) keys.push(key);
	    });
	    return keys.sort().join(';');
	  },

	  credentialString: function credentialString(datetime) {
	    var parts = [];
	    parts.push(datetime.substr(0, 8));
	    parts.push(this.request.region);
	    parts.push(this.serviceName);
	    parts.push('aws4_request');
	    return parts.join('/');
	  },

	  hexEncodedHash: function hash(string) {
	    return AWS.util.crypto.sha256(string, 'hex');
	  },

	  hexEncodedBodyHash: function hexEncodedBodyHash() {
	    if (this.isPresigned() && this.serviceName === 's3' && !this.request.body) {
	      return 'UNSIGNED-PAYLOAD';
	    } else if (this.request.headers['X-Amz-Content-Sha256']) {
	      return this.request.headers['X-Amz-Content-Sha256'];
	    } else {
	      return this.hexEncodedHash(this.request.body || '');
	    }
	  },

	  unsignableHeaders: [
	    'authorization',
	    'content-type',
	    'content-length',
	    'user-agent',
	    expiresHeader,
	    'expect',
	    'x-amzn-trace-id'
	  ],

	  isSignableHeader: function isSignableHeader(key) {
	    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
	    return this.unsignableHeaders.indexOf(key) < 0;
	  },

	  isPresigned: function isPresigned() {
	    return this.request.headers[expiresHeader] ? true : false;
	  }

	});

	module.exports = AWS.Signers.V4;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
	  /**
	   * When building the stringToSign, these sub resource params should be
	   * part of the canonical resource string with their NON-decoded values
	   */
	  subResources: {
	    'acl': 1,
	    'accelerate': 1,
	    'analytics': 1,
	    'cors': 1,
	    'lifecycle': 1,
	    'delete': 1,
	    'inventory': 1,
	    'location': 1,
	    'logging': 1,
	    'metrics': 1,
	    'notification': 1,
	    'partNumber': 1,
	    'policy': 1,
	    'requestPayment': 1,
	    'replication': 1,
	    'restore': 1,
	    'tagging': 1,
	    'torrent': 1,
	    'uploadId': 1,
	    'uploads': 1,
	    'versionId': 1,
	    'versioning': 1,
	    'versions': 1,
	    'website': 1
	  },

	  // when building the stringToSign, these querystring params should be
	  // part of the canonical resource string with their NON-encoded values
	  responseHeaders: {
	    'response-content-type': 1,
	    'response-content-language': 1,
	    'response-expires': 1,
	    'response-cache-control': 1,
	    'response-content-disposition': 1,
	    'response-content-encoding': 1
	  },

	  addAuthorization: function addAuthorization(credentials, date) {
	    if (!this.request.headers['presigned-expires']) {
	      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
	    }

	    if (credentials.sessionToken) {
	      // presigned URLs require this header to be lowercased
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }

	    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
	    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

	    this.request.headers['Authorization'] = auth;
	  },

	  stringToSign: function stringToSign() {
	    var r = this.request;

	    var parts = [];
	    parts.push(r.method);
	    parts.push(r.headers['Content-MD5'] || '');
	    parts.push(r.headers['Content-Type'] || '');

	    // This is the "Date" header, but we use X-Amz-Date.
	    // The S3 signing mechanism requires us to pass an empty
	    // string for this Date header regardless.
	    parts.push(r.headers['presigned-expires'] || '');

	    var headers = this.canonicalizedAmzHeaders();
	    if (headers) parts.push(headers);
	    parts.push(this.canonicalizedResource());

	    return parts.join('\n');

	  },

	  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

	    var amzHeaders = [];

	    AWS.util.each(this.request.headers, function (name) {
	      if (name.match(/^x-amz-/i))
	        amzHeaders.push(name);
	    });

	    amzHeaders.sort(function (a, b) {
	      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
	    });

	    var parts = [];
	    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
	      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
	    });

	    return parts.join('\n');

	  },

	  canonicalizedResource: function canonicalizedResource() {

	    var r = this.request;

	    var parts = r.path.split('?');
	    var path = parts[0];
	    var querystring = parts[1];

	    var resource = '';

	    if (r.virtualHostedBucket)
	      resource += '/' + r.virtualHostedBucket;

	    resource += path;

	    if (querystring) {

	      // collect a list of sub resources and query params that need to be signed
	      var resources = [];

	      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
	        var name = param.split('=')[0];
	        var value = param.split('=')[1];
	        if (this.subResources[name] || this.responseHeaders[name]) {
	          var subresource = { name: name };
	          if (value !== undefined) {
	            if (this.subResources[name]) {
	              subresource.value = value;
	            } else {
	              subresource.value = decodeURIComponent(value);
	            }
	          }
	          resources.push(subresource);
	        }
	      });

	      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

	      if (resources.length) {

	        querystring = [];
	        AWS.util.arrayEach(resources, function (res) {
	          if (res.value === undefined) {
	            querystring.push(res.name);
	          } else {
	            querystring.push(res.name + '=' + res.value);
	          }
	        });

	        resource += '?' + querystring.join('&');
	      }

	    }

	    return resource;

	  },

	  sign: function sign(secret, string) {
	    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
	  }
	});

	module.exports = AWS.Signers.S3;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	var expiresHeader = 'presigned-expires';

	/**
	 * @api private
	 */
	function signedUrlBuilder(request) {
	  var expires = request.httpRequest.headers[expiresHeader];
	  var signerClass = request.service.getSignerClass(request);

	  delete request.httpRequest.headers['User-Agent'];
	  delete request.httpRequest.headers['X-Amz-User-Agent'];

	  if (signerClass === AWS.Signers.V4) {
	    if (expires > 604800) { // one week expiry is invalid
	      var message = 'Presigning does not support expiry time greater ' +
	                    'than a week with SigV4 signing.';
	      throw AWS.util.error(new Error(), {
	        code: 'InvalidExpiryTime', message: message, retryable: false
	      });
	    }
	    request.httpRequest.headers[expiresHeader] = expires;
	  } else if (signerClass === AWS.Signers.S3) {
	    request.httpRequest.headers[expiresHeader] = parseInt(
	      AWS.util.date.unixTimestamp() + expires, 10).toString();
	  } else {
	    throw AWS.util.error(new Error(), {
	      message: 'Presigning only supports S3 or SigV4 signing.',
	      code: 'UnsupportedSigner', retryable: false
	    });
	  }
	}

	/**
	 * @api private
	 */
	function signedUrlSigner(request) {
	  var endpoint = request.httpRequest.endpoint;
	  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
	  var queryParams = {};

	  if (parsedUrl.search) {
	    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
	  }

	  AWS.util.each(request.httpRequest.headers, function (key, value) {
	    if (key === expiresHeader) key = 'Expires';
	    if (key.indexOf('x-amz-meta-') === 0) {
	      // Delete existing, potentially not normalized key
	      delete queryParams[key];
	      key = key.toLowerCase();
	    }
	    queryParams[key] = value;
	  });
	  delete request.httpRequest.headers[expiresHeader];

	  var auth = queryParams['Authorization'].split(' ');
	  if (auth[0] === 'AWS') {
	    auth = auth[1].split(':');
	    queryParams['AWSAccessKeyId'] = auth[0];
	    queryParams['Signature'] = auth[1];
	  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
	    auth.shift();
	    var rest = auth.join(' ');
	    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
	    queryParams['X-Amz-Signature'] = signature;
	    delete queryParams['Expires'];
	  }
	  delete queryParams['Authorization'];
	  delete queryParams['Host'];

	  // build URL
	  endpoint.pathname = parsedUrl.pathname;
	  endpoint.search = AWS.util.queryParamsToString(queryParams);
	}

	/**
	 * @api private
	 */
	AWS.Signers.Presign = inherit({
	  /**
	   * @api private
	   */
	  sign: function sign(request, expireTime, callback) {
	    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
	    request.on('build', signedUrlBuilder);
	    request.on('sign', signedUrlSigner);
	    request.removeListener('afterBuild',
	      AWS.EventListeners.Core.SET_CONTENT_LENGTH);
	    request.removeListener('afterBuild',
	      AWS.EventListeners.Core.COMPUTE_SHA256);

	    request.emit('beforePresign', [request]);

	    if (callback) {
	      request.build(function() {
	        if (this.response.error) callback(this.response.error);
	        else {
	          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
	        }
	      });
	    } else {
	      request.build();
	      if (request.response.error) throw request.response.error;
	      return AWS.util.urlFormat(request.httpRequest.endpoint);
	    }
	  }
	});

	module.exports = AWS.Signers.Presign;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);

	/**
	 * @api private
	 */
	AWS.ParamValidator = AWS.util.inherit({
	  /**
	   * Create a new validator object.
	   *
	   * @param validation [Boolean|map] whether input parameters should be
	   *     validated against the operation description before sending the
	   *     request. Pass a map to enable any of the following specific
	   *     validation features:
	   *
	   *     * **min** [Boolean] &mdash; Validates that a value meets the min
	   *       constraint. This is enabled by default when paramValidation is set
	   *       to `true`.
	   *     * **max** [Boolean] &mdash; Validates that a value meets the max
	   *       constraint.
	   *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
	   *       regular expression.
	   *     * **enum** [Boolean] &mdash; Validates that a string value matches one
	   *       of the allowable enum values.
	   */
	  constructor: function ParamValidator(validation) {
	    if (validation === true || validation === undefined) {
	      validation = {'min': true};
	    }
	    this.validation = validation;
	  },

	  validate: function validate(shape, params, context) {
	    this.errors = [];
	    this.validateMember(shape, params || {}, context || 'params');

	    if (this.errors.length > 1) {
	      var msg = this.errors.join('\n* ');
	      msg = 'There were ' + this.errors.length +
	        ' validation errors:\n* ' + msg;
	      throw AWS.util.error(new Error(msg),
	        {code: 'MultipleValidationErrors', errors: this.errors});
	    } else if (this.errors.length === 1) {
	      throw this.errors[0];
	    } else {
	      return true;
	    }
	  },

	  fail: function fail(code, message) {
	    this.errors.push(AWS.util.error(new Error(message), {code: code}));
	  },

	  validateStructure: function validateStructure(shape, params, context) {
	    this.validateType(params, context, ['object'], 'structure');

	    var paramName;
	    for (var i = 0; shape.required && i < shape.required.length; i++) {
	      paramName = shape.required[i];
	      var value = params[paramName];
	      if (value === undefined || value === null) {
	        this.fail('MissingRequiredParameter',
	          'Missing required key \'' + paramName + '\' in ' + context);
	      }
	    }

	    // validate hash members
	    for (paramName in params) {
	      if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;

	      var paramValue = params[paramName],
	          memberShape = shape.members[paramName];

	      if (memberShape !== undefined) {
	        var memberContext = [context, paramName].join('.');
	        this.validateMember(memberShape, paramValue, memberContext);
	      } else {
	        this.fail('UnexpectedParameter',
	          'Unexpected key \'' + paramName + '\' found in ' + context);
	      }
	    }

	    return true;
	  },

	  validateMember: function validateMember(shape, param, context) {
	    switch (shape.type) {
	      case 'structure':
	        return this.validateStructure(shape, param, context);
	      case 'list':
	        return this.validateList(shape, param, context);
	      case 'map':
	        return this.validateMap(shape, param, context);
	      default:
	        return this.validateScalar(shape, param, context);
	    }
	  },

	  validateList: function validateList(shape, params, context) {
	    if (this.validateType(params, context, [Array])) {
	      this.validateRange(shape, params.length, context, 'list member count');
	      // validate array members
	      for (var i = 0; i < params.length; i++) {
	        this.validateMember(shape.member, params[i], context + '[' + i + ']');
	      }
	    }
	  },

	  validateMap: function validateMap(shape, params, context) {
	    if (this.validateType(params, context, ['object'], 'map')) {
	      // Build up a count of map members to validate range traits.
	      var mapCount = 0;
	      for (var param in params) {
	        if (!Object.prototype.hasOwnProperty.call(params, param)) continue;
	        // Validate any map key trait constraints
	        this.validateMember(shape.key, param,
	                            context + '[key=\'' + param + '\']')
	        this.validateMember(shape.value, params[param],
	                            context + '[\'' + param + '\']');
	        mapCount++;
	      }
	      this.validateRange(shape, mapCount, context, 'map member count');
	    }
	  },

	  validateScalar: function validateScalar(shape, value, context) {
	    switch (shape.type) {
	      case null:
	      case undefined:
	      case 'string':
	        return this.validateString(shape, value, context);
	      case 'base64':
	      case 'binary':
	        return this.validatePayload(value, context);
	      case 'integer':
	      case 'float':
	        return this.validateNumber(shape, value, context);
	      case 'boolean':
	        return this.validateType(value, context, ['boolean']);
	      case 'timestamp':
	        return this.validateType(value, context, [Date,
	          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
	          'Date object, ISO-8601 string, or a UNIX timestamp');
	      default:
	        return this.fail('UnkownType', 'Unhandled type ' +
	                         shape.type + ' for ' + context);
	    }
	  },

	  validateString: function validateString(shape, value, context) {
	    if (this.validateType(value, context, ['string'])) {
	      this.validateEnum(shape, value, context);
	      this.validateRange(shape, value.length, context, 'string length');
	      this.validatePattern(shape, value, context);
	    }
	  },

	  validatePattern: function validatePattern(shape, value, context) {
	    if (this.validation['pattern'] && shape['pattern'] !== undefined) {
	      if (!(new RegExp(shape['pattern'])).test(value)) {
	        this.fail('PatternMatchError', 'Provided value "' + value + '" '
	          + 'does not match regex pattern /' + shape['pattern'] + '/ for '
	          + context);
	      }
	    }
	  },

	  validateRange: function validateRange(shape, value, context, descriptor) {
	    if (this.validation['min']) {
	      if (shape['min'] !== undefined && value < shape['min']) {
	        this.fail('MinRangeError', 'Expected ' + descriptor + ' >= '
	          + shape['min'] + ', but found ' + value + ' for ' + context);
	      }
	    }
	    if (this.validation['max']) {
	      if (shape['max'] !== undefined && value > shape['max']) {
	        this.fail('MaxRangeError', 'Expected ' + descriptor + ' <= '
	          + shape['max'] + ', but found ' + value + ' for ' + context);
	      }
	    }
	  },

	  validateEnum: function validateRange(shape, value, context) {
	    if (this.validation['enum'] && shape['enum'] !== undefined) {
	      // Fail if the string value is not present in the enum list
	      if (shape['enum'].indexOf(value) === -1) {
	        this.fail('EnumError', 'Found string value of ' + value + ', but '
	          + 'expected ' + shape['enum'].join('|') + ' for ' + context);
	      }
	    }
	  },

	  validateType: function validateType(value, context, acceptedTypes, type) {
	    // We will not log an error for null or undefined, but we will return
	    // false so that callers know that the expected type was not strictly met.
	    if (value === null || value === undefined) return false;

	    var foundInvalidType = false;
	    for (var i = 0; i < acceptedTypes.length; i++) {
	      if (typeof acceptedTypes[i] === 'string') {
	        if (typeof value === acceptedTypes[i]) return true;
	      } else if (acceptedTypes[i] instanceof RegExp) {
	        if ((value || '').toString().match(acceptedTypes[i])) return true;
	      } else {
	        if (value instanceof acceptedTypes[i]) return true;
	        if (AWS.util.isType(value, acceptedTypes[i])) return true;
	        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
	        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
	      }
	      foundInvalidType = true;
	    }

	    var acceptedType = type;
	    if (!acceptedType) {
	      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
	    }

	    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
	    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
	              vowel + ' ' + acceptedType);
	    return false;
	  },

	  validateNumber: function validateNumber(shape, value, context) {
	    if (value === null || value === undefined) return;
	    if (typeof value === 'string') {
	      var castedValue = parseFloat(value);
	      if (castedValue.toString() === value) value = castedValue;
	    }
	    if (this.validateType(value, context, ['number'])) {
	      this.validateRange(shape, value, context, 'numeric value');
	    }
	  },

	  validatePayload: function validatePayload(value, context) {
	    if (value === null || value === undefined) return;
	    if (typeof value === 'string') return;
	    if (value && typeof value.byteLength === 'number') return; // typed arrays
	    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
	      var Stream = AWS.util.stream.Stream;
	      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
	    }

	    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
	    if (value) {
	      for (var i = 0; i < types.length; i++) {
	        if (AWS.util.isType(value, types[i])) return;
	        if (AWS.util.typeName(value.constructor) === types[i]) return;
	      }
	    }

	    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
	      'string, Buffer, Stream, Blob, or typed array object');
	  }
	});


/***/ },
/* 179 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = {
		"acm": {
			"name": "ACM",
			"cors": true
		},
		"apigateway": {
			"name": "APIGateway",
			"cors": true
		},
		"applicationautoscaling": {
			"prefix": "application-autoscaling",
			"name": "ApplicationAutoScaling",
			"cors": true
		},
		"appstream": {
			"name": "AppStream"
		},
		"autoscaling": {
			"name": "AutoScaling",
			"cors": true
		},
		"batch": {
			"name": "Batch"
		},
		"budgets": {
			"name": "Budgets"
		},
		"cloudformation": {
			"name": "CloudFormation",
			"cors": true
		},
		"cloudfront": {
			"name": "CloudFront",
			"versions": [
				"2013-05-12*",
				"2013-11-11*",
				"2014-05-31*",
				"2014-10-21*",
				"2014-11-06*",
				"2015-04-17*",
				"2015-07-27*",
				"2015-09-17*",
				"2016-01-13*",
				"2016-01-28*",
				"2016-08-01*",
				"2016-08-20*",
				"2016-09-07*",
				"2016-09-29*"
			],
			"cors": true
		},
		"cloudhsm": {
			"name": "CloudHSM",
			"cors": true
		},
		"cloudsearch": {
			"name": "CloudSearch"
		},
		"cloudsearchdomain": {
			"name": "CloudSearchDomain"
		},
		"cloudtrail": {
			"name": "CloudTrail",
			"cors": true
		},
		"cloudwatch": {
			"prefix": "monitoring",
			"name": "CloudWatch",
			"cors": true
		},
		"cloudwatchevents": {
			"prefix": "events",
			"name": "CloudWatchEvents",
			"versions": [
				"2014-02-03*"
			],
			"cors": true
		},
		"cloudwatchlogs": {
			"prefix": "logs",
			"name": "CloudWatchLogs",
			"cors": true
		},
		"codebuild": {
			"name": "CodeBuild"
		},
		"codecommit": {
			"name": "CodeCommit",
			"cors": true
		},
		"codedeploy": {
			"name": "CodeDeploy",
			"cors": true
		},
		"codepipeline": {
			"name": "CodePipeline",
			"cors": true
		},
		"cognitoidentity": {
			"prefix": "cognito-identity",
			"name": "CognitoIdentity",
			"cors": true
		},
		"cognitoidentityserviceprovider": {
			"prefix": "cognito-idp",
			"name": "CognitoIdentityServiceProvider",
			"cors": true
		},
		"cognitosync": {
			"prefix": "cognito-sync",
			"name": "CognitoSync",
			"cors": true
		},
		"configservice": {
			"prefix": "config",
			"name": "ConfigService",
			"cors": true
		},
		"datapipeline": {
			"name": "DataPipeline"
		},
		"devicefarm": {
			"name": "DeviceFarm",
			"cors": true
		},
		"directconnect": {
			"name": "DirectConnect",
			"cors": true
		},
		"directoryservice": {
			"prefix": "ds",
			"name": "DirectoryService"
		},
		"discovery": {
			"name": "Discovery"
		},
		"dms": {
			"name": "DMS"
		},
		"dynamodb": {
			"name": "DynamoDB",
			"cors": true
		},
		"dynamodbstreams": {
			"prefix": "streams.dynamodb",
			"name": "DynamoDBStreams",
			"cors": true
		},
		"ec2": {
			"name": "EC2",
			"versions": [
				"2013-06-15*",
				"2013-10-15*",
				"2014-02-01*",
				"2014-05-01*",
				"2014-06-15*",
				"2014-09-01*",
				"2014-10-01*",
				"2015-03-01*",
				"2015-04-15*",
				"2015-10-01*",
				"2016-04-01*",
				"2016-09-15*"
			],
			"cors": true
		},
		"ecr": {
			"name": "ECR",
			"cors": true
		},
		"ecs": {
			"name": "ECS",
			"cors": true
		},
		"efs": {
			"prefix": "elasticfilesystem",
			"name": "EFS"
		},
		"elasticache": {
			"name": "ElastiCache",
			"versions": [
				"2012-11-15*",
				"2014-03-24*",
				"2014-07-15*",
				"2014-09-30*"
			],
			"cors": true
		},
		"elasticbeanstalk": {
			"name": "ElasticBeanstalk",
			"cors": true
		},
		"elb": {
			"prefix": "elasticloadbalancing",
			"name": "ELB",
			"cors": true
		},
		"elbv2": {
			"prefix": "elasticloadbalancingv2",
			"name": "ELBv2",
			"cors": true
		},
		"emr": {
			"prefix": "elasticmapreduce",
			"name": "EMR",
			"cors": true
		},
		"es": {
			"name": "ES"
		},
		"elastictranscoder": {
			"name": "ElasticTranscoder",
			"cors": true
		},
		"firehose": {
			"name": "Firehose",
			"cors": true
		},
		"gamelift": {
			"name": "GameLift",
			"cors": true
		},
		"glacier": {
			"name": "Glacier"
		},
		"health": {
			"name": "Health"
		},
		"iam": {
			"name": "IAM"
		},
		"importexport": {
			"name": "ImportExport"
		},
		"inspector": {
			"name": "Inspector",
			"versions": [
				"2015-08-18*"
			],
			"cors": true
		},
		"iot": {
			"name": "Iot",
			"cors": true
		},
		"iotdata": {
			"prefix": "iot-data",
			"name": "IotData",
			"cors": true
		},
		"kinesis": {
			"name": "Kinesis",
			"cors": true
		},
		"kinesisanalytics": {
			"name": "KinesisAnalytics"
		},
		"kms": {
			"name": "KMS",
			"cors": true
		},
		"lambda": {
			"name": "Lambda",
			"cors": true
		},
		"lightsail": {
			"name": "Lightsail"
		},
		"machinelearning": {
			"name": "MachineLearning",
			"cors": true
		},
		"marketplacecommerceanalytics": {
			"name": "MarketplaceCommerceAnalytics",
			"cors": true
		},
		"marketplacemetering": {
			"prefix": "meteringmarketplace",
			"name": "MarketplaceMetering"
		},
		"mobileanalytics": {
			"name": "MobileAnalytics",
			"cors": true
		},
		"opsworks": {
			"name": "OpsWorks",
			"cors": true
		},
		"opsworkscm": {
			"name": "OpsWorksCM"
		},
		"pinpoint": {
			"name": "Pinpoint"
		},
		"polly": {
			"name": "Polly",
			"cors": true
		},
		"rds": {
			"name": "RDS",
			"versions": [
				"2014-09-01*"
			],
			"cors": true
		},
		"redshift": {
			"name": "Redshift",
			"cors": true
		},
		"rekognition": {
			"name": "Rekognition"
		},
		"route53": {
			"name": "Route53",
			"cors": true
		},
		"route53domains": {
			"name": "Route53Domains",
			"cors": true
		},
		"s3": {
			"name": "S3",
			"dualstackAvailable": true,
			"cors": true
		},
		"servicecatalog": {
			"name": "ServiceCatalog",
			"cors": true
		},
		"ses": {
			"prefix": "email",
			"name": "SES",
			"cors": true
		},
		"shield": {
			"name": "Shield"
		},
		"simpledb": {
			"prefix": "sdb",
			"name": "SimpleDB"
		},
		"sms": {
			"name": "SMS"
		},
		"snowball": {
			"name": "Snowball"
		},
		"sns": {
			"name": "SNS",
			"cors": true
		},
		"sqs": {
			"name": "SQS",
			"cors": true
		},
		"ssm": {
			"name": "SSM",
			"cors": true
		},
		"storagegateway": {
			"name": "StorageGateway",
			"cors": true
		},
		"stepfunctions": {
			"prefix": "states",
			"name": "StepFunctions"
		},
		"sts": {
			"name": "STS",
			"cors": true
		},
		"support": {
			"name": "Support"
		},
		"swf": {
			"name": "SWF"
		},
		"xray": {
			"name": "XRay"
		},
		"waf": {
			"name": "WAF",
			"cors": true
		},
		"wafregional": {
			"prefix": "waf-regional",
			"name": "WAFRegional"
		},
		"workspaces": {
			"name": "WorkSpaces"
		}
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var Buffer = __webpack_require__(4).Buffer
	var sha = __webpack_require__(182)
	var sha256 = __webpack_require__(184)
	var rng = __webpack_require__(185)
	var md5 = __webpack_require__(186)

	var algorithms = {
	  sha1: sha,
	  sha256: sha256,
	  md5: md5
	}

	var blocksize = 64
	var zeroBuffer = new Buffer(blocksize); zeroBuffer.fill(0)
	function hmac(fn, key, data) {
	  if(!Buffer.isBuffer(key)) key = new Buffer(key)
	  if(!Buffer.isBuffer(data)) data = new Buffer(data)

	  if(key.length > blocksize) {
	    key = fn(key)
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = new Buffer(blocksize), opad = new Buffer(blocksize)
	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  var hash = fn(Buffer.concat([ipad, data]))
	  return fn(Buffer.concat([opad, hash]))
	}

	function hash(alg, key) {
	  alg = alg || 'sha1'
	  var fn = algorithms[alg]
	  var bufs = []
	  var length = 0
	  if(!fn) error('algorithm:', alg, 'is not yet supported')
	  return {
	    update: function (data) {
	      if(!Buffer.isBuffer(data)) data = new Buffer(data)
	        
	      bufs.push(data)
	      length += data.length
	      return this
	    },
	    digest: function (enc) {
	      var buf = Buffer.concat(bufs)
	      var r = key ? hmac(fn, key, buf) : fn(buf)
	      bufs = null
	      return enc ? r.toString(enc) : r
	    }
	  }
	}

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = function (alg) { return hash(alg) }
	exports.createHmac = function (alg, key) { return hash(alg, key) }
	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	, 'pbkdf2'], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var helpers = __webpack_require__(183);

	/*
	 * Calculate the SHA-1 of an array of big-endian words, and a bit length
	 */
	function core_sha1(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << (24 - len % 32);
	  x[((len + 64 >> 9) << 4) + 15] = len;

	  var w = Array(80);
	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;
	  var e = -1009589776;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;
	    var olde = e;

	    for(var j = 0; j < 80; j++)
	    {
	      if(j < 16) w[j] = x[i + j];
	      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
	      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
	                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
	      e = d;
	      d = c;
	      c = rol(b, 30);
	      b = a;
	      a = t;
	    }

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	    e = safe_add(e, olde);
	  }
	  return Array(a, b, c, d, e);

	}

	/*
	 * Perform the appropriate triplet combination function for the current
	 * iteration
	 */
	function sha1_ft(t, b, c, d)
	{
	  if(t < 20) return (b & c) | ((~b) & d);
	  if(t < 40) return b ^ c ^ d;
	  if(t < 60) return (b & c) | (b & d) | (c & d);
	  return b ^ c ^ d;
	}

	/*
	 * Determine the appropriate additive constant for the current iteration
	 */
	function sha1_kt(t)
	{
	  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	         (t < 60) ? -1894007588 : -899497514;
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function sha1(buf) {
	  return helpers.hash(buf, core_sha1, 20, true);
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var Buffer = __webpack_require__(4).Buffer;
	var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var helpers = __webpack_require__(183);

	var safe_add = function(x, y) {
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	};

	var S = function(X, n) {
	  return (X >>> n) | (X << (32 - n));
	};

	var R = function(X, n) {
	  return (X >>> n);
	};

	var Ch = function(x, y, z) {
	  return ((x & y) ^ ((~x) & z));
	};

	var Maj = function(x, y, z) {
	  return ((x & y) ^ (x & z) ^ (y & z));
	};

	var Sigma0256 = function(x) {
	  return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	};

	var Sigma1256 = function(x) {
	  return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	};

	var Gamma0256 = function(x) {
	  return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	};

	var Gamma1256 = function(x) {
	  return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	};

	var core_sha256 = function(m, l) {
	  var K = new Array(0x428A2F98,0x71374491,0xB5C0FBCF,0xE9B5DBA5,0x3956C25B,0x59F111F1,0x923F82A4,0xAB1C5ED5,0xD807AA98,0x12835B01,0x243185BE,0x550C7DC3,0x72BE5D74,0x80DEB1FE,0x9BDC06A7,0xC19BF174,0xE49B69C1,0xEFBE4786,0xFC19DC6,0x240CA1CC,0x2DE92C6F,0x4A7484AA,0x5CB0A9DC,0x76F988DA,0x983E5152,0xA831C66D,0xB00327C8,0xBF597FC7,0xC6E00BF3,0xD5A79147,0x6CA6351,0x14292967,0x27B70A85,0x2E1B2138,0x4D2C6DFC,0x53380D13,0x650A7354,0x766A0ABB,0x81C2C92E,0x92722C85,0xA2BFE8A1,0xA81A664B,0xC24B8B70,0xC76C51A3,0xD192E819,0xD6990624,0xF40E3585,0x106AA070,0x19A4C116,0x1E376C08,0x2748774C,0x34B0BCB5,0x391C0CB3,0x4ED8AA4A,0x5B9CCA4F,0x682E6FF3,0x748F82EE,0x78A5636F,0x84C87814,0x8CC70208,0x90BEFFFA,0xA4506CEB,0xBEF9A3F7,0xC67178F2);
	  var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
	    var W = new Array(64);
	    var a, b, c, d, e, f, g, h, i, j;
	    var T1, T2;
	  /* append padding */
	  m[l >> 5] |= 0x80 << (24 - l % 32);
	  m[((l + 64 >> 9) << 4) + 15] = l;
	  for (var i = 0; i < m.length; i += 16) {
	    a = HASH[0]; b = HASH[1]; c = HASH[2]; d = HASH[3]; e = HASH[4]; f = HASH[5]; g = HASH[6]; h = HASH[7];
	    for (var j = 0; j < 64; j++) {
	      if (j < 16) {
	        W[j] = m[j + i];
	      } else {
	        W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
	      }
	      T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
	      T2 = safe_add(Sigma0256(a), Maj(a, b, c));
	      h = g; g = f; f = e; e = safe_add(d, T1); d = c; c = b; b = a; a = safe_add(T1, T2);
	    }
	    HASH[0] = safe_add(a, HASH[0]); HASH[1] = safe_add(b, HASH[1]); HASH[2] = safe_add(c, HASH[2]); HASH[3] = safe_add(d, HASH[3]);
	    HASH[4] = safe_add(e, HASH[4]); HASH[5] = safe_add(f, HASH[5]); HASH[6] = safe_add(g, HASH[6]); HASH[7] = safe_add(h, HASH[7]);
	  }
	  return HASH;
	};

	module.exports = function sha256(buf) {
	  return helpers.hash(buf, core_sha256, 32, true);
	};


/***/ },
/* 185 */
/***/ function(module, exports) {

	// Original code adapted from Robert Kieffer.
	// details at https://github.com/broofa/node-uuid
	(function() {
	  var _global = this;

	  var mathRNG, whatwgRNG;

	  // NOTE: Math.random() does not guarantee "cryptographic quality"
	  mathRNG = function(size) {
	    var bytes = new Array(size);
	    var r;

	    for (var i = 0, r; i < size; i++) {
	      if ((i & 0x03) == 0) r = Math.random() * 0x100000000;
	      bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return bytes;
	  }

	  if (_global.crypto && crypto.getRandomValues) {
	    whatwgRNG = function(size) {
	      var bytes = new Uint8Array(size);
	      crypto.getRandomValues(bytes);
	      return bytes;
	    }
	  }

	  module.exports = whatwgRNG || mathRNG;

	}())


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(183);

	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	function md5_vm_test()
	{
	  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(188);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(190);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(189)(module), (function() { return this; }())))

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(191);
	exports.encode = exports.stringify = __webpack_require__(192);


/***/ },
/* 191 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 192 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(62);
	var Shape = __webpack_require__(69);

	function DomXmlParser() { }

	DomXmlParser.prototype.parse = function(xml, shape) {
	  if (xml.replace(/^\s+/, '') === '') return {};

	  var result, error;
	  try {
	    if (window.DOMParser) {
	      try {
	        var parser = new DOMParser();
	        result = parser.parseFromString(xml, 'text/xml');
	      } catch (syntaxError) {
	        throw util.error(new Error('Parse error in document'),
	          {
	            originalError: syntaxError,
	            code: 'XMLParserError',
	            retryable: true
	          });
	      }

	      if (result.documentElement === null) {
	        throw util.error(new Error('Cannot parse empty document.'),
	          {
	            code: 'XMLParserError',
	            retryable: true
	          });
	      }

	      var isError = result.getElementsByTagName('parsererror')[0];
	      if (isError && (isError.parentNode === result ||
	          isError.parentNode.nodeName === 'body' ||
	          isError.parentNode.parentNode === result ||
	          isError.parentNode.parentNode.nodeName === 'body')) {
	        var errorElement = isError.getElementsByTagName('div')[0] || isError;
	        throw util.error(new Error(errorElement.textContent || 'Parser error in document'),
	          {
	            code: 'XMLParserError',
	            retryable: true
	          });
	      }
	    } else if (window.ActiveXObject) {
	      result = new window.ActiveXObject('Microsoft.XMLDOM');
	      result.async = false;

	      if (!result.loadXML(xml)) {
	        throw util.error(new Error('Parse error in document'),
	          {
	            code: 'XMLParserError',
	            retryable: true
	          });
	      }
	    } else {
	      throw new Error('Cannot load XML parser');
	    }
	  } catch (e) {
	    error = e;
	  }

	  if (result && result.documentElement && !error) {
	    var data = parseXml(result.documentElement, shape);
	    var metadata = result.getElementsByTagName('ResponseMetadata')[0];
	    if (metadata) {
	      data.ResponseMetadata = parseXml(metadata, {});
	    }
	    return data;
	  } else if (error) {
	    throw util.error(error || new Error(), {code: 'XMLParserError', retryable: true});
	  } else { // empty xml document
	    return {};
	  }
	};

	function parseXml(xml, shape) {
	  if (!shape) shape = {};
	  switch (shape.type) {
	    case 'structure': return parseStructure(xml, shape);
	    case 'map': return parseMap(xml, shape);
	    case 'list': return parseList(xml, shape);
	    case undefined: case null: return parseUnknown(xml);
	    default: return parseScalar(xml, shape);
	  }
	}

	function parseStructure(xml, shape) {
	  var data = {};
	  if (xml === null) return data;

	  util.each(shape.members, function(memberName, memberShape) {
	    if (memberShape.isXmlAttribute) {
	      if (Object.prototype.hasOwnProperty.call(xml.attributes, memberShape.name)) {
	        var value = xml.attributes[memberShape.name].value;
	        data[memberName] = parseXml({textContent: value}, memberShape);
	      }
	    } else {
	      var xmlChild = memberShape.flattened ? xml :
	        xml.getElementsByTagName(memberShape.name)[0];
	      if (xmlChild) {
	        data[memberName] = parseXml(xmlChild, memberShape);
	      } else if (!memberShape.flattened && memberShape.type === 'list') {
	        data[memberName] = memberShape.defaultValue;
	      }
	    }
	  });

	  return data;
	}

	function parseMap(xml, shape) {
	  var data = {};
	  var xmlKey = shape.key.name || 'key';
	  var xmlValue = shape.value.name || 'value';
	  var tagName = shape.flattened ? shape.name : 'entry';

	  var child = xml.firstElementChild;
	  while (child) {
	    if (child.nodeName === tagName) {
	      var key = child.getElementsByTagName(xmlKey)[0].textContent;
	      var value = child.getElementsByTagName(xmlValue)[0];
	      data[key] = parseXml(value, shape.value);
	    }
	    child = child.nextElementSibling;
	  }
	  return data;
	}

	function parseList(xml, shape) {
	  var data = [];
	  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

	  var child = xml.firstElementChild;
	  while (child) {
	    if (child.nodeName === tagName) {
	      data.push(parseXml(child, shape.member));
	    }
	    child = child.nextElementSibling;
	  }
	  return data;
	}

	function parseScalar(xml, shape) {
	  if (xml.getAttribute) {
	    var encoding = xml.getAttribute('encoding');
	    if (encoding === 'base64') {
	      shape = new Shape.create({type: encoding});
	    }
	  }

	  var text = xml.textContent;
	  if (text === '') text = null;
	  if (typeof shape.toType === 'function') {
	    return shape.toType(text);
	  } else {
	    return text;
	  }
	}

	function parseUnknown(xml) {
	  if (xml === undefined || xml === null) return '';

	  // empty object
	  if (!xml.firstElementChild) {
	    if (xml.parentNode.parentNode === null) return {};
	    if (xml.childNodes.length === 0) return '';
	    else return xml.textContent;
	  }

	  // object, parse as structure
	  var shape = {type: 'structure', members: {}};
	  var child = xml.firstElementChild;
	  while (child) {
	    var tag = child.nodeName;
	    if (Object.prototype.hasOwnProperty.call(shape.members, tag)) {
	      // multiple tags of the same name makes it a list
	      shape.members[tag].type = 'list';
	    } else {
	      shape.members[tag] = {name: tag};
	    }
	    child = child.nextElementSibling;
	  }
	  return parseStructure(xml, shape);
	}

	module.exports = DomXmlParser;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(63);
	var EventEmitter = __webpack_require__(31).EventEmitter;
	__webpack_require__(161);

	/**
	 * @api private
	 */
	AWS.XHRClient = AWS.util.inherit({
	  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
	    var self = this;
	    var endpoint = httpRequest.endpoint;
	    var emitter = new EventEmitter();
	    var href = endpoint.protocol + '//' + endpoint.hostname;
	    if (endpoint.port !== 80 && endpoint.port !== 443) {
	      href += ':' + endpoint.port;
	    }
	    href += httpRequest.path;

	    var xhr = new XMLHttpRequest(), headersEmitted = false;
	    httpRequest.stream = xhr;

	    xhr.addEventListener('readystatechange', function() {
	      try {
	        if (xhr.status === 0) return; // 0 code is invalid
	      } catch (e) { return; }

	      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
	        try { xhr.responseType = 'arraybuffer'; } catch (e) {}
	        emitter.statusCode = xhr.status;
	        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
	        emitter.emit('headers', emitter.statusCode, emitter.headers);
	        headersEmitted = true;
	      }
	      if (this.readyState === this.DONE) {
	        self.finishRequest(xhr, emitter);
	      }
	    }, false);
	    xhr.upload.addEventListener('progress', function (evt) {
	      emitter.emit('sendProgress', evt);
	    });
	    xhr.addEventListener('progress', function (evt) {
	      emitter.emit('receiveProgress', evt);
	    }, false);
	    xhr.addEventListener('timeout', function () {
	      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
	    }, false);
	    xhr.addEventListener('error', function () {
	      errCallback(AWS.util.error(new Error('Network Failure'), {
	        code: 'NetworkingError'
	      }));
	    }, false);

	    callback(emitter);
	    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
	    AWS.util.each(httpRequest.headers, function (key, value) {
	      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
	        xhr.setRequestHeader(key, value);
	      }
	    });

	    if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
	      xhr.timeout = httpOptions.timeout;
	    }

	    if (httpOptions.xhrWithCredentials) {
	      xhr.withCredentials = true;
	    }

	    try {
	      xhr.send(httpRequest.body);
	    } catch (err) {
	      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
	        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
	      } else {
	        throw err;
	      }
	    }

	    return emitter;
	  },

	  parseHeaders: function parseHeaders(rawHeaders) {
	    var headers = {};
	    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
	      var key = line.split(':', 1)[0];
	      var value = line.substring(key.length + 2);
	      if (key.length > 0) headers[key.toLowerCase()] = value;
	    });
	    return headers;
	  },

	  finishRequest: function finishRequest(xhr, emitter) {
	    var buffer;
	    if (xhr.responseType === 'arraybuffer' && xhr.response) {
	      var ab = xhr.response;
	      buffer = new AWS.util.Buffer(ab.byteLength);
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < buffer.length; ++i) {
	        buffer[i] = view[i];
	      }
	    }

	    try {
	      if (!buffer && typeof xhr.responseText === 'string') {
	        buffer = new AWS.util.Buffer(xhr.responseText);
	      }
	    } catch (e) {}

	    if (buffer) emitter.emit('data', buffer);
	    emitter.emit('end');
	  }
	});

	/**
	 * @api private
	 */
	AWS.HttpClient.prototype = AWS.XHRClient.prototype;

	/**
	 * @api private
	 */
	AWS.HttpClient.streamsApiVersion = 1;


/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = {
		"version": "2.0",
		"metadata": {
			"apiVersion": "2016-04-18",
			"endpointPrefix": "cognito-idp",
			"jsonVersion": "1.1",
			"protocol": "json",
			"serviceFullName": "Amazon Cognito Identity Provider",
			"signatureVersion": "v4",
			"targetPrefix": "AWSCognitoIdentityProviderService",
			"uid": "cognito-idp-2016-04-18"
		},
		"operations": {
			"AddCustomAttributes": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"CustomAttributes"
					],
					"members": {
						"UserPoolId": {},
						"CustomAttributes": {
							"type": "list",
							"member": {
								"shape": "S4"
							}
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminAddUserToGroup": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"GroupName"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"GroupName": {}
					}
				}
			},
			"AdminConfirmSignUp": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminCreateUser": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"UserAttributes": {
							"shape": "Si"
						},
						"ValidationData": {
							"shape": "Si"
						},
						"TemporaryPassword": {
							"shape": "Sm"
						},
						"ForceAliasCreation": {
							"type": "boolean"
						},
						"MessageAction": {},
						"DesiredDeliveryMediums": {
							"type": "list",
							"member": {}
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"User": {
							"shape": "Ss"
						}
					}
				}
			},
			"AdminDeleteUser": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				}
			},
			"AdminDeleteUserAttributes": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"UserAttributeNames"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"UserAttributeNames": {
							"shape": "Sz"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminDisableUser": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminEnableUser": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminForgetDevice": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"DeviceKey"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"DeviceKey": {}
					}
				}
			},
			"AdminGetDevice": {
				"input": {
					"type": "structure",
					"required": [
						"DeviceKey",
						"UserPoolId",
						"Username"
					],
					"members": {
						"DeviceKey": {},
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"required": [
						"Device"
					],
					"members": {
						"Device": {
							"shape": "S19"
						}
					}
				}
			},
			"AdminGetUser": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"required": [
						"Username"
					],
					"members": {
						"Username": {
							"shape": "Sd"
						},
						"UserAttributes": {
							"shape": "Si"
						},
						"UserCreateDate": {
							"type": "timestamp"
						},
						"UserLastModifiedDate": {
							"type": "timestamp"
						},
						"Enabled": {
							"type": "boolean"
						},
						"UserStatus": {},
						"MFAOptions": {
							"shape": "Sv"
						}
					}
				}
			},
			"AdminInitiateAuth": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientId",
						"AuthFlow"
					],
					"members": {
						"UserPoolId": {},
						"ClientId": {
							"shape": "S1d"
						},
						"AuthFlow": {},
						"AuthParameters": {
							"shape": "S1f"
						},
						"ClientMetadata": {
							"shape": "S1g"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"ChallengeName": {},
						"Session": {},
						"ChallengeParameters": {
							"shape": "S1k"
						},
						"AuthenticationResult": {
							"shape": "S1l"
						}
					}
				}
			},
			"AdminListDevices": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"Limit": {
							"type": "integer"
						},
						"PaginationToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Devices": {
							"shape": "S1t"
						},
						"PaginationToken": {}
					}
				}
			},
			"AdminListGroupsForUser": {
				"input": {
					"type": "structure",
					"required": [
						"Username",
						"UserPoolId"
					],
					"members": {
						"Username": {
							"shape": "Sd"
						},
						"UserPoolId": {},
						"Limit": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Groups": {
							"shape": "S1x"
						},
						"NextToken": {}
					}
				}
			},
			"AdminRemoveUserFromGroup": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"GroupName"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"GroupName": {}
					}
				}
			},
			"AdminResetUserPassword": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminRespondToAuthChallenge": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientId",
						"ChallengeName"
					],
					"members": {
						"UserPoolId": {},
						"ClientId": {
							"shape": "S1d"
						},
						"ChallengeName": {},
						"ChallengeResponses": {
							"shape": "S26"
						},
						"Session": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"ChallengeName": {},
						"Session": {},
						"ChallengeParameters": {
							"shape": "S1k"
						},
						"AuthenticationResult": {
							"shape": "S1l"
						}
					}
				}
			},
			"AdminSetUserSettings": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"MFAOptions"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"MFAOptions": {
							"shape": "Sv"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminUpdateDeviceStatus": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"DeviceKey"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"DeviceKey": {},
						"DeviceRememberedStatus": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminUpdateUserAttributes": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username",
						"UserAttributes"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						},
						"UserAttributes": {
							"shape": "Si"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"AdminUserGlobalSignOut": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"Username"
					],
					"members": {
						"UserPoolId": {},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"ChangePassword": {
				"input": {
					"type": "structure",
					"required": [
						"PreviousPassword",
						"ProposedPassword"
					],
					"members": {
						"PreviousPassword": {
							"shape": "Sm"
						},
						"ProposedPassword": {
							"shape": "Sm"
						},
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			},
			"ConfirmDevice": {
				"input": {
					"type": "structure",
					"required": [
						"AccessToken",
						"DeviceKey"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"DeviceKey": {},
						"DeviceSecretVerifierConfig": {
							"type": "structure",
							"members": {
								"PasswordVerifier": {},
								"Salt": {}
							}
						},
						"DeviceName": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserConfirmationNecessary": {
							"type": "boolean"
						}
					}
				}
			},
			"ConfirmForgotPassword": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"Username",
						"ConfirmationCode",
						"Password"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"SecretHash": {
							"shape": "S2o"
						},
						"Username": {
							"shape": "Sd"
						},
						"ConfirmationCode": {},
						"Password": {
							"shape": "Sm"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			},
			"ConfirmSignUp": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"Username",
						"ConfirmationCode"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"SecretHash": {
							"shape": "S2o"
						},
						"Username": {
							"shape": "Sd"
						},
						"ConfirmationCode": {},
						"ForceAliasCreation": {
							"type": "boolean"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			},
			"CreateGroup": {
				"input": {
					"type": "structure",
					"required": [
						"GroupName",
						"UserPoolId"
					],
					"members": {
						"GroupName": {},
						"UserPoolId": {},
						"Description": {},
						"RoleArn": {},
						"Precedence": {
							"type": "integer"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Group": {
							"shape": "S1y"
						}
					}
				}
			},
			"CreateUserImportJob": {
				"input": {
					"type": "structure",
					"required": [
						"JobName",
						"UserPoolId",
						"CloudWatchLogsRoleArn"
					],
					"members": {
						"JobName": {},
						"UserPoolId": {},
						"CloudWatchLogsRoleArn": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserImportJob": {
							"shape": "S2y"
						}
					}
				}
			},
			"CreateUserPool": {
				"input": {
					"type": "structure",
					"required": [
						"PoolName"
					],
					"members": {
						"PoolName": {},
						"Policies": {
							"shape": "S36"
						},
						"LambdaConfig": {
							"shape": "S39"
						},
						"AutoVerifiedAttributes": {
							"shape": "S3a"
						},
						"AliasAttributes": {
							"shape": "S3c"
						},
						"SmsVerificationMessage": {},
						"EmailVerificationMessage": {},
						"EmailVerificationSubject": {},
						"SmsAuthenticationMessage": {},
						"MfaConfiguration": {},
						"DeviceConfiguration": {
							"shape": "S3i"
						},
						"EmailConfiguration": {
							"shape": "S3j"
						},
						"SmsConfiguration": {
							"shape": "S3l"
						},
						"UserPoolTags": {
							"shape": "S3m"
						},
						"AdminCreateUserConfig": {
							"shape": "S3n"
						},
						"Schema": {
							"shape": "S3q"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPool": {
							"shape": "S3s"
						}
					}
				}
			},
			"CreateUserPoolClient": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientName"
					],
					"members": {
						"UserPoolId": {},
						"ClientName": {},
						"GenerateSecret": {
							"type": "boolean"
						},
						"RefreshTokenValidity": {
							"type": "integer"
						},
						"ReadAttributes": {
							"shape": "S3y"
						},
						"WriteAttributes": {
							"shape": "S3y"
						},
						"ExplicitAuthFlows": {
							"shape": "S40"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPoolClient": {
							"shape": "S43"
						}
					}
				}
			},
			"DeleteGroup": {
				"input": {
					"type": "structure",
					"required": [
						"GroupName",
						"UserPoolId"
					],
					"members": {
						"GroupName": {},
						"UserPoolId": {}
					}
				}
			},
			"DeleteUser": {
				"input": {
					"type": "structure",
					"members": {
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"authtype": "none"
			},
			"DeleteUserAttributes": {
				"input": {
					"type": "structure",
					"required": [
						"UserAttributeNames"
					],
					"members": {
						"UserAttributeNames": {
							"shape": "Sz"
						},
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			},
			"DeleteUserPool": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {}
					}
				}
			},
			"DeleteUserPoolClient": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientId"
					],
					"members": {
						"UserPoolId": {},
						"ClientId": {
							"shape": "S1d"
						}
					}
				}
			},
			"DescribeUserImportJob": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"JobId"
					],
					"members": {
						"UserPoolId": {},
						"JobId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserImportJob": {
							"shape": "S2y"
						}
					}
				}
			},
			"DescribeUserPool": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPool": {
							"shape": "S3s"
						}
					}
				}
			},
			"DescribeUserPoolClient": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientId"
					],
					"members": {
						"UserPoolId": {},
						"ClientId": {
							"shape": "S1d"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPoolClient": {
							"shape": "S43"
						}
					}
				}
			},
			"ForgetDevice": {
				"input": {
					"type": "structure",
					"required": [
						"DeviceKey"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"DeviceKey": {}
					}
				}
			},
			"ForgotPassword": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"Username"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"SecretHash": {
							"shape": "S2o"
						},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"CodeDeliveryDetails": {
							"shape": "S4k"
						}
					}
				},
				"authtype": "none"
			},
			"GetCSVHeader": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPoolId": {},
						"CSVHeader": {
							"type": "list",
							"member": {}
						}
					}
				}
			},
			"GetDevice": {
				"input": {
					"type": "structure",
					"required": [
						"DeviceKey"
					],
					"members": {
						"DeviceKey": {},
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"required": [
						"Device"
					],
					"members": {
						"Device": {
							"shape": "S19"
						}
					}
				}
			},
			"GetGroup": {
				"input": {
					"type": "structure",
					"required": [
						"GroupName",
						"UserPoolId"
					],
					"members": {
						"GroupName": {},
						"UserPoolId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Group": {
							"shape": "S1y"
						}
					}
				}
			},
			"GetUser": {
				"input": {
					"type": "structure",
					"members": {
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"required": [
						"Username",
						"UserAttributes"
					],
					"members": {
						"Username": {
							"shape": "Sd"
						},
						"UserAttributes": {
							"shape": "Si"
						},
						"MFAOptions": {
							"shape": "Sv"
						}
					}
				},
				"authtype": "none"
			},
			"GetUserAttributeVerificationCode": {
				"input": {
					"type": "structure",
					"required": [
						"AttributeName"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"AttributeName": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"CodeDeliveryDetails": {
							"shape": "S4k"
						}
					}
				},
				"authtype": "none"
			},
			"GlobalSignOut": {
				"input": {
					"type": "structure",
					"members": {
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"InitiateAuth": {
				"input": {
					"type": "structure",
					"required": [
						"AuthFlow",
						"ClientId"
					],
					"members": {
						"AuthFlow": {},
						"AuthParameters": {
							"shape": "S1f"
						},
						"ClientMetadata": {
							"shape": "S1g"
						},
						"ClientId": {
							"shape": "S1d"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"ChallengeName": {},
						"Session": {},
						"ChallengeParameters": {
							"shape": "S1k"
						},
						"AuthenticationResult": {
							"shape": "S1l"
						}
					}
				}
			},
			"ListDevices": {
				"input": {
					"type": "structure",
					"required": [
						"AccessToken"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"Limit": {
							"type": "integer"
						},
						"PaginationToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Devices": {
							"shape": "S1t"
						},
						"PaginationToken": {}
					}
				}
			},
			"ListGroups": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {},
						"Limit": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Groups": {
							"shape": "S1x"
						},
						"NextToken": {}
					}
				}
			},
			"ListUserImportJobs": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"MaxResults"
					],
					"members": {
						"UserPoolId": {},
						"MaxResults": {
							"type": "integer"
						},
						"PaginationToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserImportJobs": {
							"type": "list",
							"member": {
								"shape": "S2y"
							}
						},
						"PaginationToken": {}
					}
				}
			},
			"ListUserPoolClients": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {},
						"MaxResults": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPoolClients": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"ClientId": {
										"shape": "S1d"
									},
									"UserPoolId": {},
									"ClientName": {}
								}
							}
						},
						"NextToken": {}
					}
				}
			},
			"ListUserPools": {
				"input": {
					"type": "structure",
					"required": [
						"MaxResults"
					],
					"members": {
						"NextToken": {},
						"MaxResults": {
							"type": "integer"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPools": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"Id": {},
									"Name": {},
									"LambdaConfig": {
										"shape": "S39"
									},
									"Status": {},
									"LastModifiedDate": {
										"type": "timestamp"
									},
									"CreationDate": {
										"type": "timestamp"
									}
								}
							}
						},
						"NextToken": {}
					}
				}
			},
			"ListUsers": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {},
						"AttributesToGet": {
							"type": "list",
							"member": {}
						},
						"Limit": {
							"type": "integer"
						},
						"PaginationToken": {},
						"Filter": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Users": {
							"shape": "S5m"
						},
						"PaginationToken": {}
					}
				}
			},
			"ListUsersInGroup": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"GroupName"
					],
					"members": {
						"UserPoolId": {},
						"GroupName": {},
						"Limit": {
							"type": "integer"
						},
						"NextToken": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Users": {
							"shape": "S5m"
						},
						"NextToken": {}
					}
				}
			},
			"ResendConfirmationCode": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"Username"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"SecretHash": {
							"shape": "S2o"
						},
						"Username": {
							"shape": "Sd"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"CodeDeliveryDetails": {
							"shape": "S4k"
						}
					}
				},
				"authtype": "none"
			},
			"RespondToAuthChallenge": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"ChallengeName"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"ChallengeName": {},
						"Session": {},
						"ChallengeResponses": {
							"shape": "S26"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"ChallengeName": {},
						"Session": {},
						"ChallengeParameters": {
							"shape": "S1k"
						},
						"AuthenticationResult": {
							"shape": "S1l"
						}
					}
				}
			},
			"SetUserSettings": {
				"input": {
					"type": "structure",
					"required": [
						"AccessToken",
						"MFAOptions"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"MFAOptions": {
							"shape": "Sv"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			},
			"SignUp": {
				"input": {
					"type": "structure",
					"required": [
						"ClientId",
						"Username",
						"Password"
					],
					"members": {
						"ClientId": {
							"shape": "S1d"
						},
						"SecretHash": {
							"shape": "S2o"
						},
						"Username": {
							"shape": "Sd"
						},
						"Password": {
							"shape": "Sm"
						},
						"UserAttributes": {
							"shape": "Si"
						},
						"ValidationData": {
							"shape": "Si"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserConfirmed": {
							"type": "boolean"
						},
						"CodeDeliveryDetails": {
							"shape": "S4k"
						}
					}
				},
				"authtype": "none"
			},
			"StartUserImportJob": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"JobId"
					],
					"members": {
						"UserPoolId": {},
						"JobId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserImportJob": {
							"shape": "S2y"
						}
					}
				}
			},
			"StopUserImportJob": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"JobId"
					],
					"members": {
						"UserPoolId": {},
						"JobId": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserImportJob": {
							"shape": "S2y"
						}
					}
				}
			},
			"UpdateDeviceStatus": {
				"input": {
					"type": "structure",
					"required": [
						"AccessToken",
						"DeviceKey"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"DeviceKey": {},
						"DeviceRememberedStatus": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"UpdateGroup": {
				"input": {
					"type": "structure",
					"required": [
						"GroupName",
						"UserPoolId"
					],
					"members": {
						"GroupName": {},
						"UserPoolId": {},
						"Description": {},
						"RoleArn": {},
						"Precedence": {
							"type": "integer"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"Group": {
							"shape": "S1y"
						}
					}
				}
			},
			"UpdateUserAttributes": {
				"input": {
					"type": "structure",
					"required": [
						"UserAttributes"
					],
					"members": {
						"UserAttributes": {
							"shape": "Si"
						},
						"AccessToken": {
							"shape": "S1m"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"CodeDeliveryDetailsList": {
							"type": "list",
							"member": {
								"shape": "S4k"
							}
						}
					}
				},
				"authtype": "none"
			},
			"UpdateUserPool": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId"
					],
					"members": {
						"UserPoolId": {},
						"Policies": {
							"shape": "S36"
						},
						"LambdaConfig": {
							"shape": "S39"
						},
						"AutoVerifiedAttributes": {
							"shape": "S3a"
						},
						"SmsVerificationMessage": {},
						"EmailVerificationMessage": {},
						"EmailVerificationSubject": {},
						"SmsAuthenticationMessage": {},
						"MfaConfiguration": {},
						"DeviceConfiguration": {
							"shape": "S3i"
						},
						"EmailConfiguration": {
							"shape": "S3j"
						},
						"SmsConfiguration": {
							"shape": "S3l"
						},
						"UserPoolTags": {
							"shape": "S3m"
						},
						"AdminCreateUserConfig": {
							"shape": "S3n"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				}
			},
			"UpdateUserPoolClient": {
				"input": {
					"type": "structure",
					"required": [
						"UserPoolId",
						"ClientId"
					],
					"members": {
						"UserPoolId": {},
						"ClientId": {
							"shape": "S1d"
						},
						"ClientName": {},
						"RefreshTokenValidity": {
							"type": "integer"
						},
						"ReadAttributes": {
							"shape": "S3y"
						},
						"WriteAttributes": {
							"shape": "S3y"
						},
						"ExplicitAuthFlows": {
							"shape": "S40"
						}
					}
				},
				"output": {
					"type": "structure",
					"members": {
						"UserPoolClient": {
							"shape": "S43"
						}
					}
				}
			},
			"VerifyUserAttribute": {
				"input": {
					"type": "structure",
					"required": [
						"AttributeName",
						"Code"
					],
					"members": {
						"AccessToken": {
							"shape": "S1m"
						},
						"AttributeName": {},
						"Code": {}
					}
				},
				"output": {
					"type": "structure",
					"members": {}
				},
				"authtype": "none"
			}
		},
		"shapes": {
			"S4": {
				"type": "structure",
				"members": {
					"Name": {},
					"AttributeDataType": {},
					"DeveloperOnlyAttribute": {
						"type": "boolean"
					},
					"Mutable": {
						"type": "boolean"
					},
					"Required": {
						"type": "boolean"
					},
					"NumberAttributeConstraints": {
						"type": "structure",
						"members": {
							"MinValue": {},
							"MaxValue": {}
						}
					},
					"StringAttributeConstraints": {
						"type": "structure",
						"members": {
							"MinLength": {},
							"MaxLength": {}
						}
					}
				}
			},
			"Sd": {
				"type": "string",
				"sensitive": true
			},
			"Si": {
				"type": "list",
				"member": {
					"type": "structure",
					"required": [
						"Name"
					],
					"members": {
						"Name": {},
						"Value": {
							"type": "string",
							"sensitive": true
						}
					}
				}
			},
			"Sm": {
				"type": "string",
				"sensitive": true
			},
			"Ss": {
				"type": "structure",
				"members": {
					"Username": {
						"shape": "Sd"
					},
					"Attributes": {
						"shape": "Si"
					},
					"UserCreateDate": {
						"type": "timestamp"
					},
					"UserLastModifiedDate": {
						"type": "timestamp"
					},
					"Enabled": {
						"type": "boolean"
					},
					"UserStatus": {},
					"MFAOptions": {
						"shape": "Sv"
					}
				}
			},
			"Sv": {
				"type": "list",
				"member": {
					"type": "structure",
					"members": {
						"DeliveryMedium": {},
						"AttributeName": {}
					}
				}
			},
			"Sz": {
				"type": "list",
				"member": {}
			},
			"S19": {
				"type": "structure",
				"members": {
					"DeviceKey": {},
					"DeviceAttributes": {
						"shape": "Si"
					},
					"DeviceCreateDate": {
						"type": "timestamp"
					},
					"DeviceLastModifiedDate": {
						"type": "timestamp"
					},
					"DeviceLastAuthenticatedDate": {
						"type": "timestamp"
					}
				}
			},
			"S1d": {
				"type": "string",
				"sensitive": true
			},
			"S1f": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S1g": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S1k": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S1l": {
				"type": "structure",
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"ExpiresIn": {
						"type": "integer"
					},
					"TokenType": {},
					"RefreshToken": {
						"shape": "S1m"
					},
					"IdToken": {
						"shape": "S1m"
					},
					"NewDeviceMetadata": {
						"type": "structure",
						"members": {
							"DeviceKey": {},
							"DeviceGroupKey": {}
						}
					}
				}
			},
			"S1m": {
				"type": "string",
				"sensitive": true
			},
			"S1t": {
				"type": "list",
				"member": {
					"shape": "S19"
				}
			},
			"S1x": {
				"type": "list",
				"member": {
					"shape": "S1y"
				}
			},
			"S1y": {
				"type": "structure",
				"members": {
					"GroupName": {},
					"UserPoolId": {},
					"Description": {},
					"RoleArn": {},
					"Precedence": {
						"type": "integer"
					},
					"LastModifiedDate": {
						"type": "timestamp"
					},
					"CreationDate": {
						"type": "timestamp"
					}
				}
			},
			"S26": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S2o": {
				"type": "string",
				"sensitive": true
			},
			"S2y": {
				"type": "structure",
				"members": {
					"JobName": {},
					"JobId": {},
					"UserPoolId": {},
					"PreSignedUrl": {},
					"CreationDate": {
						"type": "timestamp"
					},
					"StartDate": {
						"type": "timestamp"
					},
					"CompletionDate": {
						"type": "timestamp"
					},
					"Status": {},
					"CloudWatchLogsRoleArn": {},
					"ImportedUsers": {
						"type": "long"
					},
					"SkippedUsers": {
						"type": "long"
					},
					"FailedUsers": {
						"type": "long"
					},
					"CompletionMessage": {}
				}
			},
			"S36": {
				"type": "structure",
				"members": {
					"PasswordPolicy": {
						"type": "structure",
						"members": {
							"MinimumLength": {
								"type": "integer"
							},
							"RequireUppercase": {
								"type": "boolean"
							},
							"RequireLowercase": {
								"type": "boolean"
							},
							"RequireNumbers": {
								"type": "boolean"
							},
							"RequireSymbols": {
								"type": "boolean"
							}
						}
					}
				}
			},
			"S39": {
				"type": "structure",
				"members": {
					"PreSignUp": {},
					"CustomMessage": {},
					"PostConfirmation": {},
					"PreAuthentication": {},
					"PostAuthentication": {},
					"DefineAuthChallenge": {},
					"CreateAuthChallenge": {},
					"VerifyAuthChallengeResponse": {}
				}
			},
			"S3a": {
				"type": "list",
				"member": {}
			},
			"S3c": {
				"type": "list",
				"member": {}
			},
			"S3i": {
				"type": "structure",
				"members": {
					"ChallengeRequiredOnNewDevice": {
						"type": "boolean"
					},
					"DeviceOnlyRememberedOnUserPrompt": {
						"type": "boolean"
					}
				}
			},
			"S3j": {
				"type": "structure",
				"members": {
					"SourceArn": {},
					"ReplyToEmailAddress": {}
				}
			},
			"S3l": {
				"type": "structure",
				"required": [
					"SnsCallerArn"
				],
				"members": {
					"SnsCallerArn": {},
					"ExternalId": {}
				}
			},
			"S3m": {
				"type": "map",
				"key": {},
				"value": {}
			},
			"S3n": {
				"type": "structure",
				"members": {
					"AllowAdminCreateUserOnly": {
						"type": "boolean"
					},
					"UnusedAccountValidityDays": {
						"type": "integer"
					},
					"InviteMessageTemplate": {
						"type": "structure",
						"members": {
							"SMSMessage": {},
							"EmailMessage": {},
							"EmailSubject": {}
						}
					}
				}
			},
			"S3q": {
				"type": "list",
				"member": {
					"shape": "S4"
				}
			},
			"S3s": {
				"type": "structure",
				"members": {
					"Id": {},
					"Name": {},
					"Policies": {
						"shape": "S36"
					},
					"LambdaConfig": {
						"shape": "S39"
					},
					"Status": {},
					"LastModifiedDate": {
						"type": "timestamp"
					},
					"CreationDate": {
						"type": "timestamp"
					},
					"SchemaAttributes": {
						"shape": "S3q"
					},
					"AutoVerifiedAttributes": {
						"shape": "S3a"
					},
					"AliasAttributes": {
						"shape": "S3c"
					},
					"SmsVerificationMessage": {},
					"EmailVerificationMessage": {},
					"EmailVerificationSubject": {},
					"SmsAuthenticationMessage": {},
					"MfaConfiguration": {},
					"DeviceConfiguration": {
						"shape": "S3i"
					},
					"EstimatedNumberOfUsers": {
						"type": "integer"
					},
					"EmailConfiguration": {
						"shape": "S3j"
					},
					"SmsConfiguration": {
						"shape": "S3l"
					},
					"UserPoolTags": {
						"shape": "S3m"
					},
					"SmsConfigurationFailure": {},
					"EmailConfigurationFailure": {},
					"AdminCreateUserConfig": {
						"shape": "S3n"
					}
				}
			},
			"S3y": {
				"type": "list",
				"member": {}
			},
			"S40": {
				"type": "list",
				"member": {}
			},
			"S43": {
				"type": "structure",
				"members": {
					"UserPoolId": {},
					"ClientName": {},
					"ClientId": {
						"shape": "S1d"
					},
					"ClientSecret": {
						"type": "string",
						"sensitive": true
					},
					"LastModifiedDate": {
						"type": "timestamp"
					},
					"CreationDate": {
						"type": "timestamp"
					},
					"RefreshTokenValidity": {
						"type": "integer"
					},
					"ReadAttributes": {
						"shape": "S3y"
					},
					"WriteAttributes": {
						"shape": "S3y"
					},
					"ExplicitAuthFlows": {
						"shape": "S40"
					}
				}
			},
			"S4k": {
				"type": "structure",
				"members": {
					"Destination": {},
					"DeliveryMedium": {},
					"AttributeName": {}
				}
			},
			"S5m": {
				"type": "list",
				"member": {
					"shape": "Ss"
				}
			}
		}
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	(function(){

	    // Copyright (c) 2005  Tom Wu
	    // All Rights Reserved.
	    // See "LICENSE" for details.

	    // Basic JavaScript BN library - subset useful for RSA encryption.

	    // Bits per digit
	    var dbits;

	    // JavaScript engine analysis
	    var canary = 0xdeadbeefcafe;
	    var j_lm = ((canary&0xffffff)==0xefcafe);

	    // (public) Constructor
	    function BigInteger(a,b,c) {
	      if(a != null)
	        if("number" == typeof a) this.fromNumber(a,b,c);
	        else if(b == null && "string" != typeof a) this.fromString(a,256);
	        else this.fromString(a,b);
	    }

	    // return new, unset BigInteger
	    function nbi() { return new BigInteger(null); }

	    // am: Compute w_j += (x*this_i), propagate carries,
	    // c is initial carry, returns final carry.
	    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	    // We need to select the fastest one that works in this environment.

	    // am1: use a single mult and divide to get the high bits,
	    // max digit bits should be 26 because
	    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	    function am1(i,x,w,j,c,n) {
	      while(--n >= 0) {
	        var v = x*this[i++]+w[j]+c;
	        c = Math.floor(v/0x4000000);
	        w[j++] = v&0x3ffffff;
	      }
	      return c;
	    }
	    // am2 avoids a big mult-and-extract completely.
	    // Max digit bits should be <= 30 because we do bitwise ops
	    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	    function am2(i,x,w,j,c,n) {
	      var xl = x&0x7fff, xh = x>>15;
	      while(--n >= 0) {
	        var l = this[i]&0x7fff;
	        var h = this[i++]>>15;
	        var m = xh*l+h*xl;
	        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
	        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
	        w[j++] = l&0x3fffffff;
	      }
	      return c;
	    }
	    // Alternately, set max digit bits to 28 since some
	    // browsers slow down when dealing with 32-bit numbers.
	    function am3(i,x,w,j,c,n) {
	      var xl = x&0x3fff, xh = x>>14;
	      while(--n >= 0) {
	        var l = this[i]&0x3fff;
	        var h = this[i++]>>14;
	        var m = xh*l+h*xl;
	        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
	        c = (l>>28)+(m>>14)+xh*h;
	        w[j++] = l&0xfffffff;
	      }
	      return c;
	    }
	    var inBrowser = typeof navigator !== "undefined";
	    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
	      BigInteger.prototype.am = am2;
	      dbits = 30;
	    }
	    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
	      BigInteger.prototype.am = am1;
	      dbits = 26;
	    }
	    else { // Mozilla/Netscape seems to prefer am3
	      BigInteger.prototype.am = am3;
	      dbits = 28;
	    }

	    BigInteger.prototype.DB = dbits;
	    BigInteger.prototype.DM = ((1<<dbits)-1);
	    BigInteger.prototype.DV = (1<<dbits);

	    var BI_FP = 52;
	    BigInteger.prototype.FV = Math.pow(2,BI_FP);
	    BigInteger.prototype.F1 = BI_FP-dbits;
	    BigInteger.prototype.F2 = 2*dbits-BI_FP;

	    // Digit conversions
	    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	    var BI_RC = new Array();
	    var rr,vv;
	    rr = "0".charCodeAt(0);
	    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	    rr = "a".charCodeAt(0);
	    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	    rr = "A".charCodeAt(0);
	    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

	    function int2char(n) { return BI_RM.charAt(n); }
	    function intAt(s,i) {
	      var c = BI_RC[s.charCodeAt(i)];
	      return (c==null)?-1:c;
	    }

	    // (protected) copy this to r
	    function bnpCopyTo(r) {
	      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
	      r.t = this.t;
	      r.s = this.s;
	    }

	    // (protected) set from integer value x, -DV <= x < DV
	    function bnpFromInt(x) {
	      this.t = 1;
	      this.s = (x<0)?-1:0;
	      if(x > 0) this[0] = x;
	      else if(x < -1) this[0] = x+this.DV;
	      else this.t = 0;
	    }

	    // return bigint initialized to value
	    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

	    // (protected) set from string and radix
	    function bnpFromString(s,b) {
	      var k;
	      if(b == 16) k = 4;
	      else if(b == 8) k = 3;
	      else if(b == 256) k = 8; // byte array
	      else if(b == 2) k = 1;
	      else if(b == 32) k = 5;
	      else if(b == 4) k = 2;
	      else { this.fromRadix(s,b); return; }
	      this.t = 0;
	      this.s = 0;
	      var i = s.length, mi = false, sh = 0;
	      while(--i >= 0) {
	        var x = (k==8)?s[i]&0xff:intAt(s,i);
	        if(x < 0) {
	          if(s.charAt(i) == "-") mi = true;
	          continue;
	        }
	        mi = false;
	        if(sh == 0)
	          this[this.t++] = x;
	        else if(sh+k > this.DB) {
	          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
	          this[this.t++] = (x>>(this.DB-sh));
	        }
	        else
	          this[this.t-1] |= x<<sh;
	        sh += k;
	        if(sh >= this.DB) sh -= this.DB;
	      }
	      if(k == 8 && (s[0]&0x80) != 0) {
	        this.s = -1;
	        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
	      }
	      this.clamp();
	      if(mi) BigInteger.ZERO.subTo(this,this);
	    }

	    // (protected) clamp off excess high words
	    function bnpClamp() {
	      var c = this.s&this.DM;
	      while(this.t > 0 && this[this.t-1] == c) --this.t;
	    }

	    // (public) return string representation in given radix
	    function bnToString(b) {
	      if(this.s < 0) return "-"+this.negate().toString(b);
	      var k;
	      if(b == 16) k = 4;
	      else if(b == 8) k = 3;
	      else if(b == 2) k = 1;
	      else if(b == 32) k = 5;
	      else if(b == 4) k = 2;
	      else return this.toRadix(b);
	      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
	      var p = this.DB-(i*this.DB)%k;
	      if(i-- > 0) {
	        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
	        while(i >= 0) {
	          if(p < k) {
	            d = (this[i]&((1<<p)-1))<<(k-p);
	            d |= this[--i]>>(p+=this.DB-k);
	          }
	          else {
	            d = (this[i]>>(p-=k))&km;
	            if(p <= 0) { p += this.DB; --i; }
	          }
	          if(d > 0) m = true;
	          if(m) r += int2char(d);
	        }
	      }
	      return m?r:"0";
	    }

	    // (public) -this
	    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

	    // (public) |this|
	    function bnAbs() { return (this.s<0)?this.negate():this; }

	    // (public) return + if this > a, - if this < a, 0 if equal
	    function bnCompareTo(a) {
	      var r = this.s-a.s;
	      if(r != 0) return r;
	      var i = this.t;
	      r = i-a.t;
	      if(r != 0) return (this.s<0)?-r:r;
	      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
	      return 0;
	    }

	    // returns bit length of the integer x
	    function nbits(x) {
	      var r = 1, t;
	      if((t=x>>>16) != 0) { x = t; r += 16; }
	      if((t=x>>8) != 0) { x = t; r += 8; }
	      if((t=x>>4) != 0) { x = t; r += 4; }
	      if((t=x>>2) != 0) { x = t; r += 2; }
	      if((t=x>>1) != 0) { x = t; r += 1; }
	      return r;
	    }

	    // (public) return the number of bits in "this"
	    function bnBitLength() {
	      if(this.t <= 0) return 0;
	      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
	    }

	    // (protected) r = this << n*DB
	    function bnpDLShiftTo(n,r) {
	      var i;
	      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
	      for(i = n-1; i >= 0; --i) r[i] = 0;
	      r.t = this.t+n;
	      r.s = this.s;
	    }

	    // (protected) r = this >> n*DB
	    function bnpDRShiftTo(n,r) {
	      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
	      r.t = Math.max(this.t-n,0);
	      r.s = this.s;
	    }

	    // (protected) r = this << n
	    function bnpLShiftTo(n,r) {
	      var bs = n%this.DB;
	      var cbs = this.DB-bs;
	      var bm = (1<<cbs)-1;
	      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
	      for(i = this.t-1; i >= 0; --i) {
	        r[i+ds+1] = (this[i]>>cbs)|c;
	        c = (this[i]&bm)<<bs;
	      }
	      for(i = ds-1; i >= 0; --i) r[i] = 0;
	      r[ds] = c;
	      r.t = this.t+ds+1;
	      r.s = this.s;
	      r.clamp();
	    }

	    // (protected) r = this >> n
	    function bnpRShiftTo(n,r) {
	      r.s = this.s;
	      var ds = Math.floor(n/this.DB);
	      if(ds >= this.t) { r.t = 0; return; }
	      var bs = n%this.DB;
	      var cbs = this.DB-bs;
	      var bm = (1<<bs)-1;
	      r[0] = this[ds]>>bs;
	      for(var i = ds+1; i < this.t; ++i) {
	        r[i-ds-1] |= (this[i]&bm)<<cbs;
	        r[i-ds] = this[i]>>bs;
	      }
	      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
	      r.t = this.t-ds;
	      r.clamp();
	    }

	    // (protected) r = this - a
	    function bnpSubTo(a,r) {
	      var i = 0, c = 0, m = Math.min(a.t,this.t);
	      while(i < m) {
	        c += this[i]-a[i];
	        r[i++] = c&this.DM;
	        c >>= this.DB;
	      }
	      if(a.t < this.t) {
	        c -= a.s;
	        while(i < this.t) {
	          c += this[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += this.s;
	      }
	      else {
	        c += this.s;
	        while(i < a.t) {
	          c -= a[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c -= a.s;
	      }
	      r.s = (c<0)?-1:0;
	      if(c < -1) r[i++] = this.DV+c;
	      else if(c > 0) r[i++] = c;
	      r.t = i;
	      r.clamp();
	    }

	    // (protected) r = this * a, r != this,a (HAC 14.12)
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyTo(a,r) {
	      var x = this.abs(), y = a.abs();
	      var i = x.t;
	      r.t = i+y.t;
	      while(--i >= 0) r[i] = 0;
	      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
	      r.s = 0;
	      r.clamp();
	      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
	    }

	    // (protected) r = this^2, r != this (HAC 14.16)
	    function bnpSquareTo(r) {
	      var x = this.abs();
	      var i = r.t = 2*x.t;
	      while(--i >= 0) r[i] = 0;
	      for(i = 0; i < x.t-1; ++i) {
	        var c = x.am(i,x[i],r,2*i,0,1);
	        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
	          r[i+x.t] -= x.DV;
	          r[i+x.t+1] = 1;
	        }
	      }
	      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
	      r.s = 0;
	      r.clamp();
	    }

	    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	    // r != q, this != m.  q or r may be null.
	    function bnpDivRemTo(m,q,r) {
	      var pm = m.abs();
	      if(pm.t <= 0) return;
	      var pt = this.abs();
	      if(pt.t < pm.t) {
	        if(q != null) q.fromInt(0);
	        if(r != null) this.copyTo(r);
	        return;
	      }
	      if(r == null) r = nbi();
	      var y = nbi(), ts = this.s, ms = m.s;
	      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
	      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
	      else { pm.copyTo(y); pt.copyTo(r); }
	      var ys = y.t;
	      var y0 = y[ys-1];
	      if(y0 == 0) return;
	      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
	      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
	      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
	      y.dlShiftTo(j,t);
	      if(r.compareTo(t) >= 0) {
	        r[r.t++] = 1;
	        r.subTo(t,r);
	      }
	      BigInteger.ONE.dlShiftTo(ys,t);
	      t.subTo(y,y);  // "negative" y so we can replace sub with am later
	      while(y.t < ys) y[y.t++] = 0;
	      while(--j >= 0) {
	        // Estimate quotient digit
	        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
	        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
	          y.dlShiftTo(j,t);
	          r.subTo(t,r);
	          while(r[i] < --qd) r.subTo(t,r);
	        }
	      }
	      if(q != null) {
	        r.drShiftTo(ys,q);
	        if(ts != ms) BigInteger.ZERO.subTo(q,q);
	      }
	      r.t = ys;
	      r.clamp();
	      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
	      if(ts < 0) BigInteger.ZERO.subTo(r,r);
	    }

	    // (public) this mod a
	    function bnMod(a) {
	      var r = nbi();
	      this.abs().divRemTo(a,null,r);
	      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
	      return r;
	    }

	    // Modular reduction using "classic" algorithm
	    function Classic(m) { this.m = m; }
	    function cConvert(x) {
	      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
	      else return x;
	    }
	    function cRevert(x) { return x; }
	    function cReduce(x) { x.divRemTo(this.m,null,x); }
	    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

	    Classic.prototype.convert = cConvert;
	    Classic.prototype.revert = cRevert;
	    Classic.prototype.reduce = cReduce;
	    Classic.prototype.mulTo = cMulTo;
	    Classic.prototype.sqrTo = cSqrTo;

	    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	    // justification:
	    //         xy == 1 (mod m)
	    //         xy =  1+km
	    //   xy(2-xy) = (1+km)(1-km)
	    // x[y(2-xy)] = 1-k^2m^2
	    // x[y(2-xy)] == 1 (mod m^2)
	    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	    // JS multiply "overflows" differently from C/C++, so care is needed here.
	    function bnpInvDigit() {
	      if(this.t < 1) return 0;
	      var x = this[0];
	      if((x&1) == 0) return 0;
	      var y = x&3;       // y == 1/x mod 2^2
	      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
	      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
	      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
	      // last step - calculate inverse mod DV directly;
	      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
	      // we really want the negative inverse, and -DV < y < DV
	      return (y>0)?this.DV-y:-y;
	    }

	    // Montgomery reduction
	    function Montgomery(m) {
	      this.m = m;
	      this.mp = m.invDigit();
	      this.mpl = this.mp&0x7fff;
	      this.mph = this.mp>>15;
	      this.um = (1<<(m.DB-15))-1;
	      this.mt2 = 2*m.t;
	    }

	    // xR mod m
	    function montConvert(x) {
	      var r = nbi();
	      x.abs().dlShiftTo(this.m.t,r);
	      r.divRemTo(this.m,null,r);
	      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
	      return r;
	    }

	    // x/R mod m
	    function montRevert(x) {
	      var r = nbi();
	      x.copyTo(r);
	      this.reduce(r);
	      return r;
	    }

	    // x = x/R mod m (HAC 14.32)
	    function montReduce(x) {
	      while(x.t <= this.mt2) // pad x so am has enough room later
	        x[x.t++] = 0;
	      for(var i = 0; i < this.m.t; ++i) {
	        // faster way of calculating u0 = x[i]*mp mod DV
	        var j = x[i]&0x7fff;
	        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
	        // use am to combine the multiply-shift-add into one call
	        j = i+this.m.t;
	        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
	        // propagate carry
	        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
	      }
	      x.clamp();
	      x.drShiftTo(this.m.t,x);
	      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	    }

	    // r = "x^2/R mod m"; x != r
	    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

	    // r = "xy/R mod m"; x,y != r
	    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

	    Montgomery.prototype.convert = montConvert;
	    Montgomery.prototype.revert = montRevert;
	    Montgomery.prototype.reduce = montReduce;
	    Montgomery.prototype.mulTo = montMulTo;
	    Montgomery.prototype.sqrTo = montSqrTo;

	    // (protected) true iff this is even
	    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

	    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	    function bnpExp(e,z) {
	      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
	      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
	      g.copyTo(r);
	      while(--i >= 0) {
	        z.sqrTo(r,r2);
	        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
	        else { var t = r; r = r2; r2 = t; }
	      }
	      return z.revert(r);
	    }

	    // (public) this^e % m, 0 <= e < 2^32
	    function bnModPowInt(e,m) {
	      var z;
	      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
	      return this.exp(e,z);
	    }

	    // protected
	    BigInteger.prototype.copyTo = bnpCopyTo;
	    BigInteger.prototype.fromInt = bnpFromInt;
	    BigInteger.prototype.fromString = bnpFromString;
	    BigInteger.prototype.clamp = bnpClamp;
	    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	    BigInteger.prototype.lShiftTo = bnpLShiftTo;
	    BigInteger.prototype.rShiftTo = bnpRShiftTo;
	    BigInteger.prototype.subTo = bnpSubTo;
	    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	    BigInteger.prototype.squareTo = bnpSquareTo;
	    BigInteger.prototype.divRemTo = bnpDivRemTo;
	    BigInteger.prototype.invDigit = bnpInvDigit;
	    BigInteger.prototype.isEven = bnpIsEven;
	    BigInteger.prototype.exp = bnpExp;

	    // public
	    BigInteger.prototype.toString = bnToString;
	    BigInteger.prototype.negate = bnNegate;
	    BigInteger.prototype.abs = bnAbs;
	    BigInteger.prototype.compareTo = bnCompareTo;
	    BigInteger.prototype.bitLength = bnBitLength;
	    BigInteger.prototype.mod = bnMod;
	    BigInteger.prototype.modPowInt = bnModPowInt;

	    // "constants"
	    BigInteger.ZERO = nbv(0);
	    BigInteger.ONE = nbv(1);

	    // Copyright (c) 2005-2009  Tom Wu
	    // All Rights Reserved.
	    // See "LICENSE" for details.

	    // Extended JavaScript BN functions, required for RSA private ops.

	    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
	    // Version 1.2: square() API, isProbablePrime fix

	    // (public)
	    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

	    // (public) return value as integer
	    function bnIntValue() {
	      if(this.s < 0) {
	        if(this.t == 1) return this[0]-this.DV;
	        else if(this.t == 0) return -1;
	      }
	      else if(this.t == 1) return this[0];
	      else if(this.t == 0) return 0;
	      // assumes 16 < DB < 32
	      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
	    }

	    // (public) return value as byte
	    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

	    // (public) return value as short (assumes DB>=16)
	    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

	    // (protected) return x s.t. r^x < DV
	    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

	    // (public) 0 if this == 0, 1 if this > 0
	    function bnSigNum() {
	      if(this.s < 0) return -1;
	      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
	      else return 1;
	    }

	    // (protected) convert to radix string
	    function bnpToRadix(b) {
	      if(b == null) b = 10;
	      if(this.signum() == 0 || b < 2 || b > 36) return "0";
	      var cs = this.chunkSize(b);
	      var a = Math.pow(b,cs);
	      var d = nbv(a), y = nbi(), z = nbi(), r = "";
	      this.divRemTo(d,y,z);
	      while(y.signum() > 0) {
	        r = (a+z.intValue()).toString(b).substr(1) + r;
	        y.divRemTo(d,y,z);
	      }
	      return z.intValue().toString(b) + r;
	    }

	    // (protected) convert from radix string
	    function bnpFromRadix(s,b) {
	      this.fromInt(0);
	      if(b == null) b = 10;
	      var cs = this.chunkSize(b);
	      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
	      for(var i = 0; i < s.length; ++i) {
	        var x = intAt(s,i);
	        if(x < 0) {
	          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
	          continue;
	        }
	        w = b*w+x;
	        if(++j >= cs) {
	          this.dMultiply(d);
	          this.dAddOffset(w,0);
	          j = 0;
	          w = 0;
	        }
	      }
	      if(j > 0) {
	        this.dMultiply(Math.pow(b,j));
	        this.dAddOffset(w,0);
	      }
	      if(mi) BigInteger.ZERO.subTo(this,this);
	    }

	    // (protected) alternate constructor
	    function bnpFromNumber(a,b,c) {
	      if("number" == typeof b) {
	        // new BigInteger(int,int,RNG)
	        if(a < 2) this.fromInt(1);
	        else {
	          this.fromNumber(a,c);
	          if(!this.testBit(a-1))	// force MSB set
	            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
	          if(this.isEven()) this.dAddOffset(1,0); // force odd
	          while(!this.isProbablePrime(b)) {
	            this.dAddOffset(2,0);
	            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
	          }
	        }
	      }
	      else {
	        // new BigInteger(int,RNG)
	        var x = new Array(), t = a&7;
	        x.length = (a>>3)+1;
	        b.nextBytes(x);
	        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
	        this.fromString(x,256);
	      }
	    }

	    // (public) convert to bigendian byte array
	    function bnToByteArray() {
	      var i = this.t, r = new Array();
	      r[0] = this.s;
	      var p = this.DB-(i*this.DB)%8, d, k = 0;
	      if(i-- > 0) {
	        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
	          r[k++] = d|(this.s<<(this.DB-p));
	        while(i >= 0) {
	          if(p < 8) {
	            d = (this[i]&((1<<p)-1))<<(8-p);
	            d |= this[--i]>>(p+=this.DB-8);
	          }
	          else {
	            d = (this[i]>>(p-=8))&0xff;
	            if(p <= 0) { p += this.DB; --i; }
	          }
	          if((d&0x80) != 0) d |= -256;
	          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
	          if(k > 0 || d != this.s) r[k++] = d;
	        }
	      }
	      return r;
	    }

	    function bnEquals(a) { return(this.compareTo(a)==0); }
	    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
	    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

	    // (protected) r = this op a (bitwise)
	    function bnpBitwiseTo(a,op,r) {
	      var i, f, m = Math.min(a.t,this.t);
	      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
	      if(a.t < this.t) {
	        f = a.s&this.DM;
	        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
	        r.t = this.t;
	      }
	      else {
	        f = this.s&this.DM;
	        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
	        r.t = a.t;
	      }
	      r.s = op(this.s,a.s);
	      r.clamp();
	    }

	    // (public) this & a
	    function op_and(x,y) { return x&y; }
	    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

	    // (public) this | a
	    function op_or(x,y) { return x|y; }
	    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

	    // (public) this ^ a
	    function op_xor(x,y) { return x^y; }
	    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

	    // (public) this & ~a
	    function op_andnot(x,y) { return x&~y; }
	    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

	    // (public) ~this
	    function bnNot() {
	      var r = nbi();
	      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
	      r.t = this.t;
	      r.s = ~this.s;
	      return r;
	    }

	    // (public) this << n
	    function bnShiftLeft(n) {
	      var r = nbi();
	      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
	      return r;
	    }

	    // (public) this >> n
	    function bnShiftRight(n) {
	      var r = nbi();
	      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
	      return r;
	    }

	    // return index of lowest 1-bit in x, x < 2^31
	    function lbit(x) {
	      if(x == 0) return -1;
	      var r = 0;
	      if((x&0xffff) == 0) { x >>= 16; r += 16; }
	      if((x&0xff) == 0) { x >>= 8; r += 8; }
	      if((x&0xf) == 0) { x >>= 4; r += 4; }
	      if((x&3) == 0) { x >>= 2; r += 2; }
	      if((x&1) == 0) ++r;
	      return r;
	    }

	    // (public) returns index of lowest 1-bit (or -1 if none)
	    function bnGetLowestSetBit() {
	      for(var i = 0; i < this.t; ++i)
	        if(this[i] != 0) return i*this.DB+lbit(this[i]);
	      if(this.s < 0) return this.t*this.DB;
	      return -1;
	    }

	    // return number of 1 bits in x
	    function cbit(x) {
	      var r = 0;
	      while(x != 0) { x &= x-1; ++r; }
	      return r;
	    }

	    // (public) return number of set bits
	    function bnBitCount() {
	      var r = 0, x = this.s&this.DM;
	      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
	      return r;
	    }

	    // (public) true iff nth bit is set
	    function bnTestBit(n) {
	      var j = Math.floor(n/this.DB);
	      if(j >= this.t) return(this.s!=0);
	      return((this[j]&(1<<(n%this.DB)))!=0);
	    }

	    // (protected) this op (1<<n)
	    function bnpChangeBit(n,op) {
	      var r = BigInteger.ONE.shiftLeft(n);
	      this.bitwiseTo(r,op,r);
	      return r;
	    }

	    // (public) this | (1<<n)
	    function bnSetBit(n) { return this.changeBit(n,op_or); }

	    // (public) this & ~(1<<n)
	    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

	    // (public) this ^ (1<<n)
	    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

	    // (protected) r = this + a
	    function bnpAddTo(a,r) {
	      var i = 0, c = 0, m = Math.min(a.t,this.t);
	      while(i < m) {
	        c += this[i]+a[i];
	        r[i++] = c&this.DM;
	        c >>= this.DB;
	      }
	      if(a.t < this.t) {
	        c += a.s;
	        while(i < this.t) {
	          c += this[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += this.s;
	      }
	      else {
	        c += this.s;
	        while(i < a.t) {
	          c += a[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += a.s;
	      }
	      r.s = (c<0)?-1:0;
	      if(c > 0) r[i++] = c;
	      else if(c < -1) r[i++] = this.DV+c;
	      r.t = i;
	      r.clamp();
	    }

	    // (public) this + a
	    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

	    // (public) this - a
	    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

	    // (public) this * a
	    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

	    // (public) this^2
	    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

	    // (public) this / a
	    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

	    // (public) this % a
	    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

	    // (public) [this/a,this%a]
	    function bnDivideAndRemainder(a) {
	      var q = nbi(), r = nbi();
	      this.divRemTo(a,q,r);
	      return new Array(q,r);
	    }

	    // (protected) this *= n, this >= 0, 1 < n < DV
	    function bnpDMultiply(n) {
	      this[this.t] = this.am(0,n-1,this,0,0,this.t);
	      ++this.t;
	      this.clamp();
	    }

	    // (protected) this += n << w words, this >= 0
	    function bnpDAddOffset(n,w) {
	      if(n == 0) return;
	      while(this.t <= w) this[this.t++] = 0;
	      this[w] += n;
	      while(this[w] >= this.DV) {
	        this[w] -= this.DV;
	        if(++w >= this.t) this[this.t++] = 0;
	        ++this[w];
	      }
	    }

	    // A "null" reducer
	    function NullExp() {}
	    function nNop(x) { return x; }
	    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
	    function nSqrTo(x,r) { x.squareTo(r); }

	    NullExp.prototype.convert = nNop;
	    NullExp.prototype.revert = nNop;
	    NullExp.prototype.mulTo = nMulTo;
	    NullExp.prototype.sqrTo = nSqrTo;

	    // (public) this^e
	    function bnPow(e) { return this.exp(e,new NullExp()); }

	    // (protected) r = lower n words of "this * a", a.t <= n
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyLowerTo(a,n,r) {
	      var i = Math.min(this.t+a.t,n);
	      r.s = 0; // assumes a,this >= 0
	      r.t = i;
	      while(i > 0) r[--i] = 0;
	      var j;
	      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
	      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
	      r.clamp();
	    }

	    // (protected) r = "this * a" without lower n words, n > 0
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyUpperTo(a,n,r) {
	      --n;
	      var i = r.t = this.t+a.t-n;
	      r.s = 0; // assumes a,this >= 0
	      while(--i >= 0) r[i] = 0;
	      for(i = Math.max(n-this.t,0); i < a.t; ++i)
	        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
	      r.clamp();
	      r.drShiftTo(1,r);
	    }

	    // Barrett modular reduction
	    function Barrett(m) {
	      // setup Barrett
	      this.r2 = nbi();
	      this.q3 = nbi();
	      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
	      this.mu = this.r2.divide(m);
	      this.m = m;
	    }

	    function barrettConvert(x) {
	      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
	      else if(x.compareTo(this.m) < 0) return x;
	      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
	    }

	    function barrettRevert(x) { return x; }

	    // x = x mod m (HAC 14.42)
	    function barrettReduce(x) {
	      x.drShiftTo(this.m.t-1,this.r2);
	      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
	      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
	      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
	      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
	      x.subTo(this.r2,x);
	      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	    }

	    // r = x^2 mod m; x != r
	    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

	    // r = x*y mod m; x,y != r
	    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

	    Barrett.prototype.convert = barrettConvert;
	    Barrett.prototype.revert = barrettRevert;
	    Barrett.prototype.reduce = barrettReduce;
	    Barrett.prototype.mulTo = barrettMulTo;
	    Barrett.prototype.sqrTo = barrettSqrTo;

	    // (public) this^e % m (HAC 14.85)
	    function bnModPow(e,m) {
	      var i = e.bitLength(), k, r = nbv(1), z;
	      if(i <= 0) return r;
	      else if(i < 18) k = 1;
	      else if(i < 48) k = 3;
	      else if(i < 144) k = 4;
	      else if(i < 768) k = 5;
	      else k = 6;
	      if(i < 8)
	        z = new Classic(m);
	      else if(m.isEven())
	        z = new Barrett(m);
	      else
	        z = new Montgomery(m);

	      // precomputation
	      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
	      g[1] = z.convert(this);
	      if(k > 1) {
	        var g2 = nbi();
	        z.sqrTo(g[1],g2);
	        while(n <= km) {
	          g[n] = nbi();
	          z.mulTo(g2,g[n-2],g[n]);
	          n += 2;
	        }
	      }

	      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
	      i = nbits(e[j])-1;
	      while(j >= 0) {
	        if(i >= k1) w = (e[j]>>(i-k1))&km;
	        else {
	          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
	          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
	        }

	        n = k;
	        while((w&1) == 0) { w >>= 1; --n; }
	        if((i -= n) < 0) { i += this.DB; --j; }
	        if(is1) {	// ret == 1, don't bother squaring or multiplying it
	          g[w].copyTo(r);
	          is1 = false;
	        }
	        else {
	          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
	          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
	          z.mulTo(r2,g[w],r);
	        }

	        while(j >= 0 && (e[j]&(1<<i)) == 0) {
	          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
	          if(--i < 0) { i = this.DB-1; --j; }
	        }
	      }
	      return z.revert(r);
	    }

	    // (public) gcd(this,a) (HAC 14.54)
	    function bnGCD(a) {
	      var x = (this.s<0)?this.negate():this.clone();
	      var y = (a.s<0)?a.negate():a.clone();
	      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
	      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
	      if(g < 0) return x;
	      if(i < g) g = i;
	      if(g > 0) {
	        x.rShiftTo(g,x);
	        y.rShiftTo(g,y);
	      }
	      while(x.signum() > 0) {
	        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
	        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
	        if(x.compareTo(y) >= 0) {
	          x.subTo(y,x);
	          x.rShiftTo(1,x);
	        }
	        else {
	          y.subTo(x,y);
	          y.rShiftTo(1,y);
	        }
	      }
	      if(g > 0) y.lShiftTo(g,y);
	      return y;
	    }

	    // (protected) this % n, n < 2^26
	    function bnpModInt(n) {
	      if(n <= 0) return 0;
	      var d = this.DV%n, r = (this.s<0)?n-1:0;
	      if(this.t > 0)
	        if(d == 0) r = this[0]%n;
	        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
	      return r;
	    }

	    // (public) 1/this % m (HAC 14.61)
	    function bnModInverse(m) {
	      var ac = m.isEven();
	      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
	      var u = m.clone(), v = this.clone();
	      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
	      while(u.signum() != 0) {
	        while(u.isEven()) {
	          u.rShiftTo(1,u);
	          if(ac) {
	            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
	            a.rShiftTo(1,a);
	          }
	          else if(!b.isEven()) b.subTo(m,b);
	          b.rShiftTo(1,b);
	        }
	        while(v.isEven()) {
	          v.rShiftTo(1,v);
	          if(ac) {
	            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
	            c.rShiftTo(1,c);
	          }
	          else if(!d.isEven()) d.subTo(m,d);
	          d.rShiftTo(1,d);
	        }
	        if(u.compareTo(v) >= 0) {
	          u.subTo(v,u);
	          if(ac) a.subTo(c,a);
	          b.subTo(d,b);
	        }
	        else {
	          v.subTo(u,v);
	          if(ac) c.subTo(a,c);
	          d.subTo(b,d);
	        }
	      }
	      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
	      if(d.compareTo(m) >= 0) return d.subtract(m);
	      if(d.signum() < 0) d.addTo(m,d); else return d;
	      if(d.signum() < 0) return d.add(m); else return d;
	    }

	    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
	    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

	    // (public) test primality with certainty >= 1-.5^t
	    function bnIsProbablePrime(t) {
	      var i, x = this.abs();
	      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
	        for(i = 0; i < lowprimes.length; ++i)
	          if(x[0] == lowprimes[i]) return true;
	        return false;
	      }
	      if(x.isEven()) return false;
	      i = 1;
	      while(i < lowprimes.length) {
	        var m = lowprimes[i], j = i+1;
	        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
	        m = x.modInt(m);
	        while(i < j) if(m%lowprimes[i++] == 0) return false;
	      }
	      return x.millerRabin(t);
	    }

	    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
	    function bnpMillerRabin(t) {
	      var n1 = this.subtract(BigInteger.ONE);
	      var k = n1.getLowestSetBit();
	      if(k <= 0) return false;
	      var r = n1.shiftRight(k);
	      t = (t+1)>>1;
	      if(t > lowprimes.length) t = lowprimes.length;
	      var a = nbi();
	      for(var i = 0; i < t; ++i) {
	        //Pick bases at random, instead of starting at 2
	        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
	        var y = a.modPow(r,this);
	        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
	          var j = 1;
	          while(j++ < k && y.compareTo(n1) != 0) {
	            y = y.modPowInt(2,this);
	            if(y.compareTo(BigInteger.ONE) == 0) return false;
	          }
	          if(y.compareTo(n1) != 0) return false;
	        }
	      }
	      return true;
	    }

	    // protected
	    BigInteger.prototype.chunkSize = bnpChunkSize;
	    BigInteger.prototype.toRadix = bnpToRadix;
	    BigInteger.prototype.fromRadix = bnpFromRadix;
	    BigInteger.prototype.fromNumber = bnpFromNumber;
	    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
	    BigInteger.prototype.changeBit = bnpChangeBit;
	    BigInteger.prototype.addTo = bnpAddTo;
	    BigInteger.prototype.dMultiply = bnpDMultiply;
	    BigInteger.prototype.dAddOffset = bnpDAddOffset;
	    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
	    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
	    BigInteger.prototype.modInt = bnpModInt;
	    BigInteger.prototype.millerRabin = bnpMillerRabin;

	    // public
	    BigInteger.prototype.clone = bnClone;
	    BigInteger.prototype.intValue = bnIntValue;
	    BigInteger.prototype.byteValue = bnByteValue;
	    BigInteger.prototype.shortValue = bnShortValue;
	    BigInteger.prototype.signum = bnSigNum;
	    BigInteger.prototype.toByteArray = bnToByteArray;
	    BigInteger.prototype.equals = bnEquals;
	    BigInteger.prototype.min = bnMin;
	    BigInteger.prototype.max = bnMax;
	    BigInteger.prototype.and = bnAnd;
	    BigInteger.prototype.or = bnOr;
	    BigInteger.prototype.xor = bnXor;
	    BigInteger.prototype.andNot = bnAndNot;
	    BigInteger.prototype.not = bnNot;
	    BigInteger.prototype.shiftLeft = bnShiftLeft;
	    BigInteger.prototype.shiftRight = bnShiftRight;
	    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
	    BigInteger.prototype.bitCount = bnBitCount;
	    BigInteger.prototype.testBit = bnTestBit;
	    BigInteger.prototype.setBit = bnSetBit;
	    BigInteger.prototype.clearBit = bnClearBit;
	    BigInteger.prototype.flipBit = bnFlipBit;
	    BigInteger.prototype.add = bnAdd;
	    BigInteger.prototype.subtract = bnSubtract;
	    BigInteger.prototype.multiply = bnMultiply;
	    BigInteger.prototype.divide = bnDivide;
	    BigInteger.prototype.remainder = bnRemainder;
	    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
	    BigInteger.prototype.modPow = bnModPow;
	    BigInteger.prototype.modInverse = bnModInverse;
	    BigInteger.prototype.pow = bnPow;
	    BigInteger.prototype.gcd = bnGCD;
	    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

	    // JSBN-specific extension
	    BigInteger.prototype.square = bnSquare;

	    // Expose the Barrett function
	    BigInteger.prototype.Barrett = Barrett

	    // BigInteger interfaces not implemented in jsbn:

	    // BigInteger(int signum, byte[] magnitude)
	    // double doubleValue()
	    // float floatValue()
	    // int hashCode()
	    // long longValue()
	    // static BigInteger valueOf(long val)

		// Random number generator - requires a PRNG backend, e.g. prng4.js

		// For best results, put code like
		// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
		// in your main HTML document.

		var rng_state;
		var rng_pool;
		var rng_pptr;

		// Mix in a 32-bit integer into the pool
		function rng_seed_int(x) {
		  rng_pool[rng_pptr++] ^= x & 255;
		  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
		  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
		  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
		  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
		}

		// Mix in the current time (w/milliseconds) into the pool
		function rng_seed_time() {
		  rng_seed_int(new Date().getTime());
		}

		// Initialize the pool with junk if needed.
		if(rng_pool == null) {
		  rng_pool = new Array();
		  rng_pptr = 0;
		  var t;
		  if(typeof window !== "undefined" && window.crypto) {
			if (window.crypto.getRandomValues) {
			  // Use webcrypto if available
			  var ua = new Uint8Array(32);
			  window.crypto.getRandomValues(ua);
			  for(t = 0; t < 32; ++t)
				rng_pool[rng_pptr++] = ua[t];
			}
			else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
			  // Extract entropy (256 bits) from NS4 RNG if available
			  var z = window.crypto.random(32);
			  for(t = 0; t < z.length; ++t)
				rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
			}
		  }
		  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
			t = Math.floor(65536 * Math.random());
			rng_pool[rng_pptr++] = t >>> 8;
			rng_pool[rng_pptr++] = t & 255;
		  }
		  rng_pptr = 0;
		  rng_seed_time();
		  //rng_seed_int(window.screenX);
		  //rng_seed_int(window.screenY);
		}

		function rng_get_byte() {
		  if(rng_state == null) {
			rng_seed_time();
			rng_state = prng_newstate();
			rng_state.init(rng_pool);
			for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
			  rng_pool[rng_pptr] = 0;
			rng_pptr = 0;
			//rng_pool = null;
		  }
		  // TODO: allow reseeding after first request
		  return rng_state.next();
		}

		function rng_get_bytes(ba) {
		  var i;
		  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
		}

		function SecureRandom() {}

		SecureRandom.prototype.nextBytes = rng_get_bytes;

		// prng4.js - uses Arcfour as a PRNG

		function Arcfour() {
		  this.i = 0;
		  this.j = 0;
		  this.S = new Array();
		}

		// Initialize arcfour context from key, an array of ints, each from [0..255]
		function ARC4init(key) {
		  var i, j, t;
		  for(i = 0; i < 256; ++i)
			this.S[i] = i;
		  j = 0;
		  for(i = 0; i < 256; ++i) {
			j = (j + this.S[i] + key[i % key.length]) & 255;
			t = this.S[i];
			this.S[i] = this.S[j];
			this.S[j] = t;
		  }
		  this.i = 0;
		  this.j = 0;
		}

		function ARC4next() {
		  var t;
		  this.i = (this.i + 1) & 255;
		  this.j = (this.j + this.S[this.i]) & 255;
		  t = this.S[this.i];
		  this.S[this.i] = this.S[this.j];
		  this.S[this.j] = t;
		  return this.S[(t + this.S[this.i]) & 255];
		}

		Arcfour.prototype.init = ARC4init;
		Arcfour.prototype.next = ARC4next;

		// Plug in your RNG constructor here
		function prng_newstate() {
		  return new Arcfour();
		}

		// Pool size must be a multiple of 4 and greater than 32.
		// An array of bytes the size of the pool will be passed to init()
		var rng_psize = 256;

	    if (true) {
	        exports = module.exports = {
				BigInteger: BigInteger,
				SecureRandom: SecureRandom,
			};
	    } else {
	        this.BigInteger = BigInteger;
	        this.SecureRandom = SecureRandom;
	    }

	}).call(this);


/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = {
	    PoolId : "eu-central-1_7yREshiYe",
	    PoolARN : "arn:aws:cognito-idp:eu-central-1:422168606827:userpool/eu-central-1_7yREshiYe",
	    ClientPoolId : "5p16h0gbcgu1bql5is9ampjvfd"
	}

/***/ }
/******/ ]);