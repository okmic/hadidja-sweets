import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Navbar from "../components/navBar/Navbar"
import Products from "../components/Products/Products"

const Home = (props) => <>
    <Header screen={props.screen} />
    <Navbar cartItems={props.cartItems} onAddedBasket={props.onAddedBasket} onRemoveBasket={props.onRemoveBasket} />
    <Products onClickButtonProduct={props.onClickButtonProduct} products={props.products} />
    <Footer />
</>

export default Home