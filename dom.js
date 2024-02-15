let h2= document.querySelector("h2")
console.dir(h2)
console.dir(h2.innerText)
h2.innerText = h2.innerText +" " +"coding is fun";
console.dir(h2.innerText)
let myclass= document.querySelectorAll(".myclass");
console.log(myclass)
console.dir(myclass[0].innerText)
console.dir(myclass[1].innerText)
console.dir(myclass[2].innerText)
for( let i=0; i<myclass.length;i++){
    myclass[i].innerText="new div "+ i
}

let divval= document.querySelector("div");
console.log(divval)

console.dir(divval);
let id= divval.getAttribute("id");
console.log(id);
let name= divval.getAttribute("name");
console.log(name);
console.log(divval.style)
divval.style.color="red";
divval.style.backgroundColor="yellow";
//divval.style.fontSize="35px"
//divval.innerText="hii js"

/*let pa = document.querySelector("p");
pa.setAttribute("class", "newclass"); // Set the class attribute

let classVal = pa.getAttribute("class"); // Get the class attribute value
console.log(classVal); // Log the class attribute value*/



//insert element
let btn = document.createElement("button");
btn.innerText="click me"
//let div= document.querySelector("div")
//div.append(btn);
//div.prepend(btn);
//div.before(btn);
let para= document.querySelector("p")
para.after(btn);
//delete element
//para.remove();

let pas = document.querySelector("p");
//pas.setAttribute("class", "newcontent"); // Set the class attribute
pas.classList.add("newcontent")
let p = pas.getAttribute("class"); // Get the class attribute value
console.log(classVal); // Log the class attribute value

