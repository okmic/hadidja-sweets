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
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-item: center;
    overflow: hidden;
    border: 1px solid white;
    border-radius: 15px;
    background-color: red;
    color: #fff;
    box-shadow: 5px 5px 5px 5px rgba(43, 37, 37, 0.366);
`
export const ProductImg = styled.div`
    width: 100%
    text-align: center;
    overflow: hidden;
& img {
    max-height: 50vh;
    border: 1px solid tomato;
} 
`
export const ProductDescription = styled.div`
 display: flex;
 flex-direction: column;
 max-height: 40vh;
& h3 {
    margin-bottom: -15px;
}
`
export const ProductButton = styled.div`
 width: 100%;
 height: 50px;
 font-size: 19px;
 cursor: pointer;
 transition: 0.5s;
 background-color: #bbbbbb;
 color: black;
 display: flex;
 align-items: center;
 justify-content: center;

&:hover {
    background-color: #58add4;
    transition: 0.3s;
}
`