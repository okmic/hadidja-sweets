
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/navBar/Navbar"
import Preloading from "../components/Preloading/Preloading"
import Products from "../components/Products/Products"
import ScrollToTopAnimate from '../components/ScrollToTop/ScrollToTopAnimate'

const Wrapper = styled.div`
opacity: 0;
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

const Home = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
      setTimeout(() => {
          setLoading(false)
      }, 2700)
  }, [loading])

return <>
    <Preloading active={loading} crown={props.screen.crown} />
    <Wrapper>
    <ScrollToTopAnimate />
    <Header 
    ios={props.ios}
    showSidebar={props.setSidebar}
    screen={props.screen} />
    <Navbar 
    cartItems={props.cartItems}
    deleteItemBasket={props.deleteItemBasket}
    onAddedBasket={props.onAddedBasket} 
    onRemoveBasket={props.onRemoveBasket}
    calculateTotal={props.calculateTotal}
    sidebar={props.sidebar}
    showSidebar={props.showSidebar}
    inputBasket={props.inputBasket}
    />
    <Products 
    showSidebar={props.setSidebar}
    onClickButtonProduct={props.onClickButtonProduct} 
    products={props.products} />
    <Footer />
</Wrapper>
</>
}


export default Home