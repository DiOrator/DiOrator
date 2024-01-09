document.addEventListener('DOMContentLoaded', function () {
  alert(`You're about to go through a process...`);
  const bodyContent = document.body;
  const loginArea = document.getElementById('loginArea');
  const almostArea = document.getElementById('almostArea');
  const secondAlmostArea = document.getElementById('secondAlmostArea');
  const thirdAlmostArea = document.getElementById('thirdAlmostArea');
  let clickCount = 0;

  function showBodyContent() {
    clickCount++;

    if (clickCount === 1) {
      bodyContent.style.display = 'block';
      loginArea.style.display = 'none';
      almostArea.style.display = 'block';
      secondAlmostArea.style.display = 'none';
      thirdAlmostArea.style.display = 'none';
    } else if (clickCount === 2) {
      bodyContent.style.display = 'block';
      loginArea.style.display = 'none';
      almostArea.style.display = 'none';
      secondAlmostArea.style.display = 'block';
      thirdAlmostArea.style.display = 'none';
    } else if (clickCount === 3) {
      bodyContent.style.display = 'block';
      loginArea.style.display = 'none';
      almostArea.style.display = 'none';
      secondAlmostArea.style.display = 'none';
      thirdAlmostArea.style.display = 'block';
    } else if (clickCount === 4) {
      bodyContent.style.display = 'block';
      loginArea.style.display = 'block';
      almostArea.style.display = 'none';
      secondAlmostArea.style.display = 'none';
      thirdAlmostArea.style.display = 'none';
    }
  }
  document.addEventListener('click', showBodyContent);

  class Inputs {
    constructor() {
      this.inputsArray = [];
    }

    storeInputs() {
      const fullname = document.getElementById('fullname').value;
      const username = document.getElementById('username').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const emailAddress = document.getElementById('emailAddress').value;
      const password = document.getElementById('password').value;
      const reEnterPassword = document.getElementById('reEnterPassword').value;
      const passwordError = document.getElementById('passwordError');
      const reEnterPasswordError = document.getElementById(
        'reEnterPasswordError'
      );

      if (password != reEnterPassword) {
        passwordError.style.display = 'block';
        reEnterPasswordError.style.display = 'block';
        return false;
      } else {
        passwordError.style.display = 'block';
        reEnterPasswordError.style.display = 'block';
      }

      this.inputsArray.push({
        fullname,
        username,
        phoneNumber,
        emailAddress,
        password,
        reEnterPassword,
      });
      console.log(this.inputsArray);
      return true;
    }
  }
  const userCredentials = new Inputs();
  const submit = document.getElementById('submit');
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    userCredentials.storeInputs();
  });
});
