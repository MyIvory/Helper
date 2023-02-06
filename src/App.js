
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import InfoBoard from './components/infoBoard/infoBoard';
import Main from './components/main/main';
import Posts from './components/posts/posts';

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main_win'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/posts/*' element={<Posts />} />
          </Routes>
        </div>
        <InfoBoard />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
