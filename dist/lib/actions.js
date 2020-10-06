"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    compress: function (output, preset) {
        if (output === void 0) { output = "encoded.mp4"; }
        if (preset === void 0) { preset = "mp4"; }
        return ({
            module: "@nexrender/action-encode",
            preset: preset,
            output: output,
        });
    },
    addWaterMark: function (input, output, watermark) {
        if (input === void 0) { input = "encoded.mp4"; }
        if (output === void 0) { output = "watermarked.mp4"; }
        return ({
            module: "action-watermark",
            input: input,
            watermark: watermark,
            output: output,
        });
    },
    mergeVideos: function (input, input2, output) {
        if (input === void 0) { input = "watermarked.mp4"; }
        if (input2 === void 0) { input2 = "watermarked.mp4"; }
        if (output === void 0) { output = "merged.mp4"; }
        var f1 = input.substr(input.lastIndexOf("."));
        var f2 = input2.substr(input2.lastIndexOf("."));
        return {
            //make changes
            module: "action-mergeVideos",
            input: input,
            f1: f1,
            input2: input2,
            f2: f2,
            output: output,
        };
    },
    addAudio: function (inputV, inputA, output) {
        if (output === void 0) { output = "audioVideo.mp4"; }
        return ({
            module: "action-addAudio",
            inputV: inputV,
            inputA: inputA,
            output: output,
        });
    },
    upload: function (input, output) {
        if (input === void 0) { input = "encoded.mp4"; }
        if (output === void 0) { output = Date.now() + ".mp4"; }
        return ({
            module: "@nexrender/action-upload",
            input: input,
            provider: "s3",
            params: {
                region: "us-east-1",
                bucket: "bulaava-assets",
                key: "outputs/" + output,
                //TODO better acl policy
                acl: "public-read",
            },
        });
    },
};
