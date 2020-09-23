import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import Headerr from '../components/common/Header'
import { Button, Icon, Overlay } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';


// import { Constants } from 'expo';


function Home({ navigation, route }) {

    const [isMapSvg, setIsMapSvg] = useState(false)
    const [nbrSortie, setNbrSortie] = useState('254')
    const [nbrFilms, setNbrFilms] = useState('24')
    const [nbrTheatre, setNbrTheatre] = useState('12')
    const [nbrMusique, setNbrMusique] = useState('61')
    const [nbrGalerie, setNbrGalerie] = useState('27')
    const [nbrJeunePublic, setNbrJeunePublic] = useState('17')
    const [nbrVisites, setNbrVisites] = useState('7')
    const [localisation, setLocalisation] = useState('DANS VOTRE VILLE')


    useEffect(() => {
        console.log("isMapsvg component Accueil", isMapSvg)

        if (isMapSvg && route.params) {
            setIsMapSvg(false)
            if (route.params.region === 'tanger-tetouan-alhoceima') {
                setLocalisation('TANGER-TETOUAN-ALHOCEIMA')
                setNbrSortie('98')
                setNbrFilms('12')
                setNbrTheatre('05')
                setNbrMusique('35')
                setNbrGalerie('02')
                setNbrJeunePublic('07')
                setNbrVisites('18')

            }
            if (route.params.region === 'oriental') {
                setLocalisation('ORIENTAL')
                setNbrSortie('79')
                setNbrFilms('12')
                setNbrTheatre('05')
                setNbrMusique('35')
                setNbrGalerie('02')
                setNbrJeunePublic('07')
                setNbrVisites('18')

            }
            if (route.params.region === 'rabat-sale-kenitra') {
                setLocalisation('RABAT-SALE-KENITRA')
                setNbrSortie('85')
                setNbrFilms('45')
                setNbrTheatre('10')
                setNbrMusique('07')
                setNbrGalerie('02')
                setNbrJeunePublic('13')
                setNbrVisites('08')

            }
            if (route.params.region === 'fes-meknes') {
                setLocalisation('FES-MEKNES')
                setNbrSortie('72')
                setNbrFilms('20')
                setNbrTheatre('18')
                setNbrMusique('11')
                setNbrGalerie('13')
                setNbrJeunePublic('10')
                setNbrVisites('30')

            }
            if (route.params.region === 'casablanca-settat') {
                setLocalisation('CASABLANCA-SETTAT')
                setNbrSortie('15')
                setNbrFilms('02')
                setNbrTheatre('08')
                setNbrMusique('01')
                setNbrGalerie('03')
                setNbrJeunePublic('01')
                setNbrVisites('00')

            }
            if (route.params.region === 'benimellal-khenifra') {
                setLocalisation('BENIMELLAL-KHENIFRA')
                setNbrSortie('82')
                setNbrFilms('20')
                setNbrTheatre('08')
                setNbrMusique('11')
                setNbrGalerie('32')
                setNbrJeunePublic('11')
                setNbrVisites('10')

            }
            if (route.params.region === 'draa-tafilalt') {
                setLocalisation('DRAA-TAFILALT')
                setNbrSortie('37')
                setNbrFilms('02')
                setNbrTheatre('08')
                setNbrMusique('11')
                setNbrGalerie('04')
                setNbrJeunePublic('12')
                setNbrVisites('18')

            }
            if (route.params.region === 'marrakech-safi') {
                setLocalisation('MARRAKECH-SAFI')
                setNbrSortie('79')
                setNbrFilms('12')
                setNbrTheatre('08')
                setNbrMusique('11')
                setNbrGalerie('07')
                setNbrJeunePublic('41')
                setNbrVisites('60')

            }
            if (route.params.region === 'souss-massa') {
                setLocalisation('SOUSS-MASSA')
                setNbrSortie('53')
                setNbrFilms('20')
                setNbrTheatre('08')
                setNbrMusique('11')
                setNbrGalerie('13')
                setNbrJeunePublic('01')
                setNbrVisites('70')

            }
            if (route.params.region === 'guelmim-ouednoun') {
                setLocalisation('GUELMIN-OUEDNOUN')
                setNbrSortie('38')
                setNbrFilms('02')
                setNbrTheatre('07')
                setNbrMusique('06')
                setNbrGalerie('12')
                setNbrJeunePublic('11')
                setNbrVisites('03')

            }
            if (route.params.region === 'laayoun-saqialhamra') {
                setLocalisation('LAAYOUN-SAQIALHAMRA')
                setNbrSortie('26')
                setNbrFilms('12')
                setNbrTheatre('08')
                setNbrMusique('01')
                setNbrGalerie('04')
                setNbrJeunePublic('01')
                setNbrVisites('10')

            }
            if (route.params.region === 'dakhla-ouadidahab') {
                setLocalisation('DAKHLA-OUADIDAHAB')
                setNbrSortie('55')
                setNbrFilms('12')
                setNbrTheatre('08')
                setNbrMusique('11')
                setNbrGalerie('03')
                setNbrJeunePublic('21')
                setNbrVisites('05')
            }

        }

    }, [isMapSvg])

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'img'} leftIcon={'nav-icon'} />
            {/* la premiere div qui contient nbr des sorties et les 2 buttons */}

            <View>
                <View style={styles.premierContainer}>
                    <Text style={styles.premierText}>{nbrSortie}{' '} SORTIES</Text>
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
                    <Button
                        onPress={() => navigation.navigate('MapSvg', {
                            callback: (bool) => setIsMapSvg(bool),
                            regionSelected: route.params && route.params.region
                        })}

                        icon={
                            <View style={styles.iconButtonStyle}>
                                <Icon
                                    name="angle-right"
                                    size={15}
                                    color="white"
                                    type='fontisto'
                                    containerStyle={{ marginLeft: 5 }}
                                />
                                <Text style={styles.iconText}>{localisation}</Text>
                                <Icon
                                    name="map-marker-alt"
                                    size={20}
                                    color="white"
                                    type='fontisto'
                                    containerStyle={{ marginRight: 5 }}

                                />
                            </View>
                        }
                        buttonStyle={styles.buttonContainer}
                        titleStyle={styles.textButton}
                    />
                </View>
            </View>

            {/** les div des categories  */}

            <View style={{ marginTop: 20, flex: 2 }}>
                <View style={styles.row}>
                    {/*stocker categorie de chaque div pour naviguer a la categorie*/}
                    <TouchableOpacity style={styles.rowCategorieCinema}
                        onPress={() => navigation.navigate('Cinema')}
                    >
                        <View   style={{margin:8,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10}}>

                      
                        <View 
                        style={{alignItems:'center',flex:1}}
                       
                       //style={styles.textTouchable}
                        >
                            <Text style={styles.categorieTitle}>CINEMA</Text>
                            <Text style={styles.categorieDescription}>{nbrFilms}{' '} FILMS</Text>
                        </View>
                        {/* <Icon
                            name="film"
                            size={60}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}
                        /> */}

                        <Image source={require('../../assets/cinema.png')} 
                       // style={{ flex: 0.8, height: 100 }}
                       style={{height:50,width:50}}
                         />
                         </View>



                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieTheatre} onPress={() => navigation.navigate('Theatre')}>
                        <View style={styles.textTouchable}>
                            <Text style={styles.categorieTitle}>THEATRE</Text>
                            <Text style={styles.categorieDescription}>{nbrTheatre}{' '} PIECES</Text>
                        </View>
                        {/* <Icon
                            name="slightly-smile"
                            size={60}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}
                        /> */}

                        <Image source={require('../../assets/theatre.png')} 
                       // style={{ height: 100, flex: 0.6 }}
                       style={{height:50,width:50}}
                         />


                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.rowCategorieMusique} onPress={() => console.log('musique')}>
                        <View style={styles.textTouchable}>
                            <Text style={styles.categorieTitle}>MUSIQUE</Text>
                            <Text style={styles.categorieDescription}>{nbrMusique}{' '} CONCERTS</Text>
                        </View>
                        {/* <Icon
                            name="music-note"
                            size={50}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}
                        /> */}

                        <Image source={require('../../assets/music.png')} 
                        //style={{ width: 80, height: 100, flex: 0.6 }}
                        style={{height:50,width:50}}
                         />


                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieGalerie} onPress={() => console.log('galeries')}>
                        <View style={styles.textTouchable}>
                            <Text style={styles.categorieTitle}>GALERIES</Text>
                            <Text style={styles.categorieDescription}>{nbrGalerie} {' '} EXPO</Text>
                        </View>
                        {/* <Icon
                            name="picture"
                            size={50}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}

                        /> */}

                        <Image source={require('../../assets/galery.png')} 
                       // style={{ height: 100, flex: 0.6 }}
                        style={{height:50,width:50}}
                         />


                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.rowCategoriePublic} onPress={() => console.log('jeune public')}>
                        <View
                            style={styles.textTouchable}
                        >
                            <Text style={styles.categorieTitle}>JEUNE PUBLIC</Text>
                            <Text style={styles.categorieDescription}>{nbrJeunePublic}{' '} SPECTA</Text>
                        </View>
                        {/* <Icon
                            name="person"
                            size={50}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}

                        /> */}


                        <Image source={require('../../assets/spect.png')} 
                       // style={{ height: 100, flex: 0.6 }} 
                        style={{height:50,width:50}}
                        />


                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieVisites} onPress={() => console.log('visites')}>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.categorieTitle}>VISITES</Text>
                            <Text style={styles.categorieDescription}>{nbrVisites}{' '} VISITES</Text>
                        </View>
                        {/* <Icon
                            name="home"
                            size={50}
                            color="black"
                            type='fontisto'
                            containerStyle={{marginRight:10 }}
                        /> */}
                        <View>
                            <Image source={require('../../assets/kids.png')} 
                           // style={{ flex: 0.6 }} 
                           style={{height:70,width:70}}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

            </View>
            {/* button promotions*/}
             <View 
             style={{flex:0.5 ,flexDirection:'column-reverse'}}
             >
                <TouchableOpacity style={{ backgroundColor: '#FF7F50',flexDirection:'row',padding:10,justifyContent:'space-between' }} >
                <Text style={styles.footerText}>
                        PROMOTIONS
                    </Text>
                
                {/* <Icon
                        name="star"
                        size={30}
                        //color="white"
                        type='fontisto'
                        containerStyle={{ marginRight: 5 }}

                    /> */}
                    <Image source={require('../../assets/promo.png')} style={{ width:50 ,height:30 }} />

                   
                   

                </TouchableOpacity> 
                {/* <Button
                    title="PROMOTIONS"
                    icon={
                        <Icon
                            name="star"
                            size={30}
                            //color="white"
                            type='fontisto'
                            containerStyle={{ marginRight: 5 }}

                        />
                    }
                    buttonStyle={styles.footerButton}
                    titleStyle={styles.footerText}
                /> */}
            </View>

            {/** show overlay of svg map */}



        </View>



    )
}

