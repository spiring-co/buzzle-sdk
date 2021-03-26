declare namespace _default {
    function compress(output?: string, preset?: string): {
        module: string;
        preset: string;
        output: string;
    };
    function addWaterMark(input: string | undefined, output: string | undefined, watermark: any): {
        module: string;
        input: string;
        watermark: any;
        output: string;
    };
    function mergeVideos(input?: string, input2?: string, output?: string): {
        module: string;
        input: string;
        f1: string;
        input2: string;
        f2: string;
        output: string;
    };
    function addAudio(inputV: any, inputA: any, output?: string): {
        module: string;
        inputV: any;
        inputA: any;
        output: string;
    };
    function upload(input?: string, output?: string): {
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
}
export default _default;
