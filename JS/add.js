const form = document.querySelector("form");
const code = document.querySelector(".code");
const name = document.querySelector(".title");
const count = document.querySelector(".count");
const add = document.querySelector(".add");
const order = document.querySelector(".order");
const show = document.querySelector('.list');


add.addEventListener('click', addItem);
order.addEventListener('click', orderAll);
let products = [];
function addItem(){
    let product = {
        code:code.value,
        title:name.value,
        count:count.value
    }
    products.push(product);

}
function orderAll(){
    localStorage.setItem('products',JSON.stringify(products));
    location.reload();
}
let productss = JSON.parse(localStorage.getItem('products'));
//console.log(productss);




show.addEventListener('click',addPoduct);
const table = document.querySelector("table");
//console.log(table);
function addPoduct(){

    for (let product of productss){
        const tr = document.createElement('tr');
        table.appendChild(tr);
        //console.log(tr);
        for(let detail in product){
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = product[detail];
            console.log(detail+":"+product[detail]);

        }

    }
    return 0;
}




for( let product in products){
    table.appendChild(tr);
        tr.appendChild(th);



}
form.onsubmit = function (e){
    e.preventDefault();
}