import { BoxInfo, ContainerInfo, Iframe, Info, LogoContacts, Social, WrapperContacts } from "./Contact.styled"
import ava from '../../img/bag_red.jpg'
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import Icon from "../navBar/Icon"

const Contact = () => <WrapperContacts>
    <LogoContacts> 
        <img src={ava} alt="" />
    </LogoContacts>
    <ContainerInfo>
    <BoxInfo>
        <Info>
        <p>Город Черкесск, ул. Ленина 1</p>
        <p>email@email.ri</p>
        <p>+7(988)888-88-88</p>
        </Info>
        <Social>
        <Icon IconR={AiFillInstagram} color="#3f729b"  />
        <Icon IconR={BsFacebook} color="#3b5998"  />
        <Icon IconR={TiSocialTwitter} color="#55acee"  />
        <Icon IconR={TiSocialYoutubeCircular} color="#e52d27" />
        </Social>
    </BoxInfo>
        <Iframe>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbf9235ac21d1469bcd8cade3e1a80d5ee7ccdacc2f03c0999c04a02baedad0b&amp;source=constructor" 
        title="hadidjaMap"
        width="100%" height="300px" 
        frameborder="1"
        allowfullscreen="true"
        >
        </iframe>
    </Iframe>
    </ContainerInfo>

</WrapperContacts>

export default Contact