import React ,{useEffect ,useRef} from 'react'
import {Text,View ,Image,Dimensions,TouchableOpacity ,ScrollView ,StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import Headerr from '../components/common/Header'
import { useDispatch, useSelector } from 'react-redux'
import MapView, { Marker } from "react-native-maps";




function DetailEvent(props){
    const dispatch=useDispatch()
    var myRef = useRef("MapView");

    //dispatch data of categorie
    useEffect(()=>{
        dispatch({ type: 'DATA_EVENT',payload:props.route.params.data})
    },[])
    return(
        <ScrollView>
            <StatusBar 
            backgroundColor={
                props.route.params.category=='Theatre'?
                '#4682B4':
                props.route.params.category=='Music'?
                '#DB7093':
                props.route.params.category=='Galeries'?
                '#006400':
                props.route.params.category=='JeunePublic'?
                '#20B2AA':
                props.route.params.category=='Visites'?
                '#FF6347':
                'black'}
             style="light" />
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
                {console.log(props.route.params.data)}
              
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
                    <Text style={{marginLeft:5,fontSize:16}}>
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
                    <Text style={{marginLeft:5,fontSize:16}}>
                    {props.route.params.data.item.localisation}
                    </Text>
                </View>
              
                </View>
                <View style={{marginTop:20,marginBottom:5}}>
                    <Text style={{fontSize:17}}>
                    {props.route.params.data.item.text}
                    </Text>
                </View>
                
                {/* map affiche l'emplacement de l'evenement selon lat et lng*/}
                <View style={styles.map}>
              <MapView
                ref={myRef}
                provider="google"
                style={{ height: 300 }}
                initialRegion={{
                  latitude: 35.777745,
                  longitude: -5.808364,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.05,
                }}
                // customMapStyle={[
                //     {
                //       featureType: "administrative",
                //       elementType: "geometry",
                //       stylers: [
                //       {
                //           visibility: "off"
                //       }
                //       ]
                //     },
                //     {
                //       featureType: "poi",
                //       stylers: [
                //         {
                //           visibility: "off"
                //         }
                //       ]
                //     },
                //     {
                //       featureType: "road",
                //       elementType: "labels.icon",
                //       stylers: [
                //         {
                //           visibility: "off"
                //         }
                //       ]
                //     },
                //     {
                //       featureType: "transit",
                //       stylers: [
                //         {
                //           visibility: "off"
                //         }
                //       ]
                //     }
                //   ]}
        
                //mapType="none"
                //  showsPointsOfInterest={false}
                //   showsBuildings={false}
                //   showsCompass={false}
                //   showsScale={false}
                //   showsTraffic={false}
                //   showsIndoors={false}
                //   showsIndoorLevelPicker={false}
                // onMarkerPress={zoomPress}
              >
                <Marker
                  coordinate={{
                    latitude: 35.777745,
                    longitude: -5.808364,
                  }}
                 
                  

                />
              </MapView>
            </View>

            </View>

        </View>
        </ScrollView>
      
    )
}
export default DetailEvent

const styles = StyleSheet.create({
map: {
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    //marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  }
})