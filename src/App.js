import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightgrey'}}>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
