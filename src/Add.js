import React from 'react'
import { useContext } from 'react';
import { Context } from './App';


function Add() {
  const { products } = useContext(Context)
  const { handleRemove } = useContext(Context)
  const {totalPrice}=useContext(Context)
    return (
      <div>
      
      <div className='container'>
          <div className='row'>
          <h3>Secured Bag</h3>
    <div class="col-md-6">
    {products.map((item) => (
    <div key={item.id} className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.productImage} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.cake}</h5>
              <p className="card-text">£{item.price}</p>
              <button type="button" class="btn btn-success" onClick={() => {handleRemove(item)}}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div class="col-md-6">
           
              <div className="card" style={{ width: '18rem' }}>
  <div class="card-body">
                  <h5 class="card-title">Summary</h5>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
  <h4 className="card-text">TOTAL</h4>
                    <h4 className="card-subtitle mb-2 text-body-secondary">£{totalPrice}</h4>                   
                  </div>
                  <button type="button" class="btn btn-success">Purchase</button>
  </div>
</div>








    </div>

</div>
</div> 

    </div>

    )
}

export default Add


{/* <div className='container'>
<div className='row'>
    <div class="col-md-6">

        <div class="row">
            <div class="col-sm-6"> <img src={props.cake} class="card-img-top" alt="..." /></div>
            <div class="col-sm-6"> <img src={props.cake} class="card-img-top" alt="..." /></div>
        </div>
        <div class="row">
            <div class="col-md"> <img src={props.cake} class="card-img-top" alt="..." /></div>
        </div>
    </div>
    <div class="col-md-6">
        <div className='cake-details'>
        <p>Chocolate Mini Bite Cake (Serves 16)</p>
        <p>Product code: 29290925</p>
        <h3>£34</h3>
        </div>
        <hr></hr>
        <button type="button" class="btn btn-primary btn-lg">Add to Basket</button>
        <p>The ultimate cake for any chocolate lover, this indulgent four layer chocolate cake is filled with velvety chocolate ganache and generously covered in smooth chocolate buttercream. The cake is decorated with a mixture of milk chocolate bars, double chocolate mini rolls, chocolate cornflake clusters, millionaires mini bites and chocolate covered cookie dough pieces. This cake cannot be personalised.</p>
    </div>

</div>
</div> */}


    


        

