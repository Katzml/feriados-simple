console.info("External script");

const url = "http://localhost:3000/api/feriados";
let resultados;


document.addEventListener("DOMContentLoaded", () => (instance = M.AutoInit()));
const toast = () => M.toast({ html: "I am a toast" });

//peticion a la api
axios.get(url)
  .then(function (response) {
    resultados=response.data;
    console.info(resultados);
  })
  .catch(function (error) {
    console.log(error);
  })