import { NavLink } from "react-router-dom"

 let Icon = ({IconR, body, color, size}) => {

    return(
        <>
            <NavLink to="/Home" >
              <div >
                <IconR size={size ? size : 30} color={color ? color : "#D1BC8A"} />
              </div>
              <div>
                {body ? body : ""}
              </div>
          </NavLink>
        </>
    )

}

export default Icon