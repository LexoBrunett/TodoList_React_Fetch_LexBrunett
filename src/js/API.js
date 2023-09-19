export const addTask = (tasksAPI) => {
  fetch("https://playground.4geeks.com/apis/fake/todos/<LexoBrunett>", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tasksAPI) 
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
 };

 
export const createUser = () => {
  fetch("https://playground.4geeks.com/apis/fake/todos/<LexoBrunett>", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  })
    .then((response) => {
      if (response.ok) {
        alert("El usuario se ha creado correctamente");
        return response.json();
      } else {
        alert("El usuario ya se encuentra creado");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};