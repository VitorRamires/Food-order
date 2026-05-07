export const URL_BASE = "https://food-order-1-y273.onrender.com";

export async function getMeals() {
  try {
    const response = await fetch(`${URL_BASE}/meals`);
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "failed to fetch meals", error.message);
    throw error;
  }
}

export async function postMeals(orderData) {
  try {
    const response = await fetch(`${URL_BASE}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error, "failed to create Order", error.message);
    throw error;
  }
}
