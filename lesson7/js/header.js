Vue.component('topheader',{
	props: ['positions_in_cart', 'show_search_results', 'is_visible_cart', 'delete_product', 'changecartvisibility'],
   	data () {
		return {
        }
	},
	 methods: {
        inputSearch(value){
            this.$root.userSearch = value;
        }
    },
	template:`<header>
				<div class="main-header conteiner">
					<div class="header-item header-group1">
						<div class="header-item-icon">
							<a href="index.html">
								<img class="header-item-icon-img" src="img/iconHome.svg" alt="home icon"/>
							</a>
						</div>	
						<div class="header-item-icon" @click="this.$root.clickSearchBtn">
							<img class="header-item-icon-img" src="img/iconSearch.svg" alt="search icon"/>
						</div>
					</div>
					<div class="header-item header-group3 flex-center">
						<form action="#" class="search-form ">
	                        <input  type="text" class="search-field" v-show="this.$root.isVisibleSearchField" v-bind:value="this.$root.userSearch"  
	                        v-on:input="inputSearch($event.target.value)" >
	                    </form>
	                </div>    
					<div class="header-item header-group2">
						<div class="header-item-icon iconCartHeader" >
							<a href="#" @click="changecartvisibility">
								<img class="header-item-icon-img" src="img/iconCart.svg" alt="home icon"/>
								<img class="header-item-icon-img header-item-icon-img-circle" src="img/iconCartCircle.svg" alt="home icon"/>
								<h6 class="header-item-icon-img header-item-icon-img-number">{{positions_in_cart}}</h6>
							</a>
							<cart v-show="is_visible_cart" :delete_product='delete_product' class="cart flex-center">Cart</cart>
						</div>	
						<div class="header-item-icon iconLK">
							<a href="reg.html">
								<img class="header-item-icon-img" src="img/iconUserLK.svg" alt="search icon"/>
							</a>
						</div>
						<div class="header-item-icon">
							<img class="header-item-icon-img header-item-icon-imgMenu" src="img/iconMenu.svg" alt="home icon">
							<div class="popUp-menu">
								<img class="popUp-menu-close-img" src="img/iconCloseMenu.svg" alt="close popUp-menu">
								<p class="popUp-menu-title">MENU</p>
								<a class="popUp-menu-group" href='catalog.html'>MAN</a>
								<a class="popUp-menu-item" href="#">Accessories</a>
								<a class="popUp-menu-item" href="#">Bags</a>
								<a class="popUp-menu-item" href="#">Denim</a>
								<a class="popUp-menu-item" href="#">T-Shirts</a>
								<a class="popUp-menu-group" href='catalog.html'>WOMAN</a>
								<a class="popUp-menu-item"  href="#">Accessories</a>
								<a class="popUp-menu-item"  href="#">Jackets & Coats</a>
								<a class="popUp-menu-item"  href="#">Polos</a>
								<a class="popUp-menu-item"  href="#">T-Shirts</a>
								<a class="popUp-menu-item"  href="#">Shirts</a>
								<a class="popUp-menu-group" href='catalog.html'>KIDS</a>
								<a class="popUp-menu-item"  href="#">Accessories</a>
								<a class="popUp-menu-item"  href="#">Jackets & Coats</a>
								<a class="popUp-menu-item"  href="#">Polos</a>
								<a class="popUp-menu-item"  href="#">T-Shirts</a>
								<a class="popUp-menu-item"  href="#">Shirts</a>
								<a class="popUp-menu-item" href="#">Bags</a>
							</div>
						</div>	
					</div>
				</div>
				
			</header>
             `
})