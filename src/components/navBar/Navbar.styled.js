import styled from 'styled-components'

export const WrapperNav = styled.div`
background-color: #ff0000;
border-left: 1px solid #89b3e4;
width: 70vw;
max-width: 500px;
padding-right: 1em;
height: 100%;
position: fixed;
top: 0;
right: ${props => !props.active ? "-110%" : 0};
transition: ${props => !props.active ? "750ms" : "350ms"};
z-index: 1000;
overflow-y: auto;
overflow-x: hidden;
@media screen and (max-width: 550px) {
  .nav-menu {
    width: 100vw;
  }
}
`
export const ItemNav =  styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const Toggle = styled.li`
position: fixed;
top: 5px;
`
export const ToggleItem = styled.span`
font-size: 40px;
background: none;
cursor: pointer;
`