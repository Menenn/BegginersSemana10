var data2 = []
var nomesitens = []
var descricaoitens = []
var precoitens = []
var usepara = []
var allitens = [];

const xhr = new XMLHttpRequest();

xhr.open("GET", `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/item.json`, true)

var resultitens = document.getElementById('container')
var descitens = document.getElementById('container2')
var materialto = document.getElementById('container3')

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var itens = JSON.parse(this.responseText).data;

        for (const key of Object.keys(itens)) {
        allitens.push(itens[key]);
        }
        console.log(allitens)
        for (let i = 0; i < allitens.length; i++) {
            
            data = allitens[i].image.full;

            nome = allitens[i].name
            descricao = allitens[i].description
            preco = allitens[i].gold.total
            usep = allitens[i].into

            nomesitens[i] = nome
            descricaoitens[i] = descricao
            precoitens[i] = preco
            usepara[i] = usep
            data2[i] = data
            //var champs = allChamps[i].name
            //console.log(data)

            //console.log(nome)

            // let criarimg = document.createElement("a");
            // resultitens.appendChild(criarimg);
            
            resultitens.innerHTML += `<a onclick="infoitem(${i})"><img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${data}"</a>`
        }
    //console.log(nomesitens)
    }   
}
xhr.send();

function infoitem(i){
    materialto.innerHTML = ``
    descitens.innerHTML = `<h2>${nomesitens[i]}</h2>
    <p>${descricaoitens[i]}</p>
    <p>Este item custa: <a style="color:gold">${precoitens[i]}</a> moedas de ouro</p>
    `
    if(usepara[i] != undefined){
    for(j = 0; j < usepara[i].length; j++){
        var item = usepara[i]
        console.log("todos os itens do Vector: "+item)
        }
    } else {
        materialto.innerHTML += `<h2>Este item não possui upgrades!</h2>`
    }

    if(item != undefined){
    materialto.innerHTML = `<h2>Upgrades para ${nomesitens[i]}</h2>`
    for(k = 0; k < item.length; k++){
        console.log("Da pra fazer: "+item[k])

        materialto.innerHTML += `<a onclick="infoitem2(${item[k]})"><img src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${item[k]}.png"></a>`
    }
}
}

function infoitem2(i){
    i += ".png"
    console.log(i)
    for(y = 0; y < allitens.length; y++){
        if(i == data2[y]){
            console.log('achamos um aq!')
            console.log(allitens[y])

            nome = allitens[y].name
            descricao = allitens[y].description
            preco = allitens[y].gold.total
            usep = allitens[y].into

            nomesitens[y] = nome
            descricaoitens[y] = descricao
            precoitens[y] = preco
            usepara[y] = usep

            descitens.innerHTML = `<h2>${nomesitens[y]}</h2>
            <p>${descricaoitens[y]}</p>
            <p>Este item custa: <a style="color:gold">${precoitens[y]}</a> moedas de ouro</p>
            `
        }
    }
}

