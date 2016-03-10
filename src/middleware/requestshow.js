module.exports=function (req,res,next) {
     console.info(new Date()+":new request----------------------------------------------------------------------------------------- ");
                console.info("req.headers:");
                console.info(req.headers);
                console.info("req.params:");
                console.info(req.params);
                console.info("query:");
                console.info(req.query);
                console.info("body:");
                console.info(req.body);
                next();
}