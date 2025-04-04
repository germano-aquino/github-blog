import axios from "axios";
import { token } from "../../secrets/token.json"

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer " + token,
    'X-GitHub-Api-Version': "2022-11-28"
  }
})