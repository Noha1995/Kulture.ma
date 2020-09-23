import React from 'react'
import { Text, View, Image, Dimensions ,FlatList } from 'react-native'
import { Avatar, Accessory , Divider ,Icon } from 'react-native-elements';





const Organisateur = () => {

    const list = [
        {
            title:'Institut Français Rabat',
            adress:'1, rue Abou Inane Rabat B.P. 1459 ',
            tel:'+212 (0)537 68 96 50',
            website:'https://goo.gl/maps/i2F8LGgaN5PZ91Hs5',
            img:require('../../assets/IF-RABAT.jpg')
        
        },
        {
            title:'Institut Français Tanger',
            adress:'41 rue Hassan Ibn Wazzane B.P 409 – 90 000 Tanger ',
            tel:'+212 (0)5 39 94 09 37',
            website:'https://if-maroc.org/tanger',
            img:require('../../assets/IF-TANGER.jpg')
        },
    
      ]

 const    keyExtractor = (item, index) => index.toString()

 const renderItem = ({ item }) => (
     <View>
     <View style={{flexDirection:'row',margin:10}}>

        <Image source={item.img} 
        style={{ justifyContent:'center',flex:1,width: Dimensions.get('screen').width/2.5, height: 130, borderColor: 'white', borderWidth: 1.5 ,borderRadius:5}} />
         <View style={{flex:2,marginLeft:5 }}>
             <View style={{flex:0.5 ,justifyContent:'center' }}>
               <Text style={{fontWeight:'bold'}}>{item.title}</Text>
             </View>
             <View style={{flex:0.5 ,flexDirection:'row'}}>
             <Icon name="map-marker-alt" type='fontisto' size={17} containerStyle={{marginRight:5,justifyContent:'center'}} />
                 <View style={{flex:1 ,justifyContent:'center'}}>
                 <Text> {item.adress}</Text>
                 </View>
            </View>

            <View style={{flex:0.5 ,flexDirection:'row'}}>
            <Icon name="earth" type='fontisto' size={16} containerStyle={{marginRight:5,justifyContent:'center'}} />

                 <View style={{flex:1 ,justifyContent:'center'}}>
                 <Text> {item.website}</Text>
                 </View>
            </View>

            <View style={{flex:0.5 ,flexDirection:'row' }}>
            <Icon name="mobile-alt" type='fontisto' size={16} containerStyle={{marginRight:5,justifyContent:'center'}} />

                 <View style={{flex:1 ,justifyContent:'center'}}>
                 <Text> {item.tel}</Text>
                 </View>
            </View>

        </View> 
        </View>
         <Divider style={{marginHorizontal:15,backgroundColor:'gray'}} />

    </View>

 
)

    return (
     
            <FlatList
              keyExtractor={keyExtractor}
              data={list}
              renderItem={renderItem}
            />
            

           
          
    )
}

export default Organisateur

{/* <Image source={require('../../assets/IF-RABAT.jpg')} style={{marginBottom:10, width: Dimensions.get('screen').width, height: 250, borderColor: 'white', borderWidth: 1.5 }} />
<Text style={{fontSize:16,paddingHorizontal:5}}>Situé au cœur de Rabat, à deux pas de la gare du centre-ville et accessible par tram, l’Institut français de Rabat est un lieu de rencontres et d’échanges, ainsi qu’un des acteurs de la vie culturelle et artistique à Rabat. Il encourage la diffusion et l’apprentissage de la langue française.</Text>
</View> */}