var fs = require('fs');
var path = require('path');

var Charts = function(options){
  var server = options.server;
  var ui = options.ui;
  var filename = path.resolve(__dirname, 'node_modules/d3rrc/dist/bundle.js');

  server.route([
    {
      method: 'GET',
      path: '/vendor/d3rrc/d3rrc.js',
      handler: function(req, reply){
        return reply.file(filename);
      }
    },
  ]);

  ui.register([
    {
      injectHeaders: [
        '<script src="/vendor/d3rrc/d3rrc.js" type="text/javascript"></script>',
      ]
    },
  ]);
};

module.exports = Charts;
