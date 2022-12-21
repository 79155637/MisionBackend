//Generates numbers between 500 y el 1000
const RANDOM_TIME = Math.round(Math.random() * 500) + 500
let startTime = new Date()

// let endTime: any
// Here you let any type of data in this variable like in Javascript (soft Type), because you are not given a value in the definition, but if you give a value in turns in strongly typed 
let endTime

setTimeout(() => {
  endTime = 0
  console.log(endTime)
  endTime = new Date() // Date of Greenwich
  console.log(endTime)
  endTime = "HOLI"
  console.log(endTime)


}, RANDOM_TIME)
