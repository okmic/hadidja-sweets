import { HashRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Screens/Home';
import Contacts from './components/Contacts/Contacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { addBasket, deleteBasket, removeBasket, sendBasket, updateAmountBasket } from './Redux/hadidjaReducer';
import { Suspense, useEffect, useState } from 'react';
import { AppWrapper } from './App.styled';
import NotFound from './components/NotFound/NotFound';
import FormBasketContainer from './components/Basket/FormBasket/FormBasketContainer';
import Preloading from './components/Preloading/Preloading';

const App = (props) => {

  useEffect(() => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      setIos(true)
    }
  }, [])
  const [ios, setIos] = useState(false)

  const onClickButtonProduct = (id, image, title, price, amount, buttonActive) => {
    props.dispatch(sendBasket(id, image, title, price, amount, buttonActive))
  }

  const onAddedBasket = (id) => {
    props.dispatch(addBasket(id))
  }

  const onRemoveBasket = (id, amount) => {
    if (amount === 1) {
      props.dispatch(deleteBasket(id))
    } else {
      props.dispatch(removeBasket(id))
    }
  }

  const deleteItemBasket = (id) => {
    props.dispatch(deleteBasket(id))
  }


  const calculateTotal = () => props.hadidjaReducer.cartItems.reduce((ack, item) => ack + item.amount * item.price, 0)

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  const inputBasket = (id, amount) => {
    props.dispatch(updateAmountBasket(id, amount))
  }

  return (
    <Suspense fallback={<Preloading crown={props.hadidjaReducer.screen.crown} />}>
      <HashRouter >
        <AppWrapper>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <Home
                ios={ios}
                screen={props.hadidjaReducer.screen}
                products={props.hadidjaReducer.products}
                cartItems={props.hadidjaReducer.cartItems}
                onClickButtonProduct={onClickButtonProduct}
                deleteItemBasket={deleteItemBasket}
                onAddedBasket={onAddedBasket}
                onRemoveBasket={onRemoveBasket}
                calculateTotal={calculateTotal}
                sidebar={sidebar}
                showSidebar={showSidebar}
                setSidebar={setSidebar}
                inputBasket={inputBasket}
              />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/To-Order" element={<FormBasketContainer
              calculateTotal={calculateTotal}
              cartItems={props.hadidjaReducer.cartItems} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </HashRouter >
    </Suspense>
  )
}
const mapStateToProps = (state) => {
  return {
    hadidjaReducer: state.hadidjaReducer
  }
}

export default connect(mapStateToProps)(App);
