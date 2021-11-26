import { Ball, BallsContainer, PreloadingItem, WrapperPreloading } from './Preloading.styled';

let Preloading = ({crown, active}) => <WrapperPreloading active={active}>
            <PreloadingItem>
                <img src={crown} alt={crown} />
                <BallsContainer>
                    <Ball color="forestgreen" time="0.1s" />
                    <Ball color="red" time="0.3s" />
                    <Ball color="royalblue" time="0.5s" />
                </BallsContainer>
            </PreloadingItem>
        </WrapperPreloading>

export default Preloading