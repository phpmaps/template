//LOADER.JS BEGIN

window.onload = function() {
	var instance1 = App.getInstance();
    var instance2 = App.getInstance();
 
    console.log("App singleton? " + (instance1 === instance2));
};

//LOADER.JS END;//APP.JS BEGIN

var App = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance.");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

//APP.JS END