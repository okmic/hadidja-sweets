import { Hadidja, Logo, Sourse, Video, VideoLarge, VideoMain, VideoSmall, WrapperHeader, WrapperVideo } from "./Header.styled";

const Header = ({ screen, showSidebar }) => <WrapperHeader   onClick={() => showSidebar(false)}>
      <Logo>
        <img src={screen.crown} alt='Hadidja sweets' />
      </Logo>
      <WrapperVideo>
        <Video>
          <VideoSmall autoPlay loop muted controls='false'>
            <Sourse src={screen.v2} type='video/mp4' />
          </VideoSmall>
        </Video>
        <VideoMain>
          <VideoLarge autoPlay loop muted controls='false'>
            <Sourse src={screen.v1} type='video/mp4' />
          </VideoLarge>
        </VideoMain>
        <Video>
          <VideoSmall autoPlay loop muted controls='false'>
            <Sourse src={screen.v3} type='video/mp4' />
          </VideoSmall>
        </Video>
      </WrapperVideo>
      <Hadidja>
        <img src={screen.hadidja} alt="Hadidja Sweets" />
      </Hadidja>
    </WrapperHeader>

export default Header