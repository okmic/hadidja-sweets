import { Hadidja, Logo, WrapperHeader} from "./Header.styled";
import ScreenAny from "./ScreenAny"
import ScreenIos from "./ScreenIos";

const Header = ({ screen, showSidebar, ios }) => <WrapperHeader   onClick={() => showSidebar(false)}>
      <Logo>
        <img src={screen.crown} alt='Hadidja sweets' />
      </Logo>
      {!ios  
      ? <ScreenAny video={screen.video} />
      : <ScreenIos video={screen.video.img} />
      }
      <Hadidja>
        <img src={screen.hadidja} alt="Hadidja Sweets" />
      </Hadidja>
    </WrapperHeader>

export default Header