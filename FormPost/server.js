//dependencies
const http = require("http");
const fs = require("fs");
const PORT = 8080;

//server
const server = http.createServer(handleRequest)

function handleRequest(req,res){
    const path = req.url;

    //routes
    switch(path){
        case"/thanks":
            return renderThankYouPage(req,res);

        default:
            return renderWelcomePage(req,res);
            //have not made these yet
    };
};


//target the fs-file system
//create above pages
function renderWelcomePage(req,res){
    //use the required file system module/package to read and pull from index.html
    fs.readFile(__dirname + "/index.html", function(err,data)
    )
};


//give client html page
//tell the browser that

function renderThankYouPage(req,res){
    const myHTML = "";
};


//when the server recieves data it will store to requestData
//.enit="fires" event

//request end

//start the server







//500 meant there is an internal error
//200 means it was successfuly