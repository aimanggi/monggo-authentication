import React, { Component } from 'react';
import decode from 'jwt-decode';
import {
    Link,
    withRouter
  } from "react-router-dom";

  
class LoginPage extends Component {
    constructor() {
        super();
    
        this.state = {
          email: '',
          password: '',
          wrongPass: false,
          isLoggedin: false,
          showPass: false
        };
        
    }

    handleEmail(text){
        this.setState({ email:text.target.value })
        
     }
     handlePassword(text){
        this.setState({ password:text.target.value })
       
     }

login = (e) => {
        e.preventDefault();
        console.log(this.state);
        let obj = {}
        obj.email = this.state.email;
        obj.password = this.state.password
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/user_token', {
         method: 'POST',
         headers: {
                'Content-Type': 'application/json',
                 },
        body: JSON.stringify({
                "auth": {
                     "email": obj.email, 
                     "password": obj.password
                 } 
        }),
    })

.then((response) => {
    if(response.ok){
    return response.json();    
    }
    else{
        throw response;
    }
    
})
.catch(err =>{
    this.setState({ 
        wrongPass: true,
        isLoggedin:false
     })
     console.log(this.state)
    
    })
.then((responseJson) => {
            console.log(responseJson);   
    localStorage.setItem('id', responseJson.jwt)
            console.log(decode(responseJson.jwt))
    this.setState({ 
                wrongPass:false,
                isLoggedin:true
             })        
             console.log(this.state)
             this.props.history.push("/"); 
            })
}

  togglePass = () => {
    this.setState({ showPass: !this.state.showPass })
  }


  render() { 
    if(!this.props.show) {
        return null;
      }
    
    const wrongPass = this.state.wrongPass;
    let wrongPassWarn;
    if (wrongPass) {
          wrongPassWarn = <p>Maaf, Email/Password yang anda masukkan salah.</p>
        }
  
return (
    
     <div className="bg-img">
     <div className="login d-flex justify-content-center">
        <div className="modal-bga">
                      
                <div>
                    <p className="login-title">MASUK</p>
                </div>
            
           {/* form email */}
           <form onSubmit={(e) => { this.login(e);}}>
                <div className="login-email">
                    <p className="email-title">E-mail</p>
                    <input 
                        name="email"
                        className="email-form"
                        placeholder="contoh@email.com" 
                        value={this.state.email} 
                        onChange={(text) => { this.handleEmail(text) }} 
                        required
                    />
                </div>

                <button className="pass-icon" onClick={this.togglePass}></button>
                <img className="icon-stroke" alt="toggle" src={'https://res.cloudinary.com/monggovest/image/upload/v1543300074/icon/eye-regular-svg.svg'} />
        
            {/* form password */}
               <div className="login-pass">
                     <p className="pass-title">Password</p>
                    <input 
                        name="password"
                        className="pass-form" 
                        id="pass-form" 
                        type={(this.state.showPass ? 'text' : 'password' )}
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={(text) => { this.handlePassword(text) }}
                        required 
                    />
              </div>
                {wrongPassWarn}
         
                <button type="submit" value="Submit" className="login-button"><span className="lanjutkan">LANJUTKAN</span></button>
                
            </form>
            <div className="login-link">
                <p className="text-center">Lupa Password ?<a className="forget-link" href="#forgot" onClick={this.props.handleEmail}> Klik Disini !</a></p>
                <p className="text-center bottom">Belum Punya Akun ?<a className="reg-link" href="#register" onClick={this.props.handleRegister}> Register Disini !</a></p>
               
            </div>
        </div>
       
        <Link className="redirect-home" exact to='/' style={{marginTop: '620px', color: 'white'}}>Beranda</Link>  
        
        </div> 
     
    </div>

    );
  }
}

export default withRouter(LoginPage);
