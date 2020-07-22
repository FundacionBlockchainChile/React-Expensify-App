import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// CRUD EXAMPLES

// CREATE
// database.ref().set({
//   name: "srPiesLigeros",
//   age: 7,
//   stressLevel: 6,
//   job: {
//     title: "supevisorDeGatos",
//     company: "castroFamily",
//   },
// }).then(() => {
//   console.log('Data is saved...');
// }).catch((e) => {
//   console.log('this failed:', e)
// })

// CREATE ARRAYS ************************************************************
// database.ref('notes').push({
//   title: 'Estudiar GraphQL',
//   body: 'Hacer curso de Andrew'
// })
// UPDATE ARRAY
// database.ref("notes/-MCZ_OuYFwGKtvSyyuWn").update({
//   body: "Comenzar curso de Andrew",
// });

// const expenses = [
//   {
//     description: "Expense One",
//     note: "lorem ipsum one",
//     amount: 1000,
//     createdAt: 100,
//   },
//   {
//     description: "Expense Two",
//     note: "lorem ipsum Two",
//     amount: 2000,
//     createdAt: 200,
//   },
//   {
//     description: "Expense Three",
//     note: "lorem ipsum Three",
//     amount: 3000,
//     createdAt: 2000,
//   },
// ];

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
    
//   })

  // database.ref("expenses").on("value", (snapshot) => {
  //   const expenses = []
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })
  //   console.log(expenses)
  // });

// database.ref("expenses").push({
//   description: "Expense Four",
//   note: "lorem ipsum Four",
//   amount: 3000,
//   createdAt: 4000,
// });

// // CHILD REMOVED
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // CHILD CHANGED
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // CHILD ADDED
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })



// READ  ******************************************************************
// database.ref('job/title')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val} is a ....`)
// })



// UPDATE  ***************************************************************
// database.ref().update({
//   'location/countr': null,
//   'location/country': 'Chile'
// });s

// setTimeout(() => {
//   database.ref("age").set(10);
//   setTimeout(() => {
//     database.ref("age").set(11);
//   }, 2000);
// }, 2000);
// database.ref().set('This is my data')

// database.ref('address/street').set('alwayslive')
// database.ref('atributes').set({
//     height: '30 cms',
//     weight: '80kg'
// }).then(() => {
//   console.log('attributes saved...')
// }).catch((e) => {
//   console.log('failed to save: ', e)
// })

// console.log('I made a request to change the data...')

// DELETE  ***************************************************************
// database.ref()
//   .remove()
//   .then(function () {
//     console.log("Remove succeeded.");
//   })
//   .catch(function (error) {
//     console.log("Remove failed: " + error.message);
//   });
