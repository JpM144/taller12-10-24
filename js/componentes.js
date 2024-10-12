class titleverdeUfpso extends HTMLElement {
    constructor() {
        super();

    }

    //este metodo activa el componente
    connectedCallback() {
        this.innerHTML = "<h1> Bienvenidos al nuevo componente</h1>";
        this.style.color = "green";
        this.style.fontFamily = "arial";
        this.style.fontSize = "20"
    }

}

window.customElements.define("titleverde-ufpso",titleverdeUfpso)

class iralcarritoEcomerce extends HTMLElement{
    constructor(){
        super();

    }

    connectedCallback(){
        this.innerHTML = "<a> Ir al carrito </a>";
        this.style.color = "blue";
    }
}
window.customElements.define("iralcarrito-ecomerce",iralcarritoEcomerce)