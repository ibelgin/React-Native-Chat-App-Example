import React from 'react';
import {Platform,KeyboardAvoidingView,SafeAreaView,StatusBar} from "react-native";
import {GiftedChat}  from '@echobind/react-native-gifted-chat'
import Fire from "../Fire";


export default class ChatScreen extends React.Component{
    
    state={
       messages:[]
    }

    get user(){
        return{
            _id:Fire.uid,
            name:this.props.navigation.state.params.name,
            avatar:this.props.navigation.state.params.photo
        }
    }

    
    componentDidMount(){
        Fire.get(message => this.setState(previous=>({
            messages: GiftedChat.append(previous.messages,message)
        }))
        );
    }

    componentWillUnmount(){
        Fire.off()
    }

    render(){
        <StatusBar barStyle="dark-content"/>
        const chat= <GiftedChat
         messages={this.state.messages} 
         onSend={Fire.send} 
         user={this.user}
         renderUsernameOnMessage={true}
         showUserAvatar={true}
         
        />;
         if (Platform.OS==="android"){
        return(
                <KeyboardAvoidingView style={{flex:1,backgroundColor:"#FFF"}} behavior="padding" keyboardVerticalOffset={-1000} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }
        return <SafeAreaView style={{flex:1}} > {chat} </SafeAreaView>;
    }
}

