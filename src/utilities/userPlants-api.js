import sendRequest from "./send-request"

export async function updateUserPlant(id, userPlantData) {
   const updatePlantResponse = sendRequest(`/api/userplants/${id}`, "PUT", userPlantData)
   console.log(updatePlantResponse, userPlantData);
   return updatePlantResponse;
}