const numEl = 1;
const container = document.querySelector('#subscritors')

interface Observable{
    attach(o: Observer):any;
    detach(o: Observer):any;
    notify(data:any):any;
}
interface Observer{
    id: any;
    update(data:any):any;
}

export class Observador implements Observable{
    suscriptores = [];
    constructor(){
    }
    attach(o: Observer){
        this.suscriptores[o.id] = o;
    }
    detach(o){
        const index = this.suscriptores.indexOf(o);
        console.log(index)
        console.log(o)
        console.log(this.suscriptores)

        this.suscriptores.splice(index, numEl);
        
        container.innerHTML = '';
        for(let i = 0; i < this.suscriptores.length; i++){
            if(typeof this.suscriptores[i] == 'object'){
                container.innerHTML += this.suscriptores[i].html;
            }
        }
        console.log(this.suscriptores)
    }
    notify(data:any){
        this.suscriptores.forEach(el => el.update(data));
    }
    reflesh(data:any){
        this.suscriptores.forEach(el => el.display(data));
    }
    clear(){
        container.innerHTML = '';
        this.suscriptores = [];
    }
    displaySubs(id){
        container.innerHTML += this.suscriptores[id].html
    }
}

export class Suscriptor implements Observer{
    private bitcoin: any;
    private html:string; id:any; coin: any;
    constructor(id, coin){
        this.coin = coin
        this.id = id;
        this.bitcoin = 0;
        this.html = 
        `<div id="suscriptor-${this.id}" class='subscritor font'>
            <div class="subscritor--head flex">
                </img src=''>
                <p>ID:${this.id}</p>
                <input type="button" id="${this.id}" class="button-subs" value="x">
            </div>
                <p class="subscritor--text">
                    One bitcoin in ${this.coin} is:
                </p>
                <p class="subscritor--value flex" id="value-${this.id}">
                    ${this.bitcoin.last} ${this.bitcoin.symbol}
                </p>
        </div>`
    }
    update(data:any){
        if(data[this.coin].last != this.bitcoin.last){
            this.display(data);
        }
    }
    display(data:any){
        this.bitcoin = data[this.coin];
        document.querySelector(`#value-${this.id}`)
        .innerHTML = `${this.bitcoin.last} ${this.bitcoin.symbol}`
    }
}