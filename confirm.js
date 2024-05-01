// Javascript code for confirm.html

const form = document.getElementById("form"); // form element for submit otp form
const data = document.getElementById("data"); // div element for showing used name, email

// getting values form session storage for name, email  and attempts
const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
let attempts = sessionStorage.getItem("attempts");

// adding otp information text to div element(id = data)
data.innerHTML = `Dear ${name.split(" ")[0]},<br>
Thank you for your inquiry. A 4 digit verification number has been sent to your email: ${email}, 
please enter it in the following box and submit for confirmation:`;

// createOTP function for creating 4 digit otp
const createOTP = () => {
  return Math.floor(Math.random() * 9000) + 1000;
};

const otp = createOTP(); // storing otp
console.log(otp); // display otp on console

// on click submit button submit function will be called
const handleSubmit = (e) => {
  e.preventDefault(); // prevents default action of event

  // decrement attempts and update it on session storage
  attempts = attempts - 1;
  sessionStorage.setItem("attempts", attempts);

  const userOTP = document.getElementById("otp").value; // get value from otp input field

  // if otp is equal to user enter otp redirect else show error
  if (otp == userOTP) {
    document.getElementById("err-otp").innerHTML = ""; // remove wrong otp error
    window.location.href = "https://pixel6.co/"; // redirect to Pixel6 home page
  } else {
    // reset otp input field and show wrong otp error
    document.getElementById("otp").value = "";
    document.getElementById("err-otp").innerHTML =
      "You have entered wrong OTP!";

    // if attempts equal to zero redirect to 404 (pagenot found) page on Pixel6 website
    if (attempts == 0) {
      window.location.href = "https://pixel6.co/404";
    }
  }
};
form.addEventListener("submit", handleSubmit); // added submit event to form
