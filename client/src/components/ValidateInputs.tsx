export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const message = (document.getElementById("message") as HTMLInputElement).value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields");
    return;
  }

  const emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  return true;
};