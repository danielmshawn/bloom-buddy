import sendRequest from "./send-request"

export async function updateUserPlant(id, userPlantData) {
   const updatePlantResponse = sendRequest(`/api/userplants/${id}`, "PUT", userPlantData)
   return updatePlantResponse;
}

export async function deleteUserPlant(userPlantId) {
   const deleteUserPlantResponse = await sendRequest(`/api/userplants/${userPlantId}`, "DELETE")
   console.log("Delete RESPONSE", deleteUserPlantResponse);
   return deleteUserPlantResponse;
}