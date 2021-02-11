var allspells = []
var imgspell = []
const xhr = new XMLHttpRequest();

xhr.open("GET", `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/summoner.json`, true)

//console.log("Passou por aq")

var enviarimgspell = document.getElementById('spellsimg')
var enviardescspell = document.getElementById('descspell')

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var spells = JSON.parse(this.responseText).data;
        
        for (const key of Object.keys(spells)) {
            allspells.push(spells[key]);
        }
        //console.log(allspells)

        //console.log(allspells.length)
        for(i = 0; i < allspells.length; i++){
            imgspell = allspells[i]
        
            enviarimgspell.innerHTML += `<a onclick="descspell(${i})"><img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${imgspell.id}.png"></a>`
        }
    }
}
xhr.send()

function descspell(i){
    enviardescspell.innerHTML = ``
    //console.log(allspells[i])
    enviardescspell.innerHTML = `
    <h3>${allspells[i].name}</h3>
    <p>${allspells[i].description}</p>
    <p>Tempo de recarga: ${allspells[i].cooldown} segundos</p>`
}

var allicons = []
var imgicon = []

const xhr2 = new XMLHttpRequest();

xhr2.open("GET", `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/profileicon.json`, true)

var enviarimgicon = document.getElementById('iconsimg')

xhr2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var icons = JSON.parse(this.responseText).data;
        
        for (const key of Object.keys(icons)) {
            allicons.push(icons[key]);
        }
        console.log("tamanho icons: "+allicons.length)
        //console.log("allicons: "+ allicons)
        enviarimgicon.innerHTML = `<h2>ícones de invocador Padrão</h2>`

        for(i = 0; i < 28; i++){
            imgicon = allicons[i].image.full
            
            console.log(imgicon)
            enviarimgicon.innerHTML += `<img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/profileicon/${imgicon}">`
        }
    }
}
xhr2.send()

var skills = document.getElementById('skillinfo')
function SKILLP(){
    skills.innerHTML = `
    <p>Habilidade Passiva<br>Devorador de Almas<br><br>
    Nasus drena a energia espiritual de seu inimigo, acumulando Roubo de Vida adicional.</p>

    <video loop muted autoplay><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_P1.webm" type="video/webm"><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_P1.mp4" type="video/mp4"></video>
`
}

function SKILLQ(){
    skills.innerHTML = `
    <p>Habilidade Q<br>Ataque Sifão<br><br>
    Nasus ataca seu inimigo, causando dano e aumentando o poder do próximo Ataque Sifão se o alvo for abatido.</p>

    <video loop muted autoplay><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_Q1.webm" type="video/webm"></video>
`
}

function SKILLW(){
    skills.innerHTML = `
    <p>Habilidade W<br>Murchar<br><br>
    Nasus envelhece um campeão inimigo, reduzindo sua Velocidade de Movimento e de Ataque ao longo do tempo.</p>

    <video loop muted autoplay><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_W1.webm" type="video/webm"></video>
`
}

function SKILLE(){
    skills.innerHTML = `
    <p>Habilidade E<br>Fogo Espiritual<br><br>
    Nasus libera uma chama espiritual em um local, causando dano e reduzindo a Armadura dos inimigos que pisarem nela.</p>

    <video loop muted autoplay><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_E1.webm" type="video/mp4"></video>
`
}

function SKILLR(){
    skills.innerHTML = `
    <p>Habilidade R<br>Fúria das Areias<br><br>
    Nasus libera uma poderosa tempestade de areia que atinge inimigos próximos. Enquanto a tempestade estiver ativa, ele recebe Vida e Alcance de Ataque adicionais, causa dano a inimigos próximos, reduz o Tempo de Recarga de Ataque Sifão e recebe Armadura e Resistência Mágica adicionais.</p>

    <video loop muted autoplay><source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_R1.webm" type="video/mp4"></video>
`
}
