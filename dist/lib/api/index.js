"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var job_1 = require("./job");
var font_1 = require("./font");
var user_1 = require("./user");
var videoTemplate_1 = require("./videoTemplate");
var search_1 = require("./search");
var Webhook_1 = require("./Webhook");
function Api(params) {
    var baseUrl = params.baseUrl, authToken = params.authToken;
    var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + authToken,
    };
    return {
        Job: job_1.default(baseUrl, headers),
        Font: font_1.default(baseUrl, headers),
        User: user_1.default(baseUrl, headers),
        VideoTemplate: videoTemplate_1.default(baseUrl, headers),
        Search: search_1.default(baseUrl, headers),
        Webhook: Webhook_1.default(baseUrl, headers),
    };
}
exports.default = Api;
