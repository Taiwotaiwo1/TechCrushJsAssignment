
fetch("http://localhost/3000/students",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name:"",
        age: -50
    })
})
.then(response =>response.json())
.then(data => console.log(data))
.catch(error =>console.error(error));
