document.getElementById("botao-busca").addEventListener("click", function (event) {
    event.preventDefault(); 
    const busca = document.getElementById("campo-busca").value.trim();
    const resultado = document.getElementById("resultado-busca");
  
    if (busca) {
      resultado.innerText = `Você buscou por: '${busca}'`;
    } else {
      resultado.innerText = "";
    }
  });
  