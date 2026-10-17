
export function submitPlantRequest(data) {
  console.info("Plant request (simulated):", data);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 1400);
  });
}
