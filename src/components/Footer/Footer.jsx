import styled from 'styled-components'
import Social from "../Social/Social"

export const WrapperFooter = styled.footer`
overflow: hidden;
padding: 15px 0;
width: 100%;
`
const Footer = () => <WrapperFooter>
    <Social activePhone={true} />
</WrapperFooter>

export default Footer