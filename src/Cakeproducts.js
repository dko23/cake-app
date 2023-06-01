import React from 'react'

function Cakeproducts(props) {
    const{id, cake, price, productImage}=props.item
  return (
      <div>
          <div className="card" style={{ width: '18rem' }}>
           <img src={productImage} class="card-img-top" alt="..." />
           <div class="card-body">
               <p class="card-text">£{price }</p>
               <p class="card-text">{cake}</p>
             {/* <p class="card-text">£1.72 per 100g</p> */}
           </div>
           </div> 
    </div>
  )
}

export default Cakeproducts