import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import '../Auth/auth.css'


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCrendential) => {
        console.log(userCrendential);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
   <div>
    <Navbar/>
     <div className="form-container">
      <form action="" onSubmit={signIn}>
        <h3>Login</h3>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id=""
            placeholder="enter your email..."
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="enter your password..."
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className='auth-btn-2' value="Login" />
        </div>
      </form>
      <div className="register">
        <Link to='/register'>
        <button className="auth-btn register">Sign Up</button>
        </Link>
      </div>
    </div>
   </div>
  );
};

export default LoginForm;
