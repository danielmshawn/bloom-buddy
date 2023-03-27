import sendRequest from "./send-request"
const BASE_URL = 'api/plants';

export async function getAll() {
    return sendRequest(BASE_URL);
}
