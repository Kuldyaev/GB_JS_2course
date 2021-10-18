Vue.component('cart',{
    props: ['cart','delete_product'],
	data () {
		return {
		
        }
	},
	template:`<div> 
				<div class="cart flex-center">
                    <div class="myCart" v-if="!$parent.cartIsEmpty">
                        <cartitem v-for="product of $parent.cart" :key="product.id" :product='product' class="cart-item" ></cartitem>
                    </div>
                    <div class="myCartSum" v-if="!$parent.cartIsEmpty">Стоимость всех товаров: {{$parent.sumCart}}$</div>
                    <div class="emptyCart" v-if="$parent.cartIsEmpty">Корзина пока пуста</div>
                </div>
              </div>  
             `
})