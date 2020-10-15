import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image ,ImageBackground } from 'react-native'
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
        // console.log("route",route)

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
            <StatusBar style={{color:'white'}} backgroundColor="#008cd6" />
            <Headerr nav={navigation} nameIconRight={'search'} centerIcon={'img'} leftIcon={'nav-icon'} />
            {/* le premier div qui contient nbr des sorties et les 2 buttons */}

            <View 
            style={{flex:1,
             // backgroundColor:'yellow',
                justifyContent:'center',alignItems:'center' }}

            >
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

            <View style={{ 
               // marginTop: 15, 
                flex: 1.5,
               // backgroundColor:'red'
                 }}>
                <View style={styles.row}>
                    {/*stocker categorie de chaque div pour naviguer a la categorie*/}
                    <TouchableOpacity style={styles.rowCategorieCinema}
                        onPress={() => navigation.navigate('Cinema')}
                    >
                        <View   style={{margin:5,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10}}>

                      
                        <View 
                        style={{alignItems:'center',flex:1}}
                        >
                            <Text style={styles.categorieTitle}>CINEMA</Text>
                            <Text style={styles.categorieDescription}>{nbrFilms}{' '} FILMS</Text>
                        </View>
                       
                        <Image source={require('../../assets/cinema.png')} 
                       style={{height:45,width:45}}
                         />
                         </View>



                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieTheatre} onPress={() => navigation.navigate('Theatre')}>
                    <View   style={{margin:5,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:2}}>

                        <View 
                        style={{alignItems:'center',flex:1}}
                        >
                            <Text style={styles.categorieTitle}>THEATRE</Text>
                            <Text style={styles.categorieDescription}>{nbrTheatre}{' '} PIECES</Text>
                        </View>
                      
                        <Image source={require('../../assets/theatre.png')} 
                       style={{height:50,width:50}}
                         />
                         </View>


                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.rowCategorieMusique} onPress={() => navigation.navigate('Music')}
>
                    <View   style={{margin:5,flexDirection:'row',flex:1,alignItems:'center',borderColor:'white',borderWidth:1,justifyContent:'space-between',paddingRight:2}}>

                        <View 
                        style={{alignItems:'center',flex:1}}
                        //style={styles.textTouchable}
                        >
                            <Text style={styles.categorieTitle}>MUSIQUE</Text>
                            <Text style={styles.categorieDescription}>{nbrMusique}{' '} CONCERTS</Text>
                        </View>
                        <Image source={require('../../assets/music.png')} 
                        style={{height:50,width:50}}
                         />
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieGalerie} onPress={() => navigation.navigate('Galeries')}>
                    <View   style={{margin:5,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:2}}>

                        <View style={{alignItems:'center',flex:1}}>
                            <Text style={styles.categorieTitle}>GALERIES</Text>
                            <Text style={styles.categorieDescription}>{nbrGalerie} {' '} EXPO</Text>
                        </View>
                        <Image source={require('../../assets/galery.png')} 
                        style={{height:50,width:50}}
                         />
                         </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.rowCategoriePublic} onPress={() => navigation.navigate('Visites')}
>
                    <View   style={{margin:5,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:2}}>

                        <View
                            style={{alignItems:'center',flex:1}}
                        >
                            <Text style={styles.categorieTitle}>MUSEES</Text>
                            <Text style={styles.categorieDescription}>{nbrVisites}{' '} VISITES</Text>
                        </View>
                        <Image source={require('../../assets/spect.png')} 
                        style={{height:50,width:50}}
                        />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowCategorieVisites}  onPress={() => navigation.navigate('JeunePublic')}>
                    <View   style={{margin:5,flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:2}}>

                        <View 
                        style={{alignItems:'center',flex:1}}
                        >
                            <Text style={styles.categorieTitle}>JEUNE PUBLIC</Text>
                            <Text style={styles.categorieDescription}>{nbrJeunePublic}{' '} SPECTA</Text>
                        </View>
                       
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
             style={styles.footer}
             >
                <TouchableOpacity 
                style={{ backgroundColor: '#DAA520',flexDirection:'row',padding:10,justifyContent:'space-between',marginHorizontal:70 }} >
                    <View style={{flex:1,alignItems:'center'}}>
                    <Text style={styles.footerText}>
                        PROMOTIONS
                    </Text>
                    </View>
               
                    <Image source={require('../../assets/promo.png')} style={{ width:50 ,height:30 }} />
                </TouchableOpacity>
    </View>
               
             
            {/* </View> */}

            {/** show overlay of svg map */}
                        {/* <View style={styles.footer}>
              <Button
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
                />
            </View> */}



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
        // backgroundColor:'wheat'
    },
    premierContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    premierText: {
        //color:'white',
        fontSize: 26
    },
    textButton: {
        fontSize: 14,
        paddingRight: 5
    },
    buttonContainer: {
        width: Dimensions.get('window').width / 1.1,
        marginBottom: 10,
      //  backgroundColor: 'black'
      backgroundColor:'#008cd6'
    },
    categorieTitle: {
        // fontWeight:'bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    categorieDescription: {
        fontSize: 14,
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
        backgroundColor: '#000000',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 5,
        marginRight:5,
        marginLeft:2.5,
        // // flex: 1,
        // marginLeft:5,
        // marginRight:2.5,
        // borderRadius: 5,
        // flexDirection:'row',
        // flex:1,
        // justifyContent:'space-between',
        // alignItems:'center',borderColor:'white',
        // borderWidth:1,paddingRight:10

    },
    rowCategorieTheatre: {
        backgroundColor: '#4682B4',
        flexDirection: 'row',
        flex: 1,
       // borderRadius: 5,
        marginRight:5,
        marginLeft:2.5,
        // flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10
       
    },
    rowCategorieMusique: {
        backgroundColor: '#DB7093',
        flexDirection: 'row',
        flex: 1,
       // borderRadius: 5,
        marginLeft:5,
        marginRight:2.5,
        marginTop:5,
        // flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10
    },
    rowCategorieGalerie: {
        backgroundColor: '#006400',
        flexDirection: 'row',
        flex: 1,
       // borderRadius: 5,
        marginRight:5,
        marginLeft:2.5,
        marginTop:5,
        // flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10

    },
    rowCategoriePublic: {
        backgroundColor: '#FF6347',
        flexDirection: 'row',
        flex: 1,
       // borderRadius: 5,
        marginLeft:5,
        marginRight:2.5,
        marginTop:5,
        // flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10
    },
    rowCategorieVisites: {
        backgroundColor: '#20B2AA',
         flexDirection: 'row',
         flex: 1,
       // borderRadius: 5,
        marginRight:5,
        marginLeft:2.5,
        marginTop:5,
        // flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center',borderColor:'white',borderWidth:1,paddingRight:10


    },
    row: {
        flexDirection: 'row',
        // marginBottom:20,
        flex: 1
    },
    footerText: {
        fontSize: 20,
        color:'white'

    },
    footer: {
        flex:0.5,
        justifyContent:'center',
       // marginTop: 10,
       marginHorizontal:5,
     //  flexDirection:'column-reverse',
       marginTop:5,
      // marginBottom:5,
    //backgroundColor:'green'
    },
    iconButtonStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center'

    },
    iconText: {
        fontSize: 18,
        color: 'white'
    },
    footerButton: {
        backgroundColor: '#F3AB4A'
    },
    textTouchable: {
        flex: 1,
    }

});



