export interface APIParam {
  baseUrl: String;
  authToken: String;
}

interface JobUpdateParam {
  actions?: Object;
  data: Array<Object>;
  renderPrefs: Object;
}
interface JobParam extends JobUpdateParam {
  idVideoTemplate: String;
  idVersion: String;
}
interface MultiJobUpdates extends JobUpdateParam {
  id: String;
}
export interface SearchInterface {
  get: (text: String, page: Number, size: Number) => Promise<Object>;
}
export interface FontInterface {
  get: (name: String) => Promise<Object>;
  create: (data: Object) => Promise<Object>;
}

export interface VideoTemplateInterface {
  getAll: (
    page: Number,
    size: Number,
    query: String | Object
  ) => Promise<Array<Object>>;
  get: (id: String) => Promise<Object>;

  create: (data: String) => Promise<Object>;

  update: (id: String, data: Object) => Promise<Object>;

  delete: (id: String) => Promise<void>;
}

export interface CreatorInterface {
  getAll: (page: Number, size: Number) => Promise<Array<Object>>;
  get: (id: String) => Promise<Object>;
  create: (user: Object) => Promise<Object>;
  changePassword: (id: String, data: Object) => Promise<Object>;
  update: (id: String, data: Object) => Promise<Object>;
  getVideoTemplates: (
    id: String,
    page: Number,
    size: Number
  ) => Promise<Array<Object>>;
  getJobs: (
    id: Number,
    page: Number,
    size: Number,
    query: String
  ) => Promise<Array<Object>>;
}
export interface JobInterface {
  getAll: (page: Number, size: Number, query: String) => Promise<Array<Object>>;
  get: (id: String, populateVideoTemplate: Boolean) => Promise<Object>;

  create: (params: JobParam) => Promise<Object>;

  update: (id: String, params: JobUpdateParam) => Promise<Object>;
  updateMultiple: (data: Array<MultiJobUpdates>) => Promise<void>;
  delete: (id: String) => Promise<void>;
  deleteMultiple: (data: Array<{ id: String }>) => Promise<void>;
}

export default interface APIInterface {
  Job: JobInterface;
  Font: FontInterface;
  Creator: CreatorInterface;
  VideoTemplate: VideoTemplateInterface;
  Search: SearchInterface;
}
