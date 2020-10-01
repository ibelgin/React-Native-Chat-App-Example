import firebase from 'firebase';

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init=()=>{
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "***",
                authDomain: "***",
                databaseURL: "***",
                projectId: "***",
                storageBucket: "***",
                messagingSenderId: "***",
                appId: "***",
                measurementId: "***"
            });
        }
    };
    checkAuth=()=>{
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send=messages=>{
        messages.forEach(item =>{
            const message ={
                text:item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message);
        });
    };

    parse = message =>{
        const {user,text,timestamp} = message.val()
        const {key:_id} = message
        const createdAt=new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callBack => {
        this.db.on('child_added', snapshot => callBack(this.parse(snapshot)));
    }

    off(){
        this.db.off()
    }

    get db(){
        return firebase.database().ref("messages");
    }

    get uid(){
        return(firebase.auth().currentUser ||  {}).uid;
    }
}

export default new Fire();