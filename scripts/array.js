// let name1 = 'hara har'
// let address = 'Balaju'
// let age = 151
// console.log(`My name is ${name1} and I live in ${address} and my age is ${age}`)

// const student = [
//     //[this is array]
//     //{this is object}
//     {
//         name: "Kalu Pandey",
//         address :"Gorkha"
//     },

//     {
//         name: "Prithvi Narayan Shah",
//         address :"Gorkha"
//     }
// ]

// student.map(map =>{
//     console.log(map)
// })

// console.log(student)

// const numbers = [1,2,3,4,5]
// const output = numbers.map(num =>{
//     console.log(num)
// })

// const stu = [
//     {name : 'Ram',
//         address:{city: "Kathmandu"}},

//     {
//         name : 'Shyam',
//         address:{
//             city: "Pokhara"
//         }
//     }
// ]

// stu.map(student =>{
//     console.log(student.name),
//     console.log(student.address.city)
// })

const database = {
  name: "Prachanda Rana",
  age: 23,
  isMarried: false,
  address: {
    city: "Kathmandu",
    state: 3,
    addresses: {
      temp: "Kalimati",
      permanent: "Dhading",
    },
    favouriteSong: ["Satranga", "Chak de india"],
  },
};
console.clear();
console.log(database.address.favouriteSong[0]);
