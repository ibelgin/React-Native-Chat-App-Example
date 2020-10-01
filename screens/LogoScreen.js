import React from "react"
import {Text,View,SafeAreaView,StyleSheet,Image,TouchableOpacity,StatusBar,Dimensions,TouchableWithoutFeedback} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";

const Dev_Height = Dimensions.get('screen').height
const Dev_Width = Dimensions.get('screen').width

export default class LogoScreen extends React.Component{

    onClick=()=>{
        this.props.navigation.navigate("Login")
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={styles.Image_Design_View}>
                    <Image source={require("../assets/logo_img.png")} style={styles.Image_Design} />
                </View>

                <View style={styles.Credit_Text_View}>
                    <Text style={styles.Credit_Text}> An Belgin Android Creations </Text>
                    <Text style={styles.Credit_Text}> Follow Me At Instagram - @Belgin_Android </Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.onClick}>
                        <AntDesign name="rightcircle" size={55} color="#5C93FA"/>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:Dev_Height,
        width:Dev_Width,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    },
    Image_Design:{
        height:"100%",
        width:"100%"
    },
    Image_Design_View:{
        height:"50%",
        width:"100%"
    },
    Credit_Text_View:{
        height:"10%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    Credit_Text:{
        fontSize:15,
        color:"#808080"
    },
    button:{
        height:"30%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    }

})