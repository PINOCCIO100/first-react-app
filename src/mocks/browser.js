import { setupWorker } from "msw";
import { handleGetAvatars } from "./handlers/handleGetAvatar";
import { handleGetUsersProfileInfo } from "./handlers/handleGetUsersProfileInfo";

export const worker = setupWorker(
  ...handleGetUsersProfileInfo,
  ...handleGetAvatars,
);