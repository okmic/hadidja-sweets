import imgNotFound from '../../img/404.png'
import { Item } from '../Basket/Basket.styled'
import { WrapperNF } from './NotFound.styled'

let NotFound = () => <WrapperNF>
    <div>
        <img src={imgNotFound} alt="404 Not Found" />
    </div>
    <Item>
        <span>
            404 NOT FOUND
        </span>
    </Item>
</WrapperNF>

export default NotFound