import styled from 'styled-components'

export const WrapperContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1vh auto;
width: 80vw;
padding: 10px 30px;
border: 1px solid #bbbbbb;
background-color: #fff;
& a {
    text-decoration: none;
    color: #00bfff;
    cursor: poiner;
}
`
export const Navigation = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 500px) {
    justify-content: flex-end;
}
`
export const NavBatton = styled.button`
border: none;
cursor: pointer;
font-size: 19px;
&:hover{
    color: #00bfff;
}
`
export const WrapperTitle = styled.div`
display: flex;
width: 100%;
height: 50px;
color: black;
& div {
    margin-top: 50px;
    width: 100%;
    border-bottom: 2px solid #00bfff;
}
`
export const Title = styled.h3`
position: absolute;
margin-top: 30px;
left: 25vw;
padding: 0 15px;
background-color: #fff;
}
`
export const Contact = styled.div`
display: flex;
width: 80%;
flex-direction: column;
align-items: center;
`
export const Description = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
 border-bottom: 1px solid #00bfff;

`
export const DescriptionEnd = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media screen and (max-width: 330px) {
    justify-content: space-evenly;
}
`
export const Iframe = styled.div`
 width: 100%;
 overflow: hidden;
 height: 30vh;
 max-height: 250px;
 margin: 1em 0 3em;
 border: #00bfff 3px double;
& iframe {
    border: none;
}
`