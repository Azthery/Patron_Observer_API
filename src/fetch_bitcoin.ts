//Creamos una carcasa del objecto bitcoin
export let bitcoins:any = {
    "USD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "AUD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "BRL" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "R$"},
    "CAD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "CHF" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "CHF"},
    "CLP" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "CNY" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "¥"},
    "DKK" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "kr"},
    "EUR" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "€"},
    "GBP" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "£"},
    "HKD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "INR" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "₹"},
    "ISK" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "kr"},
    "JPY" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "¥"},
    "KRW" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "₩"},
    "NZD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "PLN" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "zł"},
    "RUB" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "RUB"},
    "SEK" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "kr"},
    "SGD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "$"},
    "THB" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "฿"},
    "TRY" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "₺"},
    "TWD" : {"last" : 0, "buy" : 0, "sell" : 0, "symbol" : "NT$"}
  }

export const URL_Bitcoin = 'https://blockchain.info/ticker';
//consulta el valor del bitcoin
export function callApi(url:string){
    fetch(url)
    .then(response => response.json())
    .then(data => bitcoins = data)
    .catch(err => console.error(err))
}