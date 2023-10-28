import ImgHeader from '../image/img-header.jpg';
import Topoki from '../image/topoki.jpg';
import Dorayaki from '../image/dorayaki.jpeg';
import Gyoza from '../image/gyoza.jpg';
import Udon from '../image/udon.jpg';
import './Home.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function Home(){
    const initialProduct = [
        {id: 1, name: 'Topoki', price: 35000, quantity: 0, image: Topoki},
        {id: 2, name: 'Dorayaki', price: 25000, quantity: 0, image: Dorayaki},
        {id: 3, name: 'Gyoza', price: 40000, quantity: 0, image: Gyoza},
        {id: 4, name: 'Udon', price: 55000, quantity: 0, image: Udon},
    ]

    const [products, setProduct] = useState(initialProduct);

    return(
        <div className="content">
            <img src={ImgHeader} className="img-header"/>
            <h1>Mau makan apa hari ini?</h1>
            <div className='card-container'>
                {products.map((product) => (
                    <div className='card' key={product.id}>
                    <img src={product.image} className='card-img-top' alt={product.name}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <h6>Rp.{product.price}</h6>
                        <div className='count-btn'>
                            <button className='btn btn-light'>-</button>
                            <span>{product.quantity}</span>
                            <button className='btn btn-light'>+</button>
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