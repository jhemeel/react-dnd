import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../Auth/auth.css'
import { useNavigate } from 'react-router-dom'


const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const signUp = (e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCrendential => {
            console.log(userCrendential);
        }).catch(error =>{
            console.log(error)
        })
        navigate('/login')
    }


  return (
   <div>
    <Navbar/>
     <div className='form-container'>
      <form action="" onSubmit={signUp} >
        <h3>Create An Account</h3>
        <div className="form-group">
            <input type="email" name="email" id="" placeholder='enter your email...' value={email} onChange={e => setEmail(e.target.value)}  required/>
            <input type="password" name="password" id="" placeholder='enter your password...' value={password} onChange={(e) => setPassword(e.target.value) } required/>
            <input type="submit" className='auth-btn-2' value="Sign Up" />
        </div>
      </form>
      <div className="login">
      <Link to='/login'>
        <button className='auth-btn login'>Login</button>
        </Link>
      </div>
    </div>
   </div>
  )
}

export default SignUpForm
