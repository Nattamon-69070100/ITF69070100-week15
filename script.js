let foods = [
    {
        name: "ข้าวมันไก่",
        detail: "ข้าวมันร้อน ๆ พร้อมไก่นุ่ม",
        price: "ราคา 50-65 บาท",
        image: "food1.jpg"
    },
    {
        name: "กะเพราหมูสับ",
        detail: "กะเพราหมูสับรสจัดจ้าน",
        price: "ราคา 50-60 บาท",
        image: "food2.jpg"
    },
    {
        name: "ข้าวผัดไข่",
        detail: "ข้าวผัดหอม ๆ พร้อมไข่",
        price: "ราคา 50-60 บาท",
        image: "food3.jpg"
    },
    {
        name: "ก๋วยเตี๋ยว",
        detail: "ก๋วยเตี๋ยวน้ำร้อน ๆ พร้อมเครื่อง",
        price: "ราคา 45-60 บาท",
        image: "food4.jpg"
    },
    {
        name: "ข้าวหมูทอด",
        detail: "หมูทอดกรอบพร้อมข้าวสวย",
        price: "ราคา 50-65 บาท",
        image: "food5.jpg"
    }
];

let foodImg = document.getElementById("food-img");
let foodName = document.getElementById("food-name");
let foodDetail = document.getElementById("food-detail");
let foodPrice = document.getElementById("food-price");
let randomBtn = document.getElementById("random-btn");

randomBtn.addEventListener("click", function () {

    let random = Math.floor(Math.random() * foods.length);

    foodImg.src = foods[random].image;
    foodName.textContent = foods[random].name;
    foodDetail.textContent = foods[random].detail;
    foodPrice.textContent = foods[random].price;

});
