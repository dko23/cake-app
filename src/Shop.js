
import React from 'react';
import { Products } from './Products';
import CakeItems from './CakeItems';
import Body from './Body';

function Shop(props) {
  return (

    <>
      <div className='container'>
        <div className='row'>
<Body/>
        </div>
      </div>  


<div className='container'>
      <div className='row'>
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



