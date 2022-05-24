const endpoint = "http://localhost:3030/api/v1/gifs";

export async function createGifAPI(token, gif) {
  return fetch(`${endpoint}`, {
    method: "POST",
    headers: new Headers({
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    }),
    body: JSON.stringify(gif),
  });
}

export async function getGifsAPI() {
  return fetch(`${endpoint}`);
}

export async function getGifsByCategoryAPI(category) {
  return fetch(`${endpoint}/search/${category}`);
}
