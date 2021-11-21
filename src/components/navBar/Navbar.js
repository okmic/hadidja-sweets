import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link} from 'react-router-dom';
import './Navbar.css';
import Menu from '../Menu/Menu';
import Basket from '../Basket/Basket';


function Navbar({cartItems, onAddedBasket, onRemoveBasket}) {
  const calculateTotal = () =>
  cartItems.reduce((ack, item) => ack + item.amount * item.price, 0);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Menu showSidebar={showSidebar} />
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars' onClick={showSidebar}>
              <AiFillCloseCircle color="#58add4" />
            </Link>
          </li>
          <Basket 
          cartItems={cartItems} 
          onAddedBasket={onAddedBasket}
          onRemoveBasket={onRemoveBasket}
          calculateTotal={calculateTotal}
          />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;