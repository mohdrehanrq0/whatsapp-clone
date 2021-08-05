import React, {useState,useEffect} from 'react'
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import firebase from 'firebase'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import {useParams } from 'react-router-dom';
import db from './firebase.js';
import {auth} from "./firebase"

function Chat() {
    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");
    const [roomName, setroomName] = useState("");
    const {roomId} = useParams();
    const [message,setMessage] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
          auth.onAuthStateChanged(User => {
            setUser(User);
          })
    },[])

    
    let sendMsg = (e) => {
        e.preventDefault();
        console.log("you type =>>> " + input);
        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }
    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
                setroomName(snapshot.data().name)
            );
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => (
                setMessage(snapshot.docs.map(doc => doc.data()))
            ))
        }
    },[roomId])


    




    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000));
    },[])
    return (
        <>
            <div className="chat">
                <div className="chat__header">
                    <Avatar className="avatar_img" src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                    <div className="chat__headerInfo">
                        <h2>{roomName}</h2>
                        <p>Last seen at {new Date(message[message.length - 1]?.timestamp?.toDate()).toLocaleTimeString()}  </p>
                    </div>  
                    <div className="chat__headerRight">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <AttachFileIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div> 
                </div>
                <div className="chat__body">
                {message.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`} key={message.id}>
                        {message.message}
                        <span className="chat__name">{message.name}</span>
                        <span className="time__span">
                            {new Date(message.timestamp?.toDate()).toLocaleTimeString()}
                            {
                                console.log(message.timestamp)
                            }
                        </span>
                    </p>
                ))}
                    
                </div>
                <div className="chat__footer">
                    <EmojiEmotionsIcon />
                        <form action="">
                            <input value={input} type="text" onChange={e => setInput(e.target.value)} placeholder="Type a Message....." />
                            <button type="submit" onClick={sendMsg}>Send</button>
                        </form>
                    <MicIcon />
                </div>
            </div>
        </>
    )
}

export default Chat
