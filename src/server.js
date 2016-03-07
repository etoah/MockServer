var express=require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    fs=require('fs'),
    jsonFormat = require("json-format");


module.exports=function (confFile,expressApp){
    var confString=fs.readFileSync(confFile);
    var conf=JSON.parse(confString);
    var app=expressApp||express(),
        port=conf.port,
        routes=conf.routes;
    // Enable Cross Origin Resource Sharing
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    function makeRoute(route){
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
            app[type](route.path,function(req,res){
                console.info(new Date()+":new request----------------------------------------------------------------------------------------- ");
                console.info("headers:");
                console.info(req.headers);
                console.info("params:");
                console.info(req.params);
                console.info("query:");
                console.info(req.query);
                console.info("body:");
                console.info(req.body)
                res.json(route.response);
            })
        }

        console.log(`${type} ${route.path}`)
    }

    console.info("all routes:")
    routes.forEach(makeRoute)
    //show config
    app.get("/c",function(req,res) {
        res.send("<pre>"+jsonFormat(conf)+"</pre>");
    });

    
    return expressApp||app
        .listen(port,function(){
            console.log("server is listening on "+port)
        });
}
