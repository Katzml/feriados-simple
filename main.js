console.info("External script");

const url = "https://feriados-api.herokuapp.com/api/feriados";
let resultados;

const lista = document.getElementById('lista');

document.addEventListener("DOMContentLoaded", () => (instance = M.AutoInit()));
const toast = () => M.toast({ html: "I am a toast" });


//peticion a la api
axios.get(url)
  .then(function (response) {
    resultados=response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(()=>{
    resultados.forEach(item => {
      lista.innerHTML+=`
      <div class="col s12 m6 l4">
            <div class="card">
              <div class="card-image">
                <img class="lista-img" src="${item.image}" height="200" width="200"/>
                <span class="card-title">${item.title}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"
                  ><i class="material-icons">add</i></a
                >
              </div>
              <div class="card-content">
                <p>
                  Fecha: ${item.date}
                </p>
                <p>
                  Tipo: ${item.extra}
                </p>
              </div>
            </div>
          </div>
      
      `;
    });
  })