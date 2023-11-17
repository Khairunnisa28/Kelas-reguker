import Headling from '../image/head.jpg';
import Cart_img from '../image/cart.png';

function Home (){
    return(
        <div className="Content">    
            <img src={Headling} />
            <h1>Mau makan apa hari ini?</h1>
            <button>
                <img src={Cart_img} alt="Keranjang Belanja"/>
            </button>
        </div>
    )
}

export default Home;