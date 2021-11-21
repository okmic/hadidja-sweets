import { NavLink } from "react-router-dom"
import styled from 'styled-components'

export const IconWrapper  = styled.div`
max-height: 30px
`

 let Icon = ({IconR, body, color, size, a, tel, nav, showSidebar}) => {

    const target = !tel ? "_blank" : "_self"  

    return(
        <IconWrapper>
          {nav 
          ? <NavLink to={nav}>
                  <IconR size={size ? size : 30} color={color ? color : "#D1BC8A"} />
                  {body ? body : ""}
            </NavLink>
          : <a href={a} target={target}  onClick={showSidebar ? showSidebar : null}>          
                <IconR size={size ? size : 30} color={color ? color : "#D1BC8A"} />
                {body ? body : ""}
            </a>
        }
        </IconWrapper>
    )

}
export default Icon