import styled from 'styled-components'

export const WrapperPreloading = styled.div`
position: fixed;
width: 100%;
height: 100%;
background-color: rgb(22, 10, 10);
display: ${props => props.active ? "flex" : "none"};
justify-content: center;
align-items: center;
z-index: 1000;
`
export const PreloadingItem = styled.div`
max-height: 100%;
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
align-items: center;
& img {
  width: 55vw;
  max-width: 500px;
  margin-bottom: -1vh;
}
`
export const BallsContainer = styled.div`
margin-top: 1em;
width: 100%;
display: flex;
justify-content: center;
`
export const Ball = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
border: #fff 1px solid;
background-color: ${ props => props.color ? props.color : "aquamarine"};
transform: scale(1);
animation: ball 1s linear ${ props => props.time ? props.time : ""} infinite forwards;
@keyframes ball {
  0%{transform: scale(1);}
  100%{transform: scale(0);}
}
`