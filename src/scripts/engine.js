// Variaveis
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio(`src/audio/a.wav`);
let mapedKeys = ["a", "w", "s", "d", "f", "e", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"]; 
const liberarTeclado = document.querySelector(".keys-check input");


// Função para tocar som ao clicar na tecla.
const playTune = (key) =>{
    audio.src = `./src/audio/${key}.wav`;
    audio.play();

}

const showHideKeys = () =>{
    pianoKeys.forEach((key)=>{
        key.classList.toggle("hide");
        
    })
}

// Controle de volume   
function changevolume(volume){
    audio.volume = volume;
    
}

// Função para capturar cada letra tocada
pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=>{ 
        playTune(key.dataset.key)
        
    })
})

document.addEventListener("keydown",(event)=>{
    if(mapedKeys.includes(event.key)){
        playTune(event.key);

    }
})

liberarTeclado.addEventListener("click", showHideKeys);