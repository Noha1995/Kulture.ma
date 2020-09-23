import React from 'react'
import {Text,View ,StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Headerr from '../components/common/Header'





function News({ navigation, route }){
    return(
        <View  style={styles.container} >
            <StatusBar style="light" />
            <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'img'} leftIcon={'nav-icon'} />
             <Text> News </Text>
        </View>
       
    )
}
export default News

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor:'wheat'
    }
})