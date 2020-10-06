"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
function default_1(socketUrl) {
    var socket = socket_io_client_1.default.connect(socketUrl);
    console.log("socket", socketUrl);
    return socket;
}
exports.default = default_1;
;
