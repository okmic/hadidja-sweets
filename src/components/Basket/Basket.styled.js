import styled from 'styled-components'

export const WrapperBasket = styled.div`
position: relative;
display: flex;
flex-direction: column;
color: #fff;
width: 80%;
text-shadow: 1px 1px 1px #000;
& img {
    max-width: 150px;
}
`
export const Toggle = styled.li`
min-width: 100%;
position: fixed;
display: flex;
justify-content: flex-start;
`
export const ToggleItem = styled.span`
font-size: 40px;
cursor: pointer;
`
export const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Item = styled.div`
display: flex;
flex-direction: column;
margin: 1em 0;
padding: 1em;
background-color: #ffffff96;
border: 1px solid #fff;
border-radius: 15px;
color: #000;
max-width: 100%;
box-shadow: 5px 5px 5px 5px rgba(43, 37, 37, 0.366);
text-shadow: 1px 1px 1px red;
overflow: hidden;
& img {
    border: red 1px solid;
    border-radius: 9px;
}
`
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 7px 0;
`
export const Buttons = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 90%;
justify-content: space-evenly;
& span {
    min-width: 30%;
}
`
export const Button = styled.button`
background-color: ${ props => props.active === true ? "red" : "black"};
color: #fff;
text-shadow: 1px 1px 1px #000;
border-color: ${ props => props.active === true ? "red" : "#bbbbbb"};
border-radius: 9px;
min-width: 50px;
transition: 0.5s;
&:hover {
    background-color: ${ props => props.active === true ? "red" : "green"};
    border-color: ${ props => props.active === true ? "red" : "green"};
    transition: 0.5s;
}
`
export const Basement = styled.div`
width: 100%;
display: flex;
color: #fff;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
& button {
    padding: 1em 3em;
}

`