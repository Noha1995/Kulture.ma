import React, { useEffect ,useState} from 'react'
import { View ,Text ,Image , StyleSheet ,   Dimensions,ScrollView} from "react-native";
  import { Icon} from "react-native-elements";
  import ViewPager from "@react-native-community/viewpager";
  import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';




 //Galerie de photos
 export default function MyViewPager(props) {
     const [imageId, setImageId] = useState(null);
     const data = useSelector(state => state.Skip.dataEvent)
     const [initialPage,setInitialPage] = useState(0)



      //change initialPage of viewPager
     const onPageSelected= (e) => {
        setImageId(e.nativeEvent.position)
        setInitialPage(e.nativeEvent.position)
      };


   

       
      //ViewPager
      const Gallerie = ({number})=>{
        return(

        <ViewPager style={{height:300 }} initialPage={number} 
        onPageSelected={(e)=>onPageSelected(e)}
         >
  
          {
              data.item.images.map((i, key) => (
                  <View
                    style={{ flex: 1, alignItems: "center" }}
                     //key={key}
                  >
                    <Image
                      source={i}
                      style={styles.postImage}
                    />
                  </View>
                ))
              }
  
        </ViewPager>
        )
      }


      const GalleriePhotos=()=>{
        return(
          <View style={{flexWrap:'wrap',flexDirection:'row',marginTop:25 ,justifyContent:'center'}}  >
            {data.item.images.map((i,key)=>
            <TouchableOpacity onPress={(e)=>setInitialPage(key)} >
                    <Image source={i} style={{height:150,width:150,margin:5}} />

            </TouchableOpacity>
   
            )}
          </View>
        )
      }

      const GallerieFooter=({imageId})=>{
        return(
         data.item.images.length>1?
          <View style={{backgroundColor:"purple" ,flexDirection:'row' ,justifyContent:'center',height:12}}>
            
          {data.item.images.map((item,key)=>
          <View key={key} style={{padding:3}}>
           <Icon
           name='circle'
           type='font-awesome'
           color={key==imageId?"grey":"white"}
           size={6}
           />
           </View>
          )}
         
        </View>:null
        )
      }



  
    return (
      <ScrollView >
        <View style={{flex:1}}>

          <Gallerie number={initialPage} />
          <GallerieFooter imageId={imageId} />
        <GalleriePhotos />
        </View>

        </ScrollView>
         
    )}

    

      const styles = StyleSheet.create({
        container: {
          flex: 1
        },
      
        postImage: {
          width: Dimensions.get("window").width,
          height: 300,
        }
    })
       