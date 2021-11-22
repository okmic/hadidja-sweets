import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const IconWrapper  = styled.div`
max-height: 35px;
transition: 0.5s;
& a {
    color: ${props => props.color || "#D1BC8A"};
};
& a:hover {
    color: ${props => props.colorHover || "green"};
    transition: 0.5s;
}
`

 let Icon = ({IconR, body, size, a, tel, nav, showSidebar, color, colorHover}) => {

    const target = !tel ? "_blank" : "_self"  

    return(
        <IconWrapper color={color} colorHover={colorHover}>
          {nav 
          ? <NavLink to={nav}>
                  <IconR size={size ? size : 30} />
                  {body ? body : ""}
            </NavLink>
          : <a href={a} target={target}  onClick={showSidebar ? showSidebar : null}>          
                <IconR size={size ? size : 30}  />
                {body ? body : ""}
            </a>
        }
        </IconWrapper>
    )

}
export default Icon