// Require dependencies
//we always need out http
var http = require('http');

//import the filesystem module
var fs = require('fs');
//The fs.appendFile() method is used to asynchronously append the given data to a file.
// A new file is created if it does not exist. The options parameter can be used to modify 
//the behavior of the operation.


// Set our port to 8080
var PORT = 8080;

// Capture the url the request is made to
var server=http.createServer(handleRequest);


// When we visit different urls, read and respond with different files
//this is the switch 
// Pass the handleRequest function to empower it with functionality.
function handleRequest(req,res){
    var path=req.url;
    //url request is made for/to
    switch(path){
        case"/":
            // return displayRoot(res);
            return renderHTML('index.html',res);
    
        case"/movies":
            
        case"/food":
         
        case"/frameworks":
        // case"/portfolio":
        //     return displayPortfolio(res);
                return renderHTML(path + ".html", res);
    
        default:
            // return index.html(path,res);
            return display 404(path,res);
    }
    // default to rendering index.html, if none of above cases are hit
    
};

function renderHTML(filePath,res){
    return fs.readFile(__dirname + filePath, function(err,data){
        if (err) throw err;
        //file system data=if error, throw error
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
    });
}
 
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




// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
  // Log (server-side) whetask managern our server has started
 