"use strict";

// Variables started

let selectOption = document.querySelector('#regionName');
let baseURL = "https://islomapi.uz/api/present/day";
let tong = document.querySelector('.tong');
let quyosh = document.querySelector('.quyosh');
let peshin = document.querySelector('.peshin');
let asr = document.querySelector('.asr');
let shom = document.querySelector('.shom');
let xufton = document.querySelector('.xufton');
let region = document.querySelector('.regionName');
let year = document.querySelector('.year')
let hour = document.querySelector('.hour2')
let selectChange = document.querySelector('.select');
let body = document.querySelector('body')
let yoge = document.querySelector('.yoge')
let map = document.querySelector('.bx-map')

// Variables ended

// DROPDOWN CLICK STARTED

selectChange.addEventListener('click',()=>{
    selectOption.classList.toggle('none')
})

// DROPDOWN CLICK ENDED

// RESPONSIVE LOCATION CLICK STARTED



// RESPONSIVE LOCATION CLICK STARTED




// REGION INTERCHANGE STARTED

function renderData(loop){
    loop.forEach((el,id)=>{
        let div = document.createElement('p')
        div.classList.add('justregion')
        div.setAttribute('data-id',`${id}`)
        div.innerHTML = el;

        selectOption.append(div);
    })
}

renderData(provencie)

// REGION INTERCHANGE ENDED




// DROPDOWN INFO READ STARTED

selectOption.addEventListener('click',(e)=>{
    if(e.target.classList.contains('justregion')){
        let id = e.target.getAttribute('data-id');
        region.textContent = `${provencie[id]}`
        selectOption.classList.toggle('none')
        yoge.textContent = `${provencie[id]}`
        findTime(provencie[id])
    }
})

// DROPDOWN INFO READ ENDED





// FIND TIME FROM API STARTED

async function findTime(el){
    try{
        let response = await fetch(baseURL+`?region=${el}`)
        let result = await response.json()
        console.log(result);
        tong.textContent = result.times.tong_saharlik
        quyosh.textContent = result.times.quyosh
        peshin.textContent = result.times.peshin
        asr.textContent = result.times.asr
        shom.textContent = result.times.shom_iftor
        xufton.textContent = result.times.hufton
    }catch(err){
        console.log(err);
    }
}


// FIND TIME FROM API ENDED





// YEAR,MONTH,DAY,HOUR,MINUTE,SECOND STARTED

function showTime(){
let now = new Date()

let monthArray = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktyabr",
    "noyabr",
    "dekabr"
]

var sana = now.getDate() < 10 ? + "0" + now.getDate() : now.getDate()
var oy = now.getMonth()+1 < 10 ? + "0" + now.getMonth() : now.getMonth()
var yil = now.getFullYear()
var soat = now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
var daqiqa = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
var soniya = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()

year.textContent = sana + "-" + `${monthArray[oy]}` + " " +  yil + "-" + "yil"
hour.textContent = soat + " : " + daqiqa + " : " +  soniya
}



setInterval(()=>{
    showTime()
},1000)

// YEAR,MONTH,DAY,HOUR,MINUTE,SECOND ENDED