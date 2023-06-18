import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className="cart-widget">
      <Link to='/cart'>
        <FaShoppingCart />
        {
          cantidadTotal > 0 && <span> {cantidadTotal} </span>
        }
      </Link>
    </div>
  );
};

export default CartWidget;


