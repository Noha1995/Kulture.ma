const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser =require('body-parser')
const router = require('./routes/events.js')

const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router.route)


// in order to interact with the cloud firestore using the admin SDK locally
// load  permissions file  
// var serviceAccount = require("./permissions.json");

// //use it to initialize your application.
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://marocculture-e219e.firebaseio.com"
// });

admin.initializeApp(functions.config().firebase);

//db  represent our firestore instance
//  const db = admin.firestore();
 



app.get('/api/hello-world', (req, res) => {
  console.log("hola")
  res.status(200).send('hola nouha');
});

// // read item
// app.get('/musique', (req, res) => {
//   (async () => {
//       try {
//           const rep = db.collection('Musique').get();
//           console.log('rep',rep)
//          // let response = item.data();
//           return res.status(200).send(rep);
//       } catch (error) {
//           console.log("errrrrrrrrrrror",error);
//           return res.status(500).send(error);
//       }
//       })();
//   });

//   //read all
//   app.get('/api/read', (req, res) => {
//     (async () => {
//         try {
//             let query = db.collection('Cinema');
//             let response = [];
//             await query.get()
            
//             .then(querySnapshot => {
//             let docs = querySnapshot.docs;
//             console.log("docs",docs)
//             for (let doc of docs) {
//                 const selectedItem = {
//                     id: doc.id,
//                     item: doc.data()
//                 };
//                 response.push(selectedItem);
//             }
//             });
//             return res.status(200).send(response);
//         } catch (error) {
//             console.log(error);
//             return res.status(500).send(error);
//         }
//         })();
//     });


//   // create
// app.post('/api/create', (req, res) => {
//   (async () => {
//       try {
//         await db.collection('Musique').doc('/' + req.body.id + '/')
//             .create({item: req.body.item});
//         return res.status(200).send('ok');
//       } catch (error) {
//         console.log(error);
//         return res.status(500).send(error);
//       }
//     })();
// });



//export modules
// module.exports={
//   db:db,
//   app: functions.https.onRequest(app)

// }



// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as express from 'express';
// import * as bodyParser from "body-parser";

// //const functions = require('firebase-functions');
// //const admin = require('firebase-admin');
// //const express = require('express');
// // const cors = require('cors');


// const app = express();



// //initialize firebase inorder to access its services
// // admin.initializeApp(functions.config().firebase);



// // var serviceAccount = require("./permissions.json");
// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://marocculture-e219e.firebaseio.com"
// // });
// // const db = admin.firestore();


// // app.use(cors({ origin: true }));

// app.get('/hello-world', (req, res) => {
//     return res.status(200).send('Hello Nouha!');
//   });



// // create a categorie
// // app.post('/api/create', (req, res) => {
// //     (async () => {
// //         try {
// //           await db.collection('Theatre').doc('/' + req.body.id + '/')
// //               .create({title: req.body.title , text:req.body.text});
// //           return res.status(200).send();
// //         } catch (error) {
// //           console.log(error);
// //           return res.status(500).send(error);
// //         }
// //       })();
// //   });

//   exports.app = functions.https.onRequest(app);

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
