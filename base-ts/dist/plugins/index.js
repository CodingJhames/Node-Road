"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = exports.getUUID = exports.getAge = exports.buildLogger = void 0;
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var get_id_plugin_1 = require("./get-id.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "httpClient", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
// const { getAge } = require("../plugins/get-age.plugin");
// const { getUUID } = require("../plugins/get-id.plugin");
// const { http } = require("../plugins/http-client.plugin");
// const buildLogger = require("../plugins/logger.plugin");
// module.exports = {
//   getAge,
//   getUUID,
//   http,
//   buildLogger,
// };
