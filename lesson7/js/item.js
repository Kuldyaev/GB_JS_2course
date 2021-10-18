Vue.component('productsitem',{
    props: ['product', 'add_product'],
    template:`<a :class="'main-item shadowing block'+product.id" href="#">
                <img class='itemImg' :src="'img/imgBlock' + product.id + '.png'" alt="fashion man" />
                <div class="btnConteiner">
                    <div class='addToCartBtn '> 
                        <img class="main-conteiner-block-button-img" src="img/iconWhiteCart.svg" alt="white cart" />
                        <h6 class="main-conteiner-block-button-text" @click="add_product(product)">Add to Cart</h6>
                    </div>
                </div>
                <div class="info-block-context">
                    <h3 class="info-block-context-title">{{product.title}}</h3>
                    <h6 class="info-block-context-text">{{product.text}}</h6>
                    <h5 class="info-block-context-price">$ {{product.price}}</h5>
                </div>
              </a>
             `
})

Vue.component('cartitem',{
    props: ['product'],
    template:`<div>
                <div class="product-bio">
                    <img :src="'img/imgBlock' + product.id + '.png'" alt="Some image">
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