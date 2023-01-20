
// Intentamos acceder a lista.md y obtener los datos

let fs = require('fs');

function read(urlFile) {
    // urlFile --> wa/DOM/claseEj4/DOM04/promisse.js

    return new Promise((resolve, reject) => {
        fs.readFile(urlFile, 'utf8', (error, datos) => {
            if (error) {
              return reject(error);
            }
            console.log(datos);
            resolve();
        });
    })
    
}



read("C:/Users/gemin/wa/DOM04_hpt-06/lista.md")
.then(()=>{
    console.log("Perfect! Los alumnos están listos");
})

