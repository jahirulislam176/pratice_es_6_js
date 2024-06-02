const person={
    firstname:'jahid',
    lastname:'Hossain'
}
let id=Symbol('id')

person[id]=1232

console.log(person[id])