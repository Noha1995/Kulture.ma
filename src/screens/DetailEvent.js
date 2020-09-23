import React ,{useEffect} from 'react'
import {Text,View ,Image,Dimensions,TouchableOpacity ,ScrollView} from 'react-native'
import {Icon} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import Headerr from '../components/common/Header'
import { useDispatch, useSelector } from 'react-redux'




function DetailEvent(props){
    const dispatch=useDispatch()

    //dispatch data of categorie
    useEffect(()=>{
        dispatch({ type: 'DATA_EVENT',payload:props.route.params.data})
    },[])
    return(
        <ScrollView>
            <StatusBar backgroundColor="black" style="light" />
            {/* <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'Cinema'} nav={navigation} categorie={'cat'} /> */}
        
        <View style={{flex:1}}> 
        
        <Image source={props.route.params.img} style={{width:Dimensions.get('screen').width,height:200 ,borderColor:'white',borderWidth:1.5}} />
         
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',paddingHorizontal:10}}>
            <Icon
                    name='share-a'
                    type='fontisto'
                    color='#3A3539'
                    size={14}
                    raised
                    reverse
                    reverseColor={'white'}
                    onPress={() => console.log("share event")}
                />
                    <Icon
                    name='heart'
                    type='fontisto'
                    color='#3A3539'
                    size={14}
                    raised
                    reverse
                    reverseColor={'white'}
                    onPress={() => console.log("share event")}
                />
                    <Icon
                    name='like'
                    type='fontisto'
                    color='#3A3539'
                    size={14}
                    raised
                    reverse
                    reverseColor={'white'}
                    onPress={() => console.log("share event")}
                />

            </View>
            <View style={{marginHorizontal:20 ,marginTop:10}}>
              
                <View style={{marginBottom:5}}>
                    <Text style={{fontWeight:'bold',fontSize:22}}>
                    {props.route.params.data.item.title}
                    </Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                <Icon
                    name='date'
                    type='fontisto'
                    color='#3A3539'
                    size={16}
                    reverseColor={'white'}
                />
                    <Text style={{marginLeft:5,fontSize:12}}>
                    {props.route.params.data.item.time}
                    </Text>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Icon
                    name='map-marker-alt'
                    type='fontisto'
                    color='#3A3539'
                    size={16}
                    reverseColor={'white'}
                />
                    <Text style={{marginLeft:5,fontSize:12}}>
                    {props.route.params.data.item.localisation}
                    </Text>
                </View>
              
                </View>
                <View style={{marginTop:20,marginBottom:10}}>
                    <Text style={{fontSize:17}}>
                    {props.route.params.data.item.text}
                    </Text>
                </View>

            </View>

        </View>
        </ScrollView>
      
    )
}
export default DetailEvent