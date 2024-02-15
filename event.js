let btn1 =document.querySelector("#btn1");
var a=0;
btn1.onclick =()=>{
   alert("button was clicked");
    a++;
    console.log(a);

}
let div =document.querySelector("div");
div.onmouseover =() =>{
    console.log("the mouse is over the div")
}
/*
let btn2 =document.querySelector("#btn2");
btn2.onclick =(e)=>{
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
  

}*/
let btn2 =document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    alert("button was clicked");
    console.log("the button 1");

  })


  btn2.addEventListener("click", ()=>{
    alert("button was clicked");
    console.log("the button 2");
   
  })
  //in case we have to remove the specify handler in future we to store in reference so we can remove it by passing the same reference

  let handler3= ()=>{
    console.log("the button 3");
   
  }

  btn2.addEventListener("click",handler3 );


  btn2.addEventListener("click", ()=>{
    alert("button was clicked");
    console.log("the button 4");
   
  })
 //  btn2.removeEventListener("click",handler3); if we write or anywhere work same 
  //remove the handler 3
let btn3 = document.querySelector("#btn3");
let body =document.querySelector("body");
let currmode= "light";
btn3.addEventListener("click" ,()=>{
    if(currmode==="light"){
        currmode="dark";
       // document.body.style.backgroundColor="black";
       body.classList.add("dark");
       body.classList.remove("light");

        console.log(currmode);
    }
    else{
        currmode="light";
       // document.body.style.backgroundColor="white";
       body.classList.add("light");
       body.classList.remove("dark");
        console.log(currmode);
    }
})
  
