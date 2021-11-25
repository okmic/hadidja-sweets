import { ImgLarge, ImgSmall, Item, Main, WrapperVideo } from "./Header.styled";

const ScreenIos = ({video}) => <WrapperVideo>
<Item>
  <ImgSmall src={video.i2} alt={video.i2} />
</Item>
<Main>
  <ImgLarge src={video.i1} alt={video.i1} />
</Main>
<Item>
<ImgSmall src={video.i3} alt={video.i3} />
</Item>
</WrapperVideo>

export default ScreenIos