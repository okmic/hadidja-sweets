import styled from 'styled-components'

export const WrapperFormBasket = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
width: 100%;
background-color: green;
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
export const FormWrapper = styled.div`
margin-top: 3em;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: green;
& h3 {
    color: #fff
};
`

export const FormLabel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 0 9px 5px;
color: #fff;
transform: translateX(-30%);
opacity: 0;
animation: form 0.7s linear ${props => props.delay} 1 forwards;
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
@keyframes form {
    0%{
        transform: translateX(-30vw);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}
`