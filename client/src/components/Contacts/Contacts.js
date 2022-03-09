import React,{useEffect, useState} from 'react'
// import Mobile from './Mobile'
import {Form} from "react-bootstrap"
import {singnUp} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function Contacts() {
 const dispatch = useDispatch();

  
 const [nom,setNom] = useState('')
 const [prenom,setPrenom] = useState('')
 const [telephone,setTelephone] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [adress,setAdress] = useState('')
 const [postal,setPostal] = useState('')
 const [ville,setVille] = useState('')
 const Submit = () => {

  dispatch(singnUp({nom,prenom,telephone,email,password,adress,postal,ville}))
}


  return (
    <div> 




{/* <div class="container">
    <div class="card">
        <div class="form">
            <div class="left-side">
                <div class="sign-up s_form">
                    <div class="main active">
                        <div class="heading">
                            <h2>Create Acccount</h2>
                        </div>
                        <div class="social"> <span><i class="fa fa-google"></i></span> <span><i class="fa fa-facebook"></i></span> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-dribbble"></i></span> </div>
                        <div class="or">or use your e-mail for registration :</div>
                        <div class="input-text"> <input type="text" placeholder="Enter your name" id="user-name" require/> </div>
                        <div class="input-text"> <input type="text" placeholder="Enter your School/College name"/> </div>
                        <div class="input-text"> <select>
                                <option style="display:none">Highest Qualification</option>
                                <option>10th</option>
                                <option>12th</option>
                                <option>Diploma</option>
                                <option>Graduation</option>
                                <option>Post Graduation</option>
                                <option>PHD</option>
                                <option>Other</option>
                            </select> </div>
                        <div class="buttons first"> <button class="sign_up_here">Sign up</button> <button class="sign_in_here">Sign in</button> </div>
                    </div>
                    <div class="main">
                        <div class="heading">
                            <h2>Create Account</h2>
                        </div>
                        <div class="social"> <span><i class="fa fa-google"></i></span> <span><i class="fa fa-facebook"></i></span> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-dribbble"></i></span> </div>
                        <div class="or">or use your e-mail for registration :</div>
                        <div class="input-text"> <input type="text" placeholder="Enter your E-mail" require/> </div>
                        <div class="input-text"> <input type="password" placeholder="Enter your password" id="password-input" require/> <i class="fa fa-eye-slash passcode"></i> </div>
                        <div class="input-text"> <input type="password" placeholder="Confirm password" id="password-input1" require/> <i class="fa fa-eye-slash passcode1"></i> </div>
                        <div class="terms"> <span><i class="fa fa-check d-none"></i></span>
                            <p>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
                        </div>
                        <div class="buttons"> <button class="submit_here">Submit</button> </div>
                    </div>
                    <div class="main">
                        <div class="heading">
                            <h2>Congratulations</h2>
                        </div>
                        <div class="social"> <span><i class="fa fa-google"></i></span> 
                        <span><i class="fa fa-facebook"></i></span> 
                        <span><i class="fa fa-twitter"></i></span> 
                        <span><i class="fa fa-dribbble"></i></span> 
                        </div> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /> </svg>
                        <div class="final-submit">
                            <p>Thanks Mr./Mrs. <span id="shown-name"></span> for signing in with us we will contact you soon</p>
                        </div>
                    </div>
                </div>
                <div class="sign-in s_form d-none">
                    <div class="main_login active">
                        <div class="heading">
                            <h2>Login Now</h2>
                        </div>
                        <div class="social"> <span><i class="fa fa-google"></i></span> 
                        <span><i class="fa fa-facebook"></i></span> <span><i class="fa fa-twitter"></i></span> 
                        <span><i class="fa fa-dribbble"></i></span> </div>
                        <div class="or">or use your e-mail for registration :</div>
                        <div class="input-text"> <input type="text" placeholder="Enter your E-mail" require/> </div>
                        <div class="input-text"> <input type="password" placeholder="Enter your password" id="password-input-login" require/> 
                        <i class="fa fa-eye-slash passcode1"></i>
                        </div>
                        <div class="terms"> <span><i class="fa fa-check d-none"></i></span>
                            <p>Remember password</p>
                        </div>
                        <div class="buttons"> <button class="signin_submit">Sign in</button> <button class="sign_up_back_here">Sign up</button> </div>
                    </div>
                    <div class="main_login">
                        <div class="heading">
                            <h2>Congratulations</h2>
                        </div>
                        <div class="social"> <span><i class="fa fa-google"></i></span> <span><i class="fa fa-facebook"></i></span> 
                        <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-dribbble"></i></span> </div> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /> </svg>
                        <div class="final-submit">
                            <p>Thanks Mr./Mrs. <span id="shown-name"></span> for signing in with us we will contact you soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="cover_image"> <img src="https://imgur.com/TTmJuFD.jpg"/> </div>
            </div>
        </div>
    </div>
</div> */}
        {/* <Mobile/> */}
        
        <Form className='signup'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Enter Nom" onChange={(e)=> setNom(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prenom</Form.Label>
          <Form.Control type="text" placeholder="Prenom" onChange={(e)=> setPrenom(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="text" placeholder="Enter Telephone" onChange={(e)=> setTelephone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=> setAdress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPostal">
          <Form.Label>Code postal</Form.Label>
          <Form.Control type="text" placeholder="postal" onChange={(e)=> setPostal(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Ville</Form.Label>
          <Form.Control type="text" placeholder="Ville" onChange={(e)=> setVille(e.target.value)}/>
        </Form.Group>
        <Link style={{textDecoration: 'none'}} to={'/SingIN'} > <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link>
      
        
      </Form>
    </div>
  )
}

export default Contacts