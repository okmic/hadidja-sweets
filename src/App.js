import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/navBar/Navbar';
import { connect } from 'react-redux';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';






/* import Lesson from './components/modal/Modal'; */



function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
      <Header screen ={props.hadidjaReducer.screen} />
      <Navbar />
      <Routes>
        <Route path="/213" element={<div className="sad">fdsfdsfds</div>} />
      </Routes>
      <Products products={props.hadidjaReducer.products} />
      <Contact />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
    hadidjaReducer: state.hadidjaReducer
  }
}

export default connect(mapStateToProps)(App);
