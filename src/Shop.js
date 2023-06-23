import React from 'react';
import { Products } from './Products';/// from the array created with the cake items.
import CakeItems from './CakeItems';
import Body from './Body';

function Shop() {
  return (

    <>
      <div className='container'>
        <div className='row'>
<Body/>
        </div>
      </div>  


<div className='container'>
        <div className='row cake-types'>
          <h2>Store</h2>
          <hr></hr>
        {Products.map((item) => (
          <div className='col-md-3' key={item.id}>
            <CakeItems item={item}/>
          </div>
        ))}
      </div>
    </div>
</>




    
 
  );
}

export default Shop;



