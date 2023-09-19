fetch("https://playground.4geeks.com/apis/fake/todos/user/LexoBrunett", {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });


export const addTask = (tasksAPI) => {
  fetch("https://playground.4geeks.com/apis/fake/todos/user/LexoBrunett", {
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
  fetch("https://playground.4geeks.com/apis/fake/todos/LexoBrunett", {
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
