const user = JSON.parse(localStorage.getItem("user"));
console.log("user2: ", user);
function createUser(user) {
  const container = document.createElement("div");

  const div = document.createElement("div");
  const div2 = document.createElement("div");

  container.classList.add("container");
  div.classList.add("card");
  div2.classList.add("card2");

  // Display name
  const name = document.createElement("h1");
  name.textContent = `${user.firstName} ${user.lastName}`;
  div.appendChild(name);

  // Display photo
  const image = document.createElement("img");
  image.src = user.image;
  div.appendChild(image);

  // Display age
  const age = document.createElement("p");
  age.textContent = `age: ${user.age}`;
  div.appendChild(age);
  `Тип волос: ${user.hair.type}`;

  // Display gender
  const gender = document.createElement("p");
  gender.textContent = user.gender;
  div.appendChild(gender);

  // Display phone number
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = user.phone;
  div.appendChild(phoneNumber);

  //   Display address
  const address = document.createElement("p");
  address.textContent = user.address.address;
  div.appendChild(address);

  const email = document.createElement("p");
  email.textContent = user.email;
  div.appendChild(email);

  // card 2
  const AdditionalInformation = document.createElement("h1");
  AdditionalInformation.textContent = `Additional Information`;
  div2.appendChild(AdditionalInformation);

  const hair = document.createElement("p");
  hair.textContent = `Type hair: ${user.hair.type}`;
  div2.appendChild(hair);

  const birthDate = document.createElement("p");
  birthDate.textContent = `Дата рождение: ${user.birthDate}`;
  div2.appendChild(birthDate);

  const macAddress = document.createElement("p");
  macAddress.textContent = `Mac Address: ${user.macAddress}`;
  div2.appendChild(macAddress);

  const bloodGroup = document.createElement("p");
  bloodGroup.textContent = `Blood Group: ${user.bloodGroup}`;
  div2.appendChild(bloodGroup);

  const maidenName = document.createElement("p");
  maidenName.textContent = `Maiden Name: ${user.maidenName}`;
  div2.appendChild(maidenName);

  const password = document.createElement("p");
  password.textContent = `Password: ${user.password}`;
  div2.appendChild(password);

  const ssn = document.createElement("p");
  ssn.textContent = `Ssn: ${user.ssn}`;
  div2.appendChild(ssn);

  const ein = document.createElement("p");
  ein.textContent = `Ein: ${user.ein}`;
  div2.appendChild(ein);

  const weight = document.createElement("p");
  weight.textContent = `Weight: ${user.weight}`;
  div2.appendChild(weight);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye Color: ${user.eyeColor}`;
  div2.appendChild(eyeColor);

  // Append the div to the document body
  container.appendChild(div);
  container.appendChild(div2);
  document.body.appendChild(container);
}

createUser(user);



