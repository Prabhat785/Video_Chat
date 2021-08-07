import React, { useContext,useState,useEffect} from 'react'
import { SocketContext } from './Context';
import './Home.css';
import { Typography, AppBar, TextField, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Messages from './components/Messages/Messages';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Phone, PhoneDisabled } from '@material-ui/icons';
import { GoogleLogout } from 'react-google-login';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
   appBar: {
     borderRadius: 15,
     margin: '30px 100px',
     justifyContent: 'center',
     alignItems: 'center',
     width: '600px',
     border: '2px solid black',
     backgroundColor: 'black',
     color: 'cornsilk',
 
     [theme.breakpoints.down('xs')]: {
       width: '90%',
     },
   },
   image: {
     marginLeft: '15px',
   },
 
   wrapper: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     width: '100%',
   },
 }));
 
function Home() {
   
   const classes = useStyles();
const { me,name,setName,setImg,callAccepted, myVideo, userVideo, callEnded, stream, callUser,call,answerCall,message,chat,leaveCall,shareScreen,stopScreenShare,img } = useContext(SocketContext);
const [id,setid]= useState('');   
const[text,setText] = useState('');
const [idToCall, setIdToCall] = useState('');
const [flag,setFlag] = useState(false);
const [s,setS]=useState('Share Screen');
const logout =()=>{
   setName('');
   setImg('');
   localStorage.setItem('username', '');
   localStorage.setItem('image','');
   alert(
     `Logged out successfully 😍`
   );
 }
const fun=()=>{
   if(!flag)
   {
        shareScreen();
        setS('Share Video');
   }
   else
   {
       stopScreenShare();
       setS('Share Screen');
   }
   setFlag(!flag);
}
const sendMessage =(text)=>{
   message(text)
   setText('');
}

return (
    <div class="main">
    <div class="main__left">
       <div class="main__videos">
            <div className="video">
                <VideoPlayer />
           </div>
           {!callAccepted &&( 
           <Notifications />
           )}
       </div>
       <div class="main__controls">
          <div class="main__controls__block">
          <CopyToClipboard text={me}>
             <div onclick="muteUnmute()" class="main__controls__button main__mute_button">
                <i class="fas fa-microphone"></i>
                <span>Copy Your Id</span>
             </div>
         </CopyToClipboard>
             <div onClick={fun} class="main__controls__button main__video_button" >
                <i class="fas fa-video"></i>
                <span>{s}</span>
             </div>
          </div>
          <div class="main__controls__block">
             <div class="main__controls__button">
             <input  type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}  className="idinput"/>
             </div>
             <div class="main__controls__button" >
             <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                  Call
                </Button>
             </div>
          </div>
          <div class="main__controls__block">
             <div class="main__controls__button">
             <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Hang Up
                </Button>
             </div>
             <div class="main__controls__button">
             <GoogleLogout
      clientId="828604919357-ejh87orh2vprhdk2v5cc07apad8d8642.apps.googleusercontent.com"
      render={renderProps => (
         <Avatar alt="Remy Sharp" src={img} className={classes.small} onClick={renderProps.onClick} disabled={renderProps.disabled}/>
       )}
      buttonText="Logout"
      onLogoutSuccess={logout}
       >
    </GoogleLogout>
    </div>
    
          </div>
           
       </div>
    </div>
    <div class="main__right">
       <div class="main__header">
          <h6>Chat</h6>
       </div>
       <div class="main__chat_window">
       <Messages messages={chat} name={name} />
       </div>
       <div class="main__message_container">
          <input id="chat_message" type="text" value={text} placeholder="Type message here..." onChange={(e)=>setText(e.target.value)}/>
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SendIcon fontsize="large"/>}
        fullwidth
        onClick={()=>sendMessage(text)}
      >
      </Button>
        </div>
     </div>
</div>
    )
}

export default Home
