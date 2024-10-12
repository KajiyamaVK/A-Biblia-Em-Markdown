export async function fetchToken() {
  console.info("fetching token");
  await fetch("https://www.abibliadigital.com.br/api/users/token", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
