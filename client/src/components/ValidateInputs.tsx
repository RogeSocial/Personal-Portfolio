import emailjs from 'emailjs-com';
import config from './config.json';

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

  const serviceID = config.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = config.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = config.REACT_APP_EMAILJS_USER_ID;
  
  emailjs.send(serviceID, templateID, {
    from_name: name,
    reply_to: email,
    message: message
  }, userID)
  .then(() => {
    console.log('Email sent successfully!');
    // clear the form when the email is successfully sent
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("message") as HTMLInputElement).value = "";
  }, (error) => {
    console.error('Error sending email:', error);
    setErrorMessage("Error sending email. Please try again later.");
  });
};
