import { createStore, applyMiddleware} from 'redux';
import {persistCombineReducers } from 'redux-persist'

//envoyer des fonctions par dispatch
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'


const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
  //persist reducers
  const persistingReducer =persistCombineReducers(rootPersistConfig, rootReducer)
  const initialState = {};
  //create store
  const Store = createStore(persistingReducer,initialState, applyMiddleware(thunk)) 
  export default Store 