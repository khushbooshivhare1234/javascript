let arr =[1,"khushboo",2.444] //hetraogeneous array
console.log(arr)
let arr2 =[1,2,3,4,5];
console.log(arr2)
console.log(typeof (arr))
console.log(arr.length)
console.log(arr[100])
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    
}
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
    
}
for(let i of arr2){
    console.log(i);
    
}
for(let i of arr){
    console.log(i);
    
}
var sum=0,avg,count=0;
for(let i=0;i<arr2.length;i++){
    sum+=arr2[i];
    count++;
    
}
avg=sum/count;
console.log(avg)
for(let num of arr2){
    sum+= num
}
console.log(sum)
 let arr3 =[100,200,300,400,500];
 let arr4 =[];
for(let i=0;i<5;i++){
    arr4[i]=arr3[i]-(arr3[i]*30)/100;
} 
console.log(arr4)
let ind=0
for(let val of arr3){
    let offer=val/10;
   arr3[ind]= `${arr3[ind]-offer}`
   console.log(arr3[ind])
    ind++;
    
}