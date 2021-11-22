import {AiFillCloseCircle} from 'react-icons/ai';
import Menu from '../Menu/Menu';
import Basket from '../Basket/Basket';
import { ItemNav, Toggle, ToggleItem, WrapperNav } from './Navbar.styled';
import Icon from '../Icon/Icon';

const Navbar = ({cartItems, onAddedBasket, onRemoveBasket, calculateTotal, sidebar, showSidebar}) => <>
      <Menu 
      showSidebar={showSidebar}
      items={cartItems.length} 
      />
      <WrapperNav active={sidebar}>
        <ItemNav>
          <Toggle>
            <ToggleItem onClick={showSidebar}>
              <Icon 
              IconR={AiFillCloseCircle}
              color="#000"
              colorHover="#3e220b"
              />
            </ToggleItem>
          </Toggle>
          <Basket 
          cartItems={cartItems} 
          onAddedBasket={onAddedBasket}
          onRemoveBasket={onRemoveBasket}
          calculateTotal={calculateTotal}
          />
        </ItemNav>
      </WrapperNav>
    </>

export default Navbar;