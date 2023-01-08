var vermelho = setInterval(acendevermelho,2000);
var verde;
var amarelo;

function acendevermelho() {
    document.getElementById( 'circulo-vermelho' ).style.opacity = "1";
    document.getElementById( 'circulo-amarelo' ).style.opacity = "0.2";
    document.getElementById( 'circulo-verde' ).style.opacity = "0.2";
    
    clearInterval(vermelho);

    amarelo = setInterval(acendeamarelo,2000);


}

function acendeamarelo() {
    document.getElementById( 'circulo-amarelo' ).style.opacity = "1";
    document.getElementById( 'circulo-vermelho' ).style.opacity = "0.2";
    document.getElementById( 'circulo-verde' ).style.opacity = "0.2";

    clearInterval(amarelo);

    verde = setInterval(acendeverde,2000);



}

function acendeverde (){

    document.getElementById( 'circulo-verde' ).style.opacity = "1";
    document.getElementById( 'circulo-amarelo' ).style.opacity = "0.2";
    document.getElementById( 'circulo-vermelho' ).style.opacity = "0.2";

    vermelho = setInterval(acendevermelho,2000);
}

function acendeautomatico () {

    setInterval(acendevermelho(), 2000);




}