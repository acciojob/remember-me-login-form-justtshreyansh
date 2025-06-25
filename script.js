const username = document.querySelector('#username');
const password = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const button = document.querySelector("#submit");
const existing = document.querySelector("#existing");
existing.addEventListener('click',()=>{
	const obj = JSON.parse(localStorage.getItem("user"));
	alert(`Logged in as ${obj.name}`)
})
function onLoad() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    existing.style.display = "block";
    const obj = JSON.parse(localStorage.getItem("user"));
    if (obj.pass && obj.name) {
      alert(`Logged in as ${obj.name}`);
    }
  } else {
    existing.style.display = "none";
  }
}

function submitHandler(e) {
  e.preventDefault();

  const user = username.value.trim();
  const pass = password.value.trim();
  const isChecked = checkbox.checked;

  if (!user || !pass) {
    alert("Please fill all the input boxes");
    username.value = "";
    password.value = "";
    return;
  }

  alert(`Logged in as ${user}`);
  localStorage.setItem("isLoggedIn", true);

  if (isChecked) {
    const obj = { name: user, pass: pass };
    localStorage.setItem("user", JSON.stringify(obj));
  } else {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", false);
  }

  username.value = "";
  password.value = "";
  checkbox.checked = false;

  onLoad();
}

// Call after everything is set up
onLoad();
