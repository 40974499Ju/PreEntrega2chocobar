import React from 'react'
import './CarWidget.css';

const CarWidget = () => {
  const imgCarrito = "https://i.pinimg.com/564x/cf/d8/cd/cfd8cddd259b44090f6cdaa4b502c9ee.jpg";
    return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        <strong>10</strong>
    </div>
  )
}

export default CarWidget