var skins2 = []
var skins3 = []
var cliques = 0

const xhr = new XMLHttpRequest();

xhr.open("GET", `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json`, true)

var resultest = document.getElementById('input_champ')

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var champs = JSON.parse(this.responseText).data;

        var allChamps = [];

        for (const key of Object.keys(champs)) {
        allChamps.push(champs[key]);
        }

        for (let i = 0; i < allChamps.length; i++) {
            data = allChamps[i].id;
            //var champs = allChamps[i].name
    
            let h2 = document.createElement("option");
            resultest.appendChild(h2);
    
            h2.innerHTML += data;
          }
    }        
}
xhr.send();

function setarcampeao(){
    cliques=0
    var champ = document.getElementById('input_champ').value
    var champ54 = document.getElementById('input_champ2').value
    console.log(champ)
    console.log(champ54)
    if(champ == ""){
        champ = champ54
    }

    const xhr2 = new XMLHttpRequest();

    xhr2.open("GET", `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/${champ}.json`, true)
    
    xhr2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        var campeao = JSON.parse(this.responseText).data;
        var allinfos = [];

        for (const key of Object.keys(campeao)) {
        allinfos.push(campeao[key]);

        for (let i = 0; i < allinfos.length; i++) {
            console.log(allinfos)
            titulo = allinfos[i].title;
            lore = allinfos[i].lore;
            spells = allinfos[i].spells;
            passive = allinfos[i].passive;
            statsc = allinfos[i].stats;
            skins = allinfos[i].skins

            skins2 = [];
            const numskins = skins.length
            var allskins = []
            for (const key of Object.keys(skins)) {
                allskins.push(skins[key]);
            }
            for (j = 0; j < numskins; j++){
                rato = Number([allskins[j].num])
                rato2 = [allskins[j].name]
                skins2[j] = rato
                skins3[j] = rato2
                //console.log(allskins[j].num)
            }
            console.log("Numero de skins aqui " + skins2.length)
            console.log(skins2)
            console.log(skins3)

            const infoschamp = document.getElementById('desc_champ')
            infoschamp.innerHTML = `
            <div id="bordadetudo">
            <div id="imgchamp">
            <div id="imgskins">
            <div id="skins">
            <img onclick="alterarskin()" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg">
            <p id="skinname">Skin Padrão</p>
            </div>
            <a id="avisoskin" onclick="alterarskin()">Clique na imagem ou aqui para alterar a skin!</a>
            </div>
            <div id="descchamp">
            <h1>${champ} - ${titulo}</h1>
            <p>${lore}</p>

            <div id="atributos">
            
            <input type="number" id="lvlquantity" name="quantity" min="1" max="18" placeholder="Nível" onchange="attnivel()">

            </div>

            <div id="atributos2">
            <div class="at01">
            <p id="atHP">Vida: ${statsc.hp}</p>
            <p id="atMP">Mana: ${statsc.mp}</p>
            <p id="atHPR">Regeneração de Vida: ${statsc.hpregen}</p>
            </div>
            <div class="at01">
            <p id="atMPR">Regeneração de Mana: ${statsc.mpregen}</p>
            <p id="atAR">Armadura: ${statsc.armor}</p>
            <p id="atMR">Resistência Mágica: ${statsc.spellblock}</p>
            </div>
            <div class="at01">
            <p id="atDMG">Dano de Ataque: ${statsc.attackdamage}</p>
            <p id="atAS">Velocidade de Ataque: ${statsc.attackspeed}</p>
            <p id="atAR">Alcance de Ataque: ${statsc.attackrange}</p>
            </div>

            </div>

            </div>

            </div>

            <h2 id="title2">Habilidades do campeão</h2>
            <div id="skills">
            <div id="skillP">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${passive.image.full}"><h3>Habilidade P</h3><p><b>${passive.name}</b> - ${passive.description}</p>
            </div>
            <div id="skillQ">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${spells['0'].id}.png"><h3>Habilidade Q</h3><p><b>${spells['0'].name}</b> - ${spells['0'].description}</p>
            </div>
            <div id="skillW">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${spells['1'].id}.png"><h3>Habilidade W</h3><p><b>${spells['1'].name}</b> - ${spells['1'].description}</p>
            </div>
            <div id="skillE">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${spells['2'].id}.png"><h3>Habilidade E</h3><p><b>${spells['2'].name}</b> - ${spells['2'].description}</p>
            </div>
            <div id="skillR">
            <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${spells['3'].id}.png"><h3>Habilidade R</h3><p><b>${spells['3'].name}</b> - ${spells['3'].description}</p>
            </div>
            </div>
            </div>
            `
                }
            }
        }
    }

    xhr2.send();
}

