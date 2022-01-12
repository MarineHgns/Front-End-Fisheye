export default class Form {
  displayForm() {
    const signForm = document.querySelector("#contact-form");
    const modal = document.querySelector(".modal");
    const modalThank = document.querySelector(".modal-thank");
    const closeThank = document.querySelector(".close_btn_thank");

    // Fermeture de la modale de remerciement au click, au enter et au echap
    closeThank.addEventListener("click", closeThanks);
    closeThank.addEventListener("keyup", function (event) {
      if (event.code === "Enter") {
        closeThanks();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        window.location.reload(true);
        closeThanks();
      }
    });

    function closeThanks() {
      modalThank.style.display = "none";
    }

    // Submit du formulaire + reset + consolelog
    signForm.addEventListener("submit", function (e) {
      let first = document.getElementById("first");
      let last = document.getElementById("last");
      e.preventDefault();
      if (formValid()) {
        email.style.border = "none";
        message.style.border = "none";
        document.querySelector("#first").style.border = "none";
        document.querySelector("#last").style.border = "none";
        console.log(
          `
          L'utilisateur ${first.value} ${last.value} vous a envoyé le message suivant : "${message.value}", 
          vous pouvez lui répondre via son adresse mail: ${email.value}
           `
        );
        signForm.reset();
        signForm.style.display = "none";
        modal.style.display = "none";
        modalThank.style.display = "block";
      }
    });

    // Vérification des inputs nom et prénom
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

    // Vérification email
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

    // Vérification message
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

    // Vérification de chaque input lors du submit
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
