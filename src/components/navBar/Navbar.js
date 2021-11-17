
import { FiPhoneCall } from "react-icons/fi";
import { BsFillBasket2Fill } from "react-icons/bs";
import Icon from './Icon';
import { Menu, Wrapper } from './Navbar.styled';



function Navbar() {

  return (
    <>
      <Wrapper>
        <Menu>
        <Icon IconR={FiPhoneCall} />
        <Icon IconR={BsFillBasket2Fill} />
        </Menu>
      </Wrapper>
    </>
  );
}

export default Navbar;