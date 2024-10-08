function checkEligibility() {
    let age = prompt("Please enter your age:");
    let message;

    if (age === null || age === "") {
      message = "Age input was cancelled.";
    } else {
      age = Number(age);
      if (isNaN(age)) {
        message = "Please enter a valid number.";
      } else if (age < 0) {
        message = "The age is invalid.";
      } else if (age >= 18) {
        message = "User is eligible to vote.";
      } else {
        message = "User is not eligible to vote.";
      }
    }

    document.getElementById("p1").innerText = message;
  }