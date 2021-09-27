const API = 'https://raw.githubusercontent.com/Kuldyaev/homeWork/master';

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
                        <button class="buy-btn" data-id=${this.id}>Купить</button>
                    </div>
                </div>
            </div>`
    }
}

class CartItem extends ProductItem{
    constructor(el){
        super(el);
        this.quantity = el.quantity;
    }
    renderCartItem(){
        return `<div class="cart-item" data-id="${this.id}">
            <div class="product-bio">
            <img src="img/${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.title}</p>
            <p class="product-quantity">Quantity: ${this.quantity}</p>
        <p class="product-single-price">$${this.price} each</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">$${this.quantity*this.price}</p>
            <button class="del-btn" data-id="${this.id_product}">&times;</button>
        </div>
        </div>`
    }
}


class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.cart = [];
        this.goods = [];
        this._fetchProducts();
        
    }
    _fetchProducts(){
        return fetch(`${API}/goods.json`)
            .then(result => result.json())
                .then(data =>{
                    this.goods=data.goods;
                    this.cart=data.cart;
                    this.render();
                    this.renderCart();
                    this.cartInit();
                })
            .catch(error => {console.log(error)})
    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        };
        this._addClicker();
    }
    getSum(){
        let sumOfPrices = 0;
        this.goods.forEach(item => {sumOfPrices += item.price});
    }
    _addClicker(){
        let buyBtns = document.querySelectorAll('.buy-btn');
        for (let y=0; y<buyBtns.length; y++){
            buyBtns[y].addEventListener('click', (e) =>{
                this.addItem(e.target.dataset.id);
            })
        }
    }
    renderCart(){
        if (this.cart.length < 1){
            let emptyCart = document.createElement('div');
            emptyCart.className = 'emptyCart';
            emptyCart.innerHTML = "Корзина пуста";
            document.querySelector('.cart').appendChild(emptyCart);
        }else{
            let myCart = document.createElement('div');
            myCart.className = 'myCart';

            this.cart.forEach(item =>{
                const cartItem = new CartItem(item);
                myCart.insertAdjacentHTML("beforeend",cartItem.renderCartItem());
                document.querySelector('.cart').appendChild(myCart);
            });
            document.querySelector(this.container).addEventListener('click', e => {
                if(e.target.classList.contains('del-btn')){
                   this.removeProduct(e.target);
                   console.log(e.target);
                }
           })
        }
    }
    cartInit(){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart').classList.toggle('invisible');
        });
    }
    addItem(id){
        let productId = +id;
        let find = this.cart.find(product => product.id === productId);
        if(find){
            find.quantity++;
        } else {
           let product = this.goods.find(product => product.id === productId);
            product.quantity = 1;
            this.cart.push(product);
        }
    }
}

/*
class Cart{
    constructor(container='.cart'){
        this.container = container;
        this.goodsInCart = [];
        this._init();
    }
    addItem(id){
        let productId = +id;
        let find = this.goodsInCart.find(product => product.id === productId);
        if(find){
            console.log("Есть уже в корзине");
        } else {
            console.log(this.goods);
    //       let product = this.goods.find(product => product.id === productId);
    //        product.quantity = 1;
    //        this.goodsInCart.push(product);
        }
        console.log(this.goodsInCart);
    }
    removeItem(){

    }
    changeItem(){

    }
    
    _init(){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
        this.renderCart();
/*      document.querySelector(this.container).addEventListener('click', e => {
           if(e.target.classList.contains('del-btn')){
               this.removeProduct(e.target);
           }
        })
   } 
}
/*        

*/

let list = new ProductList();

