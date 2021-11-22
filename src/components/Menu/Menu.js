
import { FiPhoneCall } from "react-icons/fi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Basket, IconBasket, MenuDiv, Wrapper } from './Menu.styled';
import Icon from "../Icon/Icon";

const Menu = ({ showSidebar, items }) => <Wrapper>
    <MenuDiv>
      <Icon IconR={FiPhoneCall} nav="/Contacts" />
      <Basket>
        {items > 0 ? <IconBasket>{items}</IconBasket> : null}
        <Icon IconR={BsFillBasket2Fill} showSidebar={showSidebar}/>
      </Basket>
    </MenuDiv>
  </Wrapper>

export default Menu;