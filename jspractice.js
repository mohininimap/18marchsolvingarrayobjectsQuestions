let str="my-city-name-is";
let k=str.split("-")

let o=k.map((item)=>`${item[0].toUpperCase()}${item.slice(1)}`)

console.log(o.join(' '))
//output My Name Is Name Is

// --------------------

let arr=[10,20,30,40,50,60,80,90,40]
let sec=0;
let high=0;

for(i=0;i<arr.length;i++){
   if(arr[i]>high){
    high=arr[i]
   }
   else if(sec<high){
    sec=arr[i]
    
   
}
console.log(high +"=>"+sec)

}


