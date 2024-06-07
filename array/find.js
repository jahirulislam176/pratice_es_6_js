const numbers=[12,13,14,15,16,17];

let first=numbers.find(myFunction)

console.log(first)

function myFunction(value,index,array){
    // return value>14;

    return index>=2;
}