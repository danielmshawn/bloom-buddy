import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function nearbyUsers(userId) {
  return sendRequest(`${BASE_URL}/nearby-users`, userId);
}