import React ,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/index'
import { PersistGate } from 'redux-persist/integration/react';
import Store from './src/redux/store/index'
import { persistStore } from 'redux-persist'
import { Provider} from 'react-redux'
// import * as firebase from 'firebase';




export default function App() {
  let persistor = persistStore(Store)
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBmBQLZmAwXCtTa0mPOv0KP5o1kudK1qjo",
  //   authDomain: "marocculture-e219e.firebaseapp.com",
  //   databaseURL: "https://marocculture-e219e.firebaseio.com",
  //   projectId: "marocculture-e219e",
  //   storageBucket: "marocculture-e219e.appspot.com",
  //   messagingSenderId: "340309973794",
  //   appId: "1:340309973794:web:12770c24746b36eb0b637b",
  //   measurementId: "G-SFJPQP4NDP"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
         <Provider store={Store}>
          <PersistGate persistor={persistor}>
          <Navigation />
          </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
  },
});
