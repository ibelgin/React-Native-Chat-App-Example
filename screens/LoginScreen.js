import React , {useEffect, useState} from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image, 
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    SafeAreaView,
    Alert
} from "react-native"

import AntDesign from "react-native-vector-icons/AntDesign";
import {GoogleSignin,statusCodes} from '@react-native-community/google-signin';

const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width

export default class LoginScreen extends React.Component{

    constructor(props){
      super(props);
      this.state={
        name:"",
        userInfoDetails:null,
        loggedIn:false,
        photo:""
      }
      this.isSignedIn()
    }

    componentDidMount() {
      GoogleSignin.configure({
        scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
        webClientId: '***', // Enter Your ID Here
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      });
    }

    signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfoDetails : userInfo })
        this.setState({ userInfoDetails : this.state.userInfoDetails })
        this.setState({ name : this.state.userInfoDetails.user.name })
        this.setState({ name : this.state.name})
        this.setState({ photo : this.state.userInfoDetails.user.photo })
        this.setState({ photo : this.state.photo})
        this.setState({loggedIn : true })
        this.setState({loggedIn : this.state.loggedIn})

      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        } else if (error.code === statusCodes.IN_PROGRESS) {
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        } else {
          console.log(error.message);
        }
      }
    };


    onPressNextPage=()=>{
      this.props.navigation.navigate("Chat",{name:this.state.name,photo:this.state.photo})
        
    }

    isSignedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        this.getCurrentUserInfo()
      } else {
        this.signIn()
      }
    };

    getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        this.setState({ userInfoDetails : userInfo})
        this.setState({ userInfoDetails : this.state.userInfoDetails})
        this.setState({ name : this.state.userInfoDetails.user.name })
        this.setState({ name : this.state.name})
        this.setState({ photo : this.state.userInfoDetails.user.photo })
        this.setState({ photo : this.state.photo})
        this.setState({loggedIn : true })
        this.setState({loggedIn : this.state.loggedIn})

      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          this.signIn()
        } else {
        }
      }
    };

    render(){    
        return(
            <SafeAreaView style={styles.container}> 
                <View style={styles.design_view}>
                    <Image source={require("../assets/design.jpg")} style={styles.design_image}/>
                </View>

                <View style={styles.text_welcome_view}>
                  <Text style={styles.text_welcome}> Welcome </Text>
                  <Text style={styles.desc_text_1}> This Is A Global Chat App </Text>
                  <Text style={styles.desc_text_2}> You Can Chat With New People Here </Text>
                </View>

                <View style={styles.signIn_Text_View}>
                  <AntDesign name="user" size={20} color="green" style={{marginLeft:"10%",color:"#708DB0"}}/>
                  <Text style={styles.signIn_Text}>Sign In Via Social Media</Text>
                </View>

                <View style={styles.sign_up_google_View}>
                {!this.state.loggedIn ? 
                  <TouchableOpacity style={styles.sign_up_button} onPress={this.isSignedIn}>
                  <AntDesign name="google" color="#FFF" size={24}/>
                    <Text style={styles.sign_up_google}>Sign Up With Google </Text> 
                  </TouchableOpacity> :

                  <TouchableOpacity style={styles.sign_up_button} onPress={this.onPressNextPage}>
                    <Text style={styles.sign_up_google}> Continue </Text> 
                    <AntDesign name="right" color="#FFF" size={24}/>
                  </TouchableOpacity>
                }
                </View>
            </SafeAreaView>

        )
    }
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FFF",
      height:Dev_Height,
      width:Dev_Width
    },
    design_view:{
      height:"40%",
      width:"100%",
      alignItems:"center"
    },
    design_image:{
      height:"100%",
      width:"100%"
    },
    text_welcome_view:{
      height:"27%",
      width:"100%",
      alignItems:"center",
      justifyContent:"center"
    },
    text_welcome:{
      fontSize:20,
      fontWeight:"400",
      color:"gray"
    },
    desc_text_1:{
      marginTop:"4%",
      color:"#708DB0"
    },
    desc_text_2:{
      marginTop:"1%",
      color:"#708DB0"
    },
    signIn_Text_View:{
      height:"10%",
      width:"100%",
      alignItems:"center",
      flexDirection:"row"
    },
    signIn_Text:{
      fontSize:19,
      color:"#708DB0",
      marginLeft:"3%",
      fontWeight:"bold",
    },
    sign_up_google_View:{
      height:"15%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
    sign_up_google:{
      fontSize:17,
      color:"#FFF",
      marginLeft:"4%"
    },
    sign_up_button:{
      height:"55%",
      width:"80%",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#5C93FA",
      borderRadius:15,
      flexDirection:"row"
    },
    
})
                
