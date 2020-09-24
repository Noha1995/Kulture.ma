const express = require('express')
const router = express.Router()
const admin = require('firebase-admin');



//connexion a la bdd
var serviceAccount = require("../permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://marocculture-e219e.firebaseio.com"
});
const db = admin.firestore();



  //read all
  router.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('Cinema');
            let response = [];
            await query.get()
            
            .then(querySnapshot => {
            let docs = querySnapshot.docs;
            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    item: doc.data()
                };
                response.push(selectedItem);
            }
            });
            return res.status(200).send(response);
        } catch (error) {
            return res.status(500).send(error);
        }
        })();
    });


//get all events by category 
router.get('/:categorie', async (req, res) => {
    return res.status(200).send('cinema');
    });



module.exports =router;
