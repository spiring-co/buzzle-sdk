import apiClient from "./api/index";
import progressListener from "./progressListener";
declare const _default: {
    apiClient: typeof apiClient;
    progressListener: typeof progressListener;
    actions: {
        compress: (output?: string, preset?: string) => {
            module: string;
            preset: string;
            output: string;
        };
        addWaterMark: (input: string | undefined, output: string | undefined, watermark: any) => {
            module: string;
            input: string;
            watermark: any;
            output: string;
        };
        mergeVideos: (input?: string, input2?: string, output?: string) => {
            module: string;
            input: string;
            f1: string;
            input2: string;
            f2: string;
            output: string;
        };
        addAudio: (inputV: any, inputA: any, output?: string) => {
            module: string;
            inputV: any;
            inputA: any;
            output: string;
        };
        upload: (input?: string, output?: string) => {
            module: string;
            input: string;
            provider: string;
            params: {
                region: string;
                bucket: string;
                key: string;
                acl: string;
            };
        };
    };
};
export default _default;
