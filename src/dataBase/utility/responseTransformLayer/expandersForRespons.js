import { usersProfileInfoDefault } from '../../usersProfileInfo/usersProfileInfo';

export function expandUsersProfileInfo(usersProfileInfo) {
  return [
    ...usersProfileInfo,
    ...usersProfileInfoDefault,
  ]
}