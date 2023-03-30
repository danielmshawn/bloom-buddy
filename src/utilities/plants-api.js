import sendRequest from "./send-request"
const BASE_URL = '/api/plants';


export async function getMyPlants() {
    // Do I need a differnt URL?
    return sendRequest(BASE_URL);
}

export async function createPlant(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export async function addToUser(selectedAvailablePlantId) {
    return sendRequest(`${BASE_URL}/${selectedAvailablePlantId}/user`, 'POST');
}

export async function getAvailablePlants() {
    return sendRequest(`${BASE_URL}/available`);
}