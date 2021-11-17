import styled from 'styled-components'

export const WrapperProducts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-item: center;
    align-self: center;
    background-color: #3e220b;
`
export const Product = styled.div`
    margin: 1.5em;
    max-width: 315px;
    max-hength: 100%;
    display: flex;
    flex-direction: column;
    align-item: center;
    overflow: hidden;
    border: 1px solid white;
    border-radius: 15px;
    background-color: red;
    color: #bbbbbb;
    box-shadow: 5px 5px 5px 5px rgba(43, 37, 37, 0.366);
`
export const ProductImg = styled.div`
    width: 100%
    text-align: center;
& img {
    min-width: 100%
}
`
export const ProductDescription = styled.div`
 display: flex;
 flex-direction: column;
`
export const ProductButton = styled.input`
 width: 100%;
 height: 50px;
 border: none;
 font-style: italic;
 font-size: 19px;
 cursor: pointer;
 transition: 0.5s;
 background-color: #bbbbbb;
 color: black;
&:hover {
    background-color: #58add4;
    transition: 0.3s;
}
`