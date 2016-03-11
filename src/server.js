var express=require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    fs=require('fs'),
    jsonFormat = require("json-format"),
    requestShow=require("./middleware/requestshow.js");

function makeConfigRoute(route,app){
        if(!(route.path && route.response)){
            console.error("path and response must be specified")
            return
        }

        var type=typeof(route.type)!='undefined' ? route.type.toLowerCase() : 'get';
        switch(type){
        case 'static':
            app.use(route.path, express.static(route.response))
            break
        default:
            app[type](route.path,requestShow,function(req,res){
                if(typeof route.response ==="function")
                {
                    res.send(route.response(req,res))
                }
                else
                {
                     res.send(route.response);
                }
            })
    }
    console.log(`${type} ${route.path}`);
}



module.exports=function (conf,expressApp){
    var app=expressApp||express(),
        port=conf.port,
        routes=conf.routes;
    // Enable Cross Origin Resource Sharing
    app.use(cors());
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // add config route
    console.info("all routes:")
    routes.forEach(function(route){
           makeConfigRoute(route,app);
    })
    
    //show config
    app.get("/c",function(req,res) {
        res.send("<pre>"+jsonFormat(conf)+"</pre>");
    });
    //start server
    return expressApp||app
        .listen(port,function(){
            console.log("server is listening on "+port)
        });
}
