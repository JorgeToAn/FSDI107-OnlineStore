import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutMe from './components/AboutMe';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Catalog/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
