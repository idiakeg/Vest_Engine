const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementsByClassName("form_eye_icon");
const passwordInvisibleIcon = document.getElementById("password_invisible");
const passwordVisibleIcon = document.getElementById("password_visible");
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

// toggle the password visibility
let flag = true;

// add event listener to the eye icon
const eyeIconArray = [...eyeIcon];

eyeIconArray.forEach((element) => {
	element.addEventListener("click", () => {
		flag = !flag;
		if (flag) {
			passwordInvisibleIcon.style.display = "none";
			passwordVisibleIcon.style.display = "block";
			passwordInput.type = "text";
		} else {
			passwordInvisibleIcon.style.display = "block";
			passwordVisibleIcon.style.display = "none";
			passwordInput.type = "password";
		}
	});
});
