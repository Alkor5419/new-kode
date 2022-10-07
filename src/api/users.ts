import { http } from "../utils/http";
export default {
  getUsersAPI: () => {
    return http.get(`users?__example=all`);
  },
  getUsersDesignersAPI: () => {
    return http.get(`users?__example=design`);
  },
  getUsersAnalyticsAPI: () => {
    return http.get(`users?__example=analytics`);
  },
  getUsersManagementAPI: () => {
    return http.get(`users?__example=management`);
  },
  getUsersIosAPI: () => {
    return http.get(`users?__example=ios`);
  },
  getUsersAndroidAPI: () => {
    return http.get(`users?__example=android`);
  },
};
