export interface APIParam {
    baseUrl: string;
    authToken: string;
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
    loyaltyCurrency?: string;
    id?: string;
    title: string;
    description?: string;
    sample?: string;
    composition: string;
    loyaltyValue?: string;
    averageRenderTime?: number;
    fields: Array<{
        key: string;
        _id?: string;
        type: string;
        label: string;
        placeholder?: string;
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
    _id?: string;
    idVideoTemplate: string;
    idVersion: string;
    data: string;
    id?: string;
    output?: Array<{
        _id: string;
        label: string;
        src: string;
        updatedAt: string;
        dateCreated: string;
    }>;
    dateCreated?: string;
    dateUpdated?: string;
    __v?: 0;
    dateQueued: string;
    dateStarted: string;
    dateFinished: string;
    renderTime: number;
    queueTime: number;
    videoTemplate?: VideoTemplate;
}
export interface VideoTemplate {
    type?: string;
    keywords?: Array<string>;
    publishState?: publishState;
    rejectionReason?: string;
    staticAssets?: Array<{
        name: string;
        type: string;
        src: string;
    }>;
    fonts?: Array<Font>;
    _id?: string;
    title: string;
    idCreator: string;
    src: string;
    versions: Array<VersionInterface>;
    description?: string;
    thumbnail?: string;
    id?: string;
    dateCreated?: string;
    dateUpdated?: string;
    __v?: number;
}
export interface Font {
    id?: string;
    src: string;
    name: string;
}
export interface User {
    loginAttempts?: number;
    isVerified?: Boolean;
    otp?: string;
    imageUrl?: string;
    role?: creatorRole;
    _id?: string;
    name: string;
    email: string;
    password: string;
    id?: string;
    __v?: number;
}
export interface JobUpdateParam {
    actions?: Object;
    data: Object;
    renderPrefs: Object;
    extra?: Object;
    extraParams?: Object;
}
export interface JobParam extends JobUpdateParam {
    idVideoTemplate: string;
    idVersion: string;
}
export interface MultiJobUpdates extends JobUpdateParam {
    id: string;
}
export interface SearchInterface {
    get: (text: string, page?: number, size?: number) => Promise<{
        videoTemplates: {
            data: Array<VideoTemplate>;
            count: number;
        };
        jobs: {
            data: Array<Job>;
            count: number;
        };
        creators: {
            data: Array<User>;
            count: number;
        };
    }>;
    getJobs: (text: string, page?: number, size?: number) => Promise<{
        data: Array<Job>;
        count: number;
    }>;
    getVideoTemplates: (text: string, page?: number, size?: number) => Promise<{
        data: Array<VideoTemplate>;
        count: number;
    }>;
    getCreators: (text: string, page?: number, size?: number) => Promise<{
        data: Array<User>;
        count: number;
    }>;
}
export interface FontInterface {
    get: (name: string) => Promise<Font | Object>;
    create: (data: Font) => Promise<Object>;
}
export interface AuthInterface {
    login: (data: Object, extraParams?: Object) => Promise<Object>;
    verifyEmail: (extraParams?: Object) => Promise<Object>;
    resetPassword: (data: Object, extraParams?: Object) => Promise<Object>;
    resetPasswordEmail: (data: Object, extraParams?: Object) => Promise<Object>;
}
export interface VideoTemplateInterface {
    getAll: (page?: number, size?: number, query?: string, sortBy?: string, orderBy?: string, extraParams?: Object) => Promise<{
        data: Array<VideoTemplate>;
        count: number;
    }>;
    get: (id: string, query?: string, extraParams?: Object) => Promise<VideoTemplate>;
    create: (data: string, extraParams?: Object) => Promise<any>;
    update: (id: string, data: Object, extraParams?: Object) => Promise<any>;
    updateMany: (data: Object, extraParams?: Object) => Promise<any>;
    delete: (id: string, extraParams?: Object) => Promise<any>;
    deleteMany: (data: Object, extraParams?: Object) => Promise<any>;
}
export interface UserInterface {
    getAll: (page?: number, size?: number, extraParams?: Object) => Promise<{
        data: Array<User>;
        count: number;
    }>;
    get: (id: string, extraParams?: Object) => Promise<User>;
    create: (user: User, extraParams?: Object) => Promise<any>;
    delete: (id: string, data: Object, extraParams?: Object) => Promise<any>;
    update: (id: string, data: Object, extraParams?: Object) => Promise<any>;
}
export interface WebhookInterface {
    getAll: () => Promise<{
        data: Array<any>;
    }>;
    get: (id: string) => Promise<any>;
    create: (webhook: any) => Promise<any>;
}
export interface JobInterface {
    getAll: (page?: number, size?: number, query?: string, sortBy?: string, orderBy?: string, extraParams?: Object) => Promise<{
        data: Array<Job>;
        count: number;
    }>;
    getAllTitles: (page?: number, size?: number, query?: string, sortBy?: string, orderBy?: string, extraParams?: Object) => Promise<{
        data: Array<Job>;
        count: number;
    }>;
    get: (id: string, query?: string, extraParams?: Object) => Promise<Job>;
    getCount: (dateUpdated?: any, dateStarted?: any) => Promise<Job>;
    create: (params: JobParam) => Promise<any>;
    update: (id: string, params?: Object, extraParams?: Object) => Promise<any>;
    updateMultiple: (data: Object, extraParams?: Object) => Promise<any>;
    delete: (id: string, extraParams?: Object) => Promise<any>;
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
