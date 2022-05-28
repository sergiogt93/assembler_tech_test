const endpoint = process.env.REACT_APP_SERVER_NODE;

export async function signupAPI(token, user) {
  return fetch(`${endpoint}/signup`, {
    method: "POST",
    headers: new Headers({
      authorization: `Bearer ${token}`,
    }),
    body: JSON.stringify(user),
  });
}
