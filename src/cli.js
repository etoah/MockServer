
var Liftoff = require('liftoff');
var v8flags = require('v8flags');


var cli = new Liftoff({
  name: 'mockServer',
 // completions: completion,
  extensions: {
    '.js': null,
    '.json': null,
    '.coffee': 'coffee-script/register'
  },
  v8flags: v8flags,
});


module.exports=function CLI(invoke)
{
    var argv = require('minimist')(process.argv.slice(2));
    cli.launch({
    cwd: argv.cwd,
    configPath: argv.myappfile,
    require: argv.require,
    completion: argv.completion
    }, function(argv){
        invoke.apply(this,argv,arguments[0]);
    });
    
    console.log(argv);
}