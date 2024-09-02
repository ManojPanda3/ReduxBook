// a function to verify a email address
import Alert from '../components/Alert';
export const verifyEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.match(emailRegex)) return true;
  Alert("enter a valid email");
  return false;
}

// a function to verify the password
export const verifyPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:"<>,./?]).{6,}$/;
  if (password.match(passwordRegex)) return true;
  Alert("Enter a valid Password , \nThe password Must be 6 character long with a UpperCaselatter")
  return false;
}
