function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
            elemento.play()
        } else{
            alert('Elemento não encontrado')
        }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let contador = 0;

while(contador < 9){

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    };
    contador++;
}*/

//transformando while em for
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code == 'Enter' ){
        tecla.classList.add('ativa');
            } 
        }
    
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
        
    }
}