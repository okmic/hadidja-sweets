import './App.css'
import { HashRouter , Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Screens/Home';
import Contacts from './components/Contacts/Contacts';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToTopAnimate from './components/ScrollToTop/ScrollToTopAnimate';


const App = (props) => <HashRouter >
        <ScrollToTop />
        <ScrollToTopAnimate />
        <div className="App">
      <Routes>
        <Route path="/"  element={
        <Home 
          screen={props.hadidjaReducer.screen}
          products={props.hadidjaReducer.products}
          />} />
        <Route path="/Contacts"  element={<Contacts />} />
        <Route path="/*"  element={<div>404 NOT FOUND</div>} />
      </Routes>
      </div>
    </HashRouter >

const mapStateToProps = (state) => {
  return{
    hadidjaReducer: state.hadidjaReducer
  }
}

export default connect(mapStateToProps)(App);
