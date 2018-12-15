import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";
import arrowLeft from '../../img/slideshow-arrow-left.png';
import arrowRight from '../../img/slideshow-arrow-right.png';


class Pagination extends Component {
  render() {
    return (
    <div className="pagination mx-auto">
      <span className="retangle">
        <NavLink to="/" className="prev1"><img className="chevron-left" src={arrowLeft} alt="Arrow Left"/></NavLink>
          <NavLink to="/" className="p1">1</NavLink>
          <NavLink to="/" className="p2">2</NavLink>
          <NavLink to="/" className="p3">3</NavLink>
          <NavLink to="/" className="p4">4</NavLink>
        <NavLink to="/" className="next1"><img className="chevron-right" src={arrowRight} alt="Arrow Right"/></NavLink> 
      </span>
    </div>
    );
  }
}

export default Pagination;