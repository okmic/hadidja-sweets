import { Sourse, Item, VideoLarge, Main, VideoSmall, WrapperVideo } from "./Header.styled";

const ScreenAny = ({video}) => <WrapperVideo>
<Item>
  <VideoSmall autoPlay loop muted playsinline>
    <Sourse src={video.v2} type='video/mp4' />
  </VideoSmall>
</Item>
<Main>
  <VideoLarge autoPlay loop muted playsinline>
    <Sourse src={video.v1} type='video/mp4' />
  </VideoLarge>
</Main>
<Item>
  <VideoSmall autoPlay loop muted playsinline>
    <Sourse src={video.v3} type='video/mp4' />
  </VideoSmall>
</Item>
</WrapperVideo>

export default ScreenAny