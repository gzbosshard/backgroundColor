const color = document.querySelector('#codigo');
const backgroundColor = document.querySelector('.fundo')
const botao = document.querySelector('.btn');

btn.addEventListener('click', () => {
    gerarCor();
})


function gerarCor (){
    color.innerHTML = "";
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    const cor = '#' + n.slice(0, 6);

    let texto = document.createTextNode(cor);
    color.appendChild(texto);
    
    backgroundColor.style.backgroundColor = cor;
    color.style.color = cor;
  
}


