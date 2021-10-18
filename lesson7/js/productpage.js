Vue.component('cart',{
    props: [ 'delete_product'],
   	data () {
		return {
		
        }
	},
	computed: {
        cart_is_empty () {
          if (this.$root.cart.length < 1) {
            return true
          } else { return false }
        },
        positions_in_cart () {
            return this.$root.cart.length
        },
        sumCart () {
            let result = 0;
            for(let el of this.$root.cart){
                result += +el.price * +el.quantity
            }
            return result
        },
    },
	template:`<div> 
				<h4 v-show="cart_is_empty">Cart is empty now</h4>
				<div class="myCart" v-show="!cart_is_empty">
                    <cartitem v-for="product of this.$root.cart" :key="product.id" :product='product' class="cart-item" ></cartitem>
                    <div class="myCartSum" v-if="!$parent.cartIsEmpty">Стоимость всех товаров: {{sumCart}}$</div>
                </div>	
              </div>  
             `
})

Vue.component('productsList',{
	props: ['products', 'add_product'],
   	data () {
		return {
		
        }
	},
	template:`<main class='main-conteiner conteiner'> 
				<div class='main-conteiner-context'>
				    <a class='main-item block1' href="#">
					<img  class='itemImg shaddow' src="img/imgBlock1.png" alt="fashion man" />
					<div class="block-title">
						<div class="main-conteiner-block-title">
							HOT DEAL <br/><span class="bigRed">FOR WOMEN</span>
						</div>
					</div>	
				</a>
				<a class='main-item block2' href="#">
					<img  class='itemImg shaddow' src="img/imgBlock2.png" alt="fashion man" />
					<div class="block-title">
						<div class="main-conteiner-block-title">
							HOT DEAL <br/><span class="bigRed">FOR MEN</span>
						</div>
					</div>	
				</a>
				<a class='main-item block3' href="#">
					<img  class='itemImg shaddow' src="img/imgBlock3.png" alt="fashion man" />
					<div class="block-title">
						<div class="main-conteiner-block-title">
							NEW ARRIVALS<br/><span class="bigRed">FOR KIDS</span>
						</div>
					</div>	
				</a>
				<a class='main-item block4' href="#">
					<img  class='itemImg shaddow' src="img/imgBlock4.png" alt="fashion man" />
					<div class="block-title">
						<div class="main-conteiner-block-title">
							LUXIROUS & TRENDY<br/><span class="bigRed">ACCESORIES</span>
						</div>
					</div>	
				</a>
				<div class='block5'>
					<div class='main-conteiner-block5-title'>
						<p>Fetured Items</p>
					</div>
					<div class='main-conteiner-block5-text'>
						<p>Shop for items based on what we featured in this week</p>
					</div>
				</div>	
                    <productsitem v-for="product of products" :key="product.id" :product='product' class="products-item" :add_product='add_product'></productsitem> 
                </div>
              </main>  
             `
})

Vue.component('productpage',{
	  props: [ 'hide_search_results', 'products', 'add_product'],
   	data () {
		return {
		
        }
	},
	template:`<div> 
								<searchResultList :products="products" :add_product='add_product' :hide_search_results='hide_search_results'></searchResultList>
								<section class="bottom-conteiner">
									<div class="bottom-conteiner-services ">
										<div class='bottom-services conteiner'>
											<div class="bottom-services-item">
												<div class='bottom-services-item-block center'>
													<img src="img/iconDelivery.svg" alt="delivery icon" />
													<div class="bottom-services-item-block-title">
														<p>Free Delivery</p>
													</div>
													<div class="bottom-services-item-block-text">
														<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
													</div>
												</div>	
											</div>
											<div class="bottom-services-item">
												<div class='bottom-services-item-block center'>
													<img src="img/iconSale.svg" alt="sale icon" />
													<div class="bottom-services-item-block-title">
														<p>Sales & discounts</p>
													</div>
													<div class="bottom-services-item-block-text">
														<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
													</div>
												</div>	
											</div>
											<div class="bottom-services-item">
												<div class='bottom-services-item-block center'>
													<img src="img/iconQuality.svg" alt="sale icon" />
													<div class="bottom-services-item-block-title">
														<p>Quality assurance</p>
													</div>
													<div class="bottom-services-item-block-text">
														<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
									<div class="bottom-conteiner-subscribe-main">
										<div class="bottom-conteiner-subscribe-main-shaddow">
											<div class="bottom-conteiner-subscribe conteiner">
												<div class="bottom-conteiner-subscribe-item center">
													<img class="bottom-conteiner-subscribe-img" src="img/imgSubscribe.png" alt="subscribe image"/>
													<div class="bottom-conteiner-subscribe-text">
														<p class="bottom-conteiner-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
													</div>	
												</div>
												<div class="bottom-conteiner-subscribe-item center">
													<div class="bottom-conteiner-subscribe-link-text">
														<p class="bottom-conteiner-link-text"><span class="bigLettertext"><b>SUBSCRIBE</b></span><br/> FOR OUR NEWLETTER AND PROMOTION</p>
														<form class="subscribe-form" action="#">
															<input class='bottom-conteiner-link-inputarea' type="email" placeholder="Enter Your Email" />
															<input type='submit' class="bottom-conteiner-link_button" value="Subscribe"/>
														</form>	
													</div>	
												</div>
											</div>
										</div>
									</div>
								</section>	
              </div>  
             `
})


Vue.component('searchResultList',{
	props: ['hide_search_results', 'products', 'add_product'],
   	data () {
		return {
		
        }
	},
	template:`<main class='main-conteiner conteiner'> 
								<div class='main-conteiner-context'  style="margin: 0">
								    <a style="display: none" class='main-item block1' href="#">
										</a>
										<a style="display: none" class='main-item block2' href="#">
											
										</a>
										<a style="display: none" class='main-item block3' href="#">
											
										</a>
										<a style="display: none" class='main-item block4' href="#">
											
										</a>
										<div class='block5' style="height: 55px">
										  <div class='main-conteiner-block5-top'>
										  		<div @click="hide_search_results">Hide search results</div>
										  </div>
											<div class='main-conteiner-block5-title'>
												<p>Search Results</p>
											</div>
											<div class='main-conteiner-block5-text'>
												<p>for your request: "{{this.$root.userRequest}}"</p>
											</div>
										</div>	
                    <productsitem v-for="product of products" :key="product.id" :product='product' class="products-item" :add_product='add_product'></productsitem> 
                </div>
              </main>  
             `
})
