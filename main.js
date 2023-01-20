
let url = "https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv";

fetch(url)
.then(response => response.text())
.then(datos => {
    let rows = datos.split("\n"); 
    /* console.log(rows); */

    let colEstrella = rows.map(el => el.split(","));

    /* console.log(colEstrella); */

    let objeto = colEstrella.map(el => {
        return{
            name: el[6],
            distance: el[9]
        }
    })

    /* console.log(objeto); */

    let filtradoObj = objeto.filter(el => el.name !== "" && el.name !== undefined && el.name !== "proper")
                            .sort((a, b)=> a.distance - b.distance);
    console.log(filtradoObj);

    filtradoObj.forEach(el => {
        let rowStar = document.querySelector("#rowStar");
        let col = document.createElement('div');
        col.classList.add("col-12", "col-md-3", "d-flex", "justify-content-center");
        col.innerHTML = `
        <div class="card mt-5 bg-transparent border-top-0 border-start-0 border-white  shadow" style="width: 18rem;">
            <div class="card-body ">
              <h5 class="card-title">${el.name} <i class="fa-solid fa-meteor"></i></h5>
              <h6 class="card-subtitle">${el.distance}</h6>
              
              
            </div>
        </div>
        `

        rowStar.appendChild(col);
    })





})