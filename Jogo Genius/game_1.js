var botoes = ["red","blue","green","yellow"];
var jogo = [];
var bot_sel = []
var inicio = false;
var nivel = 0;

$(document).keypress(function(){
    if(inicio != "true"){
        $("#level-title").text("Nível " + nivel)
        Sequencia();
        inicio = true;
    }
});

$(".btn").click(function(){
    var cor_s = $(this).attr("id");
    bot_sel.push(cor_s);

    musica(cor_s);
    animaçao(cor_s);
    checar(cor_s.length-1);
});

function checar(nivelatual){
    if(bot_sel[nivelatual] === jogo[nivelatual]){
        if(bot_sel.length === jogo.length){
            setTimeout(function(){
                Sequencia();
            })
    } else {
            musica("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Você Perdeu, pressione qualquer tecla para jogar");
            setTimeout(function(){
                $("body").removeClass("game-over");
                
            },200);
            começar();
    } 
}
}

function Sequencia(){
    bot_sel = [];
    nivel++;
    $("#level-title").text("Nível " + nivel);
    var valor = Math.floor(Math.random()*4);
    var cor = botoes[valor];
    jogo.push[cor];
    $("#"+cor).fadeIn(100).fadeOut(100).fadeIn(100);
    musica(cor);
}

function animaçao(cor){
    $("#"+cor).addClass("pressed");
    setTimeout(function(){
        $("#"+cor).removeClass("pressed");
    },100);
}

function musica(cor){
    var musica = new Audio("sound/"+cor+".mp3");
    musica.play();
}

function começar(){
    cor_sel = [];
    inicio = false;
    nivel = 0;
}
