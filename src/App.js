
import './App.css';
import { ImageContextProvider } from './context/imageContext';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './components/backhome/backhome';
import DropImage from './components/dropImage/dropImage';
import SeeUrl from './components/seeurl/seeurl';
import AllImages from './components/allImages/allimages';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <ImageContextProvider>
      <BrowserRouter>
      <Home></Home>
        <Routes>
          <Route path="/" element={<DropImage/>} />
          <Route path="/upload" element={<SeeUrl/>} />
          <Route path="/allImages" element={<AllImages/>} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
      </ImageContextProvider>
    </div>
  );
}

export default App;
