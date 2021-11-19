import { NavLink } from 'react-router-dom'
import { BreadcrumbsActive, WrapperBreadcrumbs } from './Breadcrumbs.styled'

let Breadcrumbs = (props) => {
    return(
        <WrapperBreadcrumbs>
            <ul>
                {props.linkOne &&
                <li>
                    <NavLink to="/"><span>{props.linkOne}</span></NavLink> 
                    <span>/</span>
                </li>
                }
                {props.linkTwo &&
                <li>
                    <NavLink to="/Cotacts"><span>{props.linkTwo}</span></NavLink>
                </li>
                }
                <BreadcrumbsActive>
                    <span>{props.activeLink}</span>
                </BreadcrumbsActive>
            </ul>
        </WrapperBreadcrumbs>
    )
} 

export default Breadcrumbs