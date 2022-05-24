const endpoint = "http://localhost:3030/api/v1";

export async function signupAPI(token, user) {
  return fetch(`${endpoint}/signup`, {
    method: "POST",
    headers: new Headers({
      authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(user),
  });
}
