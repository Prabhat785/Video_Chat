import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io('https://video-chat-1234.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [chat, setchat] = useState([]);
  const [img,setImg]=useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const [sshare,setSshare]=useState(false);
  useEffect(() => {
    setName(localStorage.getItem('username'));
    setImg(localStorage.getItem('image'));
    const getUserMedia = async () => {
      try {
        const stream1 = await navigator.mediaDevices.getUserMedia({video: true,audio:true});
        setStream(stream1);
       
        myVideo.current.srcObject = stream1;
       
      } catch (err) {
        console.log(err);
      }
    };
    if(name!==null && name.length>0)
    {
    getUserMedia();
    }
    socket.on('me', (id) => setMe(id));
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
    
    
  }, [name]);
  useEffect(() =>{
    socket.on('message',(data)=>{
      setchat(chat=>[...chat,data]);
    })
  },[])

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  const message =(data)=>{
      data=data+"*"+me+"*"+name;
      setchat(chat=>[...chat,data]);
      socket.emit('message',data)
  }
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };
  const shareScreen=()=>{
    navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(s=> {
    const screenTrack = s.getTracks()[0];
    stream.getTracks().forEach(track => {
      if(track.kind==='video') {
        connectionRef.current.replaceTrack(track,screenTrack,stream); 
      }
     
    })
   
    })
  }
 const stopScreenShare=()=> {
    const videoTrack = stream.getVideoTracks()[0];
    stream.getTracks().forEach(track => {
      if(track.kind==='video') {
        connectionRef.current.replaceTrack(track,videoTrack,stream); 
      }
     
    })
  }
  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
      message,
      shareScreen,
      stopScreenShare,
      chat,
      img,
      setImg,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
