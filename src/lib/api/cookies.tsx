// import Cookies from "js-cookie";
// import { Permissions } from "../features/auth/authInterface";

// export function setAccessToken(token: string) {
//   Cookies.set("access_token", token, { expires: 15 });
// }

// export function setRefreshToken(token: string) {
//   Cookies.set("refresh_token", token, { expires: 15 });
// }

// export function setUser(token: string) {
//   const tokenString = JSON.stringify(token);
//   Cookies.set("codequant_user", tokenString, { expires: 15 });
// }

// export function setBatchId(batch_id: string) {
//   Cookies.set("batch_id", batch_id);
// }

// export function setPermissionsCookie(permissions: Permissions) {
//   if (typeof window !== "undefined" && window.localStorage) {
//     localStorage.setItem("user_permissions", JSON.stringify(permissions));
//   }
// }

// export function setIsAuthenticated(token: boolean) {
//   const tokenBoolean = JSON.stringify(token);
//   Cookies.set("isAuthenticated", tokenBoolean, { expires: 15 });
// }

// export function getAccessToken() {
//   const access_Token = Cookies.get("access_token");
//   return access_Token;
// }

// export function getRefreshToken() {
//   const refresh_Token = Cookies.get("refresh_token");
//   if (refresh_Token) {
//     return refresh_Token;
//   }
//   return null;
// }

// export function getBatchId() {
//   const batch_id = Cookies.get("batch_id");
//   return batch_id;
// }

// export function getUser() {
//   const codequant_user = Cookies.get("codequant_user");
//   if (codequant_user) {
//     return JSON.parse(codequant_user);
//   }
//   return null;
// }

// export function getIsAuthenticated() {
//   const isAuthenticated = Cookies.get("isAuthenticated");
//   if (isAuthenticated) {
//     return JSON.parse(isAuthenticated);
//   }
//   return null;
// }

// export function getPermissionsCookie() {
//   if (typeof window !== "undefined" && window.localStorage) {
//     const permissions = localStorage.getItem("user_permissions");
//     return permissions ? JSON.parse(permissions) : null;
//   }
//   return null;
// }

// export const removeAccessToken = () => {
//   Cookies.remove("access_token");
// };

// export const removeRefreshToken = () => {
//   Cookies.remove("refresh_token");
// };

// export const removeBatchId = () => {
//   Cookies.remove("batch_id");
// };
// export const removeUser = () => {
//   Cookies.remove("codequant_user");
// };

// export const removeIsAuthenticated = () => {
//   Cookies.remove("isAuthenticated");
// };

// export function removePermissionsLocalStorage() {
//   if (typeof window !== "undefined" && window.localStorage) {
//     localStorage.removeItem("user_permissions");
//   }
// }

// export const removeloginCredentials = () => {
//   Cookies.remove("isAuthenticated");
//   Cookies.remove("refresh_token");
//   Cookies.remove("access_token");
//   Cookies.remove("codequant_user");
//   removePermissionsLocalStorage();
// };
