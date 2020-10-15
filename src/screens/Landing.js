import React from 'react';
import { Text ,View ,StyleSheet ,Dimensions,Image ,Button, TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import { SocialIcon ,Icon } from 'react-native-elements'
import {useSelector ,useDispatch} from 'react-redux'



function Landing(){
    const dispatch = useDispatch();

    return(

        <View>
         
        <Video
        source={require('../../assets/video.mp4')}
        rate={1.0}
       // volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      <View>
      <TouchableOpacity  
      onPress={()=>{
        dispatch({ type: 'CHANGE_SKIP_STATUS',payload:true})
      } }
       style={styles.skipContainer}>
            <Icon
            name='angle-right'
            type='fontisto'
            color='grey'
            size={14}
            style={{paddingTop:3,marginLeft:5}}
            />
           <Text style={styles.SkipText}>Skip</Text>

     </TouchableOpacity>
     <View 
     style={{marginTop:Dimensions.get('window').height/3}} 
     >
         <View style={{marginLeft:50}}>
         <Image
        style={styles.logo}
        source={require('../../assets/Kulture.png')}
      />
      <View style={styles.textDescriptionContainer}>
          <Text style={styles.textDescription}>Bonjour et bienvenue  </Text>
          <Text style={styles.textDescription}> sur Maroc culture</Text>
      </View>
         </View>
    

     <View style={{alignItems:'center',marginTop:20}}>
     <SocialIcon
      title='Continue With Google'
      button
      light
      style={styles.socialIcon}
      type='google'
      onPress={()=>console.log("sign in with google")}

      />
      
      <SocialIcon
      title='Continue With Facebook'
      button
      light
      style={styles.socialIcon}
      type='facebook'
      onPress={()=>console.log("sign in with facebook")}
      />
     </View>
      
   
   
     </View>
    </View>
    </View>
      
    )

}

export default Landing
const styles = StyleSheet.create({
    backgroundVideo: {
      height: Dimensions.get('window').height,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0
    },
    skipContainer:{
        marginTop:35,
        position:'absolute',
       // backgroundColor:'yellow',
       flexDirection:'row-reverse',
        alignItems:'center',
        marginLeft:Dimensions.get('window').width/1.19,
        paddingLeft:15
        
        
    },
    SkipText:{
       // fontWeight:'bold',
        color:'white',
        fontSize:16,
    },
    logo:{
        width:100,
        height:48,
      //  marginTop:Dimensions.get('window').height/4
    },
    textDescriptionContainer:{
    marginTop:5
    },
    textDescription:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    socialIcon:{
        height:50,
        width:Dimensions.get('window').width/1.3
    }
  });
  
  
  
 