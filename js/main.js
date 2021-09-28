const API = 'https://raw.githubusercontent.com/Kuldyaev/homeWork/master';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        searchResult: '',
        visible: false,
        products: [],
        cart: [],
        urlFile: '/goods.json',
    },
    computed: {
        cartIsEmpty () {
          if (this.cart.length < 1) {
            return true
          } else { return false }
        },
        sumCart () {
            let result = 0;
            for(let el of this.cart){
                result += +el.price * +el.quantity
            }
            return result
        }
      },
    methods: {
        filterGoods(){
            this. searchResult = this.userSearch;
            this.userSearch = '';
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {console.log(error)})
        },
        addProduct(product){
            console.log(product.id);
        }
    },
    mounted(){
        this.getJson(`${API + this.urlFile}`)
           .then(data => {
               for(let el of data.goods){
                  this.products.push(el);
               };
               for(let el of data.cart){
                  this.cart.push(el);
               }
           });
    }
})


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
            <button class="del-btn" data-id="${this.id}">&times;</button>
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
//                    this.render();
//                    this.renderCart();
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
   //         document.querySelector('.emptyCart').classList.toggle('invisible');
        }else{
            let myCart = document.querySelector('.myCart');
        //    myCart.classList.toggle('invisible');
        //    document.querySelector('.myCartSum').classList.toggle('invisible');
            this.cart.forEach(item =>{
                const cartItem = new CartItem(item);
                myCart.insertAdjacentHTML("beforeend",cartItem.renderCartItem());
            });
       
            myCart.addEventListener('click', e => {
                if(e.target.classList.contains('del-btn')){
                   this.removeItem(e.target);
                }
           })
        }
        this.checkCartSum();
    }
    cartInit(){
//        document.querySelector('.btn-cart').addEventListener('click', () => {
 //           document.querySelector('.cart').classList.toggle('invisible');
 //       });
    }
    addItem(id){
        let productId = +id;
        let find = this.cart.find(product => product.id === productId);
        if(find){
            find.quantity++;
            this.updateCart(find);
        } else {
            if(this.cart.length < 1){
            //    document.querySelector('.myCart').classList.toggle('invisible');
            //    document.querySelector('.emptyCart').classList.toggle('invisible');
           //    document.querySelector('.myCartSum').classList.toggle('invisible');
                let product = this.goods.find(product => product.id === productId);
                product.quantity = 1;
                this.cart.push(product);
                const cartItem = new CartItem(product);
                const myCart =  document.querySelector('.myCart');
                myCart.insertAdjacentHTML("beforeend",cartItem.renderCartItem());
            }else{
                let product = this.goods.find(product => product.id === productId);
                product.quantity = 1;
                this.cart.push(product);
                const cartItem = new CartItem(product);
                const myCart =  document.querySelector('.myCart');
                myCart.insertAdjacentHTML("beforeend",cartItem.renderCartItem());
            }
        }
        this.checkCartSum();
    }
    removeItem(el){
        let productId = +el.dataset.id;
        let find = this.cart.find(product => +product.id === productId);
        if(find.quantity > 1){
            find.quantity--;
            this.updateCart(find);
        } else {
            this.cart.splice(this.cart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
            if(this.cart.length < 1){
       //         document.querySelector('.emptyCart').classList.toggle('invisible');
        //        document.querySelector('.myCart').classList.toggle('invisible');
       //         document.querySelector('.myCartSum').classList.toggle('invisible');
            }
        }
        this.checkCartSum();
    }
    updateCart(product){
       let block = document.querySelector(`.cart-item[data-id="${product.id}"]`);
       block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`;
       block.querySelector('.product-price').textContent = `$${product.quantity*product.price}`;
    }
    checkCartSum(){
        const sumCartCalculated = document.getElementById('sumCart');
        let result = 0;
        this.cart.forEach(item => {
            result += +item.price * +item.quantity
        })
        sumCartCalculated.innerHTML = result;
    }  
}

let list = new ProductList();

