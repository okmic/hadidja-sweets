import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import Products from "../components/Products/Products"

const Home = (props) => <>
    <Header screen={props.screen} />
    <Menu />
    <Products products={props.products} />
    <Footer />
</>

export default Home