import { Background, Hadidja, Logo, Video, VideoLarge, VideoMain, VideoSmall, WrapperHeader, WrapperVideo } from "./Header.styled";

const Header = ({ screen }) => <WrapperHeader>
      <Logo>
        <img src={screen.crown} alt='Hadidja sweets' />
      </Logo>
      <WrapperVideo>
        <Video>
          <Background />
          <VideoSmall autoPlay loop muted>
            <source src={screen.v2} type='video/mp4' />
          </VideoSmall>
        </Video>
        <VideoMain>
          <Background />
          <VideoLarge autoPlay loop muted>
            <source src={screen.v1} type='video/mp4' />
          </VideoLarge>
        </VideoMain>
        <Video>
          <Background />
          <VideoSmall autoPlay loop muted>
            <source src={screen.v3} type='video/mp4' />
          </VideoSmall>
        </Video>
      </WrapperVideo>
      <Hadidja>
        <img src={screen.hadidja} alt="Hadidja Sweets" />
      </Hadidja>
    </WrapperHeader>

export default Header