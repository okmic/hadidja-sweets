import styled from 'styled-components'

export const WrapperNav = styled.div`
background-color: #ff0000;
border-left: 1px solid #89b3e4;
scrollbar-color: #458245 #714826; 
width: 450px;
padding-right: 1em;
height: 100%;
position: fixed;
top: 0;
right: ${props => !props.active ? "-500px" : 0};
transition: ${props => !props.active ? "750ms" : "350ms"};
z-index: 10;
overflow-y: auto;
overflow-x: hidden;
@media screen and (max-width: 550px) {
    max-width: 100vw;
};
@media screen and (max-width: 230px) {
    width: 100vw;
    right: ${props => !props.active ? "-500px" : 0};
    overflow-x: auto;
}
`
export const ItemNav =  styled.ul`
padding-left: 1.5em;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
