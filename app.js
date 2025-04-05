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

