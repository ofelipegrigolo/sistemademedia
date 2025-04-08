function Media() {  
  const kminicial = parseFloat(document.getElementById("km_inicial").value);  
  const kmfinal = parseFloat(document.getElementById("km_final").value);  
  const qtdabastecida = parseFloat(document.getElementById("qtd_abastecida").value);
  const mediavalor = document.getElementById("mediavalor"); 

  const media = (kmfinal - kminicial) / qtdabastecida;  
  
  mediavalor.innerHTML = `<p>Media Final:<b> ${media}</b></p>`;  
  
}  

const btn = document.getElementById("btn");  
btn.addEventListener("click", Media);  

function Registro(){
  const cardAbastecimento = document.getElementById("card-abastecimento");
  cardAbastecimento.style.visibility = "visible";
}

const btnRegistro = document.getElementById("btncadastro");
btnRegistro.addEventListener("click",Registro);


function AdicionarVeiculo(){
  const cardVeiculo = document.getElementById("card-veiculo");
  cardVeiculo.style.visibility = "visible";
}


const btnAdicionarVeiculo = document.getElementById("btnAdd");
btnAdicionarVeiculo.addEventListener("click",AdicionarVeiculo);