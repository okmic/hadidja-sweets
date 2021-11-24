

import styled from 'styled-components'

export const WrapperHeader = styled.header`
height: 101vh;
display: flex;
flex-direction: column;
align-items: center;
color: white;
overflow-x: hidden;
overflow-y: auto;
`
export const Logo = styled.header`
padding-top: 5px;
& img {
  max-height: 15vh;
}
`
export const WrapperVideo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Video = styled.div`
margin: 0 9px;
border: #8d834b 3px solid;
box-shadow: 3px 3px 3px 3px #8d834b23;
max-width: 50vw;
max-height: 70vh;
position: relative;
display: flex;
align-items: center;
@media screen and (max-width: 750px){
    display: none;
}
`
export const VideoMain = styled.div`
margin: 0 9px;
border: #8d834b 3px solid;
box-shadow: 3px 3px 3px 3px #8d834b23;
max-width: 50vw;
max-height: 70vh;
position: relative;
display: flex;
align-items: center;
@media screen and (max-width: 750px){
  max-width: 100vw;
  min-height: 50vh;
  border: #8d834b 1px solid;
}

`
export const VideoSmall = styled.video`
position: relative;
height: 45vh;
`
export const VideoLarge = styled.video`
position: relative;
height: 65vh;
@media screen and (max-width: 750px){
    max-width: 100vw;
    min-height: 50vh;
    border: #8d834b 1px solid;
}
`
export const Sourse = styled.source``

export const Background = styled.div`
position: absolute;
background-color: rgba(34, 34, 34, 0.288);
height: 100%;
width: 100%;
z-index: 11;
`

export const Hadidja = styled.div`
max-height: 15vh;
& img {
  max-height: 15vh;
};
`
