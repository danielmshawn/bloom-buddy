import sendRequest from "./send-request"
const BASE_URL = '/api/plants';

export async function getAllPlants() {
    return sendRequest(BASE_URL);
}

export async function createPlant(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export async function getAvailablePlants() {
    return sendRequest(`${BASE_URL}/available`);
}