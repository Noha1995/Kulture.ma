import React, { useState, useRef, useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Card, Overlay, ListItem, Button } from 'react-native-elements'
import Headerr from '../components/common/Header'
import { StatusBar } from 'expo-status-bar';
import { DATA } from '../components/Data/Ville'
import { useDispatch, useSelector } from 'react-redux'



const Cinema = ({ navigation }) => {
    const dispatch=useDispatch()

    //dispatch the name of categorie
    useEffect(()=>{

        dispatch({ type: 'CHANGE_Categorie_STATUS',payload:'Cinema'})

    },[])


    const headerList=()=>{
        return(
            <View>
                 <StatusBar backgroundColor="black" style="light" />
            <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'Cinema'} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}> 4 </Text>
            <Text style={{ fontSize: 30 }}>Films</Text>

        </View>
            <View style={{ alignItems: 'center' }}>
            <Button
                icon={
                    <View style={styles.iconButtonStyle}>
                        <Icon
                            name="angle-right"
                            size={15}
                            color="white"
                            type='fontisto'
                            containerStyle={{ marginLeft: 5 }}
                        />
                        <Text style={styles.iconText}>CETTE SEMAINE </Text>
                        <Icon
                            name="clock"
                            size={20}
                            color="white"
                            type='fontisto'
                            containerStyle={{ marginRight: 5 }}

                        />
                    </View>
                }

                titleStyle={styles.textButton}
                buttonStyle={styles.buttonContainer}
            />
        </View>
        </View>
        )
    }


    const Item = (item) => {
        console.log(item.item.title)

        return (

            //navigate to the details events
            <TouchableOpacity style={styles.containerList} onPress={() =>
                navigation.navigate('Details', {
                    screen: 'Resume',
                    params: { img: item.item.img  , data: item }
                  })
            //navigation.navigate('Details', { img: item.item.img, data: item })
             }>
                <View style={styles.containerEvent}>
                    <View style={{ flex: 1 }}>
                        <Image source={item.item.img} style={styles.img} />

                    </View>
                    <View style={{ flex: 1.5 }}>
                        <View style={{ marginBottom: 10 }} >
                            <Text style={styles.titleEvent}>
                                {item.item.title}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                                <View style={styles.containerDescription}>
                                    <Icon
                                        name='date'
                                        type='fontisto'
                                        color='black'
                                        size={18}
                                        containerStyle={{marginLeft:18}}
                                    />
                                    <View
                                       // style={{ flex: 1 }}
                                    >
                                        <Text style={{paddingLeft:18}}>
                                             {item.item.date}
                                        </Text>
                                    </View>

                            </View>
                        <View style={styles.containerDescription}>
                            <Icon
                                name='map-marker-alt'
                                type='fontisto'
                                color='black'
                                size={18}
                                containerStyle={{ flex: 1 }}
                            />
                            <View
                                style={{ flex: 3 }}
                            >
                                <Text style={styles.description}>
                                    {item.item.localisation}
                                </Text>
                            </View>

                        </View>

                       
                            




                        </View>


                    </View>
                </View>



            </TouchableOpacity>)
    };

    return (
      
           
           

      

            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={item => item.id}
                ListHeaderComponent={headerList}
            />



       
    )
}

export default Cinema;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerEvent: {
        flexDirection: 'row',

    },
    containerDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5


    },
    img: {

        width: Dimensions.get('screen').width / 2.59,
        borderRadius: 5
        , height: 160,
        borderColor: 'white'
    },
    titleEvent: {
        fontSize: 16,
        fontWeight: 'bold',
       // backgroundColor: 'purple',
        textAlign: 'center',
        padding: 5

    },
    containerList: {
        flex: 1,
        borderColor: '#D3D3D3',
        borderWidth: 0.5,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 5
    },
    iconButtonStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center'

    },
    buttonContainer: {
        width: Dimensions.get('window').width / 1.8,
        marginBottom: 10,
        backgroundColor: 'black',
        marginTop: 5

    },
    textButton: {
        fontSize: 12,
        paddingRight: 5
    },
    iconText: {
        fontSize: 18,
        color: 'white'
    },



});

