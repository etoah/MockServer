module.exports=
{
    "port":10000,
    "routes":[
        {
            "path":"/",
            "type":"get",
            "response":"MockServer works" 
        },
        {
            "path":"/getlist",
            "type":"post",
            "response":	{
              "errcode": 0,
              "message": "成功",
              "payload": {
                "count": 42,
                "result": [
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"}, 
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"},
                  {"number": "ZH001", "name": "波波", "phone": "18612311111", "work": "圣诞节大促销", "time": "2016-01-05 21:36"}
                ]
              }
            }
        },
        {
            "path":"/form",
            "type":"get",
            "response":	function (req,res) {
               if( req.query.title&& req.query.title==="a")
               {
                   return req.query.title
               }
               else if( req.query.title)
               {
                   return req.query.title
               }
               else
               {
                   return "title is require!!"
               }
            }
        }
    ]
}
