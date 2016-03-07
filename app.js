var mock=require('./src/index');
var watchr = require('watchr');
var Liftoff = require('liftoff');
// Watch a directory or file 
//console.log('Watch our paths');
mock('mock.json');

watchr.watch({
	paths: ['./'],
	listeners: {
		change: function(changeType,filePath,fileCurrentStat,filePreviousStat){
			// console.log('a change event occured:',arguments);
            console.log('a change event occured:',filePath);  
            console.log('restart mockServer');  
            
                    
		}
	},
	next: function(err,watchers){
		if (err) {
			return console.log("watching everything failed with error", err);
		} else {
			console.log('watching everything completed');
		}
	}
});


var cli = new Liftoff({
  name: 'mockServer',
  completions: completion,
  extensions: interpret.jsVariants,
  v8flags: v8flags,
});