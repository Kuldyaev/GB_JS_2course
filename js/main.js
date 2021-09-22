class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: '1.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: "2.jpg" },
            {id: 3, title: 'Keyboard', price: 200, img: "3.jpg"},
            {id: 4, title: 'Gamepad', price: 50, img: "4.jpg"},
        ];
    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
    getSum(){
        let sumOfPrices = 0;
        this.goods.forEach(item => {sumOfPrices += item.price});
        alert(sumOfPrices);
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
           return `<div class="product-item">
                <div class="image-place">
                    <img class="product-img" src="img/${this.img}" alt="product icon" id=${this.img}/>
                </div>
                <div class="info-place">
                    <div class="namePrice">
                        <h3>${this.title}</h3>
                        <p>${this.price} руб.</p>
                    </div>
                    <div class="buyBtn">
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.getSum();

class Cart {
    addItem(){

    }
    removeItem(){

    }
    changeItem(){

    }
    render(){

    }
}

class CartItem{
    render(){

    }
}


