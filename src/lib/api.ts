const API_URL = "http://localhost:8000/api/v1";

export async function fetchAPI(path: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${path}`, options);
  if (!response.ok) throw new Error("API error: " + response.status);
  return response.json();
}