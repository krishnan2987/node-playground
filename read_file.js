// Require my new parser.js file
var Parser = require('./parser');

// load the fs module
var fs = require('fs');

function result() {
    var result;

    //read the contents of the file
    var text = fs.readFileSync('example_log.txt', 'utf-8');

    // create an instance of the Parser object
     var parser = new Parser();

    //call the parse function
    result = parser.parse(text);

    return result;
}

module.exports = result;
