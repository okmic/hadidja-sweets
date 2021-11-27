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
z-index: 1;
`
export const ToggleItem = styled.span`
font-size: 40px;
cursor: pointer;
`
export const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.5em;
`
export const Item = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin: 1em 0;
padding: 1em;
background-color: #ffffff96;
border: 1px solid #fff;
border-radius: 15px;
color: #000;
width: 100%;
max-width: 350px;
box-shadow: 5px 5px 5px 5px rgba(43, 37, 37, 0.366);
text-shadow: 1px 1px 1px red;
overflow: hidden;
& img {
    border: red 1px solid;
    border-radius: 9px;
}
`
export const Close = styled.div`
position: absolute;
right: 1em;
top: 1em;
`
export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 7px 0;
& b {
    font-size: 27px;
    margin-bottom: 9px;
}
`
export const Buttons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
& span {
    min-width: 30%;
}
`
export const Input = styled.div`
max-width: 55px;
& input {
    max-width: 100%;
    border: none;
    background: none;
    text-shadow: 1px 1px 1px red;
    font-size: 17px;
    text-align: center;
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
font-size: 19px;
margin: 3px;
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
    padding: 11px;
}

`