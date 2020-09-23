import React from 'react'
import {Text,View ,StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Headerr from '../components/common/Header'




function Profile({navigation}){
    return(
        <View style={styles.container}>
              <StatusBar style="light" />
            <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'img'} leftIcon={'nav-icon'} />
             <Text>Profile </Text>
        </View>
       
    )
}
export default Profile

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor:'wheat'
    }
})