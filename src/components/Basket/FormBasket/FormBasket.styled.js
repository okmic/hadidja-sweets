import styled from 'styled-components'

export const WrapperFormBasket = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
width: 100%;
background-color: green;
padding-bottom: 3em;
`
export const ButtonFormBasket = styled.div`
position: fixed;
top: -0.5em;
z-index: 1;
& button {
    padding: 2em 1em 1em;
    border: none;
    background-color: #790604;
    border-radius: 0 0 15px 15px;
    transition: 0.5s;
    color: #fff;
}
& button:hover {
    background-color: #790604;
    transition: 0.5s;
}

`
export const WrapperItemsBasket = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: green;
margin-top: 3em;
`
export const ItemForm = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 1em;
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
    max-height: 150px;
    border: red 1px solid;
    border-radius: 9px;
    margin-right: 1em;
}
@media screen and (max-width: 470px) {
    justify-content: center;
}
`
export const FormWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: green;
& h3 {
    color: #fff
}
`

export const FormLabel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 0 9px 5px;
color: #fff;
& input, button {
    padding: 1em;
    border: none;
    background-color: #bbbbbb;
    border-radius: 15px;
    transition: 0.5s;
}
& button {
    margin-top: 1em;
}
& input:hover {
    background-color: #790604;
    transition: 0.5s;
}
& button:hover {
    background-color: #790604;
    transition: 0.5s;
}
`