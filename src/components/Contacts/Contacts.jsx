import { NavLink } from "react-router-dom"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Social from "../Social/Social"
import { WrapperTitle, WrapperContacts, Title, Contact, Description, DescriptionEnd, Iframe, Navigation, NavBatton } from "./Contacts.styled"

const Contacts = () => <WrapperContacts>
    <Navigation> 
    <Breadcrumbs linkOne="Main" activeLink="Contacts"/>
        <NavLink to="/">
            <NavBatton>Come back</NavBatton>
        </NavLink>
    </Navigation>
    <WrapperTitle>
        <Title>Contacts</Title>
        <div></div>
    </WrapperTitle>
    <Contact>
        <Description>
            <h5>Write</h5>
            <a href="mailto:email@email.com">
                <h6>email@email.com</h6>
            </a>
        </Description>
        <Description>
            <h5>Call</h5>
            <a href="tel:+79380332247">
                <h6>+7(938)033-22-47</h6>
            </a>
        </Description>
        <DescriptionEnd>
            <h5>Come</h5>
            <h6>Lenin street, building 1. <p>Cherkessk 369000</p></h6>
        </DescriptionEnd>
        <Iframe>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbf9235ac21d1469bcd8cade3e1a80d5ee7ccdacc2f03c0999c04a02baedad0b&amp;source=constructor"
                width="100%" height="100%" title="address" ></iframe>
        </Iframe>
        <Social />
    </Contact>
</WrapperContacts>

export default Contacts

