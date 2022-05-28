const endpoint = `${process.env.REACT_APP_SERVER_NODE}/categories`;

export async function getCategoriesAPI() {
  return fetch(`${endpoint}`);
}
