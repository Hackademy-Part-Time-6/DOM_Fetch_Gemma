
let url = "https://api.wheretheiss.at/v1/satellites/";

fetch(url)
.then(response => response.json())
.then(datos =>{
    console.log(datos);
})