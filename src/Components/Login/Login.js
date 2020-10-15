import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import icon from '../../images/googleIcon.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);;
    }
 /* GOOGLE Sign in*/
 const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
    //  console.log(result);
    // The signed-in user info.
        const {displayName , email , photoURL} = result.user;
        const signedInUser = {
            displayName: displayName,
            email: email ,
            photoURL: photoURL ,
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode , errorMessage);
      });

}


    return (
      <div className="login-section">
          <div className="container">
             <Link to="/">
             <div className="d-flex justify-content-center mb-5">
             <img src={logo} alt="" style={{width: "150px", height: "47px", marginBottom: "40px"}}/>
             </div>
             </Link>
              <div className="d-flex justify-content-center ">
                  <div className="login-box">
                      <div>
                          <h3 className="login-title text-center mb-3">
                              Login With
                          </h3>
                          <button className="login-btn mb-3" onClick={handleGoogleSignIn}>
                                <div>
                             <img src={icon} alt="" style={{width: '30px', height: '30px'}}/>
                                </div>
                                <div>Sign In with Google</div>
                                <div></div>
                          </button>
                          <p>Don't have an account? 
                              <Link to="/dashboard" onClick={handleGoogleSignIn} >
                               Create an account
                              </Link>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Login;