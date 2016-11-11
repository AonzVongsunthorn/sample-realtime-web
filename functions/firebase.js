exports.init = function () {
    var firebase = require("firebase");
    var config = require("../config");
    firebase.initializeApp(config.firebaseConfig);
};
