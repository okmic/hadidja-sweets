import styled from 'styled-components'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/navBar/Navbar"
import Preloading from "../components/Preloader/Preloading"
import Products from "../components/Products/Products"

const Wrapper = styled.div`
opacity: 0;
-webkit-animation: home 1s ease-in 2.5s 1 forwards ;
-ms-animation: home 1s ease-in 2.5s 1 forwards ;
-moz-animation: home 1s ease-in 2.5s 1 forwards ;
animation: home 1s ease-in 2.5s 1 forwards ;
@keyframes home {
  0%{
      opacity: 0;
    }
  100%{
      opacity: 1;
    }
}
`

const Home = (props) => <>
    <Preloading crown={props.screen.crown} />
    <Wrapper>
    <Header screen={props.screen} />
    <Navbar 
    cartItems={props.cartItems}
    onAddedBasket={props.onAddedBasket} 
    onRemoveBasket={props.onRemoveBasket}
    calculateTotal={props.calculateTotal}
    sidebar={props.sidebar}
    showSidebar={props.showSidebar}
    />
    <Products onClickButtonProduct={props.onClickButtonProduct} products={props.products} />
    <Footer />
</Wrapper>
</>


export default Home