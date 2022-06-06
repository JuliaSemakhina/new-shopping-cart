const shop = document.querySelector("#shop");


let basket = JSON.parse(localStorage.getItem("CART")) || [];

let generateShop = () => {

    shopItemsData.forEach((card) => {
        let { id, name, price, desc, img } = card;
        let search = basket.find((x) => x.id === id) || [];
        shop.innerHTML +=
            `<div id="product-id-${card.id}" class="item">
            <img width="220"  height="220" src=${img} alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p> 
	          <div class="price-quantity">
	               <h2>$ ${price}</h2>
		          <div class="buttons">
		                <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
		                <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
		                <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>
		          </div>
	          </div>
          </div>
        </div>`
    });
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1
        });
    } else {
        search.item += 1;
    }

    update(id);
    localStorage.setItem("CART", JSON.stringify(basket));
}

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined || search.item === 0) {
        return
    } else {
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((x) => x.item !== 0);

    localStorage.setItem("CART", JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).
    reduce((x, y) => x + y, 0);
};

calculation();