export default Home
const styles = StyleSheet.create({
    // container: {
    //     width: Dimensions.get('window').width,
    //     // paddingTop: Constants.statusBarHeight,
    //   },
    container: {
        flex: 1,
        // backgroundColor:'#F2B35D'
    },
    premierContainer: {
        alignItems: 'center',
        marginTop: 22,
        marginBottom: 5,
    },
    premierText: {
        // color:'white',
        fontSize: 30
    },
    textButton: {
        fontSize: 14,
        paddingRight: 5
    },
    buttonContainer: {
        width: Dimensions.get('window').width / 1.2,
        marginBottom: 10,
        backgroundColor: 'black'
    },
    categorieTitle: {
        // fontWeight:'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    categorieDescription: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    rowCategorie: {
        //backgroundColor:'green',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center'
    },
    rowCategorieCinema: {
        backgroundColor: 'purple',
      //  flexDirection: 'row',
       // borderColor:'white',
       // borderWidth:1,
        flex: 1,
        marginLeft:5,
        marginRight:2.5,
       // alignItems: 'center',
        // justifyContent:'space-between',
        borderRadius: 5,
       // marginHorizontal: 5,
       // padding:10
        //justifyContent:'center'
        // paddingBottom: 5,
        // paddingRight: 20,
        // paddingTop: 5

    },
    rowCategorieTheatre: {
        backgroundColor: '#FFD700',
        flexDirection: 'row',
        flex: 1,
      //  alignItems: 'center',
      //  justifyContent: 'center',
        borderRadius: 5,
        marginRight:5,
        marginLeft:2.5
        // marginHorizontal: 5,
        // paddingBottom: 5,
        // paddingRight: 10,
        // paddingBottom: 5,
        // paddingTop: 5
    },
    rowCategorieMusique: {
        backgroundColor: '#4682B4',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        // justifyContent:'space-between',
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5
    },
    rowCategorieGalerie: {
        backgroundColor: '#FF6347',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        //justifyContent:'space-between',
        marginTop: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5

    },
    rowCategoriePublic: {
        backgroundColor: '#9ACD32',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        // justifyContent:'space-between',
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5
    },
    rowCategorieVisites: {
        backgroundColor: '#C0C0C0',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        // justifyContent:'space-between' ,
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 5,
        paddingLeft: 5


    },
    row: {
        flexDirection: 'row',
        // marginBottom:20,
        flex: 1
    },
    footerText: {
        fontSize: 22,
        color: 'black'
    },
    footer: {
        flex: 0.5,
        //flexDirection: 'row',
      //  alignItems: 'center',
       // justifyContent: 'center',
        marginTop: 10,
       // width:Dimensions.get('width').width
    },
    iconButtonStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center'

    },
    iconText: {
        fontSize: 20,
        color: 'white'
    },
    footerButton: {
        backgroundColor: '#F3AB4A'
    },
    textTouchable: {
        // paddingLeft:5,
        flex: 1,
        // backgroundColor:'red',
        //alignItems:'center'
        // marginLeft: 10,
        // marginRight:2
    }

});



