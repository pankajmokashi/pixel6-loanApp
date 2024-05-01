## Loan Application

### Loan Page (index.html): 

- Create a Loan Application page to accept
- Full Name [text box] (only alphabets and spaces allowed, min two words each with min 4 chars)
- Email [text box] (Email validation)
- PAN [text box] (Pay attention to this format as per below instructions)
    - Alphanumeric
    - Must be in this order and format: ABCDE1234F
- Loan Amount [text box] (numeric | maximum of 9 digits)
    - Show the entered amount in words beside the field. Eg if the user enters 456800, you would show ‘Four Lakh Fifty Six Thousand Eight Hundred Rs.’
    - OR -
    - (if you are not able to do the above conversion), show ‘Estimated EMI’, based on the loan amount, interest rate of 8.5% and tenure of 15 years.
- Submit (submits only on correct validations)

---

### Confirmation page (confirm.html)

- Once the user submits the form, pass the values to a new page, create a 4 digit random number (show it only on console log) and based on the form values, write following message:
Dear <First name of the user and not full name>,
Thank you for your inquiry. A 4 digit verification number has been sent to your email: <valid email from
previous page>, please enter it in the following box and submit for confirmation:
Text box for OTP and 'Validate' button.
- If the number matches the random number generated earlier, replace the OTP form with a 'Validation Successful!' message and redirect the user to the Pixel6 home page (optional).
- else reset this OTP form and ask the user to reenter. If a user fails to enter the right number in 3 attempts, replace the OTP form with a 'Validation Failed!' message and redirect the user to 404 (page not found) page on Pixel6 website (optional).

---

### Live Link

- https://pankajmokashi.github.io/pixel6-loanApp
