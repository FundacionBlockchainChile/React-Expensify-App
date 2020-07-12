// OBJECT DESCTRUCTRING *************************************

// console.log('destructuring..')

// const person = {
//     // name: 'pies',
//     age: 7,
//     location: {
//         city: 'Santiago',
//         temp: 15
//     }
// }

// const { name:firstName = 'Anonymous',  age} = person

// console.log(`${firstName} is ${age} old...`);

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`Ìt´s ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// ARRAY DESTRUCTURING *****************************************

const address = ['1299 s Junior Street', 'Philadelphia', , '19147'];
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [coffe, small, medium, tall] = item
console.log(`${coffe} cost ${medium}`)



