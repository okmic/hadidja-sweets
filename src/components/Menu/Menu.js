
import { FiPhoneCall } from "react-icons/fi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { MenuDiv, Wrapper } from './Menu.styled';
import Icon from "../Icon/Icon";

const Menu = ({showSidebar}) => <Wrapper>
        <MenuDiv>
        <Icon IconR={FiPhoneCall} nav="/Contacts" />
        <Icon IconR={BsFillBasket2Fill} showSidebar={showSidebar} />
        </MenuDiv>
      </Wrapper>

export default Menu;