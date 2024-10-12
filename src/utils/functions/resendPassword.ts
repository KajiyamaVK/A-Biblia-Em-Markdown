export async function resendPassword() {
  console.info("resending password");
  await fetch(
    "https://www.abibliadigital.com.br/api/users/password/" + process.env.EMAIL,
    {
      method: "POST",
    },
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
