import styled from 'styled-components'

export const WrapperContacts = styled.footer`
display: flex;
flex-direction: column;
align-item center;
max-hength: 100vh;
overflow: hidden;
`
export const LogoContacts = styled.div`
 text-align: center;
& img {
    margin: 3vh 0 5vh 0;
    border-radius: 50%;
}
@media screen and (max-width: 750px) {
& img{
    max-width: 170px
}
}
`
export const ContainerInfo = styled.div`
width: 100%;
color:#D1BC8A;
display: flex;
flex-direction: column;
`
export const BoxInfo = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    text-align: left;
    overflow: auto;
& ul{
    list-style-type: none;
    margin-left: -1em;
}
`
export const Info = styled.div`
margin: 0;
text-align: left;
margin-left: 3vw;
& p {
    font-weight: bold;
}
`
export const Social = styled.div`
margin-right: 3vw;
`

export const Iframe = styled.div`
 max-width: 100%;
 overflow: hidden;
 hength: 50vh;
& iframe {
    border: none;
    margin-bottom: -1vh;
}
`