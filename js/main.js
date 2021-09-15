const products = [
    {id: 1, title: 'Notebook', price: 2000, img: '1.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: "2.jpg" },
    {id: 3, title: 'Keyboard', price: 200, img: "3.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: "4.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <div class="image-place">
                    <img class="product-img" src="img/${img}" alt="product icon" id=${img}/>
                </div>
                <div class="info-place">
                    <div class="namePrice">
                        <h3>${title}</h3>
                        <p>${price} руб.</p>
                    </div>
                    <div class="buyBtn">
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => {
                let newItem = document.createElement('div');
                newItem.className = "product-item"  ;
                newItem.innerHTML = renderProduct(item.title,item.price,item.img);
                document.querySelector('.products').appendChild(newItem);
    });
};

renderPage(products);