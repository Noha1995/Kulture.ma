//  <View>
//                 <View style={styles.premierContainer}>
//                     <Text style={styles.premierText}>{254}{' '} SORTIES</Text>
//                 </View>
//                 <View style={{ alignItems: 'center' }}>
//                     <Button
//                         icon={
//                             <View style={styles.iconButtonStyle}>
//                                 <Icon
//                                     name="angle-right"
//                                     size={15}
//                                     color="white"
//                                     type='fontisto'
//                                     containerStyle={{ marginLeft:5}}
//                                 />
//                                 <Text style={styles.iconText}>CETTE SEMAINE </Text>
//                                 <Icon
//                                     name="clock"
//                                     size={20}
//                                     color="white"
//                                     type='fontisto'
//                                     containerStyle={{ marginRight: 5}}

//                                 />
//                             </View>
//                         }

//                         titleStyle={styles.textButton}
//                         buttonStyle={styles.buttonContainer}
//                     />
//                     <Button
//                         icon={
//                             <View style={styles.iconButtonStyle}>
//                                 <Icon
//                                     name="angle-right"
//                                     size={15}
//                                     color="white"
//                                     type='fontisto'
//                                     containerStyle={{ marginLeft: 5}}
//                                 />
//                                 <Text style={styles.iconText}>DANS VOTRE VILLE</Text>
//                                 <Icon
//                                     name="map-marker-alt"
//                                     size={20}
//                                     color="white"
//                                     type='fontisto'
//                                     containerStyle={{ marginRight: 5 }}

//                                 />
//                             </View>
//                         }
//                         buttonStyle={styles.buttonContainer}
//                         titleStyle={styles.textButton}
//                     />
//                 </View>
//             </View>

//             {/** les div des categories  */}

//             <View style={{ marginTop: 20, flex: 2}}>
//                 <View style={styles.row}>
//                     {/*stocker categorie de chaque div pour naviguer a la categorie*/}
//                     <TouchableOpacity style={styles.rowCategorieCinema} 
//                     onPress={()=>navigation.navigate('Cinema')}
//                     >
//                         <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>CINEMA</Text>
//                             <Text style={styles.categorieDescription}>24 FILMS</Text>
//                         </View>
//                         <Icon
//                             name="film"
//                             size={60}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}
//                         />


//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.rowCategorieTheatre} onPress={()=>navigation.navigate('Theatre')}>
//                     <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>THEATRE</Text>
//                             <Text style={styles.categorieDescription}>12 PIECES</Text>
//                         </View>
//                         <Icon
//                             name="slightly-smile"
//                             size={60}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}
//                         />
                       
//                     </TouchableOpacity>
//                 </View>
//                 <View style={styles.row}>
//                     <TouchableOpacity style={styles.rowCategorieMusique} onPress={() => console.log('musique')}>
//                     <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>MUSIQUE</Text>
//                             <Text style={styles.categorieDescription}>61 CONCERTS</Text>
//                         </View>
//                         <Icon
//                             name="music-note"
//                             size={50}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}
//                         />
                      
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.rowCategorieGalerie} onPress={() => console.log('galeries')}>
//                     <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>GALERIES</Text>
//                             <Text style={styles.categorieDescription}>27 EXPO</Text>
//                         </View>
//                         <Icon
//                             name="picture"
//                             size={50}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}

//                         />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={styles.row}>
//                     <TouchableOpacity style={styles.rowCategoriePublic} onPress={() => console.log('jeune public')}>
//                     <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>JEUNE PUBLIC</Text>
//                             <Text style={styles.categorieDescription}>17 SPECTA</Text>
//                         </View>
//                         <Icon
//                             name="person"
//                             size={50}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}

//                         />
                        
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.rowCategorieVisites} onPress={() => console.log('visites')}>
//                     <View style={styles.textTouchable}>
//                             <Text style={styles.categorieTitle}>VISITES</Text>
//                             <Text style={styles.categorieDescription}>7 VISITES</Text>
//                         </View>
//                         <Icon
//                             name="home"
//                             size={50}
//                             color="black"
//                             type='fontisto'
//                             containerStyle={{marginRight:10 }}
//                         />
//                     </TouchableOpacity>
//                 </View>

//             </View>
//             {/* button promotions*/}
//             <View style={styles.footer}>
//                 <Button
//                     title="PROMOTIONS"
//                     icon={
//                         <Icon
//                             name="star"
//                             size={30}
//                             //color="white"
//                             type='fontisto'
//                             containerStyle={{ marginRight: 5 }}

//                         />
//                     }
//                     buttonStyle={styles.footerButton}
//                     titleStyle={styles.footerText}
//                 />
//             </View>
//         </View> 