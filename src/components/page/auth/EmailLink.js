import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class EmailLink extends Component {
    constructor() {
        super();
    
        this.state = {
          email: ''
        };
       
    }

    handleEmail(text){
        this.setState({ email:text.target.value })
        
     }
    
    EmailLink = (e) => {
        e.preventDefault();
        console.log(this.state); 
        let obj = {}
        obj.email = this.state.email;
      
    
    fetch('https://staging-monggovest.herokuapp.com/api/v1/password/forgot', {
    method: 'POST',
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
  },
    body: JSON.stringify({
  
        "email": obj.email, 
    
  }),
 
})
.then((response) => response.json())
.then((responseJson) => {
    console.log(responseJson);
})
}
     
render() { 
    if(!this.props.show) {
        return null;
      }
return (
    <div className="bg-img">
     <div className="emaillink d-flex justify-content-center">
        <div className="modal-bg link">
                    
                <div>
                    <p className="login-title link">LUPA PASSWORD ?</p>
                </div>
                <p className="pass-text link">Silakan isi email yang didaftarkan. Link untuk mereset password akan dikirim ke email tersebut.</p>
                <form onSubmit={(e) => { this.EmailLink(e);}}> 
           {/* form email */}
                <div className="login-email">
                    <p className="email-title">E-mail</p>
                    <input 
                        name="email"
                        className="email-form link"
                        placeholder="contoh@email.com" 
                        value={this.state.emailValue} 
                        onChange={(text) => { this.handleEmail(text) }} 
                        required
                    />
                </div>
               
                <button type="submit" className="login-button" ><span className="lanjutkan">KIRIM LINK !</span></button>
                
                </form>
                <div className="login-link pass">
                        <p className="text-center">Kembali ke<Link className="log-link pass" exact to="/"> beranda</Link></p>
                </div>
           </div>
    </div>    
        
    </div>   
    );
  }
}

export default EmailLink;
