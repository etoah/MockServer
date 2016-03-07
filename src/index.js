var server=require('./server');
var CLI=require('./cli');

var cli=CLI(function (argv,env) {
  console.log('my environment is:', env);
  console.log('my cli options are:', argv);
  console.log('my liftoff config is:', this);
});

module.exports=server('mock.json');