//LOADER.JS BEGIN

window.onload = function() {
	var instance1 = App.getInstance();
    var instance2 = App.getInstance();
 
    console.log("App singleton? " + (instance1 === instance2));
};

//LOADER.JS END