let musicas = [
    {titulo:"Bandit", artista:"Juice WRLD", src:"msc/Juice WRLD - Bandit ft. NBA Youngboy.mp3", img:"img/juicewrldbandit.jpg"},
    {titulo:"Magia", artista:"Kintto", src:"msc/Magia.mp3", img:"img/WhatsApp Image 2022-09-21 at 20.42.50.jpeg"},
    {titulo:"Sunny Days", artista:"Anno Damini", src:"msc/Sunny Days - Anno Domini Beats.mp3", img:"img/agustin-gunawan-7iwYPkGzO2o-unsplash.jpg"},
    {titulo:"Wish You'd Come True", artista:"The 126ers", src:"msc/Wish You'd Come True - The 126ers.mp3", img:"img/blocks-T3mKJXfdims-unsplash.jpg"},
    {titulo:"You Had To Be", artista:"E's Jammy Jams", src:"msc/You Had To Be - E's Jammy Jams.mp3", img:"img/skyler-gerald-nYgkStQeJVo-unsplash.jpg"}
];

// referenciando as tags criadas às variaveis que vou criar agora utilizando document.querySelector
let msc = document.querySelector("audio");
let indexMusica = 0;

let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricaoMusica h2");
let nomeArtista = document.querySelector(".descricaoMusica i");

renderizarMusica(indexMusica);

//adicionando evento do tipo click e a funcao para começar e pausar a musica na classe
document.querySelector(".botao-play").addEventListener("click", tocarMsc);
document.querySelector(".botao-pause").addEventListener("click", pausarMsc);

//evento do tipo timeupdate para poder ver o tempo da musica
msc.addEventListener("timeupdate", attBarra);

document.querySelector(".anterior").addEventListener("click", () =>{
    indexMusica --;
    renderizarMusica(indexMusica);
});

document.querySelector(".posterior").addEventListener("click", () =>{
    indexMusica ++;
    renderizarMusica(indexMusica);
});

function renderizarMusica(indexMusica){
    msc.setAttribute("src", musicas[indexMusica].src);
    msc.addEventListener("loadeddata", passarMusica, pausarMsc);
    tocarMsc();
}
function passarMusica(){
    nomeMusica.textContent = musicas[indexMusica].titulo;
    nomeArtista.textContent = musicas[indexMusica].artista;
    imagem.src = musicas[indexMusica].img;
}

function tocarMsc(){
    msc.play();
    document.querySelector(".botao-pause").style.display="block";
    document.querySelector(".botao-play").style.display="none";
}

function pausarMsc(){
    msc.pause();
    document.querySelector(".botao-play").style.display="block";
    document.querySelector(".botao-pause").style.display="none";
}

function attBarra(){
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((msc.currentTime / msc.duration) * 100) + "%";

    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = converterSegundos(Math.floor(msc.currentTime));
}

function converterSegundos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos;
    }
    
    return campoMinutos + ":" + campoSegundos;
}