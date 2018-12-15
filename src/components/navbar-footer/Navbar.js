import React, { Component } from 'react';
import {
  NavLink,
  Link
} from "react-router-dom";
import decode from 'jwt-decode';
import imgLogo from '../img/monggoLogo.png';

const logoStyle = {
    height: 'auto',
    width: '100px'
};

const LoginButton =
    <p className="button">
            <Link className="BTN1" to="/login">
                <span className="">Login</span>
            </Link>
    </p>

class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: '',
          name: '',
          email: '',
          isLoggedin: false,
          userSession: false,
                    
        };
        this.logout = this.logout.bind(this);
    }

    getToken() {
        return localStorage.getItem('id')
    }
    
    loggedIn() {
        const token = this.getToken() 
        return !!token && !this.isTokenExpired(token) 
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { 
                console.log(Date.now)
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    
    }

    logout() {
        localStorage.removeItem('id');
        this.setState ({
            userSession : false,
            isLoggedin : false,
        })
        console.log(this.state)
    }

    componentDidMount() {
        if(this.getToken()){
            let url = 'https://staging-monggovest.herokuapp.com/api/v1/users/current'
            const headers = {
                  'Content-Type': 'application/json'
                }
            if (this.loggedIn()) {
                headers['Authorization'] = 'Bearer ' + this.getToken()
            }
        
            return fetch(url, {
                headers
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
                    userSession: false,
                    isLoggedin:false
                 })
                 console.log(this.state)
                
                })
    
        
           .then((responseJson) => {
                console.log(responseJson);
                this.setState({ 
                    id: responseJson.id,
                    name: responseJson.name,
                    email: responseJson.email,
                    isLoggedin: true,
                    userSession: true
                 }) 
                 console.log(this.state)      
            });
        }
        }
    

    render(){
    const isLoggedin = this.state.isLoggedin;
    let greet;
    if (isLoggedin) {
        greet = <li className="greet">Hallo, {this.state.name}</li>
    }

    const userSession= this.state.userSession;
  
        return(
            <div>
                <ul className="topnav">
                    <li><NavLink to="/"><img src={imgLogo} style={logoStyle} alt="Logo" /></NavLink></li>
                    <li><NavLink to="/product-invest">Investasi</NavLink></li>
                    <li><NavLink to="/">Cara kerja</NavLink></li>
                    <li><NavLink to="/">Tentang Kami</NavLink></li>
                    <li><NavLink to="/">Bantuan</NavLink></li>
                    {greet}
                   
                    <li>{userSession ? 
                    <button onClick={this.logout} className="BTN1">LOG OUT</button>
                            : <span>{LoginButton}</span>}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
