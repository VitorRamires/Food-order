export const URL_BASE = "http://localhost:3000";

export async function getMeals() {
  const response = await fetch(`${URL_BASE}/meals`);
  const data = await response.json();
  return data;
}

export async function postMeals(orderData) {
  const response = await fetch(`${URL_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();
}
