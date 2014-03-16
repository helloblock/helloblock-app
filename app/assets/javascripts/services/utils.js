'use strict'

hbApp.factory("Utils", function() {
  var Utils = {};

  Utils.pathLast = function(path) {
    var chunks = path.split("/");
    var last = chunks.slice(-1)[0];
    return last
  }

  return Utils;
})
