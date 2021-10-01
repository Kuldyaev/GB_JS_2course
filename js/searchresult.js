Vue.component('searchresult',{
	props: ['add_product'],
	template:`<div> 
				<div class="searchResultsheader">
                    <h4>По вашему запросу <<{{$parent.oldUserSearch}}>> найдено {{$parent.searchResult.length}} товаров</h4>
                    <button @click="$parent.searchResultVisible=false">скрыть результаты поиска</button>
                </div>
                <div class="products searchResult">
                    <productitem v-for="product of $parent.searchResult" :key="product.id" :product='product' class="product-item" ></productitem>
                </div>
              </div>  
             `
})

Vue.component('servernotfound',{
	template:`<div> 
			    <h4>Ошибка: нет связи с сервером </h4>
                <p>Попробуйте обновить страницу</p>
               </div>  
             `
})