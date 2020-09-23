

import React, { useState, useRef, useEffect } from 'react'
import { Text, View, Dimensions, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Icon, Card, Overlay, ListItem } from 'react-native-elements'
import Headerr from '../components/common/Header'
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Villes, DATA } from '../components/Data/Ville'



const Cinema = ({ navigation }) => {
    const [language, setLanguage] = useState(null)
    const [isOvelayVisible, setIsOverlayVisible] = useState(false)
    const [ville, setVille] = useState('Tanger')
    const [indexVille, setIndexVille] = useState(3)
    const dispatch = useDispatch()



    // useEffect(()=>{
    //     dispatch({ type: 'CHANGE_Categorie_STATUS',payload:null})
    // },[])



    const Item = (item) => {
        // let img = item.item.id === '0' ?
        //     require('../../assets/cinema-1.jpg') :
        //     item.item.id === '1' ?
        //         require('../../assets/cinema-2.jpg') :
        //         item.item.id === '2' ?
        //             require('../../assets/festival-4.jpg') :
        //             item.item.id === '3' ?
        //                 require('../../assets/jeune-public-1.jpg') :
        //                 require('../../assets/cinema-1.jpg')



        return (

            //navigate to the details events
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', marginBottom: 5, marginTop: 20 }} onPress={() => navigation.navigate('Details', { img: img, data: item })}>
            <LinearGradient
                colors={['#00CED1', '#20B2AA','#008080']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{marginHorizontal: 2, borderRadius: 5, width: Dimensions.get('screen').width, borderColor: 'white', borderWidth: 1.5, paddingVertical: 10, paddingHorizontal: 5 }}
            >

                {/* <View style={{ marginHorizontal: 2, borderRadius: 5, backgroundColor: '#5F9EA0', width: Dimensions.get('screen').width, borderColor: 'white', borderWidth: 1.5, paddingVertical: 10, paddingHorizontal: 5 }}> */}
                    <Text style={{ marginBottom: 5, fontWeight: 'bold', color: 'white', fontSize: 26, marginLeft: 3 }}>
                        {item.item.title}
                    </Text>

                    <View style={styles.evenetInfo}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.iconTitle}>
                                <Icon
                                    name='record'
                                    type='fontisto'
                                    color='white'
                                    size={8}
                                    containerStyle={{ marginRight: 5 }}
                                />
                                <Text style={styles.eventTitle}>Evénement date</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={styles.containerDescription}>
                                    <Text style={styles.description}>{item.item.date}</Text>
                                </View>

                                <Text style={styles.description}>5 personnes vont participer</Text>
                            </View>


                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.iconTitle}>
                                <Icon
                                    name='record'
                                    type='fontisto'
                                    color='white'
                                    size={8}
                                    containerStyle={{ marginRight: 5 }}
                                />
                                <Text style={styles.eventTitle}>Evénement Localisation</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={styles.containerDescription}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={styles.description}>
                                            {item.item.localisation}
                                        </Text>
                                    </View>
                                    <Icon
                                        name='map-marker-alt'
                                        type='fontisto'
                                        color='purple'
                                        size={15}
                                        reverse
                                        containerStyle={{ flex: 1 }}
                                    />
                                </View>
                                <Text style={styles.description}>5 personnes sont intéressées </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                    <View style={{ flex: 1 }}>
                            <View style={styles.iconTitle}>
                                <Icon
                                    name='record'
                                    type='fontisto'
                                    color='white'
                                    size={8}
                                    containerStyle={{ marginRight: 5 }}
                                />
                                <Text style={styles.eventTitle}>Contact</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={styles.containerContact}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={styles.description}>
                                            06.23.54.67.89
                                        </Text>
                                    </View>
                                    <Icon
                                        name='clock'
                                        type='fontisto'
                                        color='purple'
                                        size={10}
                                        reverse
                                        containerStyle={{ flex: 1 }}
                                    />
                                </View>
                                <View style={styles.containerContact}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={styles.description}>
                                            organisateur@gmail.com
                                        </Text>
                                    </View>
                                    <Icon
                                        name='email'
                                        type='fontisto'
                                        color='purple'
                                        size={10}
                                        reverse
                                        containerStyle={{ flex: 1 }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:'purple',flex:2}}>
                            <Text>buttons</Text>
                        </View>
                        </View>
                    </View>
                    


            

</LinearGradient>


            </TouchableOpacity>)
    };

    return (
        <View>

            {/* header */}
            <StatusBar backgroundColor="#696969" style="light" />
            <Headerr nav={navigation} nameIconRight={'film'} centerIcon={'Cinema'} />
            {/* <View style={{ flexDirection: 'row', marginTop: 25, height: 65, alignItems: 'center', justifyContent: 'space-between' }}>
                <Icon
                    name='nav-icon'
                    type='fontisto'
                    color='#2F292D'
                   //color='white'
                    size={14}
                    iconStyle={{ width: 50, paddingLeft: 25 }}
                    onPress={() =>navigation.openDrawer()}
                />

                {/** select the city 
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
            </View> */}




            {/* Card of events */}
            <FlatList
                data={DATA}
                renderItem={Item}
                keyExtractor={item => item.id}
            />

            <Overlay isVisible={isOvelayVisible} fullScreen overlayStyle={{ backgroundColor: '#5D575C' }} >
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => setIsOverlayVisible(false)}
                        style={{ flexDirection: 'row-reverse', paddingLeft: 10 }}>
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
                                onPress={() => { setVille(l.ville); setIsOverlayVisible(false); setIndexVille(i) }}
                                containerStyle={{ backgroundColor: '#5D575C' }}
                                key={i}
                                leftAvatar={<Icon
                                    name='map-marker-alt'
                                    type='fontisto'
                                    color={indexVille == i ? 'red' : '#C1B8C0'}
                                    size={18}
                                />
                                }

                                title={l.ville}
                                titleStyle={{ color: l.ville == ville ? 'white' : '#C1B8C0', fontWeight: 'bold' }}

                            />
                        ))
                    }
                </ScrollView>
            </Overlay>

            {/* </LinearGradient> */}
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
    evenetInfo: {
        flexDirection: 'row',
        marginLeft: 8
    },
    eventTitle: {
        fontSize: 16,
        color: 'white'
    },
    description: {
        color: 'white'
    },
    containerDescription: {
        marginTop: 5,
        //marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },
    containerContact:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

