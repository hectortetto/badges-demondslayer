import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import './styles/Home.css';
//import platziconfLogoImage from '../images/logoGrandote.png';
import astronautsImage from '../images/inosleep.png';

export default class NotFound extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>404:NOT FOUND</h1>
            </div>
            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
