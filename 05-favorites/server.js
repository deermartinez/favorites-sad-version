// Require dependencies
//we always need out http
var http = require("http");

//import the filesystem module
const fs = require("fs");
//The fs.appendFile() method is used to asynchronously append the given data to a file.
// A new file is created if it does not exist. The options parameter can be used to modify 
//the behavior of the operation.


// Set our port to 8080
var PORT = 8080;

// Capture the url the request is made to
var server=http.createServer(handleRequest);

// Pass the handleRequest function to empower it with functionality.
function handleRequest(req,res){
    var path=req.url;
}

// When we visit different urls, read and respond with different files
//this is the switch 
switch(path){
    case"/":
        return displayRoot(res);

    case"/portfolio":
        return displayPortfolio(res);

    default:
        return index.html(path,res);
}
// default to rendering index.html, if none of above cases are hit


// Start our server so that it can begin listening to client requests.
Server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT)
});
  // Log (server-side) when our server has started
  



// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.

// ## Bonuses

// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`