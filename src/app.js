/*
var bob = {
    _name: "Bob",
    _friends: [
        "Cairo", 
        "Gracyelle"
    ],
    printFriends: function printFriends() {
        this._friends.forEach(function(f) {
            return console.log(this._name + " knows " + f);
        });
    }
};

bob.printFriends();


var color = () => console.log("red");

color();

*/

var bob = {
    _name: "Bob",
    _friends: [
        "Cairo", 
        "Gracyelle"
    ],
    printFriends: function printFriends() {
        this._friends.forEach(f => console.log(this._name +" knows "+ f));
    }
};

bob.printFriends();