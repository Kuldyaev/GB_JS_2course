const API = 'https://raw.githubusercontent.com/Kuldyaev/homeWork/master';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        oldUserSearch: '',
        searchResult: [],
        visible: false,
        searchResultVisible: false,
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
        },
    },
    methods: {
        filterGoods(){
            this.searchResult =  this.products.filter((el) =>
                    el.title.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1
                );
            this.oldUserSearch = this.userSearch;
            this.userSearch = '';
            this.searchResultVisible = true;
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {console.log(error)})
        },
        findItemInCart (id) {
            return this.cart.find(item => item.id === id);
        },
        findItemInProducts (id) {
            return this.products.find(item => item.id === id);
        },
        createNewCartItem(objDonor) {
            let newCartItem = {};
            Vue.set(newCartItem, 'id', objDonor.id);
            Vue.set(newCartItem, 'title', objDonor.title);
            Vue.set(newCartItem, 'price', objDonor.price);
            Vue.set(newCartItem, 'img', objDonor.img);
            Vue.set(newCartItem, 'quantity', 1);
            return newCartItem
        }, 
        addProduct(product){
            if(this.findItemInCart(product.id)){
                let item = this.findItemInCart(product.id);
                item.quantity++ ;
            }else{
                this.cart.push(this.createNewCartItem(product));
            }    
        },
        deleteProduct(cartItem){
            let item = this.findItemInCart(cartItem.id);
            if(item){
                if(+item.quantity === 1){
                   this.cart.splice(this.cart.indexOf(item), 1)
                }else{
                   item.quantity-- ;  
                }
            };
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

