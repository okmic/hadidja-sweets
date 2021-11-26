import Menu from '../Menu/Menu';
import Basket from '../Basket/Basket';
import { ItemNav, WrapperNav } from './Navbar.styled';


const Navbar = ({cartItems, onAddedBasket, onRemoveBasket, calculateTotal, sidebar, showSidebar, deleteItemBasket, inputBasket}) => <>
      <Menu 
      items={cartItems.length} 
      showSidebar={showSidebar}
      />
      <WrapperNav active={sidebar}>
        <ItemNav>
          <Basket 
          showSidebar={showSidebar}
          cartItems={cartItems}
          deleteItemBasket={deleteItemBasket}
          onAddedBasket={onAddedBasket}
          onRemoveBasket={onRemoveBasket}
          calculateTotal={calculateTotal}
          inputBasket={inputBasket}
          />
        </ItemNav>
      </WrapperNav>
    </>

export default Navbar;