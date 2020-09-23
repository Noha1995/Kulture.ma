import React, { useState, useRef ,useEffect} from 'react'
import { Text, View, Dimensions, StyleSheet, FlatList, Image ,TouchableOpacity ,ScrollView } from 'react-native'
import { Header, Icon, Card ,Overlay ,ListItem  } from 'react-native-elements'
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import {Villes ,DATA} from '../components/Data/Ville'



const Cinema = ({navigation}) => {
    const [language, setLanguage] = useState(null)
    const [isOvelayVisible,setIsOverlayVisible] = useState(false)
    const [ville,setVille] =useState('Tanger')
    const [indexVille,setIndexVille]=useState(3)
    const dispatch=useDispatch()

 

    // useEffect(()=>{
    //     dispatch({ type: 'CHANGE_Categorie_STATUS',payload:null})
    // },[])
 


    const Item = (item) => {
        let img = item.item.id === '0' ?
            require('../../assets/cinema-1.jpg') :
            item.item.id === '1' ?
                require('../../assets/cinema-2.jpg') :
                item.item.id === '2' ?
                    require('../../assets/festival-4.jpg') :
                    item.item.id === '3' ?
                        require('../../assets/jeune-public-1.jpg') :
                        require('../../assets/cinema-1.jpg')



        return (
            <TouchableOpacity style={{flex:1 ,alignItems:'center',marginBottom:5,marginTop:20}} onPress={()=>navigation.navigate('Details',{img:img ,data:item})}>
                 
                <View>
                    <Image source={img} style={{width:Dimensions.get('screen').width/1.1,height:160 ,borderColor:'white',borderWidth:1.5}} />
                </View>
                <View style={{backgroundColor:'white',width:Dimensions.get('screen').width/1.1 ,borderColor:'white',borderWidth:1.5 ,paddingVertical:10,paddingHorizontal:5}}>
                <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
                        {item.item.title}
                    </Text>

                    <Text numberOfLines={4}>
                        {item.item.text}
                    </Text>
                </View>
               

                    <View style={{position:'absolute',right:20,top:3}}>
                        <Icon
                    name='share-a'
                    type='fontisto'
                    color='#3A3539'
                    size={16}
                    raised
                    reverse
                    reverseColor={'white'}
                    onPress={() => console.log("share event")}
                />
                    </View>
               
            </TouchableOpacity>)
    };

    return (
        <View>

            <LinearGradient
                // Background Linear Gradient
                colors={['red', '#9400D3']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{
                    //flex:1,
                  //  position: 'absolute',
                   // left: 0,
                   // right: 0,
                   // top: 0,
                    paddingBottom:70,
                    height: Dimensions.get('screen').height,
                }}
            >
            {/* header */}
            <View style={{ flexDirection: 'row', marginTop: 25, height: 65, alignItems: 'center', justifyContent: 'space-between' }}>
                <Icon
                    name='nav-icon'
                    type='fontisto'
                    color='#2F292D'
                   //color='white'
                    size={14}
                    iconStyle={{ width: 50, paddingLeft: 25 }}
                    onPress={() =>navigation.openDrawer()}
                />

                {/** select the city **/}
                <TouchableOpacity
                onPress={()=>setIsOverlayVisible(!isOvelayVisible)}
                 style={{flexDirection:'row',alignItems:'center',width:100,height:50,justifyContent:'center'}}>
                    <View style={{paddingRight:5}}>
                    <Text>
                        {ville}
                    </Text>
                    </View>
                    <Icon
                    name='angle-down'
                    type='fontisto'
                    color='#2F292D'
                    //color='white'
                    size={12}
                    iconStyle={{ paddingTop:5,paddingLeft:5}}
                    onPress={() => console.log("search")}
                />

                   
                </TouchableOpacity>

                <Icon
                    name='search'
                    type='fontisto'
                    color='#2F292D'
                    //color='white'
                    size={18}
                    iconStyle={{ width: 50, paddingLeft: 10, height: 50, paddingTop: 15 }}
                    onPress={() => console.log("search")}
                />
            </View>
            <TouchableOpacity  style={{flexDirection:'row-reverse',marginLeft:10}} onPress={()=>navigation.goBack()}>
                <Text style={{color:'grey',borderRadius:5,padding:3}}>
                   Back
                 </Text>
            </TouchableOpacity>

            {/* Card of events */}
            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={item => item.id}
            />

       <Overlay isVisible={isOvelayVisible}  fullScreen overlayStyle={{backgroundColor:'#5D575C'}} >
           <ScrollView>
           <TouchableOpacity 
           onPress={()=>setIsOverlayVisible(false)}
           style={{flexDirection:'row-reverse',paddingLeft:10 }}>
           <Icon
            name='close-a'
            type='fontisto'
            color='white'
            //color='white'
            size={18}
         
        />
           </TouchableOpacity>
      
        {
    Villes.map((l, i) => (
      <ListItem
      onPress={()=>{setVille(l.ville) ; setIsOverlayVisible(false) ;setIndexVille(i)}}
      containerStyle={{backgroundColor:'#5D575C'}}
        key={i}
        leftAvatar={  <Icon
            name='map-marker-alt'
            type='fontisto'
            color={indexVille==i?'red':'#C1B8C0'}
            size={18}
        />
    }

        title={l.ville}
        titleStyle={{ color: l.ville==ville?'white':'#C1B8C0', fontWeight: 'bold' }}

      />
    ))
  }
  </ScrollView>
      </Overlay>

            </LinearGradient>
        </View>
    )
}

export default Cinema;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    pickerItem: {
        height: 44,
        color: 'red'
    },
});

