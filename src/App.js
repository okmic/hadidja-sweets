import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Screens/Home';
import Contacts from './components/Contacts/Contacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToTopAnimate from './components/ScrollToTop/ScrollToTopAnimate';
import { addBasket, deleteBasket, removeBasket, sendBasket } from './Redux/hadidjaReducer';

const App = (props) => {
  const onClickButtonProduct = (id, image, title, price, amount, buttonActive) => {
    props.dispatch(sendBasket(id, image, title, price, amount, buttonActive))
  }
  const onAddedBasket = (id) => {
    props.dispatch(addBasket(id))
  }
  const onRemoveBasket = (id, amount) => {
    if(amount === 1) {
      props.dispatch(deleteBasket(id))
    } else{
      props.dispatch(removeBasket(id))
    }
    
  }
  return (
    <HashRouter >
      <ScrollToTop />
      <ScrollToTopAnimate />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Home
              screen={props.hadidjaReducer.screen}
              products={props.hadidjaReducer.products}
              cartItems={props.hadidjaReducer.cartItems}
              onClickButtonProduct={onClickButtonProduct}
              onAddedBasket={onAddedBasket}
              onRemoveBasket={onRemoveBasket}
            />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      </div>
    </HashRouter >
)}
const mapStateToProps = (state) => {
  return {
    hadidjaReducer: state.hadidjaReducer
  }
}


export default connect(mapStateToProps)(App);
