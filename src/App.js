import './styles/App.scss'

import images from './assests/images';

import Header from './components/Heeader/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main images = {images} />
      <Footer images = {images} />
    </>

  );
}

export default App;
