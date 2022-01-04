export default class Form {
  displayForm() {
    const signForm = document.querySelector("#contact-form");
    const modal = document.querySelector(".modal");
    const modalThank = document.querySelector(".modal-thank");
    const closeThank = document.querySelector(".close_btn_thank");

    closeThank.addEventListener("click", closeThanks);

    function closeThanks() {
      modalThank.style.display = "none";
    }

    signForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formValid()) {
        email.style.border = "none";
        message.style.border = "none";
        document.querySelector("#first").style.border = "none";
        document.querySelector("#last").style.border = "none";
        signForm.reset();
        signForm.style.display = "none";
        modal.style.display = "none";
        modalThank.style.display = "block";
      }
    });

    function nameChecker(classErreur, input) {
      const $nameError = document.querySelector(classErreur);
      const $inputError = document.getElementById(input);

      if (document.getElementById(input).value.length < 2) {
        $nameError.style.display = "block";
        $inputError.style.border = "2px solid rgb(141, 30, 30)";
      } else {
        $inputError.style.border = "2px solid green";
        $nameError.style.display = "none";
        return nameChecker;
      }
    }

    let email = document.getElementById("email");
    function emailChecker() {
      let regexEmail =
        /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      const $emailError = document.querySelector(".emailError");
      if (email.value.trim() === "" || regexEmail.test(email.value) === false) {
        $emailError.style.display = "block";
        email.style.border = "2px solid rgb(141, 30, 30)";
      } else {
        $emailError.style.display = "none";
        email.style.border = "2px solid green";
        return emailChecker;
      }
    }

    let message = document.getElementById("message");
    function messageChecker() {
      const $messageError = document.querySelector(".messageError");
      if (message.value.length < 3) {
        $messageError.style.display = "block";
        message.style.border = "2px solid rgb(141, 30, 30)";
      } else {
        $messageError.style.display = "none";
        message.style.border = "2px solid green";
        return messageChecker;
      }
    }

    const formValid = () => {
      nameChecker(".firstError", "first");
      nameChecker(".lastError", "last");
      emailChecker();
      messageChecker();
      const isValid =
        nameChecker(".firstError", "first") &&
        nameChecker(".lastError", "last") &&
        emailChecker() &&
        messageChecker();
      return isValid;
    };
  }
}
