import React from 'react'
import { Link } from 'react-router-dom';
import logo from './assets/cake logo.jpg'
import NewLogo from './assets/new-cake-logo.jpg'
import cakeslice from './assets/slice.jpg'

function Navbar() {
  return (
      <div> 
   <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
                  <a class="navbar-brand">Jake <br></br> the Bake</a><Link to="/"><img src={cakeslice} className='logo' /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
           <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>  
          </li>
          <li class="nav-item">
          <Link to='./add'><a class="nav-link" href="#">Cart Cake</a></Link> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">None</a>
              </li>
        </ul>
      </div>
        </div>
       
  </nav>
      </div>
  )
}

export default Navbar