function attnivel(){
    const nivel = document.getElementById('lvlquantity')
    if(nivel.value > 1){
        const levelupdate = document.getElementById('atributos2')

        const numDMG = Number(statsc.attackdamage);
        const numDMG2 = Number(statsc.attackdamageperlevel);

        const numHP = Number(statsc.hp);
        //console.log(numHP)
        const numHP2 = Number(statsc.hpperlevel);
        //console.log(numHP2)

        const numMP = Number(statsc.mp);
        const numMP2 = Number(statsc.mpperlevel);

        const numHPR = Number(statsc.hpregen);
        const numHPR2 = Number(statsc.hpregenperlevel);

        const numMPR = Number(statsc.mpregen);
        const numMPR2 = Number(statsc.mpregenperlevel);

        const numAR = Number(statsc.armor);
        const numAR2 = Number(statsc.armorperlevel);

        const numMR = Number(statsc.spellblock);
        const numMR2 = Number(statsc.spellblockperlevel);

        const numSP = Number(statsc.attackspeed);
        const numSP2 = Number(statsc.attackspeedperlevel);


        const numHP3 = Number(nivel.value - 1)

        const conta = ((numHP) + (numHP2 * numHP3))
        const conta2 = ((numMP) + (numMP2 * numHP3))
        const conta3 = ((numHPR) + (numHPR2 * numHP3))
        const conta4 = ((numMPR) + (numMPR2 * numHP3))
        const conta5 = ((numAR) + (numAR2 * numHP3))
        const conta6 = ((numMR) + (numMR2 * numHP3))
        const conta7 = ((numDMG) + (numDMG2 * numHP3))
        const conta8 = ((numSP) + ((numSP2/100) * numHP3))
        console.log(numSP2/100)
        //console.log(conta)
        levelupdate.innerHTML = `
        <div class="at01">
        <p id="atHP">Vida: ${conta}</p>
        <p id="atMP">Mana: ${conta2}</p>
        <p id="atHPR">Regeneração de Vida: ${conta3.toFixed(2)}</p>
        </div>
        <div class="at01">
        <p id="atMPR">Regeneração de Mana: ${conta4.toFixed(2)}</p>
        <p id="atAR">Armadura: ${conta5.toFixed(2)}</p>
        <p id="atMR">Resistencia Mágica: ${conta6.toFixed(2)}</p>
        </div>
        <div class="at01">
        <p id="atDMG">Dano de Ataque: ${conta7.toFixed(2)}</p>
        <p id="atSP">Velocidade de Ataque: ${conta8.toFixed(2)}</p>
        <p id="atAR">Alcance de Ataque: ${statsc.attackrange}</p>
        </div>`
    }
    else if(nivel.value == 1){
        const levelupdate = document.getElementById('atributos2')
        levelupdate.innerHTML = `
        <div class="at01">
        <p id="atHP">Vida: ${statsc.hp}</p>
        <p id="atMP">Mana: ${statsc.mp}</p>
        <p id="atHPR">Regeneração de Vida: ${statsc.hpregen}</p>
        </div>
        <div class="at01">
        <p id="atMPR">Regeneração de Mana: ${statsc.mpregen}</p>
        <p id="atAR">Armadura: ${statsc.armor}</p>
        <p id="atMR">Resistencia Mágica: ${statsc.spellblock}</p>
        </div>
        <div class="at01">
        <p id="atDMG">Dano de Ataque: ${statsc.attackdamage}</p>
        <p id="atSP">Velocidade de Ataque: ${statsc.attackspeed}</p>
        <p id="atAR">Alcance de Ataque: ${statsc.attackrange}</p>
        </div>`
    }
}

function alterarskin(){
    cliques += 1;
    if(cliques < skins2.length){
        //console.log(skins2[cliques])
        var champ2 = document.getElementById('input_champ').value
        if(champ2 == ""){
            champ2 = document.getElementById('input_champ2').value
        }
        const alterarskin = document.getElementById('skins')
        if(skins3[cliques] == "default"){
            skins3[cliques] = "Skin Padrão"
        }
        alterarskin.innerHTML = `
        <img onclick="alterarskin()" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ2}_${skins2[cliques]}.jpg">
        <p id="skinname">${skins3[cliques]}</p>
        `
        //console.log("Cliques:"+cliques)
        //console.log("Numero de Skins:"+skins2.length)
    }else if(cliques == skins2.length){
        cliques = -1
    }
}
