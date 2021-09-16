import './App.css';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Routes from './routes/routes';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
      
    </div>
  );
}

export default App;
