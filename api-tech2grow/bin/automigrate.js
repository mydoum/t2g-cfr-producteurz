/* eslint-disable strict */
var server = require('../server/server');

var ds = server.dataSources.db;

ds.automigrate(function(er) {
  if (er) throw er;
  console.log('Loopback tables created!');
  ds.disconnect();
});

