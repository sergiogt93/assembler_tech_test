const endpoint = "http://localhost:3030/api/v1/categories";

export async function getCategoriesAPI() {
  return fetch(`${endpoint}`);
}
