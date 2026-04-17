export const URL_BASE = "http://localhost:3000";
const API_URL = `${URL_BASE}/meals`

export async function getMeals() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
