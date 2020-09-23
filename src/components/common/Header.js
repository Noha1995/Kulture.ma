import React, { useEffect } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements'

function Headerr(props) {



  return (
    <Header
      leftComponent={
        props.leftIcon == 'nav-icon'
          ?
          <TouchableOpacity onPress={() => props.nav.openDrawer()} style={{ height: 50, width: 50, justifyContent: 'center', paddingRight: 22 }}>
            <Icon
              name='bars'
              type='font-awesome'
              color='white'
              size={30}
              iconStyle={{ paddingLeft: 5 }}
            //onPress={() => props.nav.openDrawer()}
            />
          </TouchableOpacity>
          :

          <TouchableOpacity onPress={() => props.nav.goBack()} style={{ height: 50, width: 50, paddingRight: 22, justifyContent: 'center' }} >
            <Icon
              name='arrow-left'
              type='fontisto'
              // color='#F3AB4A'
              color="white"
              size={15}
              iconStyle={{ paddingLeft: 5 }}
            // onPress={() => props.nav.goBack()}
            />
          </TouchableOpacity>

      }
      centerComponent={

        <Image
          style={styles.logo}
          source={require('../../../assets/KultureUI.png')}
        />
      }
      rightComponent={
        <Icon
          name={props.nameIconRight}
          type='fontisto'
          color='white'
          size={25}
          iconStyle={{ paddingLeft: 5 }}
        />
      }
      containerStyle={{
        backgroundColor: props.centerIcon == 'Cinema' ? 'black' : 'purple',
        justifyContent: 'space-around',
        height: 100,
        // position:props.categorie?'absolute':'relative',
        // top:props.categorie?5:0
      }}
    />
  )
}

export default Headerr

const styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 50,
   // backgroundColor:'green',
    marginTop:15
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }

});