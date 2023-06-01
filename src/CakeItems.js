
import React from 'react';
import { useContext, useState } from 'react';
import { Context } from './App';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function CakeItems(props) {
  const { cake, price, productImage } = props.item;
  const { handleClick } = useContext(Context);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">£{price}</p>
          <p className="card-text">{cake}</p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleClick(props.item);
              handleShow(props.item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Great Item has been added to cart!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                {selectedItem && (
                  <div key={selectedItem.id}>
                    <img src={selectedItem.productImage} className="pop-image" alt="Selected Item" />
                    <p className="card-text">{selectedItem.cake}</p>

                  </div>
                )}
              </div>
              <div className='col-md-6'>
                <p>The ultimate cake for any</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Button variant="success" onClick={handleClose}>
  <Link to="./add" className="link-styling">
    Go to Checkout
  </Link>
</Button>

      </Modal>
    </div>
  );
}

export default CakeItems;

/////////////////////////////////////////////


      
   

//////////////////////////////////////////////////


// import React from 'react';
// import { useContext, useState } from 'react';
// import { Context } from './App';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function CakeItems(props) {
//   const { cake, price, productImage } = props.item;
//   const { handleClick } = useContext(Context);
//   // const{products}=useContext(Context)
 
 
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);



//   const [selectedItem, setSelectedItem] = useState(null);

//   return (
//     <div>
//       <div className="card" style={{ width: '18rem' }}>
//         <img src={productImage} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <p className="card-text">£{price}</p>
//           <p className="card-text">{cake}</p>
//           <button
//             type="button"
//             className="btn btn-success"
//             onClick={() => {
//               handleClick(props.item);
//               handleShow();
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Great Item has been added to cart!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//   <div className='container'>
//     <div className='row'>
//       <div className='col-md-6'>
//       {selectedItem && (
//                   <div key={selectedItem.id}>
//                     <img src={selectedItem.productImage} className="card-img-top" alt="Selected Item" />
//   </div>
// )}
//       </div>
//       <div className='col-md-6'>
//         <p>The ultimate cake for any</p>
//       </div>
//     </div>
//   </div>
// </Modal.Body>

//         <Button variant="success" onClick={handleClose}>
//             Go to Check Out
//           </Button>
//       </Modal>
//     </div>
//   );
// }

// export default CakeItems;
