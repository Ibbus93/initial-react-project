// React libraries
import React from 'react';

// Router
import {HOME, LOGIN} from "../../routes/paths";
import {Link} from "react-router-dom";

// Style libraries
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

// Styles
import './header.css'


const HeaderView = () => (
    <header>
      <nav className='navbar container navbar-light navbar-expand-md fixed-top'>
        <a className='navbar-brand' href='/'>
          YourBrand
        </a>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to={HOME.path} className='nav-link'>Home <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
                <Link to={LOGIN.path} className='nav-link'>{LOGIN.value}</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FontAwesomeIcon icon={faCoffee} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </nav>
    </header>
);

export default HeaderView;
