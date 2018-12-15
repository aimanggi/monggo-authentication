import React, { Component } from 'react';
import {
    Route,
    NavLink
  } from "react-router-dom";
import ProductInvest from '../page/product-invest/ProductInvest';

class LihatInvestasi extends Component {
    render(){
        return(
            <div>
                <NavLink to="/product-invest">
                    <button type="button" className="btn-investasi btn-outline-primary">LIHAT INVESTASI</button>
                </NavLink>

                <Route path="product-invest" component={ProductInvest}/>
            </div>
        )
    }
}

export default LihatInvestasi;