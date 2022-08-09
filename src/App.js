import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutMe from './components/AboutMe';
import Catalog from './components/Catalog';
import ShoppingList from './components/ShoppingList';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalog/>
      <AboutMe/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
