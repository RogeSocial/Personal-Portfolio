export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const message = (document.getElementById("message") as HTMLInputElement).value;

  // Clear previous error messages
  setErrorMessage("");

  if (name === "" || email === "" || message === "") {
    setErrorMessage(" Please fill in all the fields");
    return;
  }

  const emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test(email)) {
    setErrorMessage("Please enter a valid email address");
    return;
  }

  return true;
};
