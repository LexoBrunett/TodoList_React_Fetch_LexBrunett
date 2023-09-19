export const addTask = (tasksAPI) => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/LexoBrunett", {
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