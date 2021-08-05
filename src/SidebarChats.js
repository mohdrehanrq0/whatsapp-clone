import React, {useState,useEffect} from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';
import db from './firebase';
import { Link } from 'react-router-dom';


function SidebarChats({AddNewChat, name , id}) {
    const [seed,setSeed] = useState("");
    const [message, setMessage] = useState([])
    const createChat  = () => {
        let roomName = prompt("Please enter the Room Name");
        if(roomName){
            // some clever stuff goes here
            db.collection("rooms").add({
                name: roomName
            })
        } 
    }
    


    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000));
        
    },[])
    useEffect(() =>{
        if(id){
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => (
                setMessage(snapshot.docs.map(doc => doc.data()))
            ))
            }
    },[id])

    return !AddNewChat ? (
        <>
        <Link to={`/rooms/${id}`}>
            <div className="sidebar__chat_container">
                <Avatar className="avatar_img" src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebar__chat_info">
                        <h2>{name}</h2>
                        <p>{message[0]?.message}</p>
                        
                </div>
            </div>
          </Link>
        </>
    ) : (
        <div className="sidebar__chat_container" onClick={createChat}>
            <h1>Add New Chat</h1>
        </div>
    )
}

export default SidebarChats
