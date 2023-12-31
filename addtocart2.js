const product = [
    {
        id: 0,  
        image: 'Images/Men/hoodie/black/black-hoodie-1.jpg',
        title: 'Hoodie',
        price: 5000,
    },
    {
        id: 1,
        image: "Images/Men/jacket/barley/barley-jacket-1.jpg",
        title: 'Jacket',
        price: 7500,
    },
    {
        id: 2,
        image: 'Images/Men/pants/khaki/khaki-pants-1.jpg',
        title: 'Pants',
        price: 2500,
    },
    {
        id: 3,
        image: 'Images/Men/polo-shirt/white/white-polo-1.jpg',
        title: 'Pants',
        price: 1800,
    },
    {
        id: 4,
        image: 'Images/Men/t-shirt/orange/orange-tshirt-1.jpg',
        title: 'Pants',
        price: 1200,
    },
    {
        id: 5,
        image: 'Images/Men/hoodie/redscarlet/redscarlet-hoodie-1.jpg',
        title: 'Pants',
        price: 4500,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom1'>
        <p>${title}</p>
        <h2>P ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`    
    )
}).join('')   

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    saveCartToLocalStorage();
    displaycart();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart data from localStorage
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    displaycart();
}

function deElement(a) {
    cart.splice(a, 1);
    saveCartToLocalStorage();
    displaycart();
}

function displaycart(a){
    let j = 0, total=0; //total
    document.getElementById("count").innerHTML=cart.length; // cart counts
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "P "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price; //total
            document.getElementById("total").innerHTML = "P "+total+".00";
            return(
                `<div clas='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='deElement("+(j++) +")'></i></div>"
            );
        }).join('')
    }
}

