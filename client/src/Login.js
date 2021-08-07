import React, { useContext,useState } from 'react';
import {Link,useHistory} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { SocketContext } from './Context';
import { GoogleLogout } from 'react-google-login';
// refresh token
import './Login.css'
const clientId =
  '828604919357-ejh87orh2vprhdk2v5cc07apad8d8642.apps.googleusercontent.com';
  
function Login() {
  
    const { setName,name,setImg} = useContext(SocketContext);
    const histroy=useHistory();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    setName(res.profileObj.name);
    setImg(res.profileObj.imageUrl);
    localStorage.setItem('username', res.profileObj.name);
    localStorage.setItem('image', res.profileObj.imageUrl);
    //name=res.profileObj.name;
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    histroy.push('/home');
  };

   const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };
const logout =()=>{
  alert(
    `Logged out successfully 😍`
  );
}
  return (
    <div className="login">
  <div className="login_container">
     <h1>Please Login to continue</h1>
     <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      <p>
     By continuing, you agree to Our Conditions of Use and Privacy Notice. 
     </p>
  </div>
</div>
     
  );
}

export default Login;