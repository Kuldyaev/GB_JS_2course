Vue.component('indexpage',{
	props: ['products_list_is_empty', 'products', 'add_product'],
   	data () {
		return {
		
        }
	},
	template:`<div>
				<section class='top-conteiner'>
					<div class='top-conteiner conteiner'>
						<div class="top-conteiner-block top-conteiner-img-block">
							<img class="top-conteiner-img" src="img/imgTopConteiner.png" alt="fashion man"/>
						</div>
						<div class="top-conteiner-block top-conteiner-text-block">
							<div class="top-conteiner-textblock">
								<div class="top-conteiner-textblock-line"></div>
								<div class="top-conteiner-textblock-context">
									<p class="bigLetters">THE BRAND</p>
									<p>OF LUXERIOUS <span class="redLetter">FASHION</span></p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div v-show="products_list_is_empty"> Загружаем список товаров</div>
				<productsList v-show="!products_list_is_empty" :products="products" :add_product='add_product'></productsList>
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
