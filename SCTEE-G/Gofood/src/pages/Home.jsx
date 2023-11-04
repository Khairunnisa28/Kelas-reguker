import ImgHeader from '../image/img-header.jpg';
import Topoki from '../image/topoki.jpg';
import Dorayaki from '../image/dorayaki.jpeg';
import Gyoza from '../image/gyoza.jpg';
import Udon from '../image/udon.jpg';
import Cart from '../image/cart.png';
import './Home.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';

function Home(){
    const initialProduct = [
        {id: 1, name: 'Topoki', price: 35000, quantity: 0, image: Topoki},
        {id: 2, name: 'Dorayaki', price: 25000, quantity: 0, image: Dorayaki},
        {id: 3, name: 'Gyoza', price: 40000, quantity: 0, image: Gyoza},
        {id: 4, name: 'Udon', price: 55000, quantity: 0, image: Udon},
    ]

    const [products, setProducts] = useState(initialProduct);

    function increaseOrderCount(id) {
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          });
        });
      }
    
      function decreaseOrderCount(id) {
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id && product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          });
        });
      }
    return(
        <div className="content">
            <img src={ImgHeader} className="img-header"/>
            <h1>Mau makan apa hari ini?</h1>
            <button>
              <img src={Cart} alt='cart'/>
            </button>
            <div className='card-container'>
                {products.map((product) => (
                    <div className='card' key={product.id}>
                    <img src={product.image} className='card-img-top' alt={product.name}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <h6>Rp.{product.price}</h6>
                        <div className='count-btn'>
                            <button
                            type="button"
                            onClick={() => decreaseOrderCount(product.id)}
                            className="btn btn-light"
                            >
                            -
                            </button>
                            {product.quantity}
                            <button
                            type="button"
                            onClick={() => increaseOrderCount(product.id)}
                            className="btn btn-light"
                            >
                            +
                            </button>
                        </div>
                        <a href="#" className='btn btn-primary'>Order</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home;