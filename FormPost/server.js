//dependencies
const http = require("http");
const fs = require("fs");
// const PORT = 8080;

//server
const server = http.createServer(handleRequest);

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
    fs.readFile(__dirname + "/index.html", function(err,data){
        if(err){
            res.writeHead(500,{"Content-Type":"text/html"});
            
            //response end
            res.end(
                "<html><head><title>OOPS</title></head><body><h1>Something went wrong</h1></body></html>"
                //html won't work on split up lines unless there are quotationmarks on every line
            );
        }else{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.end(data);
        }
    }
    )
};


//give client html page
//tell the browser that

function renderThankYouPage(req,res){
    var requestData = "";
    var myHTML = "<html><head><title>Node</title></head><body><h1>No data yet</h1></body></html>";



//when the server recieves data it will store to requestData
//.enit="fires" event
    req.on("data", function(data){
        requestData+=data;
        console.log("You just posted some data to the server: \n", requestData);

        myHTML = "<html><head><title>Hello</title></head><body>" +
        "<h1>Thank you for the data!:</h1><code>"+
        requestData +
        "</code></body></html>";
    })

//request end

req.on("end",function(){
    res.writeHead(200,{"Content-Type":"text/html"});
});
};
//start the server

server.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});





//500 meant there is an internal error
//200 means it was successfuly