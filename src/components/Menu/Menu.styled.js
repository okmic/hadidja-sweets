import styled from 'styled-components'

export const Wrapper = styled.nav`
background-color: #120907c7;
height: 60px;
display: flex;
position: sticky;
align-items: center;
top: 0;
z-index: 1000;
border-bottom: 1px solid #120907;
`
 
export const MenuDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 750px) {
    justify-content: space-between;
    padding: 0 5vw;
  }
`
export const Basket = styled.div`
position: relative;
`
export const IconBasket = styled.b`
position: absolute;
top: -5px;
left: 7.5px;
color: #fff;
font-size: 11px;
width: 15px;
height: 15px;
border-radius: 50%;
text-align: center;
background-color: red;
animation: basket 0.7s 1 forwards;
@keyframes basket {
  0%{transform: translateY(-15px);}
  100%{transform: translateY(0);}
}
`
