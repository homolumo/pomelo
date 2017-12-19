var logger = require("pomelo-logger");
var fs = require("fs");
var _ = require("lodash");

/**
 * Configure pomelo logger
 */
module.exports.configure = function(app, filename, env) {
  var serverId = app.getServerId();
  var base = app.getBase();
  const log4jsConfig = JSON.parse(fs.readFileSync(filename, "utf8"));
  log4jsConfig.__base__ = _.merge(log4jsConfig.__base__, log4jsConfig[env]);
  logger.configure(log4jsConfig.__base__, { serverId: serverId, base: base });
};
