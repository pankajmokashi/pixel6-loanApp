// Javascript code for index.html

const form = document.getElementById("form"); // form element for submit user information form
const loanElement = document.getElementById("loan"); // loan amount input field element

// numberToWords function will convert loan amount in words
function numberToWords(num) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let words = "";

  if (num === 0) {
    return "zero";
  }

  if (num >= 10000000) {
    words += numberToWords(Math.floor(num / 10000000)) + " crore ";
    num %= 10000000;
  }

  if (num >= 100000) {
    words += numberToWords(Math.floor(num / 100000)) + " lakh ";
    num %= 100000;
  }

  if (num >= 1000) {
    words += numberToWords(Math.floor(num / 1000)) + " thousand ";
    num %= 1000;
  }

  if (num >= 100) {
    words += ones[Math.floor(num / 100)] + " hundred ";
    num %= 100;
    if (num > 0) {
      words += "and ";
    }
  }

  if (num >= 20) {
    words += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num > 10 && num < 20) {
    words += teens[num - 10] + " ";
    num = 0;
  }

  if (num > 0 && num <= 9) {
    words += ones[num] + " ";
  }

  return words.trim();
}

// on change event added to loan amount input field
loanElement.addEventListener("change", (e) => {
  let num = e.target.value.trim(); // get value from loan amount input field

  // if number id greater than zero then set amount text to div(id= in-words) else set empty string
  if (num.length > 0 && num != 0) {
    document.getElementById("in-words").innerHTML =
      numberToWords(parseInt(num)) + " Rs";
  } else {
    document.getElementById("in-words").innerHTML = "";
  }
});

// below validate functions validated name, email and pan no.
function validateName(input) {
  const nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]{4,}){1,}$/; // checks input has 2 words and each has 4 valid characters
  if (!input.match(nameRegex)) {
    document.getElementById("err-name").innerHTML =
      "Enter First_name Last_Name";
    return false;
  }
  document.getElementById("err-name").innerHTML = "";
  return true;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // checks @ and . is present
  if (!regex.test(email)) {
    document.getElementById("err-email").innerHTML =
      "Enter valid email address!";
    return false;
  }
  document.getElementById("err-email").innerHTML = "";
  return true;
}

function validatePAN(pan) {
  const regex = /^[A-Z]{5}\d{4}[A-Z]$/; // checks for first five alphabets then 4 digits then last one alphabet(alphabets in capital)
  if (!regex.test(pan)) {
    document.getElementById("err-pan").innerHTML = "Enter valid PAN number!";
    return false;
  }
  document.getElementById("err-pan").innerHTML = "";
  return true;
}

// on click submit button on html page handle submit function will be called
const handleSubmit = (e) => {
  e.preventDefault(); // prevents default action of event

  // get values from input fields and then set to name, email, pan and loan
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pan = document.getElementById("pan").value.trim();
  const loan = document.getElementById("loan").value;

  // if one of the field is empty error will be displayed above submit button
  if (name == "" || email == "" || pan == "" || loan == "") {
    document.getElementById("mandatory").innerHTML =
      "All fields are mandatory!";
  } else if (
    validateName(name) &&
    validateEmail(email) &&
    validatePAN(pan) &&
    loan != 0
  ) {
    document.getElementById("mandatory").innerHTML = ""; // removing mandatory fields error

    // setting up name, email and attempts values in sessionstorage
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("attempts", 3);

    window.location.href = "confirm.html"; // redirect to confirm page to verify otp
  } else {
    document.getElementById("mandatory").innerHTML = "";
  }
};
form.addEventListener("submit", handleSubmit); // added submit event to form
