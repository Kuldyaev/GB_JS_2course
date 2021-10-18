const API = 'https://raw.githubusercontent.com/Kuldyaev/homeWork/master'

const app = new Vue({
    el: '#app',
    name: "app",
    data: {
        userSearch: '',
        userRequest:'',
        oldUserSearch: '',
        searchResult: [],
        products: [],
        cart: [],
        urlFile: '/products.json',
        isVisibleIndexPage: true,
        isVisibleCart: false,
        isVisibleProductPage:false,
        isVisibleSearchField: false,
        isVisibleNotFoundPage:false,
        isVisibleCartPage: false,
    },
    computed: {
        products_list_is_empty () {
          if (this.products.length < 1) {
            return true
          } else { return false }
        },
        positions_in_cart () {
            return this.cart.length
        }

    },
    methods: {
        showSearchResults(){
            this.searchResult =  this.products.filter((el) =>
                    el.title.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1
                );
            this.isVisibleProductPage = true;
            this.isVisibleIndexPage = false;
            this.userRequest =  this.userSearch;
            this.userSearch = '';
        },
        hideSearchResults(){
            console.log(this.userSearch)
            this.isVisibleProductPage = false;
            this.isVisibleIndexPage = true;
            this.userRequest =  ''
            this.userSearch = '';
        },
        changecartvisibility(){
            this.isVisibleCart=!this.isVisibleCart
        },
        clickSearchBtn(){
            if(this.userSearch==''){
                this.isVisibleSearchField=!this.isVisibleSearchField
            } else {
                this.showSearchResults();
            }
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {console.log(error)})
        },
        findItemInCart (id) {
            return this.cart.find(item => item.id === id);
        },
        saveNewValueOfCartInLocalStorage(){
          window.localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        recieveValueOfCartInLocalStorage(){
           return JSON.parse(window.localStorage.getItem('cart'))
        },
        createNewCartItem(objDonor) {
            let newCartItem = {};
            Vue.set(newCartItem, 'id', objDonor.id);
            Vue.set(newCartItem, 'title', objDonor.title);
            Vue.set(newCartItem, 'price', objDonor.price);
            Vue.set(newCartItem, 'text', objDonor.text);
            Vue.set(newCartItem, 'quantity', 1);
            return newCartItem
        }, 
        add_product(product){
            if(this.findItemInCart(product.id)){
                let item = this.findItemInCart(product.id);
                item.quantity++ ;
            }else{
                this.cart.push(this.createNewCartItem(product));
            };
            this.saveNewValueOfCartInLocalStorage();    
        },
        deleteProduct(cartItem){
            let item = this.findItemInCart(cartItem.id);
            if(item){
                if(+item.quantity === 1){
                   this.cart.splice(this.cart.indexOf(item), 1);
                 }else{
                   item.quantity-- ;  
                }
            };
            this.saveNewValueOfCartInLocalStorage();
        },

    },
    mounted(){
        this.getJson(`${API + this.urlFile}`)
           .then(data => {
               for(let el of data.goods){
                  this.products.push(el);
               };
           });
       this.cart =  this.recieveValueOfCartInLocalStorage();
    }
})
