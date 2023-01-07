import axios from "axios";

export async function reqUserProfileInfo(userID) {
  return axios.get(`api/users/${userID}`);
}