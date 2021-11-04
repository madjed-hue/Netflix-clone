const API = "http://localhost:8080";

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log(res.json());
  return res.json();
}
