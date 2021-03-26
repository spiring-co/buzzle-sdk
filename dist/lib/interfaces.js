"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatorRole = exports.publishState = exports.jobState = void 0;
var jobState;
(function (jobState) {
    jobState[jobState["created"] = 0] = "created";
    jobState[jobState["started"] = 1] = "started";
    jobState[jobState["finished"] = 2] = "finished";
    jobState[jobState["error"] = 3] = "error";
})(jobState = exports.jobState || (exports.jobState = {}));
var publishState;
(function (publishState) {
    publishState[publishState["pending"] = 0] = "pending";
    publishState[publishState["published"] = 1] = "published";
    publishState[publishState["unpublished"] = 2] = "unpublished";
    publishState[publishState["rejected"] = 3] = "rejected";
})(publishState = exports.publishState || (exports.publishState = {}));
var creatorRole;
(function (creatorRole) {
    creatorRole[creatorRole["Creator"] = 0] = "Creator";
})(creatorRole = exports.creatorRole || (exports.creatorRole = {}));
// "main": "dist/lib/index.js",
// "types": "dist/lib/index.d.ts",
