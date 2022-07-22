import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './components/home/HomeScreen';
import NavBar from './components/ui/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
