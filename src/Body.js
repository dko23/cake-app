import React from 'react';
import flan from './assets/flan.jpg';
import straw from './assets/strawberry.jpg';
import tarte from './assets/tarte.jpg';
import baker from './assets/baker.jpg';
import chef from './assets/chef.jpg';

function Body() {
  return (
    <>
      <div>
        <div className='container small-cakes'>
          <div className='row'>
            <div className="container-fluid sales-card">
              <div className="text-center">
                <h3 className="font-weight-bold">Welcome to Jake the Bake, where we've got your favorite pastries right here</h3>
              </div>
            </div>

            <div className="col-md-4 treats">
              <img className="card-img-top sales" src={flan} alt="Flan" />
              <strong>Flan</strong>
            </div>

            <div className="col-md-4 treats">
              <img className="card-img-top sales" src={straw} alt="Strawberry Cheesecake" />
              <strong>Strawberry Cheesecake</strong>
            </div>

            <div className="col-md-4 treats">
              <img className="card-img-top sales" src={tarte} alt="Tarte" />
              <strong>Tarte</strong>
            </div>
          </div>
        </div>

    
         <div className="container other-cakes">
          <div className="row banner ">
            <div className="col-md-6 ">
                          <h2 className="font-weight-bold">Our Spring Summer menu has arrived!</h2>
                          <p>As the weather gets warmer and the daylight gets longer, there's no better time to introduce our exciting Spring Summer 2023 range. From refreshing salads to seasonal sandwiches, our carefully curated summer range is bursting with fresh flavours.</p>
            </div>

            <div className="col-md-6 ">
              <img src={chef} className="img-fluid pic" alt="Picture 1" />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6 ">
              <img src={baker} className="img-fluid pic" alt="Testimonial" />
            </div>

            <div className="col-md-6 ingredients">
              <h2 className="font-weight-bold">Our pastries are 100% Pure Butter and Zero Palm Oil</h2>
              <p>We care about the ingredients we use in our baked goods and we are proud that our pastries are made with 100% pure butter and zero palm oil. Taste our 100% pure butter pastries for yourself, available to order online.</p>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Body;
