Vue.component('cartitem',{
    props: ['product'],
	template:`<div>
                <div class="product-bio">
                    <img :src="'img/' + product.img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{product.title}}</p>
                        <p class="product-quantity">Quantity: {{product.quantity}}</p>
                        <p class="product-single-price">$ {{product.price}} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">$ {{product.quantity*product.price}}</p>
                    <button class="del-btn" :key="product.id" @click="$parent.delete_product(product)">&times;</button>
                </div>
              </div>  
             `
})
Vue.component('productitem',{
    props: ['product'],
    template:`<div>
                <div class="image-place">
                    <img :src="'img/' + product.img" alt="Some img" class="product-img">
                </div>
                <div class="info-place">
                    <div class="namePrice">
                        <h3>{{product.title}}</h3>
                        <p>{{product.price}} $</p>
                    </div>
                    <div class="buyBtn">
                        <button class="buy-btn" @click="$parent.add_product(product)">Купить</button>
                    </div>
                </div>
              </div>  
             `
})