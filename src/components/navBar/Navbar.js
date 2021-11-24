import Menu from '../Menu/Menu';
import Basket from '../Basket/Basket';
import { ItemNav, WrapperNav } from './Navbar.styled';


const Navbar = ({cartItems, onAddedBasket, onRemoveBasket, calculateTotal, sidebar, showSidebar, setSidebar}) => <>
      <Menu 
      items={cartItems.length} 
      showSidebar={showSidebar}
      />
      <WrapperNav active={sidebar}>
        <ItemNav>
          <Basket 
          showSidebar={showSidebar}
          cartItems={cartItems} 
          onAddedBasket={onAddedBasket}
          onRemoveBasket={onRemoveBasket}
          calculateTotal={calculateTotal}
          />
        </ItemNav>
      </WrapperNav>
    </>

export default Navbar;