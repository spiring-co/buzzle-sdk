export interface APIParam {
    baseUrl: String;
    authToken: String;
}
export declare enum jobState {
    "created" = 0,
    "started" = 1,
    "finished" = 2,
    "error" = 3
}
export declare enum publishState {
    "pending" = 0,
    "published" = 1,
    "unpublished" = 2,
    "rejected" = 3
}
export declare enum creatorRole {
    "Creator" = 0
}
export interface VersionInterface {
    loyaltyCurrency?: String;
    id?: String;
    title: String;
    description?: String;
    sample?: String;
    composition: String;
    loyaltyValue?: String;
    averageRenderTime?: Number;
    fields: Array<{
        key: String;
        _id?: String;
        type: String;
        label: String;
        placeholder?: String;
        constraints?: Object;
        rendererData?: Object;
    }>;
}
export interface Job {
    actions?: {
        prerender: Array<any>;
        postrender: Array<any>;
    };
    state?: jobState;
    _id?: String;
    idVideoTemplate: String;
    idVersion: String;
    data: String;
    id?: String;
    output?: Array<{
        _id: String;
        label: String;
        src: String;
        updatedAt: String;
        dateCreated: String;
    }>;
    dateCreated?: String;
    dateUpdated?: String;
    __v?: 0;
    dateQueued: String;
    dateStarted: String;
    dateFinished: String;
    renderTime: Number;
    queueTime: Number;
    videoTemplate: VideoTemplate;
}
export interface VideoTemplate {
    type?: String;
    keywords?: Array<String>;
    publishState?: publishState;
    rejectionReason?: String;
    staticAssets?: Array<{
        name: String;
        type: String;
        src: String;
    }>;
    fonts?: Array<Font>;
    _id?: String;
    title: String;
    idCreator: String;
    src: String;
    versions: Array<VersionInterface>;
    description?: String;
    thumbnail?: String;
    id?: String;
    dateCreated?: String;
    dateUpdated?: String;
    __v?: Number;
}
export interface Font {
    id?: String;
    src: String;
    name: String;
}
export interface User {
    loginAttempts?: Number;
    isVerified?: Boolean;
    otp?: String;
    imageUrl?: String;
    role?: creatorRole;
    _id?: String;
    name: String;
    email: String;
    password: String;
    id?: String;
    __v?: Number;
}
export interface JobUpdateParam {
    actions?: Object;
    data: Object;
    renderPrefs: Object;
    extra: Object;
    extraParams: Object;
}
export interface JobParam extends JobUpdateParam {
    idVideoTemplate: String;
    idVersion: String;
}
export interface MultiJobUpdates extends JobUpdateParam {
    id: String;
}
export interface SearchInterface {
    get: (text: String, page: Number, size: Number) => Promise<{
        videoTemplates: {
            data: Array<VideoTemplate | []>;
            count: Number;
        };
        jobs: {
            data: Array<Job | []>;
            count: Number;
        };
        creators: {
            data: Array<User | []>;
            count: Number;
        };
    }>;
    getJobs: (text: String, page: Number, size: Number) => Promise<{
        data: Array<Job | []>;
        count: Number;
    }>;
    getVideoTemplates: (text: String, page: Number, size: Number) => Promise<{
        data: Array<VideoTemplate | []>;
        count: Number;
    }>;
    getCreators: (text: String, page: Number, size: Number) => Promise<{
        data: Array<User | []>;
        count: Number;
    }>;
}
export interface FontInterface {
    get: (name: String) => Promise<Font | Object>;
    create: (data: Font) => Promise<Object>;
}
export interface AuthInterface {
    login: (data: Object, extraParams?: Object) => Promise<Object>;
    verifyEmail: (extraParams?: Object) => Promise<Object>;
    resetPassword: (data: Object, extraParams?: Object) => Promise<Object>;
    resetPasswordEmail: (data: Object, extraParams?: Object) => Promise<Object>;
}
export interface VideoTemplateInterface {
    getAll: (page: Number, size: Number, query: String, sortBy: String, orderBy: String, idCreator: String, extraParams?: Object) => Promise<{
        data: Array<VideoTemplate | []>;
        count: Number;
    }>;
    get: (id: String, extraParams?: Object) => Promise<VideoTemplate | {}>;
    create: (data: String, extraParams?: Object) => Promise<any>;
    update: (id: String, data: Object, extraParams?: Object) => Promise<any>;
    updateMany: (data: Object, extraParams?: Object) => Promise<any>;
    delete: (id: String, extraParams?: Object) => Promise<any>;
    deleteMany: (data: Object, extraParams?: Object) => Promise<any>;
}
export interface UserInterface {
    getAll: (page: Number, size: Number, extraParams?: Object) => Promise<{
        data: Array<User | []>;
        count: Number;
    }>;
    get: (id: String, extraParams?: Object) => Promise<User | {}>;
    create: (user: User, extraParams?: Object) => Promise<any>;
    delete: (id: String, data: Object, extraParams?: Object) => Promise<any>;
    update: (id: String, data: Object, extraParams?: Object) => Promise<any>;
}
export interface WebhookInterface {
    getAll: () => Promise<{
        data: Array<any | []>;
    }>;
    get: (id: String) => Promise<any | {}>;
    create: (webhook: any) => Promise<any>;
}
export interface JobInterface {
    getAll: (page: Number, size: Number, query: String, sortBy: String, orderBy: String, extraParams?: Object) => Promise<{
        data: Array<Job | []>;
        count: Number;
    }>;
    get: (id: String, populateVideoTemplate: Boolean, extraParams?: Object) => Promise<Job | []>;
    getCount: (dateUpdated?: any, dateStarted?: any) => Promise<Job | []>;
    create: (params: JobParam) => Promise<any>;
    update: (id: String, params: Object, extraParams?: Object) => Promise<any>;
    updateMultiple: (data: Object, extraParams?: Object) => Promise<any>;
    delete: (id: String, extraParams?: Object) => Promise<any>;
    deleteMultiple: (data: Object, extraParams?: Object) => Promise<any>;
}
export default interface APIInterface {
    Job: JobInterface;
    Font: FontInterface;
    User: UserInterface;
    VideoTemplate: VideoTemplateInterface;
    Search: SearchInterface;
    Webhook: WebhookInterface;
}
