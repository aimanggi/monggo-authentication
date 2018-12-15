import React, { Component } from 'react';
import CardboardProduct from './CardboardProduct';
import Pagination from './Pagination';

class ProductInvest extends Component {
    render() {
      return (
        <div>
          <CardboardProduct />
          <Pagination />
        </div>
      );
    }
  }
  
  export default ProductInvest;