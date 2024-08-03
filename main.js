var menu = document.getElementById("menu") 
// img
var img = document.getElementById("img") 
// prices
var price = document.getElementById("price") 
// on h1
var space = document.getElementById("space") 
var color = document.getElementById("color") 
// spaces from 126gb => 1t
var x_small = document.getElementById("x-small") 
var small = document.getElementById("small") 
var x_big = document.getElementById("x-big") 
var big = document.getElementById("big") 
// colors
var Black_Titanium = document.getElementById("Black_Titanium")
var White_Titanium = document.getElementById("White_Titanium")
var Natural_Titanium = document.getElementById("Natural_Titanium")
var Blue_Titanium = document.getElementById("Blue_Titanium")

// codes
menu.addEventListener("click",()=>{
    document.querySelector("main").classList.add("others")
    menu.addEventListener("dblclick",()=>{
    document.querySelector("main").classList.remove("others")
    })
})

x_small.addEventListener("click",()=>{
    space.innerHTML = "126Gb"
    price.innerHTML = "price:999$"
})
small.addEventListener("click",()=>{
    space.innerHTML = "256Gb"
    price.innerHTML = "price:1100$"
})
x_big.addEventListener("click",()=>{
    space.innerHTML = "512GB"
    price.innerHTML = "price:1300$"
})
big.addEventListener("click",()=>{
    space.innerHTML = "1t"
    price.innerHTML = "price:1500$"
})

Black_Titanium.addEventListener("click",()=>{img.src ='./iphone(black).png'})
White_Titanium.addEventListener("click",()=>{img.src ='./iphone(white).png';})
Natural_Titanium.addEventListener("click",()=>{img.src ='./iphone(natural).png'})
Blue_Titanium.addEventListener("click",()=>{img.src ='./iphone(blue).png'})