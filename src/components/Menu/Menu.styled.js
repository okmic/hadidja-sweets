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
