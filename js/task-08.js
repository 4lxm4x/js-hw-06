const refs = {
  email: document.querySelector("input[name='email']"),
  form: document.querySelector(".login-form"),
  password: document.querySelector("input[name='password']"),
  submitBtn: document.querySelector("button"),
};
//console.log(refs.submitBtn);

refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  //window.alert;
  event.preventDefault();
  const { email, password } = event.target.elements;
  //console.log(event.target.elements.email.value);
  if (email.value === "" || password.value === "") {
    alert("Please fill out required fields");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };

    const formData = new FormData(event.currentTarget);
    formData.forEach((x, y) => {
      console.log(x, y);
    });

    console.log(`Почта: ${userData.email} Пароль: ${userData.password} `);
    refs.form.reset();
  }

  // console.log(email.value, password.value);
}
