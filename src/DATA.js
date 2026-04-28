export const URL_BASE = "http://localhost:3000";

export async function getMeals() {
  const response = await fetch(`${URL_BASE}/meals`);
  const data = await response.json();
  return data;
}

export async function postMeals(orderData) {
  console.log("🚀 Enviando:", JSON.stringify(orderData, null, 2));
  try {
    const response = await fetch(`${URL_BASE}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    console.log("📦 Status:", response.status);
    const data = await response.json();
    console.log("📝 Response:", data);

    if (response.status === 201) {
      return { success: true };
    }
  } catch (error) {
    console.error("❌ Erro:", error);
    throw error;
  }
}
