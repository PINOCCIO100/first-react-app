import { setupWorker } from "msw";
import { handleGetAvatars } from "./handlers/handleGetAvatar";
import { handleGetUsersProfileInfo } from "./handlers/handleGetUsersProfileInfo";
import { handleAuth } from './handlers/handleAuth';
export const worker = setupWorker(
  ...handleGetUsersProfileInfo,
  ...handleGetAvatars,
  ...handleAuth,
);