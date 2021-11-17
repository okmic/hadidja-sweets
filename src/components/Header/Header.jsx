import styles from "./Header.module.css"
import v2 from '../../video/VID_1.mp4';
import v1 from '../../video/VID_2.mp4';
import v3 from '../../video/VID_3.mp4';
import { Logo, Video, VideoLarge, VideoMain, VideoSmall, WrapperHeader, WrapperVideo } from "./Header.styled";



const Header = ({screen}) => {
  return (
    <WrapperHeader>
        <Logo>
          <img src={screen.crown} alt='Hadidja sweets' />
        </Logo>
        <WrapperVideo>
          <Video>
            <div className={styles.muted}></div>
            <VideoSmall  autoPlay loop muted>
              <div className={styles.muted}></div>
              <source src={v1} type='video/mp4' />
            </VideoSmall>
          </Video>
          <VideoMain>
            <div className={styles.muted}></div>
            <VideoLarge autoPlay loop muted>
              <source src={v2} type='video/mp4' />
            </VideoLarge>
          </VideoMain>
          <Video>
            <div className={styles.muted}></div>
            <VideoSmall className={styles.videoTagThree} autoPlay loop muted>
              <source src={v3} type='video/mp4' />
            </VideoSmall>
          </Video>
        </WrapperVideo>
        <div className={styles.header__arrows}>
          <img src={screen.hadidja} alt="Hadidja Sweets" />
        </div>
    </WrapperHeader>
  )
}

export default Header