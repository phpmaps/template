//APP.JS BEGIN

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