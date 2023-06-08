const USERS_LIST_API = "https://dummyjson.com/users";
const USER_DETAILS_API = (id) => "https://dummyjson.com/users/${id} ";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

document.body.appendChild(wrapper);

function getUsers() {
  fetch(USERS_LIST_API)
    .then((response) => response.json())
    .then((data) => {
      const { users } = data;
      console.log("users: ", users);

      users.forEach((user) => {
        card(user);
      });
    });
}

getUsers();

function card(user) {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = user.image;
  image.classList.add("image");

  div.classList.add("card");
  const h1 = document.createElement("h1");
  h1.innerHTML = user.firstName;
  div.appendChild(h1);
  div.appendChild(image);
  wrapper.appendChild(div);

  const h2 = document.createElement("h2");
  h2.innerHTML = user.lastName;
  div.appendChild(h2);

  const email = document.createElement("email");
  email.innerHTML = user.email;
  div.appendChild(email);

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user));
    window.open("../details.html", "_self");
  });
  button.innerHTML = "About more";
  div.appendChild(button);
  div.appendChild(button);
}
