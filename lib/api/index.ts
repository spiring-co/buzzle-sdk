import Job from "./job";
import Font from "./font";
import User from "./user";
import VideoTemplate from "./videoTemplate";
import Search from "./search";
import APIInterface, { APIParam } from "../interfaces";

export default function Api(params: APIParam): APIInterface {
  const { baseUrl, authToken } = params;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `bearer ${authToken}`,
  };

  return {
    Job: Job(baseUrl, headers),
    Font: Font(baseUrl, headers),
    User: User(baseUrl, headers),
    VideoTemplate: VideoTemplate(baseUrl, headers),
    Search: Search(baseUrl, headers),
  };
}
