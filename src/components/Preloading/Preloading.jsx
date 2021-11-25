
import { PreloadingItem, WrapperPreloading } from './Preloading.styled';

import './preloader.css'

let Preloading = ({crown, active}) =>  {
    return(
        
            <WrapperPreloading active={active}>
            <PreloadingItem>
                <img src={crown} alt={crown} />
                <div className="preloader">
                    <div className="bollOne"></div>
                    <div className="bollTwo"></div>
                    <div className="bollThree"></div>
                </div>
            </PreloadingItem>
        </WrapperPreloading>
    )
}

export default Preloading