//make the index of "banana"in an arr
function replaceBanana(fruits : string[]){
    let index = fruits.indexOf("Banana")
    
    fruits[index] = "mango";
}

let fruits :string[] = ["Apple","chikoo","Orange","Banana"];
  //console.log(fruits)
  replaceBanana(fruits);
  console.log(fruits);
