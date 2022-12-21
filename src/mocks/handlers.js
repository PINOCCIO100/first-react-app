import { rest } from "msw";

import usersProfileInfoJSON from './db/usersProfileInfo.json';

export const handlers = [
  rest.get('api/users', (req, res, ctx) => {
    console.log(req.url.searchParams.get('count'));
    return res(ctx.json(usersProfileInfoJSON))
  }),
];