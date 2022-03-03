var currentUsername = "";

function getUsername(element) {
  console.log(element.value);
  currentUsername = element.value;
}

async function search() {
  var response = await fetch("https://api.github.com/users/adion81");
  var data = response.json();
}
