import ReactLoading from 'react-loading';
import { PreloadingItem, WrapperPreloading } from './Preloading.styled';

let Preloading = ({crown}) => <WrapperPreloading>
            <PreloadingItem>
                <img src={crown} alt={crown} />
                <PreloadingItem>
                    <ReactLoading type={"bars"} color={'#fff'} height={"100%"} width={"30%"} />
                </PreloadingItem>
            </PreloadingItem>
        </WrapperPreloading>

export default Preloading