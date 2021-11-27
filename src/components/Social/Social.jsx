import styled from "styled-components"
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook, BsWhatsapp } from "react-icons/bs"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { FiPhoneCall } from "react-icons/fi";
import Icon from "../Icon/Icon"


export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`

const Social = ({activePhone}) => <Wrapper>
    {activePhone && <Icon IconR={FiPhoneCall} color="#075E54" nav="/Contacts" />}
    <Icon IconR={BsWhatsapp} color="#075E54" a="https://wa.me/79380332247" />
    <Icon IconR={AiFillInstagram} color="#3f729b" a="https://www.instagram.com/?hl=ru" />
    <Icon IconR={BsFacebook} color="#3b5998" a="https://ru-ru.facebook.com/" />
    <Icon IconR={TiSocialTwitter} color="#55acee" a="https://twitter.com/?lang=ru" />
    <Icon IconR={TiSocialYoutubeCircular} color="#e52d27" a="https://www.youtube.com/" />
</Wrapper>

export default Social