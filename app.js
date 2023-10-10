const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordErrorMessage = document.getElementById("password_error_message");
const emailErrorMessage = document.getElementById("email_error_message");
const form = document.getElementById("form");

// add a submit event listener to the form
form.addEventListener("submit", (e) => {
	// prevent default form submission
	e.preventDefault();
	// check the validity of the email field
	if (!emailInput.checkValidity()) {
		emailErrorMessage.style.display = "inline-block";
	} else {
		emailErrorMessage.style.display = "none";
	}
	// check the validity of the password field
	if (!passwordInput.checkValidity()) {
		passwordErrorMessage.style.display = "inline-block";
	} else {
		passwordErrorMessage.style.display = "none";
	}
});
