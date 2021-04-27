import {Observador, Suscriptor} from './observe';
import {bitcoins, URL_Bitcoin, callApi} from './fetch_bitcoin'

interface Selector extends HTMLElement{
    value?: any;
}

let id = 0; 
let coinSelector:Selector = document.querySelector('#selectCoin')
coinSelector = coinSelector.value;
console.log(coinSelector)

let cacheExample = {
    coin:'',
    value:0
}
let coins = new Observador();

document.querySelector('#addSubs')
    .addEventListener('click', ()=>{
            const newSubs = new Suscriptor(`${id}`, coinSelector)
            coins.attach(newSubs);
            coins.displaySubs(id);
            coins.notify(bitcoins);
            id++;
            buttonUnsubscribe();

    })
document.querySelector('#clearSubs')
    .addEventListener('click', ()=> {
        coins.clear()
        id = 0;
    });

function buttonUnsubscribe(){
    const buttonsUnsubs = document.querySelectorAll('.button-subs')
    buttonsUnsubs.forEach((el:any) => {
        el.addEventListener('click', () => {
            console.log(`ID:${el.id}`)
            const element = document.querySelector(`#suscriptor-${el.id}`)
            console.log(element)
            coins.detach(coins.suscriptores[el.id])
            coins.reflesh(bitcoins);
            buttonUnsubscribe();
        })
    })
}

requestBitcoin()
//consulta el valor del bitcoins cada x segundos
 function requestBitcoin(timeRequest = 1000){
    coinSelector = document.getElementById('selectCoin')  //update value
    coinSelector = coinSelector.value
    callApi(URL_Bitcoin);
    coins.notify(bitcoins);
    displayExampler(coinSelector);

    setTimeout(()=> requestBitcoin(), timeRequest)
}

function displayExampler(coinSelector){
    if(cacheExample.coin != coinSelector){
        cacheExample.coin = coinSelector
        document.querySelector('#example--title')
            .innerHTML = `Bitcoin to ${coinSelector}`;
    }
    if(cacheExample.value != bitcoins[coinSelector].last){
        cacheExample.value = bitcoins[coinSelector].last
        document.querySelector('#example--value')
            .innerHTML = `${bitcoins[coinSelector].last} ${bitcoins[coinSelector].symbol}`;
    }
}