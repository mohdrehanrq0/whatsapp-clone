import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChats from './SidebarChats';
import db, {auth} from './firebase'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
          auth.onAuthStateChanged(User => {
            setUser(User);
          })
    },[])

  

    useEffect(() => {
        db.collection('rooms').onSnapshot(snap => (
            setRooms(snap.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    },[])

    return user ? (
        <>
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar src={user.photoURL} />
                    <div className="sidebar_header__right">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>
                        <IconButton>
                            <ChatIcon />    
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                        
                    </div>
                </div>
                <div className="sidebar__search">
                    <div className="sidebar__search_container">
                        <SearchOutlinedIcon />
                        <input type="text" placeholder="Search and start new chat" className="search__input" />
                    </div>
                </div>
                <div className="sidebar__chats">
                    <SidebarChats AddNewChat />
                    {/* <SidebarChats />
                    <SidebarChats />
                    <SidebarChats /> */}
                    {
                        rooms.map(room => (
                            <SidebarChats key={room.id} id={room.id} name={room.data.name} /> 
                        ))
                    }

                
                </div>
            </div>
        </>
    ) : (<h1>hello</h1>)
}

export default Sidebar
