const refs = {
  email: document.querySelector("input[name='email']"),
  form: document.querySelector(".login-form"),
  password: document.querySelector("input[name='password']"),
  submitBtn: document.querySelector("button"),
};
console.log(refs);
refs.submitBtn.addEventListener("submit", onSubmit);

function onSubmit(event) {
  console.log(event);
  event.preventDefault();
}
