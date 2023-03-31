import sendRequest from "./send-request"
const BASE_URL = '/api/plants';


export async function getAvailablePlants() {
    return sendRequest(`${BASE_URL}/available`);
}

export async function createPlant(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export async function addToUser(selectedAvailablePlantId) {
    return sendRequest(`${BASE_URL}/${selectedAvailablePlantId}/user`, 'POST');
}

export async function getMyPlants() {
    return sendRequest(BASE_URL);
}

// for Harvest dayes, two payloads will be userPlant._id and userPlant.harvestDate
// Should this be POST or PUT?
// export async function createHarvestDate(userPlantId, harvestDate)
//     return sendRequest(`${BASE_URL}/user/${userPlantId}`, 'POST', harvestDate)

export async function updateUserPlant(userPlantId, userPlantData) {
    return sendRequest(`${BASE_URL}/user/${userPlantId}`, 'PUT', userPlantData);
}

