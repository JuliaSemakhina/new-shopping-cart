const shop = document.querySelector("#shop");

let shopItemsData = [{
	id:11,
	name: "Casual Shirt",
	price: 45,
	desc: "Lorem ipsum dolor sit amet consectetur, adipisicing.",
	img: "img/t1.png"
},
{
	id:22,
	name: "Office Shirt",
	price: 100,
	desc: "Lorem ipsum dolor sit amet consectetur elit.",
	img: "img/t2.png"
},
{
	id:33,
	name: "T-Shirt",
	price: 25,
	desc: "Lorem ipsum dolor sit amet consectetur, adipisicing.",
	img: "img/t3.png"
},
{
	id:44,
	name: "Super Shirt",
	price: 59,
	desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
	img: "img/t4.png"
}
];

let basket = []; 

let generateShop =()=>{
	 shopItemsData.forEach((card)=>{
			shop.innerHTML += 
		`<div id="product-id-${card.id}" class="item">
            <img width="220"  height="220" src=${card.img} alt="">
          <div class="details">
            <h3>${card.name}</h3>
            <p>${card.desc}</p> 
	          <div class="price-quantity">
	               <h2>$ ${card.price}</h2>
		          <div class="buttons">
		                <i onclick="decrement(${card.id})" class="bi bi-dash-square-fill"></i>
		                <div id=${card.id} class="quantity">0</div>
		                <i onclick="increment(${card.id})" class="bi bi-plus-square-fill"></i>
		          </div>
	          </div>
          </div>
        </div>`
	});
};

generateShop();

let increment=(id)=>{
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem);

	if(search === undefined){
		basket.push({id: selectedItem,
		item: 1});
	} else {
		search.item += 1;
	}
	
	

	console.log(basket);
}

let decrement=(id)=>{
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem);

	if(search.item === 0){
		return
	} else {
		search.item -= 1;
	}
	console.log(basket);
}